const Path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/index.js',
  output: {
    path: Path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader","css-loader","sass-loader"]
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
