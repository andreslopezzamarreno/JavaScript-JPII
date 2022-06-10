let elementos =[2,34,3,213,64,7,85]; //number
let palabras = ['klk', 'andres','ordenador','js']; //string


//6. Dado el array = [1,2,3,4,5,6,7,8,9,10]

let array = [1,2,3,4,5,6,7,8,9,10];

// - Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.

let posicion = 0;
while (posicion<array.length) {
    console.log(array[posicion]);
    posicion ++;
}

//- Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}

//- Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.



//- Mostrar todos los elementos dentro de un array sumándole uno a cada uno.



//- Calcular la media de todos los elementos del array




//7. Crear un array vacío, luego generar 20 números al azar y guardarlos en un array.
let arrayAleatorios =[];

for (let index = 0; index < 20; index++) {
    arrayAleatorios[index] = Math.random()*20;
}
_.shuffle(arrayAleatorios);

arrayAleatorios.forEach((element) => {
    console.log(element);
})

