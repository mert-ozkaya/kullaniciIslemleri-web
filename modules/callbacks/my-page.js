module.exports = function(req,res){

  res.render('mypage',{username: req.session.user.username});



}
