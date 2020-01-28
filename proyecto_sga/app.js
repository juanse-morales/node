const express = require("express"),
path = require("path"),
bodyParser = require("body-parser"),
cons = require("consolidate"),
dust = require("dustjs-helpers"),

//routesCrud = require('./routes/crud'),
routesWeb = require('./routes/web'),
app = express();

//Assign Dust Engine to .dust Files
app.engine('dust',cons.dust);

//Set Default Ext .dust
app.set('view engine','dust');
app.set('views',__dirname + '/views');

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// MiddleWare Body-Parser: for manage the content of req-res
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Set routes of pages
app.use(routesWeb);

// Set routes CRUD
//app.use('/crud', routesCrud);

// Star server
const port = 8080;
app.listen(port, function(){
  console.log(`Server Started On Port ${port} in %s mode`, app.get('env'));
});