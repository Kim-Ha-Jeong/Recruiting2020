const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Notice = new Schema({
  num: {
    type: String
  },
  title: {
    type: String
  },
  desc: {
    type: String
  }
},{
    collection: 'notice'
});

module.exports = mongoose.model('recruiting2020',Notice);