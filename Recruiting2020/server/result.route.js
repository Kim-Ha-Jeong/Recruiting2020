const express = require('express');
const resultRoutes = express.Router();
// Defined store route
let Result = require('./result.model');

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
resultRoutes.get("/",function (req, res) {
    Result.find(function(err, resultes){
    if(err){
      console.log(err);
    }
    else {
      res.json(resultes);
    }
  });
});

resultRoutes.route('/find/:student_id/:name/:ewhaian_id').post(function (req, res) {
  let id = req.params.student_id;
  let qname = req.params.name;
  let ename = req.params.ewhaian_id;
  Result.find({student_id:id, name: qname, ewhaian_id: ename}, function (err, result){
      res.json(result);
  });
});

resultRoutes.route('/find/:student_id/:name/:ewhaian_id').get(function (req, res) {
  let id = req.params.student_id;
  let qname = req.params.name;
  let ename = req.params.ewhaian_id;
  Result.find({student_id:id, name: qname, ewhaian_id: ename}, function (err, result){
      res.json(result);
  });
});

resultRoutes.route('/:key').get(function (req, res) {
  let k = req.params.key;
  Result.find({key:k}, function (err, result){
      res.json(result);
  });
});

module.exports = resultRoutes;