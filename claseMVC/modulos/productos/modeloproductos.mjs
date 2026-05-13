import productos from "../../productos.mjs";

export function obtenerTodos() {
  //consulta a una BD
  return productos.datos  //arreglo
}

export function obtenerUno(id) {
  //filtra el id
  const productosFiltrados = productos.datos.filter((producto) => {
    return Number(producto.id) === id
  })

  return productosFiltrados //arreglo

  
}