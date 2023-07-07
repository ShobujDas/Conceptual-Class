const express = require('express');
const helmet = require('helmet')
const app = express();

//module import
const test = require("./router/index")
//application label
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(helmet());


app.use("/",)





app.listen(8000,()=>{
   console.log("surver run successfully"); 
})

