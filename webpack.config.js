var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var path = require("path");

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    "webpack-hot-middleware/client",
    path.join(__dirname, "/client/app.js"),
  ],
  output: {
    path: path.resolve(__dirname, "/dist/"),
    filename: "[name].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        })),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": ["react", "es2015", "stage-0", "react-hmre"]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/index.ejs",
      inject: "body",
      filename: "index.html"
    }),
    new ExtractTextPlugin({
      filename: "app.css",
      disable: false,
      allChunks: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('development') }
    }),
  ]
};
