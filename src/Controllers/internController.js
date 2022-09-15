
const collegeModel = require("../models/collegeModel")
const internModel = require("../models/internModel")


const createIntern = async (req, res) => {
  try {
    let data = req.body;
    let { name, email, mobile, collegeName } = data;
//=================== DB Call ========================================================================================================

    let collegeDetails = await collegeModel.findOne({ name: collegeName });
    if (!collegeDetails) {
      return res.status(400).send({ status: false, msg: "NO such college" });
    }
    let collegeId = collegeDetails._id.toString();

    const myData = { name, mobile, collegeId, email };
    let savedata = await internModel.create(myData);
    res.status(200).send({ status: true, data: savedata });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};

module.exports = { createIntern };

   
