const express = require('express');
const router = express.Router();

//controllers
const {register} = require("../controllers/auth.js")



router.post("/register",register);
// router.post("/login",login);

module.exports = router;
