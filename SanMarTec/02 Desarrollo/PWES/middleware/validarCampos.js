const { validationResult } = require('express-validator')

const validarCampos = (req,res,next) => {

    const errores = validationResult(req);
    if(!errores.isEmpty()){

        console.log(errores);
        
        req.flash('errors', errores.errors.map(err => err.msg));
        
        res.render('registro',{          
            title: 'SanMarTec-Registro',
            mensajes: req.flash(),
            cssReg :true
        })
        return;
    }
    next()
}

module.exports = validarCampos