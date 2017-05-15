# hello-world
a teaching sample
new version1
.
    //@see https://webpack.github.io/docs/configuration.html#resolve-modulesdirectories
    // root for es2015 import
    // @see http://moduscreate.com/es6-es2015-import-no-relative-path-webpack/
    
It's possible certain storybook addon requires highlight.js to render document so the github.css should [NOT](https://github.com/webpack-contrib/css-loader/issues/295) be handled by `css-loader`. Anyway, it's impossible our project use `highlight.js` except storybook. We can exclude `highlight.js` in `webpack.config.js`.
