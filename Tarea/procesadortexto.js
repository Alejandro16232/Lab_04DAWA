function dividirPalabra(texto) {
    return texto.split(' ');
}

function extraerCadena(texto, inicio, fin) {
    return texto.substring(inicio, fin);
}

function eliminarEspacios(texto) {
    return texto.replace(/\s/g, '');
}

function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

function convertirMinusculas(texto) {
    return texto.toLowerCase();
}

function convertirMayusculas(texto) {
    return texto.toUpperCase();
}

function contarCaracteres(texto) {
    return texto.length;
}

module.exports = {
    dividirPalabra: dividirPalabra,
    extraerCadena: extraerCadena,
    eliminarEspacios: eliminarEspacios,
    capitalizar: capitalizar,
    convertirMinusculas: convertirMinusculas,
    convertirMayusculas: convertirMayusculas,
    contarCaracteres: contarCaracteres
};
