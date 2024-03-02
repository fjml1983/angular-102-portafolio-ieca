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
    (req, res) => {
        res.writeHead(200, 
            {"Content-Type": "application/json"}
        );
        
        //Traer datos de algun lado (BD, archivo, API, etc.)
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            console.log("1.Se tuvo respuesta del server")
            return response.json()
        })
        .then(json => {
            console.log("2.Se obtuvo el json")
            res.end(JSON.stringify(json))
        });
    }

);

server.listen(PORT, ()=>{
    console.log(`Servidor iniciado en el puerto: ${PORT}`);
});