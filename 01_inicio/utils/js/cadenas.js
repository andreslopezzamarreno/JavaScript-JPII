/* let frase = "esto es un ejemplo de string";

console.log(frase);

let vocales = 0;
let consonantes = 0;
console.log(frase.charAt(0).toLowerCase());
for (let index = 0; index < frase.length; index++) {
  if (
    frase.charAt(index) == "a" ||
    frase.charAt(index) == "e" ||
    frase.charAt(index) == "i" ||
    frase.charAt(index) == "o" ||
    frase.charAt(index) == "u"
  ) {
    vocales++;
    console.log(vocales);
  } else if (frase.charAt(index) == " ") {
  } else {
    consonantes++;
  }
}

alert(`Hay ${vocales} vocales y ${consonantes} consonantes`); */

let frase2 = "Esto es un ejemplo de frase para analizar"

let letra = frase2.includes('E',9);

console.log(letra);

let subfrase = frase2.slice(0,5);

//pedir por prompt un correo y comprobar si esta bien formateado
//tiene un @ tiene un . y un extension com o es

let correo = prompt("Por favor introduce un correo electronico");
let partesCorreo = correo.split("@"); // [borja,borja.com]
if (partesCorreo.length == 2) {
  let dominio = partesCorreo[1].split("."); // [borja,com]
  if (dominio.length == 2 && (dominio[1] == "es" || dominio[1] == "com")) {
    console.log("correo valido");
  } else {
    console.log("correo invalido");
  }
} else {
  console.log("correo invalido");
}