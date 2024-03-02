const inputMensaje = document.getElementById("inputMensaje");
const btnBorrar = document.getElementById("btnBorrar");

function mostrarAlerta(){
  alert(inputMensaje.value.trim());
}

function borrarMensaje(){
  inputMensaje.value="";
}

function mensajeCambio(){
  console.log("texto cambiado");
  if(inputMensaje.value.trim().length == 0){
     btnBorrar.disabled = true;
  }else{
    btnBorrar.disabled = false;
  }
}

inputMensaje.addEventListener('input', ()=>{
    //logica antes de invocar mensajeCambio
    mensajeCambio();  
  });  

btnBorrar.addEventListener('click', borrarMensaje);