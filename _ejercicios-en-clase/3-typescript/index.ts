//Variable de un solo tipo
let mensaje: string = "Hola Typescript";

//Variable de dos tipos
let numero: string | number = "Hola Typescript";

//tipos en funciones
function saludo(nombre: string): string{
    return `Hola ${nombre}`;
}

//Clases y herencias
class Animal{
    //en TS si hay modificador de acceso (public, private, protected)
    public nombre:string;
    private edad: number;
    protected reino: string;

    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad = edad;
        this.reino = "animal";        
    }

    public edadHumana():number{        
        //TODO: devolver la edad acorde al reino
        return 0;
    }    
}

class Perro extends Animal{
    constructor(nombre:string, edad:number){
        super(nombre, edad);
    }

    sonido(): void{
        console.log(`El perro '${this.nombre}' hace Guau Guau! y pertenece al reino ${this.reino} `);
    }
}

//Interfaces, utilizadas como contratos
interface Shape{
    nombre:string;
    area():number;
    alias?:string; //atributo opcionalmente implementable
}

class Circle implements Shape{
    
    //Declaración de atributos dentro del constructor (2 en uno)
    constructor(public nombre: string, private radio: number){
    };
    
    area():number{
        return Math.PI * this.radio ** 2;
    }
}

//Probando
let p1:Perro = new Perro("Fido",2);
p1.sonido();
