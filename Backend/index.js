const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const toopModel = require("./models/toop");
const uploadModel = require("./models/uploadModel");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Toop_Application");

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  toopModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("Fail to Login");
      }
    } else {
      res.json("No existing user");
    }
    // .catch(err=>res.json(err))
  });
});

app.post("/register", async (req, res) => {
  toopMoel
    .create(req.body)
    .then((reghere) => res.json(reghere))
    .catch((err) => res.json(err));
});

app.post("/upload/new", upload.single("file"), async (req, res) => {
  const file = req.file;
  const {
    title,
    musicCategory,
    contributorName,
    contributorPercentage,
    contributorRole,
    packageName,
    packagerPrice,
    commercialUses,
    events,
  } = req.body;
  const newMusic = new uploadModel({
    title: title || file.title,
    musicCategory: musicCategory,
    contributorName: contributorName,
    contributorPercentage: contributorPercentage,
    contributorRole: contributorRole,
    packageName: packageName,
    packagerPrice: packagerPrice,
    commercialUses: commercialUses,
    commercialUses: commercialUses,
    events: events,
  });
  newMusic
    .save()
    .then(() => {
      res.send("Added Succesfully done !");
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get('/myMusic',async(res,req)=>{
    uploadModel.find().then((music)=>{
res.send(music)
    }).catch(()=>{
        res.json(err);
    })
})

app.delete('/myMusic/delete:id',async(res,req)=>{
const musicId=req.params.id;
await uploadModel.findByIdAndDelete(musicId).then(()=>{
    res.status(200).res.send({status:'Delete Successfull !'})
}).catch((err)=>{
    res.status(500).send({ status: " delete Error", error: err.message });
})
})

app.get('/myMusic:id',async(res,req)=>{
    const musicId=req.params.id;
    const musicTrack=await uploadModel.findById(musicId).then(()=>{
        res.status(200).res.send({status:'Find Successfull !'})
    }).catch((err)=>{
        res.status(500).send({ status: " Find Error", error: err.message });
    })
    })



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
