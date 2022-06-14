let inputTweet = document.querySelector("input");
let textoPulsaciones = document.querySelector("#tamanio_texto");
let contador = 0;
let botonMandar = document.querySelector("button");
let divtweets = document.querySelector(".col-8 .row");

inputTweet.addEventListener("keyup", () => {
  textoPulsaciones.innerText = `${inputTweet.value.length}/255`;
});

botonMandar.addEventListener("click", () => {
  let contenido = inputTweet.value;
  if (contenido.length == 0 || contenido.length > 255) {
    alert("ERROR: Tweet vacío o con más de 255 caracteres.");
  } else {
    contador ++;
    divtweets.innerHTML = `${divtweets.innerHTML} <div class="col">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Tweet ${contador}</h5>
            <p class="card-text">
              ${contenido}
            </p>
          </div>
        </div>
      </div> `;
  }
  inputTweet.value = "";
  textoPulsaciones.innerText = `${inputTweet.value.length}/255`;
});
