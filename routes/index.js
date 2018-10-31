var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', test: 'test' });
});

router.get('/training/:id', function(req, res, next) {

  var id = req.params.id;

  var athletes = [
      [1, 'Ciril'],
      [2, 'Siro'],
      [3, 'Fara'],
      [4, 'Lisa']
  ];

  console.log(athletes[id][1]);

  res.render('training', { name: athletes[id][1] ,  week: 22});
});

module.exports = router;
