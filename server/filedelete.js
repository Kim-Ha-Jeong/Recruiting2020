const express = require('express');
const deleteRoutes = express.Router();
var fs = require('fs');

deleteRoutes.route('/:name').post(function (req, res) {
    let fileName = req.params.name;
    console.log(fileName);
    fs.unlink('./uploads/'+fileName, function(error) {
        if (error) {
            throw error;
        }
        console.log('Deleted!!');
    });
  });

module.exports = deleteRoutes;