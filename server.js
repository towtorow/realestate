var express = require('express');
var bodyParser = require('body-parser');
var Item = require('./models/item');

var app = express();
app.use(bodyParser.json());
app.use(require('./controllers/api/list'));

app.use(require('./controllers/static'));

app.use(require('./controllers/api/sessions'));
app.use(require('./controllers/api/users'));

app.listen(3000, function(){
  console.log('Server listening on', 3000);
});
