const mongoose = require("mongoose");
const uploadSchema=new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      musicCategory: {
        required: true,
      },
      contributorName: {
        type: String,
        required: true,
      },
      contributorPercentage: {
        type: Number,
        required: true,
      },
      contributorRole: {
        type: Number,
        required: true,
      },
      packageName: {
        type: String,
        required: true,
      },
      packagerPrice: {
        type: Number,
        required: true,
      },
      commercialUses: {
        type: Number,
        required: true,
      },
      events: {
        type: Number,
        required: true,
      },
    });
const uploadModel=mongoose.model("toopapp",uploadSchema)
module.exports=uploadModel