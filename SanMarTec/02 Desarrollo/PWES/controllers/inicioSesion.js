const { model } = require("mongoose")

//controlador para renderizar formularios
const formInicioSesion = (req, res) => {
    res.render("login",{})
}

module.exports = {
    formInicioSesion
}