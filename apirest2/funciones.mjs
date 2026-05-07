import { productos } from "./productos.mjs";

export function obtenerProductos(req, res ){
    
    res.json(productos.datos)
}



export function obtenerProductosPorId(req, res){

    const id_producto = Number(req.params.id) 
    
    const productosFiltrados = productos.datos.filter((producto)=> {
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
    productos.datos.push(nuevo)
   
    
        const respuesta = {
        respuesta :'Producto dado de alta'
        }

        res.json(respuesta)
    
    
}

export function eliminarProducto(req, res){

    const id_producto = Number(req.params.id) 
    
    const productosFiltrados = productos.datos.filter((producto)=> {
        return id_producto !== Number(producto.id) //esto me da verdadero o falso
    })
    //me devuelve un arreglo es decir producto con id, no solo el id 
    
    productos.datos.length = 0 
    productos.datos.push(...productosFiltrados)
    
    const respuesta = {
        respuesta :'Producto eliminado'
    }

    res.json(respuesta)
    
    
}

export function insertaNuevoProducto(){
    const nuevoProducto = Number(req.params.id)
    const proximoId =req.body

    nuevoProducto.id = nuevoId
    productos.ultimo_id = proximoId

    productos.datos.push(nuevoProducto)
    
    const respuesta = {
        respuesta :'nuevo Id insertado'
    }

    res.json(respuesta)

}


export function modificarProducto(req, res){
    const id_producto = Number(req.params.id)
    const productoAModificar =req.body

    productos.datos.forEach((producto, indice) => {
    // const indice = productos.datos.indexOf(producto)

        if (id_producto === Number(producto.id)) {
            productoAModificar.id = id_producto
            productos.datos[indice] = productoAModificar
        }
    })

    const respuesta = {
        respuesta :'Producto  modificado con id '+ id_producto
    }

    res.json(respuesta)

}