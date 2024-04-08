function obtenerParametrosURL(url) {
    const urlObj = new URL(url, 'http://localhost:8080');
    const params = urlObj.searchParams;
    const path = urlObj.pathname;

    if (path === '/procesarTexto') {
        return {
            texto: params.get('texto'),
            accion: params.get('accion'),
            inicio: params.get('inicio'),
            fin: params.get('fin')
        };
    } else if (path === '/calcular') {
        return {
            num1: params.get('num1'),
            num2: params.get('num2'),
            operacion: params.get('operacion')
        };
    }

    return {};
}

module.exports = {
    obtenerParametrosURL: obtenerParametrosURL
};
