var express = require('express');
var router = require('express').Router();
var User = require('../../models/user');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jwt-simple');
var config = require('../../config');
//입력된 이메일, 비밀번호와 db에 저장된 아메일, 비밀번호와 비교
router.post('/api/sessions', function(req, res, next){
  User.findOne({email : req.body.email})
  .select('password').select('email')
  .exec(function(err, user){
    if(err){
      return next(err);
    }
    if(!user){
      return res.send('401');
    }
    bcrypt.compare(req.body.password, user.password, function(err, valid){
      if(err){return next(err);}
      if(!valid){return res.send('401');}
      var token = jwt.encode({email : user.email}, config.secret);
      res.send(token);
    });
  });
});

module.exports = router;
