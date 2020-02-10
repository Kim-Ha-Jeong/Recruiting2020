const express = require('express');
const researchRoutes = express.Router();

// Require research model in our routes module

let Research2 = require('./research.model2');

// Defined store route
researchRoutes.route('/add').post(function (req, res) {
  let research2 = new Research2(req.body);
  research2.save()
    .then(research1 => {
      res.status(200).json({'research2': 'research2 in added successfully'});
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