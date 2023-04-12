const size =30;
const input=document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const deleteBtn = document.querySelector('[data-destroy]');
const divBoxes=document.querySelector('div#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount){
  let string="";
  for(let i=0; i<amount; i++){
    let cont =`<div style="width:${size+i*10}px;  height:${size+i*10}px;  background-color:${getRandomHexColor()};"></div>`;
    string+=cont;
    
  }
  divBoxes.insertAdjacentHTML("beforeend",string);
}
const createBtnHandler=()=>{
  createBoxes(input.value);
  console.log(input.value);
}

const destroyBoxes=()=>{
  divBoxes.innerHTML='';
  input.value ='';
}

createBtn.addEventListener("click",createBtnHandler);
deleteBtn.addEventListener("click",destroyBoxes);