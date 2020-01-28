var express = require("express"),
bodyParser = require("body-parser"),
User = require("./models/user").User,
session = require('express-session'),
router_app = require('./routes_app'),
session_middlware = require('./middlewares/session');

var app = express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({ // se le pasa una serie de parametros que define el comportamiento de las sesiones
  secret: "123byuhbsdah12ub", // permite generar identificadores únicos para las sesiones
  resave: false, // indica si la sesión se tiene que volver a guardar en caso de que haya una modificacion, especifica que la sesion se vuelve a guardar aunque no haya sido modificada
  saveUninitialized: false // Indica que la sesion se debe guardar aun si no ha sido inicializada. Una sesion no inicializada es aquella que es nueva pero no modificada.
}));

app.set("view engine","jade");

app.get("/",function(req,res){
  console.log(req.session.user_id);
  res.render("index");
});

app.get("/signup",function(req,res){
  User.find(function(err,doc){
    console.log(doc);
    res.render("signup");
  });
});

app.get("/login",function(req,res){
  res.render("login");
});

app.post('/sessions',function(req,res){
  /* User.find({query},"fields",function(err,docs){

  }) // devuelve una coleccion */
  
  /* User.find({username : req.body.username, password : req.body.password},function(err,docs){
    console.log(docs);
    res.send("Hola mundo");
  }) */

  User.findOne({username: req.body.username, password: req.body.password},function(err,user){
    req.session.user_id = user._id;
    res.redirect('/app');
    
  });
  
  /*
  User.findById("5cbb8119c7cf542e2861e7e6",function(err,doc){
    console.log(doc);
  }); */
});

app.post("/users",function(req,res){

  var user = new User({email: req.body.email, username: req.body.username, password: req.body.password,
        password_confirmation: req.body.password_confirmation});

  /* Forma asincrona: recibe un callback
  user.save(function(err,user,numero){
    if(err){
      console.log(String(err));
    }
    res.send("Se guardó el Formulario");
  });*/

  // Promise: en lugar de recibir un callback retorna una promesa
  user.save().then(function(user){
    res.send("Guardado success")
  },function(err){
    if (err) {
      console.log(String(err));
      res.send("Ocurrió un error")
    }
  })
  
});

app.use('/app',session_middlware);
app.use("/app",router_app);

app.listen(8080, function(){
  console.log("Server start on port 8080");
});