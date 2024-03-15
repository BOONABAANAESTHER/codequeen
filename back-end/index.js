
const express = require('express')
const mongoose = require('mongoose')
const parser = require('body-parser')//used to change code to machine language
const bodyParser = require('body-parser')
const router = require('./scr/routes/route')

// creating an express app

const app = express()

// choosing port

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const port = 8080
const url = "mongodb+srv://BOONABAANAESTHER:<BOONABAANAESTHER2001>@cluster0.qdbfgfn.mongodb.net/STUDENTS"


app.use(express.json())
app.use('/',router)
// connecting to databse
mongoose.connect(url).then(()=>{
    app.listen(port,()=>{
        console.log (`sever running on port ${port}`)
    })

}).catch(error=>{
    console.log('error occured at:', error)
})