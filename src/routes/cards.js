var express = require('express'),
    router = express.Router();

router.get('/',function(req,res) {
    res.send('JSON com todas cartas');
});

router.get('/:id', function(req,res) {
    res.send(`JSON com carta do id: ${req.params.id} `);
});


module.exports = router;
