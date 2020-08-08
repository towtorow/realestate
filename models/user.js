var db = require('../db');

User = db.model('User', {
  email : {type : String},
  password : {type : String}
});

module.exports = User;
