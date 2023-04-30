let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const {v4:uuidv4} = require('uuid');
const multer = require('multer');
const path = require('path');

let userSchema = require('../models/users');

const storage = multer.diskStorage({
    
    destination: function(req, file, cb){
        cb(null, '../frontend/public/images');
    },
    filename: function(req, file, cb){
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb)=>{
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)){
        cb(null, true);
    }else{
        cb(null, false);
    }
};
let upload = multer({storage, fileFilter});


router.route('/getall').get((req, res)=>{
    console.log(req.body)
    userSchema.find({})
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.json(err)
    })
});


module.exports = router;   