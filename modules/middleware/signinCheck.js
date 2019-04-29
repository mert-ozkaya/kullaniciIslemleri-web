module.exports = function(req,res,next){
   if(req.session.user){
      next();
   } else {
      var err = new Error("Giriş yapılmadı");
      console.log(req.session.user);
      next(err);
   }

}
