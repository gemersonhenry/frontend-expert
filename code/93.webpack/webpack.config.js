var path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'public')
  }
};
