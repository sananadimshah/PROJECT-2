
const express = require("express")
const router = express.Router()
const collegeController = require("../Controllers/collegeController")
const internController= require("../Controllers/internController")
const validation =require("../validation/valid")

router.get("/test", function(req,res){
    res.send("Connected")
})

router.post("/functionup/colleges",collegeController.CreateCollege)
router.post("/functionup/interns",validation.internValidation, internController.createIntern)
router.get("/functionup/collegeDetails",collegeController.collegeDetails)

module.exports=router