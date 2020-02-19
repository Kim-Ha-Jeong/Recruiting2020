const express = require('express');
const noticeRoutes = express.Router();

// Require notice model in our routes module
let Notice = require('./notice.model');

// Defined get data(index or listing) route
noticeRoutes.route('/').get(function (req, res) {
    Notice.find(function(err, resultes){
    if(err){
      console.log(err);
    }
    else {
      res.json(resultes);
    }
  });
});

module.exports = noticeRoutes;