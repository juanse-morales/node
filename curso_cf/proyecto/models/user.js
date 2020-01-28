var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/fotos",{useNewUrlParser: true},function(err){
  if (err) {console.log("Error en la conexión a MongoDB"); throw err}
  console.log("Conexión exitosa a MongoDB");
});

var posibles_valores= ["M","F"];

var user_schema = new Schema({
  name: String,
  last_name: String,
  username: {type: String, required:true, maxlength: [50,"Username muy largo"]},
  password: {type: String, required:true, minlength: [8,"Password muy corto"], validate:{
    validator: function(pass){
      return this.password_confirmation == pass;
    },
    message: "Las contraseñas no son iguales"
  }},
  age: {type: Number, min: [5,"La edad no puede ser menor que 5"], max: [100, "La edad no puede ser mayor que 100"]},
  //email: {type: String, required: true},
  email: {type: String, required: "El correo es obligatorio", match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Digitar un email válido"]},
  date_of_birth: Date,
  //sex: {type: String, enum:posibles_valores}
  sex: {type: String, enum:{values: posibles_valores, message: "Opción no válida"}}
});

user_schema.virtual("password_confirmation").get(function(){
  return this.p_c;
}).set(function(password){
  this.p_c = password;
});

var User = mongoose.model("User",user_schema);

module.exports.User = User;

/*
user_schema.virtual("full_name").get(function(){
  return this.name+" "+this.last_name;
}).set(function(full_name){
  var words = full_name.split(" ");
  this.name = words[0];
  this.last_name = words[1];
});*/