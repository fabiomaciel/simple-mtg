'use strict';
const express = require('express'),
      router = express.Router();

router.get('/',(req,res) => {
    res.render('pages/login');
});


module.exports = router;
