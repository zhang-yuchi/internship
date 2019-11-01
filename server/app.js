var express = require('express')
var router = require('./router.js')
var path = require("path")
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(bodyParser.json())
app.engine('html',require('express-art-template'))
// app.set('views','/views')
app.use('/public/',express.static('./public/'))
app.use('/node_modules/',express.static('./node_modules/'))

app.use(router)

app.listen(3000,function(){
    console.log("server is running...")
})