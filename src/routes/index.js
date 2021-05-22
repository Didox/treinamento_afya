const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/login_controller');
const HomeController = require('../controllers/home_controller');
const LoginMiddleware = require('../middlewares/login');

router.get('/', LoginController.index);
router.post('/logar', LoginController.logar);
router.get('/logout', LoginController.logout);
router.get('/utilities-color', LoginMiddleware, HomeController.utilitiesColor);
router.get('/home', LoginMiddleware, HomeController.index);

module.exports = router;
