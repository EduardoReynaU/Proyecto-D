const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config()
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(express.static(__dirname + "/public"))
const uri =`mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@cluster0.sblxh.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))

//sector de plantillas
app.set('view engine', 'pug')
app.set('views', path.join(__dirname,'/views'))

app.get('/',(req, res)=>{
    res.render("index", {})
})

app.use('/login', require('./router/inicioSesion'))
app.use('/registro', require('./router/registro'))



app.listen(PORT, ()=>{
    console.log('está todo   ok')
    
})