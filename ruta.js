const express = require('express');
const router = express.Router();
const registerController = require('../cont/regis');
const loginController = require('../cont/login');

// Ruta para la página de inicio
router.get('/registrar', registerController.getRegisterPage);
router.get('/', loginController.getLoginPage);
router.post('/registrar', registerController.register);
router.post('/login', loginController.login);

module.exports = router;