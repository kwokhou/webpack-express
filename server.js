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

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('build/client/public'));

app.use("/", routes);

// listen for requests :)
const port = process.env.NODE_ENV !== 'production' ? 8080 : process.env.PORT
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

