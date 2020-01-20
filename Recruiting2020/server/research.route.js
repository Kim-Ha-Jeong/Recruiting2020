const express = require('express');
const researchRoutes = express.Router();

// Require research model in our routes module
let Research1 = require('./research.model');

// Defined store route
researchRoutes.route('/add').post(function (req, res) {
  let research1 = new Research1(req.body);
  research1.save()
    .then(research1 => {
      res.status(200).json({'research1': 'research1 in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
researchRoutes.route('/').get(function (req, res) {
    Research.find(function(err, results){
    if(err){
      console.log(err);
    }
    else {
      res.json(results);
    }
  });
});

module.exports = researchRoutes;