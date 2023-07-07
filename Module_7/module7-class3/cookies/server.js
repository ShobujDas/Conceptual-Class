const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const app = express();


//Applictoin lavle middleware
app.use(express.static('public'));
app.use(express.json())
app.use(helmet())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());






app.get('/set-cookie',(req,res)=>{
   res.cookie('mycookie','hello world',{maxAge:900000,httpOnly:true});
   res.cookie('test','ostad',{maxAge:900000,httpOnly:true});
   res.send('cookie set!');
})

app.get('/get-cookie',(req,res)=>{
   const myCookieValue = req.cookies.mycookie;
   const testValue = req.cookies.test;
   res.send(`Cookie value:${myCookieValue} and test value: ${testValue}`)
});






app.listen(8000,()=>{
   console.log("sarver run successfully");
})