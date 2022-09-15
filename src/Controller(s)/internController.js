
const collegeModel = require("../model(S)/collegeModel")
const internModel = require("../model(S)/internModel")


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

   


  //---------------------------------get Api --------------------------

const getCollegeDetail = async (req, res) => {

  function renameKeys(obj, newKeys) {
      const keyValues = Object.keys(obj).map(key => {
        const newKey = newKeys[key] || key;
        return { [newKey]: obj[key] };
      });
      return Object.assign({}, ...keyValues);
    }
    const obje = req.query                              //  { collegeName: "tit" };
  const newKeys = { collegeName: "name" };
  const data = renameKeys(obje, newKeys);
  // console.log(data);


  // let data = req.query 
  if (Object.keys(data).length < 1) {
      return res.status(404)
          .send({ status: false, msg: " require college name in query" })
  }

  if (Object.keys(data).includes("name"))
      if (!data.name) { return res.status(404).send({ status: false, msg: "give college name" }) }
  // do 
  let obj = {}

  let collegeDetails = await collegeModel.findOne(data).select({ _id: 1 })
  // res.send(collegeDetails)
  if (!collegeDetails) {
      return res
          .status(404)
          .send({ status: false, msg: "No such college exist" })
  }
  let intern = await internModel.find({ collegeId: collegeDetails._id })
  if (intern.length < 1) {
      return res
          .status(404)
          .send({ stats: true, msg: " no such intern" })
  }

  let collegeData = await collegeModel.findOne(data).select({ name: 1, fullName: 1, LogoLink: 1, _id: 0 })

  obj = Object.assign({ collegeData, intern })

  // deep copy of object

  res.status(200).send({ status: true, msg: obj })

}



module.exports = { createIntern, getCollegeDetail }
