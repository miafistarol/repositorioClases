//el controlador vincula el modelo con la vista
 import * as modelo  from './modeloproductos.mjs'
import * as vista from "./vista.productos.mjs"

 //modelo es un espacio de nombres

 export function obtenerTodos(req, res) {
    const productosDatos = modelo.obtenerTodos() // <------ me trae todo
    const vistaProductos = vista.obtenerTodos(productosDatos) // <---- arreglo
    res.json(vistaProductos)
}

export function obtenerUno(req, res) {
    const idProducto = Number(req.params.id)
    const productosDatos = modelo.obtenerUno(idProducto) // retorna un arreglo

    if (productosDatos.length > 0) {
        res.json(productosDatos)
    } else {
        res.status(404).json ({mensaje: `Producto con id ${idProducto} no esta`})
    }
}