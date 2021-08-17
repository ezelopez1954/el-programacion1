const calcular= () => {
    const dato1=document.getElementById("inp_adyacente").value;
    const dato2=document.getElementById("inp_opuesto").value;
    let resultado=Math.sqrt(Math.pow(dato1,2)+Math.pow(dato2,2));   
    console.log(resultado)
    document.getElementById("h_resultado").textContent=resultado;
}
const boton=document.getElementById("btn_calcular")
boton.addEventListener("click",calcular)