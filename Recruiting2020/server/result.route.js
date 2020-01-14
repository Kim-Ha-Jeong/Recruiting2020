const express = require('express');
const resultRoutes = express.Router();

// Require result model in our routes module
let Result = require('./result.model');

// Defined store route
resultRoutes.route('/add').post(function (req, res) {
  let result = new Result(req.body);
  result.save()
    .then(result => {
      res.status(200).json({'result': 'result in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
resultRoutes.route('/').get(function (req, res) {
    Result.find(function(err, resultes){
    if(err){
      console.log(err);
    }
    else {
      res.json(resultes);
    }
  });
});

// Defined edit route
resultRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Result.findById(id, function (err, result){
      res.json(result);
  });
});

//  Defined update route
resultRoutes.route('/update/:id').post(function (req, res) {
    Result.findById(req.params.id, function(err, result) {
    if (!result)
      res.status(404).send("data is not found");
    else {
        result.name = req.body.name;
        result.student_id = req.body.student_id;
        result.pass = req.body.pass;

        result.save().then(result => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
resultRoutes.route('/delete/:id').get(function (req, res) {
    Result.findByIdAndRemove({_id: req.params.id}, function(err, result){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

resultRoutes.route('/find/:student_id').get(function (req, res) {
  let id = req.params.student_id;
  Result.find({student_id:id},{_id:0,name: 0, student_id: 0,__v:0}, function (err, result){
      var arr = result.toString().split(`'`);
      res.json(arr[1]);
  });
});

resultRoutes.route('/find/:student_id').post(function (req, res) {
  let id = req.params.student_id;
  Result.find({student_id:id},{_id:0,name: 0, student_id: 0,__v:0}, function (err, result){
    if(err) res.json("정보 없음");  
    else { 
      var arr = result.toString().split(`'`);
      res.json(arr[1]);
    }
  });
});
/*
resultRoutes.route('/pass/:student_id').post(function (req, res) {
  let id = req.params.student_id;
  console.log(id);
  Result.find({student_id:id}, function (err, result){
    if (!result)
     res.status(404).send("data is not found");
    else {
      console.log(result.pass);
      res.send(result.pass);
    }
  });
});
*/
module.exports = resultRoutes;