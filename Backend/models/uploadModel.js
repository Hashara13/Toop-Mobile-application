const mongoose = require("mongoose");
const uploadSchema=new mongoose.Schema({
    username:String,
    email:{type:String,unique:true},
    mobile:String,
    password:String,
})

const uploadMoel=mongoose.model("toopapp",uploadSchema)
module.exports=uploadMoel