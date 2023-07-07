exports.requiredJSON = (req,res,next)=>{
   if(req.is("application/json")){
      res.josn({msg:"content type must be apllication/json"})
   }else{
      next();
   }
};
