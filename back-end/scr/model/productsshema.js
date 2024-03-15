
const mongoose =require('mongoose')
const schema = mongoose.Schema

const productSchema = new schema({

    productname:{
        type:"string",
        required:true
    },
    quantiy:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

const product = mongoose.model('productdetails',productSchema)
module.exports = product