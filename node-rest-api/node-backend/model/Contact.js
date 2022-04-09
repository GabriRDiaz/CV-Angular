const { Binary } = require('@angular/compiler');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Contact = new Schema({
  _id:{
    type: String
  },
  id:{
    type: Number
  },
  contact: {
    type: String
  },
  value: {
    type: String
  },
  link:{
    type: String
  },
  isDisplayed: {
    type: Boolean
  },
  icon: {
    type: String
  }
})
module.exports = mongoose.model('Contact', Contact, 'contactData');
