const calcular=()=>{
    const dato1=parseInt(document.getElementById("inp_primero").value)
    const dato2=parseInt(document.getElementById("inp_segundo").value)
    const dato3=parseInt(document.getElementById("inp_tercero").value)
    let resultado=(-dato2+Math.sqrt((Math.pow(dato2,2))-(4*dato1*dato3)))/2*dato1;
    let resultado1=(-dato2-Math.sqrt((Math.pow(dato2,2))-(4*dato1*dato3)))/2*dato1;
    document.getElementById("resultado").textContent=resultado;
    document.getElementById("resultado1").textContent=resultado1;
}
const boton=document.getElementById("btn_calcular")
boton.addEventListener("click",calcular)