let baraja = [];


function inicialBaraja(params) {
    let palos = ['T','C','P','R'];
    for (let i = 0; i < palos.length; i++) {
        for (let j = 1; j <= 13; j++) {
            if (j == 11){
                baraja.push('J'+palos[i]);
            }else if (j==12){
                baraja.push('Q'+palos[i]);
            }else if (j ==13){
                baraja.push('K'+palos[i]);
            }else
            baraja.push( j+palos[i]);
        }
    }
    baraja = _.shuffle(baraja);
}
inicialBaraja();

function mostrarBaraja() {
    for (let index = 0; index < baraja.length; index++) {
        console.log(baraja[index]);
    }
}
//mostrarBaraja();

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
//calcularValor('1R');

function sacarCarta(){
    let cartaSacada = Math.trunc(Math.random() * 53);
    document.write("<h1>\n Carta: " + baraja[cartaSacada]+ "</h1>");
    document.write("<h1>\n Valor: " + calcularValor(baraja[cartaSacada])+ "</h1>");
    baraja.pop(cartaSacada);
}
sacarCarta();

console.log(baraja.length);

