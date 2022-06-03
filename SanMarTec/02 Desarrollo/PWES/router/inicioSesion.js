const express = require('express')
const rutainicioSesion = express.Router();
const {formInicioSesion} = require('../controllers/inicioSesion') 

rutainicioSesion.get('/', formInicioSesion )

module.exports = rutainicioSesion;