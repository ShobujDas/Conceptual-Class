const fs = require('fs');
const path = require('path');

const express = require('express');
const helmet = require('helmet');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const app = express();

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(helmet());

app.post("/uploadFile",upload.single('myFile'),(req,res,next)=>{

})

app.listen(3000,()=>{
   console.log('server run successfully');
})