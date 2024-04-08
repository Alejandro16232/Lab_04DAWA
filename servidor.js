const http = require('http');
const url = require('url');
const hora = require('./hora');
const calcularDiasFaltantes = require('./diasFaltantes');
const enrutar = require('./enrutador');

http.createServer(function(req, res) {
    const path = url.parse(req.url, true).pathname;

    if (path === '/hora24') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hora actual (Formato 24h): ' + hora.obtenerHoraFormato24());
    } else if (path === '/hora12') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hora actual (Formato 12h): ' + hora.obtenerHoraFormato12());
    } else if (path.startsWith('/diasfaltantes')) {
        const fecha = url.parse(req.url, true).query.fecha;
        const dias = calcularDiasFaltantes(fecha);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Los dias faltantes para ' + fecha + ' son ' + dias + ' dias');
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(enrutar(path));
    }
    
}).listen(8080, function() {
    console.log('Servidor corriendo en http://localhost:8080/');
});
