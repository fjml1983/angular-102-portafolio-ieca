const http = require('http');
const PORT = 3000;

const server = http.createServer(
/*  //Servidor básico de texto
    (req, res) => {
        res.writeHead(200, 
            {"Content-Type": "text/plain"}
        );
        res.end("Mi servidor NodeJS");
    }
*/
    async (req, res) => {
        res.writeHead(200, 
            {"Content-Type": "application/json"}
        );
        res.end("Mi servidor NodeJS");
    }

);

server.listen(PORT, ()=>{
    console.log(`Servidor iniciado en el puerto: ${PORT}`);
});