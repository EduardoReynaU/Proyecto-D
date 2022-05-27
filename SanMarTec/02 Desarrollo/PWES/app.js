const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(__dirname + "/public"))

//sector de plantillas
app.set('view engine', 'pug')
app.set('views', path.join(__dirname,'/views'))

app.get('/',(req, res)=>{    
    res.render("login",{})
    
})
app.get('/registro',(req, res)=>{    
    res.render("registro",{})
    
})
  

//app.get('/', (req, r es)=>{
//    res.sendFile(path.join(__ dirn ame ,'./index.pug'))
//})  

app.listen(3000, ()=>{
    console.log('está todo   ok')
    
})