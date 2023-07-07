const fs = require('fs');
const path = require('path');

const express = require('express');
const helmet = require('helmet');
const multer = require('multer');
// const upload = multer({ dest:'./uploads' })
const app = express();


app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(helmet());


const stroge = multer.diskStorage({
   destination:(req,file,callback)=>{
      callback(null,'./uploads')
   },
   filename:(req,file,callback)=>{
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random * 1E9);
      callback(null,`${uniqueSuffix}${file.originalname}`);
   }
});

const upload = multer({storage:stroge}).fields([{name:'avator',maxCount:1},{name:'gallery',maxCount:8}])



app.post("/multiplefile",(req,res)=>{
   upload(req,res,(err)=>{
      if(error){
         res.send("File Upload Fali")
      }else{
         res.send("File Upload Success")
      }
   })
})


app.listen(8000,()=>{
   console.log('server run successfully');
})