const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.index);
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
