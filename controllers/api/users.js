var router = require('express').Router();
var User = require('../../models/user');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jwt-simple');
var config = require('../../config');
//입력된 이메일에 맞는 유저 정보 반환
router.get('/api/users',function(req, res, next){
  if(!req.headers['x-auth']){
    return res.send(401);
  }
  var auth = jwt.decode(req.headers['x-auth'], config.secret);
  User.findOne({email : auth.email}, function(err, user){
    if(err){return next(err);}
    res.json(user);
  });
});
//회원가입
 router.post('/api/users',function(req, res, next){
   bcrypt.hash(req.body.password, null, null, function(err, hash) {
    if(err){return next(err);}
    var user = new User({
      email : req.body.email,
      password : hash
    });
    user.save(function(err){
      if(err){return next(err);}
      res.send('201');
    });
  });
 });

module.exports = router;
