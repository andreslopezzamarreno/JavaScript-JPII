//HTMLElement --> individual (1) find()
//NodeList<HTMLElements> --> conjunto(1 o mas) findAll()

//Buscar elementos: 
//tag
let listas = document.getElementsByTagName('ul');
let elementosListas = document.getElementsByTagName('li');

elementosListas[0].innerText = 'modificacion de la propiedad'
/* for (let index = 0; index < elementosListas.length; index++) {
    console.log(elementosListas[index].innerText);
} */

/* 
hacer un array de 5 palabras 
modificar cada uno de los textos que penen en el li de las asignaturas de 1
*/
let palabras = ['perro','gato','ordenador','raton','pantalla']
let elementosPrimero = document.getElementsByClassName('list-group-item');


//id


//class

//asincronia

/* setTimeout(() => {
    for (let index = 0; index < elementosPrimero.length; index++) {
    
        elementosPrimero[index].innerText = palabras[index];
    }
}, 5000); */

/* setInterval(() => {
    console.log('ejecucion repetitiva');
}, 2000); */

let boton = document.getElementById('boton_agregar');

//HTMLElement 
console.log(boton);


