const express = require('express');
const router = express.Router();


router.get("/",(req,res,next)=>{
   res.json({
      msg:"Product"
   })
});

router.get("/test",(req,res,next)=>{
   res.json({
      msg:"Product test"
   })
});









module.exports = router;