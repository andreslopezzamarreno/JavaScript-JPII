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

let nombre = prompt("Por favor introduce tu nombre");
let apellido = prompt("Por favor introduce tu apellido");
let numero1 = prompt(
  `Bienvenido  ${nombre} ${apellido} introduce el primer operando`
);
let numero2 = prompt(`Introduce el segundo operando`);
let confirmacion = confirm("Estas seguro que quieres continuar");
if (confirmacion) {
  suma = Number(numero1) + Number(numero2);
  resta = numero1 - numero2;
  multiplicacion = numero1 * numero2;
  division = numero1 / numero2;
  modulo = numero1 % numero2;
  alert(`El resultado de las operaciones entre ${numero1} y ${numero2} es:
    \nMultiplicación: ${multiplicacion}
    \nDivision: ${division}
    \nResta: ${resta}
    \nSuma: ${suma}
    `);
} else {
  alert(`${nombre} hasta la proxima`);
}