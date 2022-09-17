
const express = require("express")
const router = express.Router()
const collegeController = require("../Controllers/collegeController")
const internController= require("../Controllers/internController")
const validation =require("../validation/valid")


//=============================CREATE COLLEGE==============================//

router.post("/functionup/colleges",collegeController.CreateCollege)

//=============================CREATE INTERN==============================//

router.post("/functionup/interns",validation.internValidation, internController.createIntern)

//=============================COLLEGE DETAILS============================//

router.get("/functionup/collegeDetails",collegeController.collegeDetails)

module.exports=router