const { Binary } = require('@angular/compiler');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Tech = new Schema({
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
}, {
  collection: 'techs'
})
module.exports = mongoose.model('Tech', Tech)
