/*
pedir un numero por prompt y mostrar por consola todos los numeros desde el introducido hasta 0
en el caso de ser un numero negativo saltara un alerta 
*/
let numero = prompt("introduce un numero");

if (!isNaN(numero) && numero > 0) {
  do {
    console.log(numero);
    numero--;
  } while (numero >= 0);
}else{
    console.log('Error');
}

/*
pedir por consoa dos numeros y sacar por consola con todos los numeros entre ellos
*/
let numero1 = prompt("Introduce el valor 1");
let numero2 = prompt("Introduce el valor 2");

if (numero1 > numero2) {
  do {
    console.log(numero1);
    numero1--;
  } while (numero1 >= numero2);
} else {
  do {
    console.log(numero2);
    numero2--;
  } while (numero2 >= numero1);
}
