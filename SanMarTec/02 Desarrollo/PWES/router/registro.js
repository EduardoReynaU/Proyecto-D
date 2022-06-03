const express = require('express')
const rutaRegistro = express.Router();
const {crearCuenta, crearUsuario} = require('../controllers/registro')
//const usuarioModel= require('../models/usuario')

rutaRegistro.get('/', crearCuenta)



module.exports = rutaRegistro;