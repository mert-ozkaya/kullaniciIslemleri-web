module.exports = function(req,res){
    res.render('protected-page', {username: req.session.user.username})

}
