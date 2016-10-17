var express = require('express'),
    router = express.Router();

router.get('/',function(req,res) {
    res.send('Olá eu sou o goku');
});


module.exports = router;
