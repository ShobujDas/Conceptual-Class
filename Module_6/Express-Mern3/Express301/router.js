const express = require('express');
const router = express.Router();


router.get("/",(req,res,next)=>{
   res.json({
      msg:"Home Page"
   })
});


router.get("/test",(req,res,next)=>{
   res.json({
      msg:"Router Works for test"
   })
});






module.exports = router;