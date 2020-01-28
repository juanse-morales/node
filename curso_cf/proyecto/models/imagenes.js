var mongoose = require("mongoose"),
Schema = mongoose.Schema;

var img_schema = new Schema({
  _id: {type:String},
  title: {type:String, required:true}
});

var Imagen = mongoose.model("Imagen",img_schema);

module.exports = Imagen;