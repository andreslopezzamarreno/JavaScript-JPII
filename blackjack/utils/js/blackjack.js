let baraja = [];
let botonIniciar = document.querySelector("#boton_iniciar");
let botonPedir = document.querySelector("#boton_pedir");
let botonPlantar = document.querySelector("#boton_plantar");
let botonReiniciar = document.querySelector("#boton_reiniciar");
let puntosJ1 = document.querySelector("#contenedorJ1 bold");
let puntosJ2 = document.querySelector("#contenedorJ2 bold");
let cartasJ1 = document.querySelector("#cartasJ1");
let cartasJ2 = document.querySelector("#cartasJ2");
let contadorPuntosJ1 = 0;
let contadorPuntosJ2 = 0;

let nombre = prompt("Cual es tu nombre");
document.querySelector("#contenedorJ1 span").innerText = nombre;

function iniciarBaraja() {
  let palos = ["T", "C", "D", "P"];
  console.log("palo completo");
  for (let i = 0; i < palos.length; i++) {
    for (let j = 1; j <= 13; j++) {
      if (j == 11) {
        baraja.push(new carta("J" + palos[i], 10));
      } else if (j == 12) {
        baraja.push(new carta("Q" + palos[i], 10));
      } else if (j == 13) {
        baraja.push(new carta("K" + palos[i], 10));
      } else {
        //baraja.push(j+palos[i]);
        //new carta(`${j}${palos[i]}`)
        baraja.push(new carta(j + palos[i], j));
      }
    }
  }
  baraja = _.shuffle(baraja);
}

function mostrarBaraja() {
  console.log(baraja);
}

function calcularValor(carta) {
  let valor = 0;
  carta = carta.slice(0, carta.length - 1);
  carta = Number(carta);

  if (carta == 1) {
    valor = 1;
  } else if (carta > 1 && carta < 10) {
    valor = carta;
  } else {
    valor = 10;
  }
  console.log(valor);
  return valor;
}

function sacarCarta() {
  let cartaSacada = Math.trunc(Math.random() * 53);
  //document.write("<h1>\n Carta: " + baraja[cartaSacada]+ "</h1>");
  //document.write("<h1>\n Valor: " + calcularValor(baraja[cartaSacada])+ "</h1>");
  baraja.pop(cartaSacada);
}

//sacarCarta();

botonIniciar.addEventListener("click", () => {
  puntosJ1.innerText = 0;
  puntosJ2.innerText = 0;
  /* botonPedir.setAttribute("disabled", false); */
  /*  botonPlantar.setAttribute("disabled", false);
  botonReiniciar.setAttribute("disabled", false);
  botonInicar.setAttribute("disabled", true); */
  iniciarBaraja();
});

botonPedir.addEventListener("click", () => {
  let carta = baraja.pop();
  let imagenCarta = document.createElement("img");
  imagenCarta.setAttribute("src", carta.getRuta);
  imagenCarta.className = "carta";
  cartasJ1.appendChild(imagenCarta);
  contadorPuntosJ1 += carta.getValor;
  puntosJ1.innerText = contadorPuntosJ1;

  setTimeout(() => {
    if (contadorPuntosJ1 >= 21) {
      //contadorPuntosJ1 > 21 && alert("has perdido");
      turnoBanca();
    }
  }, 100);
});

function turnoBanca() {
  console.log("jugando la banca");
  setInterval(() => {
    let carta = baraja.pop();
    let imagenCarta = document.createElement("img");
    imagenCarta.setAttribute("src", carta.getRuta);
    imagenCarta.className = "carta";
    cartasJ2.appendChild(imagenCarta);
    contadorPuntosJ2 += carta.getValor;
    puntosJ2.innerText = contadorPuntosJ2;
  }, 1000);
}
