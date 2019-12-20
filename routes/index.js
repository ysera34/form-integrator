var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/form-test', function(req, res, next) {
  console.log('body', req.body);
  res.send('success');
});

module.exports = router;
