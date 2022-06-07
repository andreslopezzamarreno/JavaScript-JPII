let frase = "esto es un ejemplo de string";

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

alert(`Hay ${vocales} vocales y ${consonantes} consonantes`);
