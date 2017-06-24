// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var path = require("path");
const routes = require('./server/routes');

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
// app.get('*', function response(req, res) {
//   res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'build/client/public/index.html')));
//   res.end();
// });

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('build/client/public'));

// http://expressjs.com/en/starter/basic-routing.html
// app.get("/", function (request, response) {
//   response.sendFile(__dirname + '/build/client/public/index.html');
// });

app.use("/", routes);

app.get("/dreams", function (request, response) {
  response.send(dreams);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// listen for requests :)
const port = process.env.NODE_ENV !== 'production' ? 8080 : process.env.PORT
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
