/*Escriba un script que cambie el color de fondo del elemento <body> mediante 
el estilo inline cuando se hace clic en button.change-color y emite el valor del 
color en span.color.*/


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  bodyEl: document.querySelector("body"),
  button: document.querySelector(".change-color"),
  colorDescription: document.querySelector(".color"),
};

const onBodyBackgroungColorChanging = () => {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.colorDescription.textContent = refs.bodyEl.style.backgroundColor;
};

refs.button.addEventListener("click", onBodyBackgroungColorChanging);
