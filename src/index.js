'use strict';
var express = require('express'),
    app     = express(),
    config  = require('../config/config');

app.get('/health',function(req,res){
    res.send('It\'s ALIIIIIIVE');
});

app.listen(config.port);
console.log(`Server initialized on port: ${config.port}`);

