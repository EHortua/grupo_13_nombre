var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/*GET user register*/
router.get('/registro', function(req, res, next) {
  res.render('register', { title: 'Express' });
});
/*GET user login*/
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

module.exports = router;
