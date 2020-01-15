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

resultRoutes.route('/find/:student_id/:name').post(function (req, res) {
  let id = req.params.student_id;
  let qname = req.params.name;
  Result.find({student_id:id, name: qname},{_id:0,name: 0, student_id: 0,__v:0}, function (err, result){
      var arr = result.toString().split(`'`);
      res.json(arr[1]);
  });
});

module.exports = resultRoutes;