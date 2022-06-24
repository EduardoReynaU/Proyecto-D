const indexController = (req, res)=>{
    

      if (req.user){
        this.name = req.user.nombre
        this.rol = req.user.rol      
      }
  
      if(this.rol == 'usuario'){
        this.rol = null
      }

      res.render("index", {
        title: 'SanMarTec-Home',
        cssHome: true,
        menu: true,
        user : req.user || null,
        nombre : this.name,
        rol: this.rol
        
        //nombre : req.user.nombre|| null
      })
  }

  module.exports = indexController;