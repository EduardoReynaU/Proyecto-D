const Usuario = require('../models/usuario')

const VerificarCorreo = async(correo = "")=>{
    const usuarioEncontrado = await Usuario.findOne({correo})

    if(usuarioEncontrado){
        throw new Error('El correo ya se encuentra registrada')
    }
};

module.exports = {
    VerificarCorreo
}