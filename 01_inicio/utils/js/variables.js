//console.log("archivo de variables cargado");

//varibles
//let --> ambito global y de metodo
//var --> ambito global --> NO UTILIZADA
//const --> constantes

//let
let nombre = "Andres"; // string
let apellido; // null --> undefined
let edad = 21; //number
let carnet = true; // boolean
let fecha = new Date(); // date --> object

//const
const DNI = "3454563C"; // String

//modificar valor de variable
apellido = "López"; // string

// comprobacion de tipos
console.log(typeof nombre);
console.log(typeof apellido);
console.log(typeof edad);
console.log(typeof carnet);
console.log(typeof fecha);
console.log(typeof apellido);

console.log(isNaN(nombre));
// se niega igual que en java
console.log(!isNaN(edad));

//salida por consola
//mi nombre es XXX ZZZ y tengo CC
console.log(
  "Mi nombre es " + nombre + " " + apellido + " y tengo " + edad + " años."
);

//tambien se puede con comilla tumbada (mas facil)
console.log(`mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);
