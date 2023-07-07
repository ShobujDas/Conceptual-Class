const express = require('express');
const app = express();

app.use(express.static("public"));


// function validateUser(req,res,next){
//    res.locals.validate = true;
//    console.log("1 "+"Validation Run");
//    next();
// }

// app.use('/',validateUser )


// app.use("/admin",validateUser);


// app.get('/',(req,res,next)=>{
//    res.send("<h2>Main Page</h2>");
//    console.log("2 "+res.locals.validate);
// });



// app.get('/admin',(req,res,next)=>{
//    res.send("<h2>Admin Page</h2>");
//    console.log(res.locals.validate);
// });



//Example 3


app.get("/",(req,res)=>{
   // res.cookie("Conuntry","Bangladesh"); 
   // res.send("<h2>Country Page</h2>");
   res.redirect("/welcome")

})

app.get("/welcome",(req,res)=>{
   res.json({
      "city":"Sylhet",
      "class":5
   })
})














app.listen(8000,()=>{
   console.log("The Server Is Running Successfully");
}) 