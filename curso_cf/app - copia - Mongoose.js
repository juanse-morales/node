var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();
//var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/fotos",{useNewUrlParser: true},function(err){
	if(err){console.log("Error de conexión con MongoDB"); throw err;}
	console.log("Successfully connected to MongoDB"); 
});

/*var userSchemaJSON ={
 	email:String,
 	password:String
};
var user_schema = new Schema(userSchemaJSON);
var User = mongoose.model("User",user_schema);
*/
var User = mongoose.model("User",new mongoose.Schema({email:String,password:String}));

app.use("/estatico",express.static('public'));
//app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine","jade");

app.get("/",function(req,res){
	res.render("index");
});

app.get("/login",function(req,res){
	User.find(function(err,doc){
		console.log(doc);
		res.render("login");
	});
});

app.post("/users",function(req,res){
	/*console.log("Email: "+req.body.email);
	console.log("Clave: "+req.body.password);*/

	var user = new User({email: req.body.email, password: req.body.password});
	user.save(function(){
		res.send("Se guardó el Formulario");
	});
	
});

app.listen(8080);