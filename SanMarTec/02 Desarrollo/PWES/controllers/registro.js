const Usuario = require('../models/usuario')


//Renderizar el registro de cuenta
const crearCuenta = (req, res) => {
    res.render('registro', {
        cssReg: true,
        title:"Registro-SanMarTec"})
}

//Controlador para crear usuario en la base de datos
const crearUsuario = async(req, res)=> {
    const usuario = new Usuario(req.body)
    if(usuario.correo.includes('@unmsm.edu.pe')){
        usuario.rol = 'admin'
    }
    try {
        await usuario.save();
        res.redirect('login')
    } catch (error) {      
        res.render('registro')
    }
}

module.exports = {
    crearCuenta,
    crearUsuario
}




/* rutaRegistro.post('/registro', async(req, res) => {
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
