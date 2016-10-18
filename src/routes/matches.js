var express = require('express'),
    router = express.Router();

router.get('/',function(req,res) {
    res.send('JSON com todas partidas');
});

router.get('/:user', function(req,res) {
    res.send(`JSON com todas as partidas do usuario:  ${req.params.user} `);
});

router.get('/:user/:id',function(req,res){
    res.send(`JSON com partida de id: ${req.params.id} do usuario: ${req.params.user} `);
});


module.exports = router;
