//aritmericos
let numero1 = 6;
let numero2 = 5;

console.log(numero1 + numero2);

//la suma de los numeros es

let suma = numero1 + numero2;
suma += 10;
let resta = numero1 - numero2;
resta -= 10;
let multiplicacion = numero1 * numero2;
multiplicacion *= 2;
let division = numero1 / numero2;
division /= 2;
let modulo = numero1 % numero2;

console.log(`La suma de los numeros es ${suma}`);
console.log(`La multiplicacion de los numeros es ${multiplicacion}`);
console.log(`La resta de los numeros es ${resta}`);
console.log(`La division de los numeros es ${division}`);
console.log(`El modulo de los numeros es ${modulo}`);
console.log(`El tipo del resto es ${typeof modulo}`);

//operadores de comparacion
numero1 = 6;
numero2 = 5;

let mayorQue = numero1 > numero2;
let mayorigual = numero1 <= numero2;
let menorQue = numero1 < numero2;
let menorigual = numero1 <= numero2;
let diferente = numero1 != numero2;
let igual = numero1 == numero2;

numero1 = 4;
numero2 = "4";
igual = numero1 == numero2; // compara solo contenido
console.log(igual);
igual = numero1 === numero2; //compara contenido y tipo
console.log(igual);

//alert(`Bienvenido ${nombre}`);
//let confirmacion = confirm('Seguro que quieres continuar?');
//console.log(confirmacion);
//let introduccion = prompt("introduce un dato a trabajar",'parametro por defecto');
//console.log(introduccion);



