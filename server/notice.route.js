const express = require('express');
const noticeRoutes = express.Router();

// Require notice model in our routes module
let Notice = require('./notice.model');

// Defined store route
noticeRoutes.route('/add').post(function (req, res) {
  let notice = new Notice(req.body);
  notice.save()
    .then(notice => {
      res.status(200).json({'notice': 'notice in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

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

// Defined edit route
noticeRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Notice.findById(id, function (err, result){
      res.json(result);
  });
});

//  Defined update route
noticeRoutes.route('/update/:id').post(function (req, res) {
    Notice.findById(req.params.id, function(err, notice) {
    if (!notice)
      res.status(404).send("data is not found");
    else {
        notice.num = req.body.num;
        notice.title = req.body.title;
        notice.desc = req.body.desc;

        notice.save().then(notice => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
noticeRoutes.route('/delete/:id').get(function (req, res) {
    Notice.findByIdAndRemove({_id: req.params.id}, function(err, result){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = noticeRoutes;