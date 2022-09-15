const mongoose = require("mongoose")

const CollegeSchema = new mongoose.Schema({
 name:{
    type : String,
    required : "Name is required",
    unique : "Name is already exist",
    lowercase : true,
    trim:true                   
 },
 fullName : {
    type : String,
    required : "fullName is required",
    trim:true
 },
 logoLink : {
    type : String,
    required : "logoLink is required",
    trim:true
 },
 isDeleted : {
    type : Boolean,
    default : false,
 }
}, {timestamps:true})
module.exports = mongoose.model("College", CollegeSchema)

//{ name: { mandatory, unique, example iith }, fullName: { mandatory, example `Indian Institute of Technology, Hyderabad` }, logoLink: { mandatory }, isDeleted: { boolean, default: false } }