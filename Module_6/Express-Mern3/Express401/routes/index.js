const express = require('express');
let router= express.Router();
const movies = require("../data/movies")
// console.log(movies);

router.get("/",(req,res,next)=>{
   res.json({
      "title":"Express js"
   })
})

router.get("/most_popular",(req,res,next)=>{
   let page = req. query.page; 
   // console.log(page);
   if(page == undefined){
      page = 1;
   }

   let results = movies.filter(movie =>{
      return movie.most_popular== false;
      // return movie.most_popular = ture

   });
   const indexToStart = (page -1) * 6;

   results = results.slice(indexToStart, indexToStart + 6)

   res.json({
      page,
      results
   })

});










module.exports = router;