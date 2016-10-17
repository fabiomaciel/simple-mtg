'use strict';
var express = require('express'),
    app     = express();

app.get('/health',function(req,res){
    res.send('It\'s ALIIIIIIVE');
});

app.listen(8000);
console.log('Server initialized on port: '+8000);
