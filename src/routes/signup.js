'use strict';
const express = require('express'),
router  = express.Router();

router.get('/',(req,res) => {
  res.render('pages/signup');
});

router.post('/',(req,res) => {
  res.render('pages/signup');
});

module.exports = router;