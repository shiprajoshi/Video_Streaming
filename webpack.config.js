const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
      path.join(__dirname, 'app/app.js')
  ],
  output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  }
};
