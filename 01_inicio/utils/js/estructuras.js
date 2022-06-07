//if, if else, while, do while, for, foreach(especial), for of, for on, break, goto

//if, if else
let acierto = true;

/* if (acierto) {
    console.log('Acierto verdadero');
}
 */

/* if (acierto) {
    console.log("la respuesta es true")
} else{
    console.log("la respuesta es false");
} */

//if terario
//acierto ? console.log("Examen aprobado") : console.log("Examen suspenso");

//if
acierto & console.log("Examen aprobado");

//switch
let nota = 6;

switch (nota) {
  case 1:
    console.log("Dato introducido 1");
    break;
  case 2:
    console.log("Dato introducido 2");
    break;
  case 3:
    console.log("Dato introducido 3");
    break;
  case 4:
    console.log("Dato introducido 4");
    break;
  case 5:
    console.log("Dato introducido 5");
    break;
  case 6:
    console.log("Dato introducido 6");
    break;
  case 7:
    console.log("Dato introducido 7");
    break;
  case 8:
    console.log("Dato introducido 8");
    break;
  case 9:
    console.log("Dato introducido 9");
    break;
  case 10:
    console.log("Dato introducido 10");
    break;
  default:
    break;
}

//while
/* let numero = 30;

while (numero>10) {
    console.log('numero mayor que 10');
    numero --;
} */


//for --> repeticiones sobre estructuras --> array

let numeros = [1,2,3,4,5,6,7] //number

//let numeroCosas = [4,"hola", true] //any
/* console.log(numeros[0]);
console.log(numeros.length); */

/* for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index]);
}
 */

//let contador = 0;
numeros.forEach((element,indice) =>{
    if (indice %2 == 0){
        console.log(element);
    }
    //contador ++;
})

