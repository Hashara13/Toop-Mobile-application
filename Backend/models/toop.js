const mongoose = require("mongoose");
const toopSchema=new mongoose.Schema({
    username:String,
    email:{type:String,unique:true},
    mobile:String,
    password:String,
})

const toopModel=mongoose.model("toopapp",toopSchema)
module.exports=toopModel