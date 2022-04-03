const { Binary } = require('@angular/compiler');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Tech = new Schema({
  _id:{
    type: String
  },
  id:{
    type: Number
  },
  name: {
    type: String
  },
  skillLevel: {
    type: Number
  },
  isDisplayed: {
    type: Boolean
  },
  icon: {
    type: String
  }
})
module.exports = mongoose.model('Tech', Tech, 'techs');
