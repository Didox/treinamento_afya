const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/login_controller');
const HomeController = require('../controllers/home_controller');

router.get('/', LoginController.index);
router.post('/logar', LoginController.logar);
router.get('/home', HomeController.index);

module.exports = router;
