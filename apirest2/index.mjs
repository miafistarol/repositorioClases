import express from "express"

import {altaProducto, eliminarProducto, insertaNuevoProducto, modificarProducto, obtenerProductos, obtenerProductosPorId} from "./funciones.mjs"
const PUERTO = 3000
//instanciar un servidor express
const app = express()
app.use(express.json()) //avisar a express que voy a mandar datos json por el cuerpo
app.get('/', (req,res)=>{
    res.send('hola')
})
app.get('/api/v1/productos' , obtenerProductos)

app.get('/api/v1/productos/:id' , obtenerProductosPorId)

//POST /api/v1/productos/ ----> dar de alta un registro
app.post('/api/v1/productos' , altaProducto)

//PUT /api/v1/productos/:id ----> modificar un registro
app.post('/api/v1/productos/:id' , insertaNuevoProducto)

app.put('/api/v1/productos/:id' , modificarProducto)

//DELETE /api/v1/productos/:id ----> eliminar un registro
// app.delete ('/api/v1/productos/:id')

app.delete('/api/v1/productos/:id', eliminarProducto )

app.listen(PUERTO , ()=> {
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`)
})