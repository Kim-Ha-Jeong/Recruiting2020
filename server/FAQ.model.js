const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let FAQ = new Schema({
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
    collection: 'FAQ'
});

module.exports = mongoose.model('FAQ',FAQ);