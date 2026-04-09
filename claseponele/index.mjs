// console.log("hola")

import fsp from "node:fs/promises"

try{
    //ruta alternativa
    const contenido = await fsp.readFile("./texto.txt" , "utf8")
    console.log(contenido)
}catch(e){
    console.log(e)
}