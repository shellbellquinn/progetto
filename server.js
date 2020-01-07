const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const db = require('./models');
const path = require('path');

const app = express();



let PORT = process.env.PORT||3000;
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
require('./routes/board-api-routes.js')(app);
require('./routes/list-api-routes.js')(app);
require('./routes/task-api-routes.js')(app);
require('./routes/html-routes.js')(app);

db.sequelize.sync({force: false}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});