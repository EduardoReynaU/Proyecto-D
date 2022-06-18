const { model } = require("mongoose")

//controlador para renderizar formularios
const formInicioSesion = (req, res) => {
    res.render("login",{
        title:'SanMarTec-Login',
        menu: false,
        cssLogin: true
    })
}

module.exports = {
    formInicioSesion
}