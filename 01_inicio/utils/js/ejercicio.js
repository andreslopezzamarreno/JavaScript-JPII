/*
realizar un script que te pida nombre y apellidos
se pediran do snumeros a operar (cada uno en un prompt)
se preguntara si se quiere realizar la operacion
en el caso de que si aparecera un mensaje con todas las operaciones y sus resultados
"las operaciones entre Z y X son 
multiplicacion:
division:
suma:
resta: 
modulo:"
*/

let nombreApellido = prompt("Introduce el nombre y el apellido");
console.log(nombreApellido);
let numero1 = prompt("Introduce el valor 1");
let numero2 = prompt("Introduce el valor 2");
let confirmacion = confirm('Quieres realizar las operaciones');

if (confirmacion){
    let suma = numero1 + numero2;
    let resta = numero1 - numero2;
    let multiplicacion =numero1 * numero2;
    let division = numero1 / numero2;
    let modulo = numero1 % numero2;

    console.log(`la suma es ${suma}`);
    console.log(`la resltiplicacion es ${suma}`);
    console.log(`la mues ${suma}`);
    console.log(`la suma es ${suma}`);
    console.log(`la suma es ${suma}`);
}