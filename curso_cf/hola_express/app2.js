var express = require("express");

var app = express();

app.set("view engine","jade");

app.get("/",function(req,res){
	res.render("index",{hola: "Hola Mónica ospino",foot:"Acerca de Mónica"});
});

app.listen(8080);