const {readdirSync} = require('fs');
const path = require('path');

const express = require('express');
const app = express();
const helmet = require('helmet');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require("dotenv").config();

// const auth = require('./routes/auth');
// const category = require('./routes/category');
// const products = require('./routes/products'); 


// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());



// routes middleware
// app.use("/",auth);
// app.use("/",category);
// app.use("/",products);
readdirSync("./routes").map(r => app.use("/api/v1", require(`./routes/${r}`))) 



const port = process.env.PORT || 8000;
//connect to DB and start server
mongoose
.connect(process.env.DATABASE)
.then(()=>{
   app.listen(port,()=>{
      console.log(`Server run on port ${port}`);
   })
})
.catch((err)=> console.log(err));




   // app.listen(port,()=>{
   //    console.log(`Server run on port ${port}`);
   // })




