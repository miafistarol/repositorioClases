 import fsp from "node:fs/promises"
 import path from "node:path"

async function EscribirLeer(nuevoArray) {
    

    try {
        const ruta = path.join("./api.json")
        const contenido = JSON.stringify (nuevoArray, null, 4)
        await fsp.writeFile(ruta, contenido)
    
    } catch (e) {
        console.log(e)
    } 
}

export {EscribirLeer}