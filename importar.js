var http = require('http'),
    fs = require('fs'),
    parser = require('./parser_var.js'),
    p = parser.parse_vars;
    datos = parser.batman

http.createServer(function(req, res){
    fs.readFile('./form.html', function(err, html){
        var html_string = html.toString();
        var respuesta = p(req),
            parametros = respuesta['parametros'],
            valores = respuesta['valores'];

        for(var i = 0; i < parametros.length; i++){
            html_string = html_string.replace('{' + parametros[i] + '}', valores[i]);
        }
        html_string = html_string.replace('{identidad}',datos['identidad']);
        html_string = html_string.replace('{poder}',datos['poder']);

        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(html_string);
        res.end();
    });
}).listen(8080, function() {
    console.log('Servidor corriendo en http://localhost:8080/');
});
