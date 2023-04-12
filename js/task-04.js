/*El contador consta de un span y de botones que, al ser pulsados, deben aumentar y disminuir su valor en uno.



    Cree una variable counterValue para almacenar el valor actual e inicializarlo con el valor 0.
    Añada escuchas de clic a los botones, dentro de los cuales aumenta o disminuye el valor del contador.
    Actualice la interfaz con el nuevo valor de la variable counterValue.*/


const decrementBtnRef = document.querySelector("[data-action=decrement]");
const counterValue = document.querySelector("#value");
const incrementBtnRef = document.querySelector("[data-action=increment]");

let value = Number(counterValue.textContent);

decrementBtnRef.addEventListener("click", () => {
  value -= 1;

  counterValue.textContent = value;
});

incrementBtnRef.addEventListener("click", () => {
  value += 1;

  counterValue.textContent = value;
});

console.log(decrementBtnRef);