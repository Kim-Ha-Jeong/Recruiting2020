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
<<<<<<< HEAD
=======
  ewhaian_id: {
    type: String
  },
>>>>>>> 393c40bba901bd8f15bb795995c62775bce42ba8
  pass: {
    type: String
  }
},{
    collection: 'result'
});

module.exports = mongoose.model('result', Result);
