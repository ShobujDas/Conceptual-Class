const express = require('express');
const helmet = require('helmet');
const jsonwebtoken = require('helmet');
const jwt = require('jsonwebtoken');
const app = express();

//aplication lavel middleware 
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(helmet());

const secretkey = 'your-secret-key';

//Middleware to verify jwt token
const verifyToken = (req,res,next)=>{
   const token = req.headers['authorization'];

   if(!token){
      return res.status(500).json({massage:"Failed to authorization token."});
   }

   jwt.verify(token,secretkey, (err,decoded)=>{
      if(err){
         return res.status(401).Json({massage:"Invalid token"})
      }

      //Save the decoded token pauload in the request for further use 
      req.user = decoded   ;
      next();
   }); 
};

//End point to generate a JWT token
app.get('/login',(req,res)=>{
   //in a real application , you would perform auhentication here 
   const user = {id:1,username:'john.doe',name:"shbouj das"};
    
   //Genarate a JWT  token with the user payload
   const token = jwt.sign(user, secretkey,{expiresIn:'1h'});
   
   res.json({token})
});



//Protected endpoint
app.get('/protected',verifyToken,(req,res)=>{
   res.json({
      massage:"Protected endpoint reached", user: req.user
   })
})











app.listen(8000,()=>{
   console.log("sarver run successfully");
})