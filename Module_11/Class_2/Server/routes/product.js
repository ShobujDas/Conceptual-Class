
const express = require("express");
const formidable = require("express-formidable");

const router = express.Router();


const { requireSignin, isAdmin } = require("../middleware/auth.js");
const { create , list ,read,photo,remove} = require("../controllers/product.js");






router.post("/product",requireSignin,isAdmin,formidable(),create);
router.get("/products",list);
router.get("/products/:slug",read);
router.get("/products/photo/:productId", photo);
router.delete("/products/:productId", requireSignin,isAdmin,remove);

module.exports = router;





