const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Usuario = require('../models/usuario')


passport.use(new LocalStrategy({
    usernameField: 'correo',
    passwordField: 'password'
    
}, async (correo, password, done ) => {
        const user = await Usuario.findOne({correo})

        if(!user) return done(null,false,{
            message: 'No está registrado en la BD!'
        });

        const verificarContraseña = user.compararPassword(password)

        if(!verificarContraseña){
            return done(null,false,{
                message: 'Contraseña incorrecta!'
            })
        }
        console.log(user)
        return done(null, user);
        
    }));


    passport.serializeUser((user,done) => {
        done(null, user._id)
    })

    passport.deserializeUser(async(id,done) => {
        const user = await Usuario.findById(id).exec();
        return done(null, user)
    })

module.exports = passport;