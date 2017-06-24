const routes = require('express').Router();
const data = require('../data/data.json');

routes.use("/models", function (req, res) {
  const models = data.models;
  res.status(200).json({ models });
});

routes.use("/cars", function (req, res) {
  const models = data.cars;
  res.status(200).json({ models });
});

module.exports = routes;
