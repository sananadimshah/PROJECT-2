
const express = require("express")
const router = express.Router()


router.get("/test", function(req,res){
    res.send("Connected")
})

module.exports=router