const express = require('express');
const resultRoutes = express.Router();
// Defined store route
let Result = require('./result.model');

resultRoutes.route('/find/:student_id/:name/:ewhaian_id').post(function (req, res) {
  let id = req.params.student_id;
  let qname = req.params.name;
  let ename = req.params.ewhaian_id;
  Result.find({student_id:id, name: qname, ewhaian_id: ename}, function (err, result){
      res.json(result);
  });
});

resultRoutes.route('/:key').post(function (req, res) {
  let k = req.params.key;
  Result.find({key:k}, function (err, result){
      res.json(result);
  });
});

module.exports = resultRoutes;