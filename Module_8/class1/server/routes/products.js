const express = require('express');
const router = express.Router();

router.get("/products", (req,res)=>{
   res.json({
      "name":"Das"
   })
});

module.exports = router;