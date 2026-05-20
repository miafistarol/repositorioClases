// import express, { Router } from  "express"
import {Router} from "express"
import * as controlador from "./controlador.productos.mjs"
// const rutasProductos = new express.Router()

//Router es como una rama de express
const rutasProductos = new Router()


rutasProductos.get ("/api/v1/productos" , (controlador.obtenerTodos))
rutasProductos.get("/api/v1/productos/:id" ,(controlador.obtenerUno))

export {rutasProductos}