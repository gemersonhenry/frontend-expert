var path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dest')
  },
  plugins: [
    new UglifyJSPlugin({
      extractComments: true
    })
  ]
};
