
const express = require("express")
const router = express.Router()
const CollegeController = require("../Controller(s)/collegecontroller")

router.get("/test", function(req,res){
    res.send("Connected")
})

router.post("/functionup/colleges",CollegeController.CreateCollege)
module.exports=router