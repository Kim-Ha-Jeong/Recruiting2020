const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let recruiting2020 = new Schema({
  name: {
    type: String
  },
  student_id: {
    type: String
  },
  pass: {
    type: String
  }
},{
    collection: 'result'
});

module.exports = mongoose.model('recruiting2020', recruiting2020);