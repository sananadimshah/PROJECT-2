const internModel = require("../models/internModel");

const internValidation = async (req, res, next) => {
  try {
    let data = req.body;
    let { name, email, mobile, collegeName } = data;
    //====================checking the data in req.body=======================================================================================

    if (Object.keys(data).length == 0) {
      return res
        .status(400)
        .send({
          status: false,
          msg: "Please Insert Every Intern Details That's Required",
        });
    }
//=======================Name validation========================================================================================

    if (!name) {
      return res.status(400).send({ status: false, msg: "Please Insert Your Name" });
    }

    if (typeof name !== "string" || name.trim().length==0) {
      return res
        .status(400)
        .send({ status: false, msg: "Please Insert valid name" });
    }
//=============================E-Mail validation==================================================================================================

    if (!email)
      return res
        .status(400)
        .send({ status: false, msg: "Please Insert E-mailId" });

    if (typeof email !== "string" || name.trim().length==0 )
      return res
        .status(400)
        .send({ status: false, msg: "Please Input Correct email" });

    //---------------------------Email Validation Thorugh REGEX--------------------------------------------------------------------------------- 

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email))
      return res.status(400).send({ status: false, msg: "Invalid Email Id" });

    
 //------------------------DB call for Email ---------------------------------------------------------------------------------------      

    let emaiId = await internModel.findOne({ email: data.email });

    if (emaiId)
      return res
        .status(401)
        .send({
          status: false,
          msg: " OH My Gosh !! This E-mail is Allready Exists, Please Input another E-mailId",
        });


 //==================================Mobile Validation==============================================================================     

    if (!mobile)
      return res
        .status(400)
        .send({ status: false, msg: "Please Input Mobile Number" });
    if (typeof mobile !== "number" || mobile.length == 0)
      return res
        .status(400)
        .send({ status: false, msg: "Please Input Valid Number" });

 //------------------------------Mobile Validation Through REGEX ------------------------------------------------------------------------

     if (!/^[6-9]\d{9}$/.test(data.mobile))
     return res
       .status(400)
       .send({ status: false, msg: "Wrong Mobile Number" });

 //-------------------------DB Call for Mobile Number-------------------------------------------------------------------------------------       

    let validMobileNo = await internModel.findOne({ mobile: data.mobile });
    if (validMobileNo)
      return res
        .status(403)
        .send({ status: false, msg: "DAMN !! BRO, This Mobile Number Allready Exists" });

   

//============== College Name validation===========================================================================================
    
  if (!collegeName)
      return res
        .status(400)
        .send({ status: false, msg: "Please Input collegeName" });

    next();
  } 
  catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};

module.exports.internValidation = internValidation;
