//schema is a blue print

const mongoose =require('mongoose')
const schema = mongoose.Schema

const studntRegSchema = new schema({


    Username:{
        type:"string",
        required:true
    },
    email:{
        type:"string",
        required:true
    },
    password:{
        type:"string",
        required:true
    }
})
//allow the items to be stored in the studentdetails folder in the database
const studentRegistration = mongoose.model('StudentDetails',studntRegSchema)

//allow the schema to be accessed to other files
module.exports = studentRegistration