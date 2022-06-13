let boton = document.querySelector("#boton_agregar");

let input_agregar = document.querySelector("#texto_li");

boton.addEventListener("click", function (element) {
  
    let contenido = input_agregar.value;
    
    //console.log(contenido);
    //agregar nodos
    /*  let lista = document.querySelector("#listaPrimero");
    let nodoLi = document.createElement('li');
    nodoLi.innerText = contenido;
    nodoLi.classList.add("list-group-item");
    lista.appendChild(nodoLi); */

    //modificar el html
    if (contenido != '') {
    let lista = document.querySelector("#listaPrimero");
    lista.innerHTML = `${lista.innerHTML} <li class = "list-group-item">${contenido}</li>`;
    }else{
        alert('tienes que meter un valor')
    }
});

//boton.addEventListener("click",(item) => {console.log('boton pulsado')});

/* input_agregar.addEventListener("keyup",(item) => {
    
    console.log(input_agregar.value);
}); */

/* en el parrafo que esta configurado al final en el 0 
debera aparecer el numero de pulsaciones */

/* let contador = document.querySelector('span');

input_agregar.addEventListener("keyup",(item) => {
    contador.innerText ++;
});  */
