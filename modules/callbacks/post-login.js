const bcrypt = require('bcrypt');
const Role = require('../middleware/role');

module.exports = function(req,res){

bcrypt.hash(req.body.password, 10, function (err, hash) {
     if (err) {
       return next(err);
     }
     req.body.password = hash;


  let query = {username: req.body.username, password: req.body.password}

  let collection = req.app.get('DB').collection('User');
  let p = collection.findOne(query,function(err,result) {
        console.log("girdi");
        req.session.user = query;
        res.redirect('/protected-page');
  })


})



}
