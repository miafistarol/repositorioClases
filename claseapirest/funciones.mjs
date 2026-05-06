import { productos } from "./productos.mjs";

export function obtenerProductos(req, res ){
    res.json(productos)
}

export function obtenerProductosPorId(req, res){

    const id_producto = Number(req.params.id) 
    
    const productosFiltrados = productos.filter((producto)=> {
        return id_producto === Number(producto.id) //esto me da verdadero o falso
    })
    //me devuelve un arreglo es decir producto con id, no solo el id 
    if (productosFiltrados.length > 0){
        res.json(productosFiltrados)
    
    }
    else{
    
        const respuesta = {
        respuesta :'Producto no encontrado'
        }

        res.json(respuesta)
    }
    
}
export function altaProducto(req, res){

    const nuevo = req.body
    productos.push(nuevo)
   
    
        const respuesta = {
        respuesta :'Producto dado de alta'
        }

        res.json(respuesta)
    
    
}

export function eliminarProducto(req, res){

    const id_producto = Number(req.params.id) 
    
    const productosFiltrados = productos.filter((producto)=> {
        return id_producto !== Number(producto.id) //esto me da verdadero o falso
    })
    //me devuelve un arreglo es decir producto con id, no solo el id 
    
    productos.length = 0 
    productos.push(...productosFiltrados)
    
    const respuesta = {
        respuesta :'Producto eliminado'
    }

    res.json(respuesta)
    
    
}