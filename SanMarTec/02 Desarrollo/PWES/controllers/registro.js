const Usuario = require('../models/usuario')


//Renderizar el registro de cuenta
const crearCuenta = (req, res) => {
    res.render('registro', {})
}

//Controlador para crear usuario en la base de datos
const crearUsuario = async(req, res)=> {
    const usuario = new Usuario(req.body)
    try {
        await usuario.save();
        res.redirect('login')
    } catch (error) {
        req.flash('error', error);
        res.redirect('/registrarse')
    }
}

module.exports = {
    crearCuenta,
    crearUsuario
}




/* rutaRegistro.post('/registro', async(req, res)=> {
    const body = req.body
    try {
        const usuarioDB = new  usuarioModel(body)
        await usuarioDB.save()
        console.log(usuarioDB)
        res.redirect('login')
    } catch (error) {
        console.log(error)
    }
}) */
