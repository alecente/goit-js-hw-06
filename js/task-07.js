/*Escriba un script que reaccione a un cambio en el valor de input#font-size-control. 
(evento input) y cambie el estilo inline de span#text actualizando el font-size. 
Por lo tanto, al arrastrar el deslizador cambiará el tamaño del texto.*/

const refs = {
    input: document.querySelector("#font-size-control"),
    text: document.querySelector("#text"),
  };
  
  const onInputChangeFontSize = (event) => {
    refs.text.style.fontSize = `${event.currentTarget.value}px`;
  };
  
  refs.input.addEventListener("input", onInputChangeFontSize);
  