function parse(req){
	var arreglo_parametros =[], parametros ={};
	if (req.url.indexOf("?")>0) {
		var url_data = req.url.split("?");
		arreglo_parametros = url_data[1].split("&");
	}

	for (var i = arreglo_parametros.length - 1; i >= 0; i--) {
		var param_data = arreglo_parametros[i].split("=");
		parametros[param_data[0]]=param_data[1];
	}

	return parametros;
}

module.exports.parse = parse;