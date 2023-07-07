const express = require('express');
const router = express.Router();

const {top_rated, movieId,remove_route} = require('../contorllars/movie');

const {requiredJSON }=require("../middlewares/movie") 

router.get("/top_rated",top_rated);

router.post("/:movieId",requiredJSON,movieId)

router.delete("/:movieId/rating",requiredJSON,remove_route);


module.exports = router;






