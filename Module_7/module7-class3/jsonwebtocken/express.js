const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();



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
app.get('/protected',verifyToken,(req,res)=>{
   //in a real application , you would perform auhentication here 
   const user = {id:1,username:'john.doe',name:"shbouj das"};
    
   //Genarate a JWT  token with the user payload
   const token = jwt.sign(user, secretkey,{expiresIn:'1h'});
   
   res.json({token})
});





app.listen(8000,()=>{
   console.log("Sarver listen on port 8000");
})