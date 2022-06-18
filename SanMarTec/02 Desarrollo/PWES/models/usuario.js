const {Schema, model, default: mongoose} = require('mongoose')
const bcryptjs = require('bcryptjs');

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
    },
    rol: {
        type: String,
        default: 'usuario',
        emin: ['usuario', 'admin']
    }
})




//MÉTODO PARA HASHEAR LOS PASSWORDS
usuarioSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next();
    }

    const hash = await bcryptjs.hash(this.password, 12);
    this.password = hash;

    next();
})

usuarioSchema.post('save', function(error, doc, next) {
    if((error.name) === 'MongoError' && error.code === 1100 ){
        next('El correo ya se encuentra registrado.');
    }else{
        next(error)
    }
})

//Autenticación de usuarios
usuarioSchema.methods = {
    compararPassword: function(password){
        return bcryptjs.compareSync(password, this.password)
    }
}

const Usuario = mongoose.model('Usuario', usuarioSchema, 'users')
module.exports = Usuario;