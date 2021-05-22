const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/login_controller');
const HomeController = require('../controllers/home_controller');
const UsuariosController = require('../controllers/usuarios_controller');
const LoginMiddleware = require('../middlewares/login');

router.get('/', HomeController.index);
router.post('/logar', LoginController.logar);
router.get('/usuarios', LoginMiddleware, UsuariosController.index);
router.post('/usuarios', LoginMiddleware, UsuariosController.criar);
router.put('/usuarios/:id', LoginMiddleware, UsuariosController.update);
router.delete('/usuarios/:id', LoginMiddleware, UsuariosController.delete);

module.exports = router;
