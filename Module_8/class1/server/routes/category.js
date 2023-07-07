const express = require('express');
const router = express.Router();

router.get("/login", (req,res)=>{
   res.json({
      "name":"shobuj"
   })
});

module.exports = router;