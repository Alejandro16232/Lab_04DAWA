function parse_vars(req){
    var arreglo_parametros = [];
    var parametros = [];
    var valores = [];

    if(req.url.indexOf('?') > 0){
        var url_data = req.url.split('?');
        arreglo_parametros = url_data[1].split('&');

        for(var i = 0; i < arreglo_parametros.length; i++){
            var parametro = arreglo_parametros[i];
            var param_data = parametro.split('=');
            parametros.push(param_data[0]);  // Almacena el nombre del parámetro
            valores.push(param_data[1]);     // Almacena el valor del parámetro
        }
    }

    return {
        parametros: parametros,
        valores: valores
    };
}

module.exports.parse_vars = parse_vars;
module.exports.batman = {
    identidad: 'Bruce Wayne',
    poder: 'Dinero'
}