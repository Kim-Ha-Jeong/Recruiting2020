const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Research1 = new Schema({
   
    name: {
        type: String
    },
    team: {
        type: String
    },
    q1: {
        type: String
    },
    q2: {
        type: String
    },
    q3: {
        type: String
    },
    q4: {
        type: Boolean
    },
    q5: {
        type: String
    },
    q6: {
        type: Boolean
    },
    q7: {
        type: String
    },
    q8: {
        type: Boolean
    },
    q9: {
        type: String
    },
    q10: {
        type: String
    },
    q11: {
        type: String
    },
    q12: {
        type: String
    },
    q13: {
        type: String
    },
    q14: {
        type: String
    },
    q15: {
        type: String
    },
    q16: {
        type: Boolean
    },
    q17: {
        type: String
    },
    q18: {
        type: String
    },
    },{
        collection: 'research_1'
    });

module.exports = mongoose.model('research1', Research1);