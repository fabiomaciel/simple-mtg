'use strict';
var express = require('express'),
    app     = express(),
    home    = require('./routes/home'),
    config  = require('../config/config');

app.get('/health',function(req,res){
    res.send('It\'s ALIIIIIIVE');
});

app.use('/',home);

app.listen(config.port);
console.log(`Server initialized on port: ${config.port}`);

