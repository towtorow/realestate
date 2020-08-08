var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/realestate', { useNewUrlParser: true }, function(){
  console.log('mongodb connected');
});
module.exports = mongoose;
