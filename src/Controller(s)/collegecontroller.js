const collegeModel = require("../model(S)/CollageModel")


const CreateCollege = async function(req,res){
let {name,fullName,logoLink} = req.body
if(Object.keys(req.body).length==0){
    res.status(400).send({status : false , msg : "Please provide College details"})
}
if(!name){
    res.status(400).send({status : false, msg:"Please prrovide Name"})
}if(!fullName){
    res.status(400).send({status : false, msg:"Please prrovide fullName"})
}if(!logoLink){
    res.status(400).send({status : false, msg:"Please prrovide logoLink"})
}
if(typeof name !== "string" || name.length ==0){
    res.status(400).send({staues : false , msg : "Invalid Name"})
}if(typeof fullName !== "string" || fullName.length ==0){
    res.status(400).send({staues : false , msg : "Invalid fullName"})
}if(typeof logoLink !== "string" || logoLink.length ==0){
    res.status(400).send({staues : false , msg : "Invalid logoLink"})
}
let savedata = await collegeModel.create(req.body)
res.status(201).send({status : true , data : savedata})


}
module.exports={CreateCollege}

