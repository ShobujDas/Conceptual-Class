const fs = require('fs');
const path = require('path');

const express = require('express');
const helmet = require('helmet');
const multer = require('multer');
const upload = multer({ dest:'./uploads' })
const app = express();


app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(helmet());

const indexRouter = require("./route/index")
app.use("/",indexRouter)

app.post("/uploadFile",upload.array('photos',12),(req,res,next)=>{
   console.log("test files =========>", req.files);
   console.log("test field =========>", req.body);

   const newPath = `./uploads/${req.files[0].originalname}`;
   const newPath2 = `./uploads/${req.files[1].originalname}`;

   fs.rename(req.files[0].path,newPath,(err)=>{
      if(err){
         throw err;
      }
   })
   fs.rename(req.files[1].path,newPath2,(err)=>{
      if(err){
         throw err;
      }
   })
   res.json({
      filed:req.body,
      image:req.files
   })
   console.log(req.files);

})


app.get("/",(req,res)=>{
   res.sendFile('index.html')
})

app.listen(3000,()=>{
   console.log('server run successfully');
})