/*Escriba un script que, cuando se escriba el texto en el input de input#nombre-input 
(evento input), sustituya su valor actual en span#name-output. Si el input está vacío, 
el span debería mostrar la secuencia "Anónimo".*/


const refs = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
  };
  
  const onInputInput = (event) => {
    refs.output.textContent = event.currentTarget.value;
  
    if (event.currentTarget.value === "") {
      refs.output.textContent = "Anonymous";
    }
  };
  
  refs.input.addEventListener("input", onInputInput);