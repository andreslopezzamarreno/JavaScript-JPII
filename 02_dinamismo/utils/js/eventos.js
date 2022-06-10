let boton = document.querySelector('#boton_agregar');

/* boton.addEventListener("click",function () {
    console.log('boton pulsado');
}); */

boton.addEventListener("click",(item) => {console.log('boton pulsado')});


let input_agregar = document.querySelector('#texto_li');


input_agregar.addEventListener("keyup",(item) => {
    console.log(input_agregar.value);
});

/* en el parrafo que esta configurado al final en el 0 
debera aparecer el numero de pulsaciones */

let contador = document.querySelector('span');

input_agregar.addEventListener("keyup",(item) => {
    contador.innerText ++;
}); 