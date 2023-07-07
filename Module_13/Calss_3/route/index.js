const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const fs = require('fs');


router.get("/",(req,res,next)=>{
   res.render('index',{title:"Express"});
});


router.post("/formsub",upload.single('meme'),(req,res)=>{

   const newPath = `public/uploads/${req.file.originalname}`;
   fs.rename(req.file.path,newPath,(err)=>{
      if(err) throw err ;
       
      res.json({
         massage:"file uploaded",
         info:req.body
      })
   })

});


// router.post("/formsubarray",upload.array('meme'),(req,res)=>{

//    const newPath = `public/uploads/${req.files[0].originalname}`;
//    const newPath2 = `public/uploads/${req.files[1].originalname}`;

//    fs.rename(req.files[0].path,newPath,(err)=>{
//       if(err) throw err ;
//    })

//    fs.rename(req.files[1].path,newPath2,(err)=>{
//       if(err) throw err ;      
//    })
   
//    res.json({
//       field:req.body,
//       image:req.files
//    })
// });



router.post('/formsubarray', upload.fields(
   [{ name: 'avator', maxCount: 1 },
   { name: 'gallery', maxCount: 8 }]),
   function (req, res, next) {
       const newPath = `./uploads/${req.files['avator'][0].originalname}`
       const newPath2 = `./uploads/${req.files['gallery'][0].originalname}`
       const newPath3 = `./uploads/${req.files['gallery'][1].originalname}`
       fs.rename(req.files['avator'][0].path, newPath, (err) => {
           if (err) {
               throw err;
           }
       })
       fs.rename(req.files['gallery'][0].path, newPath2, (err) => {
           if (err) {
               throw err;
           }
       })
       fs.rename(req.files['gallery'][1].path, newPath3, (err) => {
           if (err) {
               throw err;
           }
       })
       res.json({
           field: req.body,
           image: req.files
       });
       console.log(req.files);
       console.log(req.body)
   });




module.exports = router;
































