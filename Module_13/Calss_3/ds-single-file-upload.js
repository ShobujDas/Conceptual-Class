const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();
const helmet = require('helmet');
const multer = require('multer');



app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(helmet());


const storage = multer.diskStorage({
   destination: function (req, file, callback) {
     callback(null, './uploads');
   },
   filename: function (req, file, callback) {
     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
     callback(null, `${uniqueSuffix}${file.originalname}`);
   }
 })

const upload = multer({storage:storage}).single('myfile');

app.post("/",(req,res)=>{
   upload(req,res,(error)=>{
      if(error){
         // res.send("File Upload Fail");
         console.log(err);
      }
      else{
         res.send("File Upload Success")
      }
   })
})

app.listen(3000,()=>{
   console.log('surver run successfully ');
})