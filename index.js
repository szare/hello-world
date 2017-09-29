function addLocInfo(nodePath, state, t) {
  const node = nodePath.node;
  const args =[];
  // insert loc info into arguments at first
  const firstArg = node.arguments[0];
  var fileName = (state.file.opts.filenameRelative + '').replace(/^.*[\\\/]/, '');
  let info  ='loc: ' + fileName + ':' + node.loc.start.line +':';
  let injectLocIntoFirstArgument = false;
  // in case we already inject the argument
  if(t.isStringLiteral(firstArg)) {
    if(!firstArg.value.match(/^loc: /)) {
      // if the original first argument already contains fileName
      var re = new RegExp(fileName+':?');
      if(firstArg.value.match(re)) {
        info = firstArg.value.replace(re, info);
        injectLocIntoFirstArgument = true;
      }
      args.push(t.stringLiteral(info));
    }
  } else {
    args.push(t.stringLiteral(info));
  }
  // copy original argument
  for (var i = 0; i < node.arguments.length; i++) {
    if(injectLocIntoFirstArgument && i === 0) {
      continue;
    }
    args.push(node.arguments[i]);
  }
  node.arguments = args;
}

function removeStatement(nodePath, t) {
  // remove `qa0` in production code
  if (nodePath.parentPath
      && nodePath.parentPath.isExpressionStatement()
      && nodePath.parentPath.parentPath) {
    if (nodePath.parentPath.parentPath.isBlockStatement()) {
      nodePath.remove();
    } else {
      nodePath.replaceWith(t.emptyStatement());
    }
  }
}

function processPlainCallExpression(callee, nodePath, state, t) {
  if (!callee.isIdentifier()) {
    return;
  }
  if (callee.equals('name', 'qa')) {
    // `qa` is always part of production code
    addLocInfo(nodePath, state, t);
  } else if(callee.equals('name', 'qa0')) {
    if ('production' === process.env.NODE_ENV) {
      removeStatement(nodePath, t);
    } else {
      // inject debug info into `qa0`
      addLocInfo(nodePath, state, t);
    }
  }
}

function processConsole(callee, nodePath, state, t) {
  if(callee.matchesPattern('console.log') || callee.matchesPattern('console.info') || callee.matchesPattern('console.error')) {
    addLocInfo(nodePath, state, t);
  }
}

module.exports = function (babel) {
  const t = babel.types;
  return {
    visitor: {
      CallExpression: {
        enter: function (nodePath, state) {
          const callee = nodePath.get('callee');
          processPlainCallExpression(callee, nodePath, state, t);
          processConsole(callee, nodePath, state, t);
        }
      }
    }
  };
};
