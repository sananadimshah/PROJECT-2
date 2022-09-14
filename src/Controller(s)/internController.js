
const collegeModel = require("../model(S)/collegeModel")
const internModel = require("../model(S)/internModel")


const createIntern= async (req,res)=>{
 try{
 let data = req.body
    let {name,email,mobile,collegeName}= data

   if(Object.keys(req.body).length==0){
          res.status(400).send({status:false, msg:"please insert correct intern details"})
   }    
     if(!name) return res.status(400).send({status:false, msg:"please input name"})
    //  let validName= await internModel.findOne({name:data.name})
    //  if(validName) return res.status(403).send({status:false,msg: "BRO!! This name is allready taken"})
     if(typeof(name)!=="string") return res.status(400).send({status:false, msg:"please input valid name"})
     
     if(typeof(email)!=="string") return res.status(400).send({status:false, msg: "please input correct email"})

    if(!email) return res.status(400).send({status:false, msg:"please input email"})
    let emaiId = await internModel.findOne({email:data.email})

    if(emaiId) return res.status(401).send({status: false,msg: "please input another e-mailId" })

    if(!mobile) return res.status(400).send({status:false, msg: "please input mobile number"})
    if(typeof(mobile)!== Number)  return res.status(400).send({status:false, msg:"please input valid number"})
    let validMobileNo= await internModel.findOne({mobile:data.mobile})
    if(validMobileNo) return res.status(403).send({status:false , msg: "Sir, Please input valid mobile number"})

    if(!collegeName) return res.status(400).send({status:false, msg:"please input collegeName"})
    
    
    //  if()
      // data.collegeName=data.collegeName.trim().toLowerCase()    
    let collegeDetails= await collegeModel.findOne({name:data.collegeName})
    if(!collegeDetails){
      res.status(400).send({status:false, msg:"NO such college"})
      return
    }

    let collegeId= collegeDetails._id.toString()

    const myData = {name,mobile,collegeId,email} 
    let savedata= await internModel.create(myData)
    res.status(200).send({status:true, data:savedata})
}
  
  catch (err){ 
        res.status(500).send({status:false, msg: err.message})
  }
  }
   


  














module.exports={createIntern}