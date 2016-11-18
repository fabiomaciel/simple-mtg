'use strict';
const express  = require('express'),
      router   = express.Router(),
      passport = require('passport'),
      logger   = require('../util/logger'),
      User     = require('../models/user');

router.get('/',(req,res) => {
    res.render('pages/login');
});

router.post('/', passport.authenticate('local'), (req,res,next) => {
    res.status(200).send(req.user._id);
});

module.exports = router;
