const express = require('express');
const deleteRoutes = express.Router();
const fs = require('fs');

deleteRoutes.post('/:size', (req,res) => {
    const data = req.params.size;
    fs.appendFile('remove.txt',"-"+data+"\n",'utf8', function(error, data){
      console.log('delete file');
    })
  })

module.exports = deleteRoutes;