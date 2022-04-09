const express = require('express');
const app = express();
const contactRoute = express.Router();
let Contact = require('../model/Contact');
// Add Contact
contactRoute.route('/add-contact').post((req, res, next) => {
    Contact.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get all Contacts
contactRoute.route('/get-contact-list').get((req, res) => {
  Contact.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log(data)
    }
  })
})
// Get Contact
contactRoute.route('/read-contact/:id').get((req, res, next) => {
  Contact.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log(data)
    }
  })
})
// Update Contact
contactRoute.route('/update-contact/:id').put((req, res, next) => {
  Contact.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Contact updated successfully!')
    }
  })
})
// Delete Contact
contactRoute.route('/delete-contact/:id').delete((req, res, next) => {
    Contact.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = contactRoute;
