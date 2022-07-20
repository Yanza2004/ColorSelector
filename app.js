const selectorDeColor = document.getElementById("exampleColorInput");
const btnVisualizar = document.getElementById("btn-color");
const pintarCodigoHexa = document.getElementById("color-name");
const pintarColor = document.getElementById("pintar-color");


btnVisualizar.addEventListener('click', () =>{
    pintarCodigoHexa.textContent = selectorDeColor.value
    pintarColor.style.backgroundColor = selectorDeColor.value
})


