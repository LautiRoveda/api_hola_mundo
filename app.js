const http = require('http'); 

const hostname = '127.0.0.1'; //Nombre de dominio
const port = 3000;// Puerto

//Va a crear un servidor que va a responder un 200 y de contenido Hello World!!!
const server = http.createServer((req, res) => {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/plain');
 res.end('Hello World!!!');
});

//El servidor empieza a escuchar las peticiones HTTP para generarlas usamos Postman
server.listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});