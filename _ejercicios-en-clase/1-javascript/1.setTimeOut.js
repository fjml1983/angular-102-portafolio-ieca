// CALLBACKS --
// Funciones que se pasan como argumentos a otras funciones y se ejecutan después de de que un ocurra un evento o se complete una operación

const hora = new Date();

function despertar() {
  console.log("Despertar, comienzo el dia", hora.toLocaleString());
  
  setTimeout(
    ()=>{     
      comer();
    },
    4000
  );
}

function comer() {
  console.log("Comiendo, tengo hambre", hora.toLocaleString()); 
  
  setTimeout(
    ()=>{     
      trabajar();
    },
    4000
  );
}

function trabajar() {
  console.log("Trabajando, productivo", hora.toLocaleString()); 
  
  setTimeout(
    ()=>{     
      dormir();
    },
    4000
  );
}


function dormir() {
  console.log("Durmiendo, a descansar", hora.toLocaleString()); 
  
  setTimeout(
    ()=>{     
      despertar();
    },
    4000
  );
}

despertar();