var express = require('express'),
    router = express.Router();

router.get('/',function(req,res) {
    res.send('JSON com todos decks');
});

router.get('/:user',function(req,res) {
    res.send(`JSON com decks do usuario: ${req.params.user} `);
});

router.get('/:user/:id', function(req,res) {
    res.send(`JSON com deck de id: ${req.params.id}  do usuario: ${req.params.user}   `);
});


module.exports = router;
