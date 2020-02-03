const express = require('express');
const FAQRoutes = express.Router();

// Require notice model in our routes module
let FAQ = require('./FAQ.model');

// Defined get data(index or listing) route
FAQRoutes.route('/').get(function (req, res) {
    FAQ.find(function(err, resultes){
    if(err){
      console.log(err);
    }
    else {
      res.json(resultes);
    }
  });
});

module.exports = FAQRoutes;