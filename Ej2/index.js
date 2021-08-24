const mostrar=()=>{
    const miobjeto={
        nombre="Pepe",
        apellido="Sargento",
        dni=45268789
    }
    console.log(`
    Nombre: ${miobjeto.nombre}
    Apellido: ${miobjeto.apellido}
    DNI: ${miobjeto.dni}
    `)
}
const boton=document.getElementById("btn_mostrar")
boton.addEventListener("click",mostrar)