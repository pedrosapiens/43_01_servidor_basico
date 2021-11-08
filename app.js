const http = require('http');
const port = 3000;

let equipos = [
    {nombre: 'Atlético de Madrid', localidad: 'Madrid'},
    {nombre: 'F.C. Barcelona', localidad: 'Barcelona'},
    {nombre: 'Real Madrid', localidad: 'Madrid'},
]

http.createServer((req, res) => {
    switch(req.url) {
        case '/':
            res.writeHead(200, {'Content-Type':'text/plain'});
            res.write('Hola Mundo desde el Servidor');
            break;
        case '/contacto':
            res.writeHead(200, {'Content-Type':'text/plain'});
            res.write('Contacto');
            break;
        case '/equipos':
            res.writeHead(200, {'Content-Type':'application/json'});
            res.write(JSON.stringify(equipos));
            break;
        default:
            res.writeHead(404, {'Content-Type':'text/plain'});
            res.write('Página no encontrada');
            break;
    }
    
    res.end();
}).listen(port, () => {
    console.log('Servidor escuchando en http://localhost:' + port);
})