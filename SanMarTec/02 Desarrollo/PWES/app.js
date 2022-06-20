const express = require('express')
const mongoose = require('mongoose');
const {create} = require('express-handlebars')
const passport = require('passport');

var session      = require('express-session');
var flash        = require('req-flash');
require('dotenv').config()



const app = express()
require('./config/passport')
const path = require('path')
const bodyParser = require('body-parser');
const Usuario = require('./models/usuario');
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


//Conexión Base de Datos

const uri =`mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@cluster0.sblxh.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))

//sector de plantillas
app.set('views', path.join(__dirname,'/views'))
app.engine('.hbs', create({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  helpers: require('./helpers/handlebars'),
  extname: '.hbs'
}).engine )
app.set('view engine', 'hbs')




//APP SESSION

app.use(
  session({
  
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//Variables globales
app.use((req, res, next)=> {
  res.locals.errores= req.flash('errores');
  res.locals.mensajes = req.flash('mensaje');
  res.locals.error = req.flash("error");
  
  res.locals.user = req.user || null;
  

  next();

})

//Rutas
app.use('/login', require('./router/inicioSesion'))
app.use('/registro', require('./router/registro'))
app.get('/',(req, res)=>{
  const name = null
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
})
app.use('/nosotros', require('./router/nosotros.js'))
app.use('/logout', require('./router/cerrarSesion'))

app.use(express.static(__dirname + "/public"))

app.listen(PORT, ()=>{
    console.log('está todo   ok')
    
})