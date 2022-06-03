const {Schema, model, default: mongoose} = require('mongoose')

const usuarioSchema = Schema ({
    nombre: {
        type: String,
        trim: true,
    },
    correo: {
        type: String,
        unique: true,
        lowercase:true,
        trim: true,
    },
    password: {
        type: String, 
        trim: true
    }
})
const Usuario = mongoose.model('Usuario', usuarioSchema, 'users')

module.exports = Usuario;