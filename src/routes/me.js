'use strict';
const express = require('express'),
      user    = require('../models/user'),
      router  = express.Router();

router.get('/image',(req,res) => {
    user.findOne(req.user._id)
        .then(userImage => {
            res.send(userImage.imageUrl());
        });
});

router.get('/', (req,res) => {
    if(req.user){
        res.send(req.user)
    }else{
        res.status(401).send()
    }
});

module.exports = router;
