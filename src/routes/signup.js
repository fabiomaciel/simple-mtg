'use strict';
const express = require('express'),
router  = express.Router();
var service = require('../services/userService.js');
var _ = require('lodash');
var db = require('../models/user');
router.get('/',(req,res) => {
  res.render('pages/signup');
});

router.post('/',(req,res) =>{
	var data = req.body;
	req.checkBody("email", "Enter a valid email address.").isEmail();
	var error_str = [];
  var errors = req.validationErrors();
  if(data.confirm_password != data.password){
    error_str.push('Password and Confirm Password doesnt match');
  }
  if (data.email != data.confirm_email){
    error_str.push('Email and Confirm email doesnt match');
  }
  if (errors) {
   for (var i = 0; i < errors.length; i++){
    error_str.push(errors[i].msg);
  }
  res.render('pages/signup',{error:error_str});
}
else{
  delete data.confirm_email;
  delete data.confirm_password;
  service.createUser(data,res,req,error_str);

}
});

module.exports = router;