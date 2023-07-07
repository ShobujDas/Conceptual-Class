const express = require('express');
const router = express.Router();

//middlewares
const {requireSignin,isAdmin} = require('../middleware/auth');
//controllers
const {register,login,secret,updateProfile} = require("../controllers/auth.js")



router.post("/register",register);
router.post("/login",login);

router.get("/auth-check",requireSignin,(req,res)=>{
   res.json({
      ok:true
   })
})
router.get("/admin-check",requireSignin,isAdmin,(req,res)=>{
   res.json({
      ok:true
   }) 
})

// testing
router.get("/secret",requireSignin,isAdmin,secret);
router.put("/updateProfile",requireSignin,updateProfile);



module.exports = router;
