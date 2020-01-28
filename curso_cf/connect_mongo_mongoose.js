/*
Tipos de datos para definir en un documento a través de Mongoose:

String 
Number
Date
Buffer
Boolean
Mixed
Objectid
Array

*/

/*
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/fotos",{useNewUrlParser: true},function(err){
	if(err){console.log("Error de conexión con MongoDB"); throw err;}
	console.log("Successfully connected to MongoDB"); 
});
var userSchemaJSON ={
 	email:String,
 	password:String
};
var user_schema = new Schema(userSchemaJSON);
var User = mongoose.model("User",user_schema);

var User = mongoose.model("User",new mongoose.Schema({email:String,password:String}));
*/

