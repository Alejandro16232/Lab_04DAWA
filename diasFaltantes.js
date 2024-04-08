function calcularDiasFaltantes(fecha) {
    const fechaActual = new Date();
    const fechaIngresada = new Date(fecha);
    const diferencia = fechaIngresada - fechaActual;
    const diasFaltantes = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

    return diasFaltantes;
}

module.exports = calcularDiasFaltantes;
