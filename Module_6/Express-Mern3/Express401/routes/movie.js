const express = require('express');
const router = express.Router();
const movieDetails = require("../data/movieDetails");


const requiredJSON = (req,res,next)=>{
   if(req.is("application/json")){
      res.josn({msg:"content type must be apllication/json"})
   }else{
      next();
   }
}

router.get("/top_rated",(req,res,next)=>{
   let page =  req.query.page;
   if(page == undefined){
      page = 1;
   }
   let results = movieDetails.sort((a,b)=>{
      return b.vote_average - a.vote_average;
   });
   const indexToStart = (page -1)*2;
   results = results.slice(indexToStart , indexToStart+2);
   res.json({
      results
   })

});

router.post("/:movieId",requiredJSON,(req,res,next)=>{
   const movieId = req.params.movieId;
   // console.log(movieId);
   const userRating = req.body.value;
   if(userRating < 0.5 || userRating >10){
      res.json({
         msg:"Rating must be between 0.5 and 10"
      })
   }else{
      res.json({
         msg:"Thank you for submitting your rating",
         status:2000
      })
   }
})

router.delete("/:movieId/rating",requiredJSON,(req,res,next)=>{
   const movieId = req.params.movieId;
   res.json({
      msg:"Rating Deleted"
   })
})


module.exports = router;






