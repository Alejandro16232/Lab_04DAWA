const http = require('http');
const url = require('url');
const operacionesBasicas = require('./calculadora');
const manejadorFormularios = require('./manejadorFormularios');
const procesadorTexto = require('./procesadortexto');


http.createServer(function(req, res) {
    const path = url.parse(req.url, true).pathname;

    if (path === '/calcular') {
        const { num1, num2, operacion } = manejadorFormularios.obtenerParametrosURL(req.url);
        let resultado;

        switch(operacion) {
            case 'sumar':
                resultado = operacionesBasicas.sumar(parseInt(num1), parseInt(num2));
                break;
            case 'restar':
                resultado = operacionesBasicas.restar(parseInt(num1), parseInt(num2));
                break;
            case 'multiplicar':
                resultado = operacionesBasicas.multiplicar(parseInt(num1), parseInt(num2));
                break;
            case 'dividir':
                resultado = operacionesBasicas.dividir(parseInt(num1), parseInt(num2));
                break;
            default:
                resultado = 'Operación no válida';
        }

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`Resultado: ${resultado}`);
    } else if (path === '/procesarTexto') {
        const { texto, accion, inicio, fin } = manejadorFormularios.obtenerParametrosURL(req.url);
        let resultado;

        switch(accion) {
            case 'dividirPalabra':
                resultado = procesadorTexto.dividirPalabra(texto).join('| ');
                break;
            case 'extraerCadena':
                resultado = procesadorTexto.extraerCadena(texto, parseInt(inicio), parseInt(fin));
                break;
            case 'eliminarEspacios':
                resultado = procesadorTexto.eliminarEspacios(texto);
                break;
            case 'capitalizar':
                resultado = procesadorTexto.capitalizar(texto);
                break;
            case 'convertirMinusculas':
                resultado = procesadorTexto.convertirMinusculas(texto);
                break;
            case 'convertirMayusculas':
                resultado = procesadorTexto.convertirMayusculas(texto);
                break;
            case 'contarCaracteres':
                resultado = procesadorTexto.contarCaracteres(texto);
                break;
            default:
                resultado = 'Accion no valida';
        }

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`Resultado: ${resultado}`);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Página no encontrada');
    }
    
}).listen(8080, function() {
    console.log('Servidor corriendo en http://localhost:8080/');
});
