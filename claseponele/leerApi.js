try {
    //Hacer una peticion con fetch
//URL
   const respuesta = await fetch("https://69d676db1c120e733cce425e.mockapi.io/api/v1/productos")
   const productos = await respuesta.json() //transforma la cadena de texto en un arreglo/objeto de JS
//en este caso es un arreglo 
    console.log(productos)
} catch (e) {
    console.log(e)
}