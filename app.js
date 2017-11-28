// const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
// const Constants = require('./settings/constants');
const app = express();

const api_v1 = require('./controllers/api');
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));

api_v1.initialize(app);


app.listen(app.get('port'), function(){
  console.log('Server is listening on port ' + app.get('port'));
});
