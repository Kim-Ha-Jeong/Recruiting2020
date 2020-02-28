const express = require('express');
const resultRoutes = express.Router();
// Defined store route
let Result = require('./result.model');

resultRoutes.route('/').get(function (req, res) {
  Result.find(function (err, resultes) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(resultes);
    }
  });
});

resultRoutes.route('/add').post(function (req, res) {
  let result = new Result(req.body);
  result.save()
    .then(result => {
      res.status(200).json({ 'result': 'result in added successfully' });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

resultRoutes.route('/find/:student_id/:name/:ewhaian_id').post(function (req, res) {
  let id = req.params.student_id;
  let qname = req.params.name;
  let ename = req.params.ewhaian_id;
  Result.find({ student_id: id, name: qname, ewhaian_id: ename }, function (err, result) {
    res.json(result);
  });
});

resultRoutes.route('/:key').post(function (req, res) {
  let k = req.params.key;
  Result.find({ key: k }, function (err, result) {
    res.json(result);
  });
});

resultRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Result.findById(id, function (err, result) {
    res.json(result);
  });
});

//  Defined update route
resultRoutes.route('/update/:id').post(function (req, res) {
  Result.findById(req.params.id, function (err, notice) {
    if (!notice)
      res.status(404).send("data is not found");
    else {
      notice.name = req.body.name;
      notice.student_id = req.body.student_id;
      notice.ewhaian_id = req.body.ewhaian_id;

      notice.save().then(notice => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});


module.exports = resultRoutes;