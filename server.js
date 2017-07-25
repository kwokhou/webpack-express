// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var path = require("path");
const routes = require('./server/routes');

import mongoose from 'mongoose';
const mydb = 'mongodb://localhost/test';
mongoose.connect(mydb);

var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config');

var compiler = webpack(webpackConfig);
var middleware = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('build/client/public'));

app.use("/", routes);

// listen for requests :)
const port = process.env.NODE_ENV !== 'production' ? 8080 : process.env.PORT
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

