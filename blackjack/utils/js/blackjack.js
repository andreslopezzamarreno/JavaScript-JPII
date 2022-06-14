let baraja = [];
let botonInicar = document.querySelector("#boton_iniciar");
let botonPedir = document.querySelector("#boton_pedir");
let botonPlantar = document.querySelector("#boton_plantar");
let botonReiniciar = document.querySelector("#boton_reiniciar");
let puntosJ1 = document.querySelector("#contenedorJ1 bold");
let puntosJ2 = document.querySelector("#contenedorJ2 bold");
let cartasJ1 = document.querySelector("#cartasJ1");

let nombre = prompt("Cual es tu nombre");
document.querySelector("#contenedorJ1 span").innerText = nombre;


function inicialBaraja() {
    let palos = ['T','C','D','P'];
    for (let i = 0; i < palos.length; i++) {
        for (let j = 1; j <= 13; j++) {
            if (j == 11){
                baraja.push('J'+palos[i]);
            }else if (j==12){
                baraja.push('Q'+palos[i]);
            }else if (j ==13){
                baraja.push('K'+palos[i]);
            }else
            baraja.push(j+palos[i]);
        }
    }
    baraja = _.shuffle(baraja);
}


function mostrarBaraja() {
    console.log(baraja);
}


function calcularValor(carta) {
    let valor = 0;
    carta = carta.slice(0,carta.length-1);
    carta = Number(carta);
    
    if (carta == 1){
        valor = 1;
    }else if(carta > 1 && carta < 10){
        valor = carta;
    }else{
        valor = 10;
    }
    console.log(valor);
    return valor;
}

function sacarCarta(){
    let cartaSacada = Math.trunc(Math.random() * 53);
    //document.write("<h1>\n Carta: " + baraja[cartaSacada]+ "</h1>");
    //document.write("<h1>\n Valor: " + calcularValor(baraja[cartaSacada])+ "</h1>");
    baraja.pop(cartaSacada);
}

//sacarCarta();   

botonInicar.addEventListener("click", () => {
  puntosJ1.innerText = 0;
  puntosJ2.innerText = 0;
  /* botonPedir.setAttribute("disabled", false); */
  /*  botonPlantar.setAttribute("disabled", false);
  botonReiniciar.setAttribute("disabled", false);
  botonInicar.setAttribute("disabled", true); */
  inicialBaraja();
});

botonPedir.addEventListener("click", () => {
  let carta = baraja.pop();
  console.log(carta);
  let imagenCarta = document.createElement("img");
  imagenCarta.setAttribute("src", `./utils/images/${carta}.png`);
  imagenCarta.className = "carta";
  cartasJ1.appendChild(imagenCarta);
});