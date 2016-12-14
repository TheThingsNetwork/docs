var path = require('path');

module.exports = {
  entry: {
    main: path.join(__dirname, 'assets', 'js', '_main.js'),
    page: path.join(__dirname, 'assets', 'js', '_page.js')
  },
  output: {
    path: path.join(__dirname, 'assets', 'js'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json'],
    alias: {
        jquery: 'jquery/src/jquery'
    }
  }
};