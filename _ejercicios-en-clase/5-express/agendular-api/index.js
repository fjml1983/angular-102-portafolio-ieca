const express = require('express')
const routerApi = require('./routes')

const app = express()
const PORT = 3000


app.use(express.json())


// Rutas del Aplicativo (API)
app.get('/', (req, res) => {
    res.send('Server en express')
 })
 
 routerApi(app);

 
/* EJEMPLOS DE DIFERENTES TIPOS DE PARAMS*/

 // Query-Params
 app.get('/query', (req, res) => {
    const queryParams = req.query
    res.json({ data: queryParams })
 })
 
 
 // Path-Params
 app.get('/path/:id', (req, res) => {
    const idParam = req.params.id
    res.json({ data: idParam })
 })
 
 
 // Body-Param (ojo, se invoca con post)
 app.post('/body', (req, res) => {
    const bodyParam = req.body
    res.json({ data: bodyParam })
 })


//Iniciar el server
app.listen(PORT, () => {
   console.log(`Server corriendo en ${PORT}`)
})
