const routes = require('express').Router();
const data = require('../data/data.json');

import * as CarService from '../services/car';

routes.use("/models", function (req, res) {
  const models = data.models;
  res.status(200).json({ models });
});

routes.use("/old_cars", function (req, res) {
  const models = data.cars;
  res.status(200).json({ models });
});

routes.use("/cars", function (req, res, next) {
  CarService.find()
    .then(data => res.json(data))
    .catch(err => next(err))
});

routes.use('/save', (req, res, next) => {
  const cat1 = '5976b43adee63b24a10a058e';
  const cat2 = '5976b44d41682824bb38c0ff';
  CarService.create({ name: 'Chevolette', year: 2012, category: cat1 })
    .then(data => res.json(data))
    .catch(err => next(err))
});

routes.use('/addCatetory', (req, res, next) => {
  CarService.addCatetory({ name: 'Finance', active: true, })
    .then(data => res.json(data))
    .catch(err => next(err))
});

routes.use('/testError', (req, res, next) => {
  CarService.testError({ name: 'Wira', year: 2017, })
  .then((data) => res.json(data))
  .catch((err) => {
    next(err);
  });
});


module.exports = routes;
