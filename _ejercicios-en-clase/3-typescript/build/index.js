"use strict";
//Variable de un solo tipo
let mensaje = "Hola Typescript";
//Variable de dos tipos
let numero = "Hola Typescript";
//tipos en funciones
function saludo(nombre) {
    return `Hola ${nombre}`;
}
//Clases y herencias
class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.reino = "animal";
    }
    edadHumana() {
        //TODO: devolver la edad acorde al reino
        return 0;
    }
}
class Perro extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad);
    }
    sonido() {
        console.log(`El perro '${this.nombre}' hace Guau Guau! y pertenece al reino ${this.reino} `);
    }
}
class Circle {
    //Declaración de atributos dentro del constructor (2 en uno)
    constructor(nombre, radio) {
        this.nombre = nombre;
        this.radio = radio;
    }
    ;
    area() {
        return Math.PI * this.radio ** 2;
    }
}
//Probando
let p1 = new Perro("Fido", 2);
p1.sonido();
