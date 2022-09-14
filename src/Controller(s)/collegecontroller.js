const collegeModel = require("../model(S)/CollageModel");

const CreateCollege = async function (req, res) {
  try {
  
    let { name, fullName, logoLink } = req.body;
    let data = req.body;
//============check data in req.body====================//
    if (Object.keys(req.body).length == 0) {
      res.status(400)
        .send({ status: false, msg: "Please provide College details" });
    }
//============if data is not present ====================//
    if (!name) {
      res.status(400).send({ status: false, msg: "Please provide Name" });
    }
//=============cheaking validName=====================//
    let validName = await collegeModel.find({ name: data.name });
    console.log(validName);

    if (validName.length !== 0) {
      res
        .status(400)
        .send({ status: false, msg: "This name is already taken" });
      return;
    }
    //=============data is present or not=====================//
    if (!fullName) {
      res.status(400).send({ status: false, msg: "Please provide fullName" });
    }
    if (!logoLink) {
      res.status(400).send({ status: false, msg: "Please provide logoLink" });
    }
    //===============checking valid or not=================//
    if (typeof name !== "string" || name.length == 0) {
      res.status(400).send({ staues: false, msg: "Invalid Name" });
    }
    if (typeof fullName !== "string" || fullName.length == 0) {
      res.status(400).send({ staues: false, msg: "Invalid fullName" });
    }
    if (typeof logoLink !== "string" || logoLink.length == 0) {
      res.status(400).send({ staues: false, msg: "Invalid logoLink" });
    }
    //====================CreateCollege========================//
    let savedata = await collegeModel.create(data);
    res.status(201).send({ status: true, data: savedata });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};

module.exports = { CreateCollege };
