const mongoose = require("mongoose")

const CollegeSchema = new mongoose.Schema({
 name:{
    type : String,
    required : "Name is required",
    unique : "Name is already exist",
    lowercase : true,
 },
 fullName : {
    type : String,
    required : "fullName is required"
 },
 logoLink : {
    type : String,
    required : "logoLink is required"
 },
 isDeleted : {
    type : Boolean,
    default : false,
 },
})
module.exports = mongoose.model("College", CollegeSchema)

// { name: { mandatory, unique, example iith }, fullName: { mandatory, example `Indian Institute of Technology, Hyderabad` }, logoLink: { mandatory }, isDeleted: { boolean, default: false } }