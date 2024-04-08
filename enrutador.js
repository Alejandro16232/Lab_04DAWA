const fs = require('fs');
const path = require('path');

function enrutar(url) {
    let pagina;

    switch(url) {
        case '/inicio':
            pagina = path.join(__dirname, 'inicio.html');
            break;
        case '/galeria':
            pagina = path.join(__dirname, 'galeria.html');
            break;
        default:
            pagina = path.join(__dirname, '404.html');
            break;
    }

    return fs.readFileSync(pagina, 'utf-8');
}

module.exports = enrutar;
