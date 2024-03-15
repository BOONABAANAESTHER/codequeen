const express = require('express')
const router = express.Router()
const studentSchema = require('../model/studentsSchema')

router.post("/registerStudent",async(req,res)=>{
    const data =req.body

    try {
        const studentData = new studentSchema(data)
        await studentData.save()
        //returns a succeful message
        return res.studentData.send(data).status(200)

    } catch (error) {
        //returns an error message
        res.send(error).status(400)
    }
})

module.exports = router