// funciones declaradas
// function nombre (parametros,parametros){
//cuerpo
//return
//}
//nombre(1,2)

// funciones anonimas --> funciones de flecha
// let funcion = function(parametros) {}
// funcionAnonima(parametro)
//let flecha = ( parametro ) => { return cuerpo }
//return solo si quiero que retorne, se le puede quitar
//flecha (parametro)

function sumaNumeros(operador1, operador2) {
  let suma = operador1 + operador2;
  console.log(suma);
}

//sumaNumeros(5,10); //15
//sumaNumeros(10) //undefined

function sumaDefecto(operando1, operando2 = 0) {
  let suma = operando1 + operando2;
  console.log(suma);
}

//sumaDefecto(2);

function sinParametro() {
  console.log("funcion llamada");

  for (let index = 0; index < arguments.length; index++) {
    console.log(arguments[index]);
  }
}

//sinParametro(1,2,3);

function funcionRetorno(operando1, operando2) {
  let suma = operando1 + operando2;
  console.log(suma);
  return suma;
}
//funcionRetorno(funcionRetorno(4, 12), 5);

/*
con dos prompt pedidos al usuario realiza todas las operaciones matematicas y muestra un alert con el resultado 
con el menos numero de lineas posibles
*/
let numero1 = prompt("Introduce numero 1");
let numero2 = prompt("Introduce numero 2");
function operar() {
    alert(
        'suma: '+ (Number(numero1) + Number(numero2) )+ '\n'+
        'resta: '+ (Number(numero1)  - Number(numero2)) + '\n'+
        'division: '+ (Number(numero1)  / Number(numero2))+ '\n'+
        'multiplicacion: '+ (Number(numero1)  * Number(numero2))
    );
}
operar();

/*
prompt pidiendo una frase
prompt pidiendo una letra
sacar con un alert indicando si la letra esta en la frase

*/
