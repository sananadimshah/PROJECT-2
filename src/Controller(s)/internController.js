
const collegeModel = require("../model(S)/collegeModel")
const internModel = require("../model(S)/internModel")


const createIntern= async (req,res)=>{
    try{
        let data = req.body
        let {name,email,mobile,collegeName}= data
        let collegeDetails= await collegeModel.findOne({collegeName:data.collegeName})
        let collegeId= collegeDetails._id.toString()
        const myData = {name,mobile,collegeId,email} 
        let savedata= await internModel.create(myData)
        res.status(200).send({status:true, data:savedata})
    }
    catch (err){ 
        res.status(500).send({status:false, msg: err.message})
    }
}
   








//     let {name,email,mobile,collegeName} = req.body
//     if(Object.keys(req.body).length==0){
//         res.status(400).send({status:false, msg:"please insert correct intern details"})
//     }
//     if(!name) return res.status(400).send({status:false, msg:"please input name"})
//     if(!email) return res.status(400).send({status:false, msg:"please input email"})
//     if(!mobile) return res.status(400).send({status:false, msg: "please input mobile number"})
//     if(!collegeName) return res.status(400).send({status:false, msg:"please input collegeName"})

//     if(typeof())
// }






module.exports={createIntern}