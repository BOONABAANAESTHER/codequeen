
const express = require('express')
const mongoose = require('mongoose')


// creating an express app

const app = express()

// choosing port

const port = 8080
const url = "mongodb+srv://BOONABAANAESTHER:<BOONABAANAESTHER2001>@cluster0.qdbfgfn.mongodb.net/STUDENTS"

// connecting to databse
mongoose.connect(url).then(()=>{
    app.listen(port,()=>{
        console.log (`sever running on port ${port}`)
    })

}).catch(error=>{
    console.log('error occured at:', error)
})