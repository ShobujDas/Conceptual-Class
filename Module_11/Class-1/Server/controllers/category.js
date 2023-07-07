const Category = require("../model/categorySchema.js");
const slugify = require('slugify'); 


exports.create = async(req,res)=>{
   try {
      const {name} = req.body;
      if(!name.trim()){
         return res.json({error:"Name is required"})
      }
      const existingCategory = await Category.findOne({name});
      if(existingCategory){
         return res.josn({error:"Already Exists"});
      }

      const category = await new Category({name,slug:slugify(name)}).save();
      console.log(category);

      res.json(category);


   } catch (error) {
      console.log(error);
      res.send(404).json(error);
   }

}



exports.update = async (req,res)=>{
   try {
   const {name} = req.body;
   // console.log(req.params);
   const {categoryId} = req.params;

   const category = await Category.findByIdAndUpdate(
      categoryId,
      {
         name,
         slug:slugify(name),
      },
      {new:true}
   );
   res.json(category);
   } catch (error) {
      console.log(error);
      return res.status(400);
   }
   
}




exports.remove = async (req,res)=>{
   try {
      const removed = await Category.findByIdAndRemove(req.params.categoryId);
      res.json(removed);
   } catch (err) {
      console.log(err);
   }
}
  
exports.list = async (req,res)=>{
   try {
      const all = await Category.find({});
      res.json(all);
   } catch (err) {
      console.log(err);
      return res.status(400).json(err.massage)
   }
}
exports.read = async (req,res)=>{
   try {
      // console.log(req.params.slug);
      const category = await Category.findOne({slug : req.params.slug});
      res.json(category);
   } catch (err) {
      console.log(err);
   }
}






