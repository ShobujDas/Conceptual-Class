const express = require('express');
const router = express.Router();
const {requireSignin,isAdmin} = require("../middleware/auth");

const {create,update,remove,list,read} = require('../controllers/category');
 // update,
   // remove,
   // list,
   // read,
   // producsByCategory
router.post("/category",requireSignin,isAdmin,create);
router.put("/category/:categoryId",requireSignin,isAdmin,update);
router.delete("/category/:categoryId",requireSignin,isAdmin,remove);
router.get("/categories",list);
router.get("/category/:slug",read);
// router.get("/category",productsByCategory);


module.exports = router;
