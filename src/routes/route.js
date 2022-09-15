
const express = require("express")
const router = express.Router()
const collegeController = require("../Controller(s)/collegeController")
const internController= require("../Controller(s)/internController")

router.get("/test", function(req,res){
    res.send("Connected")
})

router.post("/functionup/colleges",collegeController.CreateCollege)
router.post("/functionup/interns",internController.createIntern)

module.exports=router