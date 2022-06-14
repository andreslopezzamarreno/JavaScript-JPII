let colorR = document.querySelector('#r');
let colorG = document.querySelector('#g');
let colorB = document.querySelector('#b');

let valorR= colorR.value;
let valorG= colorG.value;
let valorB= colorB.value;

let hola = document.querySelector('#parrafo_color');

colorR.addEventListener('change',() =>{
    actualizarColores();
});
colorG.addEventListener('change',() =>{
    actualizarColores();
});
colorB.addEventListener('change',() =>{
    actualizarColores();
});


function actualizarColores(){
    console.log(`rgb(${colorR.value},${colorG.value},${colorB.value})`);
    hola.style.color= (`rgb(${colorR.value},${colorG.value},${colorB.value})`);
    //hola.setAttribute('style',`color: rgb(${colorR.value},${colorG.value},${colorB.value})`);
}

