async function PedirNuevoArray() {
    const busqueda = await fetch("https://api.escuelajs.co/api/v1/users")
        //transformo el texto en un arreglo json
const alumnos = await busqueda.json()
    
        //uso map para crear un nuevo array con los campos elegidos 
return alumnos.map(alumnos => ({
    
    id: alumnos.id,
    email: alumnos.email,
    name: alumnos.name
}))
}   



export { PedirNuevoArray }