# hello-world
a teaching sample
new version1
.
    //@see https://webpack.github.io/docs/configuration.html#resolve-modulesdirectories
    // root for es2015 import
    // @see http://moduscreate.com/es6-es2015-import-no-relative-path-webpack/
    
It's possible certain storybook addon requires highlight.js to render document so the github.css should [NOT](https://github.com/webpack-contrib/css-loader/issues/295) be handled by `css-loader`. Anyway, it's impossible our project use `highlight.js` except storybook. We can exclude `highlight.js` in `webpack.config.js`.


    "postcss": "^5.2.5",
    "postcss-calc": "^5.3.1",
    "postcss-import": "^8.2.0",
    "postcss-loader": "^1.1.1",
    "postcss-mixins": "^5.4.1",
    "postcss-nested": "^1.0.0",
    "postcss-simple-vars": "^3.0.0",

https://github.com/DavidWells/PostCSS-tutorial
