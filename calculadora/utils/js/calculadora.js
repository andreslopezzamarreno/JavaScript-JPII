let operacion = document.querySelector("#operacion");
let borrartodo = document.querySelector("#borrarTodo");
let dividir = document.querySelector("#division");
let multiplicar = document.querySelector("#multiplicacion");
let borrar = document.querySelector("#borrar");
let siete = document.querySelector("#siete");
let ocho = document.querySelector("#ocho");
let nueve = document.querySelector("#nueve");
let restar = document.querySelector("#resta");
let cuatro = document.querySelector("#cuatro");
let cinco = document.querySelector("#cinco");
let seis = document.querySelector("#seis");
let sumar = document.querySelector("#suma");
let uno = document.querySelector("#uno");
let dos = document.querySelector("#dos");
let tres = document.querySelector("#tres");
let elevado = document.querySelector("#elevado");
let cero = document.querySelector("#cero");
let coma = document.querySelector("#coma");
let igualar = document.querySelector("#igual");

let cajas = document.querySelector(".cajas");
let historial = document.querySelector("#borrarhistorial");

let resultado;
let operador = "";
let operadores = [];

console.log(igualar);

siete.addEventListener("click", function (element) {
  operacion.innerText = operacion.innerText + "7";
});

ocho.addEventListener("click", function (element) {
  operacion.innerText = operacion.innerText + "8";
});

nueve.addEventListener("click", function (element) {
  operacion.innerText = operacion.innerText + "9";
});

cuatro.addEventListener("click", function (element) {
  operacion.innerText = operacion.innerText + "4";
});

cinco.addEventListener("click", function (element) {
  operacion.innerText = operacion.innerText + "5";
});

seis.addEventListener("click", function (element) {
  operacion.innerText = operacion.innerText + "6";
});

uno.addEventListener("click", function (element) {
  operacion.innerText = operacion.innerText + "1";
});

dos.addEventListener("click", function (element) {
  operacion.innerText = operacion.innerText + "2";
});

tres.addEventListener("click", function (element) {
  operacion.innerText = operacion.innerText + "3";
});

cero.addEventListener("click", function (element) {
  operacion.innerText = operacion.innerText + "0";
});

coma.addEventListener("click", function (element) {
  operacion.innerText = operacion.innerText + ".";
  /* if (operacion.innerText == "") {
    alert("Operando invalido");
  } else {
    operacion.innerText = operacion.innerText + ".";
  } */
});

elevado.addEventListener("click", function (element) {
  if (comprobacionNumOperadores()) {
    if (operacion.innerText == "") {
      alert("Operando invalido");
    } else {
      operacion.innerText = operacion.innerText + "^";
    }
    operador = "^";
  }
  activarBotones();
});

multiplicar.addEventListener("click", function (element) {
  if (comprobacionNumOperadores()) {
    if (operacion.innerText == "") {
      alert("Operando invalido");
    } else {
      operacion.innerText = operacion.innerText + "x";
    }
    operador = "x";
  }
  activarBotones();
});

dividir.addEventListener("click", function (element) {
  if (comprobacionNumOperadores()) {
    if (operacion.innerText == "") {
      alert("Operando invalido");
    } else {
      operacion.innerText = operacion.innerText + "/";
    }
    operador = "/";
  }
  activarBotones();
});

restar.addEventListener("click", function (element) {
  if (comprobacionNumOperadores()) {
    if (operacion.innerText == "") {
      alert("Operando invalido");
    } else {
      operacion.innerText = operacion.innerText + "-";
    }
    operador = "-";
  }
  activarBotones();
});

sumar.addEventListener("click", function (element) {
  if (comprobacionNumOperadores()) {
    if (operacion.innerText == "") {
      alert("Operando invalido");
    } else {
      operacion.innerText = operacion.innerText + "+";
    }
    operador = "+";
  }
  activarBotones();
});

borrar.addEventListener("click", function (element) {
  if (operacion.innerText == "") {
    alert("Caja Vacia");
  } else {
    operacion.innerText = operacion.innerText.substring(
      0,
      operacion.innerText.length - 1
    );
  }
  activarBotones();
});

borrartodo.addEventListener("click", function (element) {
  if (operacion.innerText == "") {
    alert("Caja Vacia");
  } else {
    operacion.innerText = "";
  }
  operador = "";
  activarBotones();
});

igualar.addEventListener("click", function (element) {
  operadores = [];
  if (operacion.innerText != "") {
    operadores = operacion.innerText.split(operador);
    switch (operador) {
      case "+":
        resultado = Number(operadores[0]) + Number(operadores[1]);
        break;
      case "-":
        resultado = Number(operadores[0]) - Number(operadores[1]);
        break;
      case "x":
        resultado = Number(operadores[0]) * Number(operadores[1]);
        break;
      case "/":
        resultado = Number(operadores[0]) / Number(operadores[1]);
        break;
      case "^":
        resultado = Math.pow(Number(operadores[0]), Number(operadores[1]));
        break;
      default:
        break;
        operacion.innerText = resultado;
        añadirOperacion();
        operador = "";
        desactivarBotones();
    }
  } else {
    alert("Caja vacia");
  }
  /* igualar.setAttribute("disabled", "true"); */
});

historial.addEventListener("click", function (params) {
  if (cajas.innerHTML == "") {
    alert("No hay registro de operaciones");
  } else {
    cajas.innerHTML = "";
  }
});

function comprobacionNumOperadores() {
  if (operador == "") {
    return true;
  } else {
    alert("Ya has puesto una operacion");
    return false;
  }
}

function añadirOperacion() {
  cajas.innerHTML =
    cajas.innerHTML +
    `<p class="results">${Number(operadores[0])} ${operador} ${Number(
      operadores[1]
    )} = ${resultado}</p>`;
}

function desactivarBotones() {
  igualar.disabled = true;
  cero.disabled = true;
  uno.disabled = true;
  dos.disabled = true;
  tres.disabled = true;
  cuatro.disabled = true;
  cinco.disabled = true;
  seis.disabled = true;
  siete.disabled = true;
  ocho.disabled = true;
  nueve.disabled = true;
  coma.disabled = true;
}

function activarBotones() {
  igualar.disabled = false;
  cero.disabled = false;
  uno.disabled = false;
  dos.disabled = false;
  tres.disabled = false;
  cuatro.disabled = false;
  cinco.disabled = false;
  seis.disabled = false;
  siete.disabled = false;
  ocho.disabled = false;
  nueve.disabled = false;
  coma.disabled = false;
}



/* 
falta controlar que al borrar un signo se pueda poner otro

falta controlar que si solo se pone un numero no te deje hacer la operacion porque pone NaN
*/