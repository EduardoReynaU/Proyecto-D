const { Router } = require('express');
const rutaCierreSesion = Router();

const { cerrarSesion } = require('../controllers/auth');
//const { verificarLogin } = require('../middlewares/login');
//const { validarCampos } = require('../middlewares/validarCampos');

rutaCierreSesion.get('/', cerrarSesion);


module.exports = rutaCierreSesion;
