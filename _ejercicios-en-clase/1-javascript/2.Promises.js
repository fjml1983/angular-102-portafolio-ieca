/*
Promises, encadenando funciones con control de exito y fracaso.
*/

var diasTranscurridos = 0

function despertar() {
  return new Promise(
    (resolve, reject) => {
       const hora = new Date();
       console.log("Despertando", hora.toLocaleString());      
      
       if(diasTranscurridos >= 3){
         //Descanso cada tercer día
         reject("Descanso de media semana!!");
       }
      
       setTimeout(
         ()=>{
            resolve(true)
         },
         3000
       );
    }
  );
}

function comer() {
  return new Promise(
    (resolve, reject) => {
       const hora = new Date();
       console.log("Comiendo", hora.toLocaleString());      
       setTimeout(
         ()=>{
            resolve(true)
         },
         3000
       );
    }
  );
}

function trabajar() {
  return new Promise(
    (resolve, reject) => {
       const hora = new Date();
       console.log("Trabajando", hora.toLocaleString());      
       setTimeout(
         ()=>{
            resolve(true)
         },
         3000
       );
    }
  );
}

function dormir() {
  return new Promise(
    (resolve, reject) => {
       const hora = new Date();
       console.log("Durmiendo", hora.toLocaleString());      
       setTimeout(
         ()=>{
            resolve(true)
         },
         3000
       );
    }
  );
}

function inicio(){
  diasTranscurridos +=1;
  console.log(`Dia ${diasTranscurridos}`);
  despertar()
    .then(comer)
    .then(trabajar)
    .then(dormir)
    .then(inicio)
    .catch((resultado)=>{
      console.log(resultado);    
    })
  }

inicio();