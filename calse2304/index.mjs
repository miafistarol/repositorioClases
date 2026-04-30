
import express from "express"

const PUERTO = 8585
//instanciar un servidor express
const app = express()
const productos = [
        {
            id: 1,
            nombre : "Bufanda",
            precio: 10000
        }, 
        {
            id: 2,
            nombre : "Gorro",
            precio: 12000
        }
    ]
app.use(express.json())
//funcion flecha es el callbak (funcion definida) que se 
// va a ejecutar cada vez que se haga una peticion 
// app.get('/', (req, res)=> {
//     res.end('Servidor funcionando')
//     res.status(200)
// })

//req (request) y res (respuesta) son parametros del callback que son objetos 
// en la expresion (req , res) siempre el primer valor es el request 
// y el segundo la respuesta, los puedo llamar como quiero

const callbackGetEnRaiz = (req, res) => {
    res.status(200)
    res.end("servidor okey")
}




//Se transforma una funcion en callback cuando es pasada en otra funcion como argumento 
// const x= () =>{
//     console.log("hola")
// }

// const z = (cb) => {
//     console.log("ejecuccion 1")
//     x()
//     console.log("ejecuccion 2")
// }

 //pongo x sin parentesis porque si los pongo se ejecuta antes que z y me va a tirar error 
// z(x)


app.get("/productos", (req,res) => {
    
    // res.set("content-type","application/json" )
    // res.end('[{nombre : "Bufanda",precio: 10000}]')
    res.json(productos)
})
app.get("/productos/:id", (req,res) => {
    const id = parseInt(req.params.id)
    console.log(id)
    const arreglofiltrado = productos.filter((producto) => {
    return producto.id === id   
})
     res.json(arreglofiltrado)
})

app.post("/productos", (req,res) => {
    
    const producto = (req.body)
    productos.push(producto)
    res.status(202).json({mensaje: "producto creado"})
})


//Abrir un puerto
app.listen(PUERTO, ()=> {
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`)
})

