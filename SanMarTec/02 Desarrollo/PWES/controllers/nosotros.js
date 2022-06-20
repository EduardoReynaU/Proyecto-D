
const renderNosotros = (req, res) => {
   
    if (req.user){
      this.name = req.user.nombre
      this.rol = req.user.rol      
    }

    if(this.rol == 'usuario'){
      rol = null
    }
    res.render('nosotros', {
        
        NombrePagina: 'Nosotros | EmprendeSM',
        cssNosotros: true,
        menu: true,
        nombre : this.name,
        rol : this.rol
        
    })

}

module.exports = {
    renderNosotros
}