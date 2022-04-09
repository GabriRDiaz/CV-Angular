const express = require('express');
const app = express();
const techRoute = express.Router();
let Tech = require('../model/Tech');
// Add Tech
techRoute.route('/add-tech').post((req, res, next) => {
    Tech.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get all Techs
techRoute.route('/get-tech-list').get((req, res) => {
  Tech.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log(data)
    }
  })
})
// Get Tech
techRoute.route('/read-tech/:id').get((req, res, next) => {
  Tech.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log(data)
    }
  })
})
// Update Tech
techRoute.route('/update-tech/:id').put((req, res, next) => {
  Tech.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Techs updated successfully!')
    }
  })
})
// Delete Tech
techRoute.route('/delete-tech/:id').delete((req, res, next) => {
    Tech.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = techRoute;
