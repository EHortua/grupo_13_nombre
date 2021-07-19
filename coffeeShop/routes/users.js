var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
router.get('/', userController.userList);
/*GET user register*/
router.get('/registro', userController.register);
/*GET user login*/
router.get('/login', userController.login);

module.exports = router;
