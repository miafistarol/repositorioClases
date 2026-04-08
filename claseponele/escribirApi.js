//ESCRIBO EN UN ARCHIVO 
 import fsp from "node:fs/promises"
 import path from "node:path"
try {
    //Hacer una peticion con fetch
//URL
   const respuesta = await fetch("https://69d676db1c120e733cce425e.mockapi.io/api/v1/productos")
   const productos = await respuesta.json() //transforma la cadena de texto en un arreglo/objeto de JS

   // const ruta = path.join("./api.txt")
   const ruta =path.join("./api.json")
   //guardo los datos en un archivo, si existe lo pisa o si no existe lo crea

   const contenido = JSON.stringify(productos , null , 4) //pasa de js a json 
   await fsp.writeFile(ruta, contenido)
   // console.log(productos)
} catch (e) {
    console.log(e)
} 