const {readdirSync} = require("fs");
const path = require("path")

const express = require('express');
const helmet = require('helmet');
const jsonwebtoken = require('jsonwebtoken');
const app = express();
require('dotenv').config();

//core moudule import file
// const indexRouter = require('./routes/index');
// const movieRouter = require('./routes/movie');
// const searchRouter = require('./routes/search'); 

const { apikey } = require('./middlewares/index');


const port = process.env.PORT || 8000;
// console.log(port);

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(helmet());



app.use(apikey)



// app.use("/",indexRouter);
// app.use("/movie",movieRouter);
// app.use("/search",searchRouter);
readdirSync("./routes").map(r => app.use("/api/v1",require(`./routes/${r}`)))















app.listen(8000,()=>{
   console.log("Sarver listen on port 8000");
})