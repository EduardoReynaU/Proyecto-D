const express = require('express')
const rutainicioSesion = express.Router();
const {formInicioSesion} = require('../controllers/inicioSesion') 
const {autenticarUsuario} = require('../controllers/auth')


rutainicioSesion.get('/', formInicioSesion )
rutainicioSesion.post('/',autenticarUsuario)

module.exports = rutainicioSesion;