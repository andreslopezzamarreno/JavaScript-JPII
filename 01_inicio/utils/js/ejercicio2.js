/*
pedir por prompt dos numeros
pedir por prompt una operacion (suma, resta, multiplicacion, division)

si se itroduce numero menores que 0 o letras que salte una alerta indicando el error y el programa parará

si los numeros introducidos son valido se realizara la operacion indicada

si se detecta que la operacion es negativa el programa parará tras realizar todas las operaciones de los numeros
y saltara una alerta indicando de ello
*/

let numero1 = prompt("Introduce el operando 1");
let numero2 = prompt("Introduce el operando 2");
let resultado;
let operacion = prompt(
  "Que operacion quieres hacer\nsuma\nresta\nmultiplicacion\ndivision"
);

if (isNaN(numero1, numero2) || numero1 < 0 || numero2 < 0) {
  alert("Alguno de los datos son incorrectos");
} else {
  switch (operacion) {
    case "suma":
      resultado = Number(numero1) + Number(numero2);
      break;
    case "resta":
      resultado = Number(numero1) - Number(numero2);
      break;
    case "multiplicacion":
      resultado = Number(numero1) * Number(numero2);
      break;
    case "division":
      resultado = Number(numero1) / Number(numero2);
      break;
  }
  resultado<0 ? alert(`Resultado negativo`) : alert(`El resultado de la ${operacion} entre ${numero1} y ${numero2} es ${resultado}`);
}

