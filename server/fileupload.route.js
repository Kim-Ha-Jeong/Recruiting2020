const express = require('express');
const upload = require('./fileupload.js');
const multer = require('multer');
const uploadRoutes = express.Router();

uploadRoutes.post("/", (req, res, next) => {
    upload(req, res, function(err){
        if(!req.file){
            console.log("file is not posting");
        }
        if(err instanceof multer.MulterError) {
            return next(err);
        } else if (err) {
            return next(err);
        }
        })

        return res.json({success : 1});
    });


module.exports = uploadRoutes;