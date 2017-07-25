import Car from './car.model';
import Category from './category.model';
import mongoose from 'mongoose';

export function addCatetory(updateObj) {
  return new Promise((resolve, reject) => {
    const newObj = new Category({
      name: updateObj.name,
      active: updateObj.active,
    });
    newObj.save()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
}

export function create(carObj) {
  return new Promise((resolve, reject) => {
    const newCar = new Car({
      name: carObj.name,
      year: carObj.year,
      category: carObj.category,
    });
    newCar.save()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
}

export function find() {
  return new Promise((resolve, reject) => {
    const cat1 = '5976b43adee63b24a10a058e';
    const cat2 = '5976b44d41682824bb38c0ff';
    // Working Example 1
    // const newCar = Car.where({category: cat2})
    //   .exec((err, results) => {
    //     if (err) {
    //       reject(err);
    //     }
    //     else {
    //       resolve(results);
    //     }
    //   });
    const newCar = Car.find({category: cat1, year: 2012})
      .exec((err, results) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(results);
        }
      });
  });
}

export function testError(updateObj) {
  return new Promise((resolve, reject) => {
    // resolve(updateObj);
    const errObj = new Error('Error Occured!');
    reject(errObj);
  });
}
