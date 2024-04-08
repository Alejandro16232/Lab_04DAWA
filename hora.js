function obtenerHoraActual() {
    return new Date();
}

function obtenerHoraFormato24() {
    const fecha = obtenerHoraActual();
    return fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds();
}

function obtenerHoraFormato12() {
    const fecha = obtenerHoraActual();
    let horas = fecha.getHours();
    let amOpm = horas >= 12 ? 'PM' : 'AM';
    horas = horas % 12;
    horas = horas ? horas : 12;
    return horas + ':' + fecha.getMinutes() + ':' + fecha.getSeconds() + ' ' + amOpm;
}

module.exports = {
    obtenerHoraFormato24: obtenerHoraFormato24,
    obtenerHoraFormato12: obtenerHoraFormato12
};
