const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Research2 = new Schema({
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
        type: String
    },
    q5: {
        type: String
    },
    q6: {
        type: String
    },
    q7: {
        type: String
    },
    q8: {
        type: String
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
    }},
    {
        collection: 'research_2'
    });


module.exports = mongoose.model('research2', Research2);