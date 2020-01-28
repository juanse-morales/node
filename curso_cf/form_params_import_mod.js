var http = require("http"),
	fs = require("fs"),
	parser = require("./params_parser.js"),
	render = require("./render_view.js");

http.createServer(function(req,res){
	if(req.url.indexOf("favicon.ico")>0){return;}

	fs.readFile("./index.html", function(err,html){
		var parametros = parser.parse(req);
		parametros["tiempo"]="Buenas tardes";
		parametros["nombre"]="Sara";

		res.writeHead(200,{"Content-Type":"text/html"});
		res.write(render.render(html,parametros));
		res.end();
	});

}).listen(8080);