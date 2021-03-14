const base = require('./webpack.config');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, base, {
  mode: 'development',
  entry: {
    index: './example.tsx'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'TiMi-UI',
      template: 'example.html',
    }),
  ],
});
