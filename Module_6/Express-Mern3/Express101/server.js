const path = require('path');
const express = require("express");
const app = express();
const port = 8000;
app.use(express.static('public'));

// app.all("*",(req,res)=>{
//    res.send("<h2>Hello Express js</h2>")
// });

// app.all("/",(req,res)=>{
//    res.send("<h2>Hello Express js</h2>")
// });

app.get("/",(req,res)=>{
   console.log(path.join(__dirname+"/node.html"));
   res.sendFile(path.join(__dirname+"/node.html"));
});

// app.get("/",(req,res)=>{
//    res.json({
//       "name":"Shobuj Das",
//       "City":"Comilla"
//    });
// });

// app.post("/",(req,res)=>{
//    res.send("<h2>Hello Post Page</h2>")
// });
// app.put("/",(req,res)=>{
//    res.send("<h2>Hello Put Page</h2>")
// });
// app.patch("/",(req,res)=>{
//    res.send("<h2>Hello Patch Page</h2>")
// });
// app.delete("/",(req,res)=>{
//    res.send("<h2>Hello Delete Page</h2>")
// });


app.listen(8000,()=>{
   console.log(`Server is running at ${port}`);
});