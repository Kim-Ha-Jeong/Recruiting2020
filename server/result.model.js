const mongoose = require('mongoose');
// Require result model in our routes module
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Result = new Schema({
  name: {
    type: String
  },
  student_id: {
    type: String
  },
  ewhaian_id: {
    type: String
  },
  team: {
    type: String
  },
  pass: {
    type: String
  },
  key: {
    type: String
  }
},{
    collection: 'result'
});

module.exports = mongoose.model('result', Result);
