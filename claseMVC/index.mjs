import express from "express"
// import productos from "./modulos/productos/modeloproductos.mjs"
import * as controlador from "./modulos/productos/controlador.productos.mjs"

const PUERTO = 3000
const app = express()
app.use(express.json())


app.listen(PUERTO , ()=> {
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`)
})

// app.get ("/api/v1/productos" , (req, res) => {
//     res.json(productos) 
// })

app.get ("/api/v1/productos" , (controlador.obtenerTodos))

app.get("/api/v1/productos/:id" ,(controlador.obtenerUno) )

//npm i-D nodemon