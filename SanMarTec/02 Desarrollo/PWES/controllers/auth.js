const passport = require('passport');
const Usuario = require('../models/usuario');

const autenticarUsuario = passport.authenticate('local',{
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true,
            badRequestMessage: 'Ambos campos son obligatorios.'
})

//Método cerrarSesion
const cerrarSesion = function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  }

module.exports = {
    autenticarUsuario,
    cerrarSesion,
    //guardarPassword
}