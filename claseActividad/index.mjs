import { EscribirLeer } from "./modulos/funciones.mjs";
import { PedirNuevoArray } from "./modulos/peticion.mjs";

const nuevoArray = await PedirNuevoArray()

await EscribirLeer(nuevoArray)


