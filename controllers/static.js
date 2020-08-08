var express = require('express');
var router = require('express').Router();
var path = require('path');

router.get('/',function(req, res){
  res.sendFile(path.join(__dirname, '../layouts', 'app.html'));
});

router.use('/private/templates',express.static(__dirname + '/../templates'));

router.use('/private/assets', express.static(__dirname + '/../assets'));

module.exports = router;
