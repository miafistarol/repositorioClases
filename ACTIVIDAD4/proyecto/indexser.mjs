
/*
Un ENDPOINT es una dirección (URL) donde tu servidor que espera pedidos

GET /usuario 
GET es el tipo de pedido
/usuario es la ruta 
http://localhost:4321/usuario es un endpoint 

VERBO + RUTA
*/

/*Tenés que hacer OTRO servidor que:

👉 reciba un código por la URL
👉 y verifique si coincide con el de la API*/ 

//CREO EL SERVIDOR 
import express from 'express'

const app = express()
const PUERTO = 4322
/*
app.get('/:codigo', ...)
cualquier cosa que venga dsp de /: lo guardo como codigo y lo obtengo
asi ----> req.params.codigo

Un middleware es:
una función que se ejecuta ANTES de la respuesta final
Tiene esta forma: (req, res, next)

Paso a paso:
agarrar el código de la URL
pedirle el código al otro servidor
compararlos
decidir si pasa o no

PETICIONES 
GET → pedir info
POST → enviar info
PUT → modificar
DELETE → borrar

(req, res)
lo que entra y lo que sale
        req → lo que te mandan
        res → lo que respondés

*/

// Middleware ----> LA FUNCION QUE SE EJECUTA ANTES 
const validarCodigo = async (req, res, next) => {
    const codigoURL = req.params.codigo //GUARDA LO QUE VINO EN LA URL

    try {
        const response = await fetch('http://localhost:4321/usuario') // LLAMO AL OTRO SERVIDOR 
        const data = await response.json()

/*
compara:
        URL → "5183" (string)
        API → 5183 (number)
Por eso usamos parseInt
*/

        if (parseInt(codigoURL) === data.codigo) {
            next() //DEJA PASAR EL ENDPOINT AL FINAL 
        } else {
            return res.status(400).json({ mensaje: "El código es incorrecto" })
        }
    } catch (error) {
        return res.status(500).json({ mensaje: "Error al conectar con la API" })
    }
}

// Ruta con middleware
/*
esto significa:
        entra la request
        pasa por middleware
        si pasa → ejecuta
*/
app.get('/:codigo', validarCodigo, (req, res) => {
    res.status(200).json({ mensaje: "El código es correcto" })
})

app.listen(PUERTO, () => {
    console.log(`Servidor proyecto corriendo en ${PUERTO}`)
})


