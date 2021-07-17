var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*GET products page*/
router.get('/productos', function(req, res, next) {
  res.render('product', { title: 'Express' });
});
/*GET product detail page*/
router.get('/detalle', function(req, res, next) {
  res.render('productDetail', { title: 'Express' });
});
/*GET cart page*/
router.get('/carrito', function(req, res, next) {
  res.render('cart', { title: 'Express' });
});


module.exports = router;
