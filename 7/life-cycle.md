# Life Cycle of a Webpack Configuration

## Installation
```bash
# It is better to have webpack as both global & local package
$ npm install -g webpack
$ npm install webpack --save-dev
```

## Common Settings and Plugins 
```js
// Plain Setting
var path = require('path');

var config = {
  entry: ['./src/index'],  
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}

module.exports = config;  
```
#### UglifyJsPlugin
#### OccuranceOrderPlugin

## Style Loaders
```bash
# style-loader --> for style loads in general
# css-loader --> pure css loader
# sass-loader --> scss/sass loader
# node-sass --> for scss/sass compiling
$ npm install style-loader css-loader sass-loader node-sass --save-dev
```
