const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const toopMoel=require("./models/toop");

const app = express()
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Toop_Application");

app.post("/login",(req,res)=>{
const {email,password}=req.body;
toopMoel.findOne({email:email})
.then(user=>{
    if(user){
        if(user.password===password){
            res.json('success')
        }else{
            res.json('Fail to Login')
        }
      
}else{
    res.json('No existing user')
}
// .catch(err=>res.json(err))
})})

app.post("/register",async(req,res)=>{
    toopMoel.create(req.body)
    .then(reghere=>res.json(reghere))
    .catch(err=>res.json(err))
})

app.post("/upload",async(req,res)=>{
    uploadMoel.create(req.body)
    .then(uphere=>res.json(uphere))
    .catch(err=>res.json(err))
}
)

app.listen(3000, () => {
  console.log("Server started");
});








// // const { endAsyncEvent } = require("react-native/Libraries/Performance/Systrace");
// app.use(express.json());

// const mongourl="mongodb+srv://nethhashara:admin@cluster0.eqvqmy4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// mongoose.connect(mongourl).then(()=>{
//     console.log("DB Connected");
// }).catch((e)=>{
//     console.log(e);

// })

// require("./UserDetails")

// const User=mongoose.model("UserInfo");

// app.get("/", (req, res) => {
//     res.send({ status: "Started" });
//   });

// app.post("/register",async(req,res)=>{
// const {username,email,mobile,password}=req.body;
// console.log(req.body);
// const olduser=await User.findOne({email:email})
// if(olduser){
//     return res.send({data:"User already exists"});
// }

// try{
//     await User.create({
//         username:username,
//         email:email,
//         mobile,
//         password,
//     });
//     res.send({status:"ok",data:"user created"});
// }catch(error){
//     res.send({status:"error",data:error});
// }

// });

// app.listen(3000,()=>{
//     console.log("Server started");
// }
// )
