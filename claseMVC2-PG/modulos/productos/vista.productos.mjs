//Reestructurar la vista

import productos from "../../productos.mjs"

export function obtenerTodos(datosCompletos) {
  //consulta a una BD
  return datosCompletos 
}

export function obtenerUno(id) {
  //filtra el id
  const productosFiltrados = productos.datos.filter((producto) => {
    return Number(producto.id) === id
  })

  return productosFiltrados //arreglo

  
}