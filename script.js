import { createBoard } from "./scripts/createBoard.js";
const start = document.querySelector('.start')
const inp = document.querySelector('.inp')

start.addEventListener('click', (event) =>{
  event.preventDefault()
  let columns = inp.value
  let count;
  if(columns >= 2 && columns <= 6 && columns%2 == 0){
    count = columns*columns
  } else{
      alert("нужно указать чётное число в указанном диапазоне")
      return
  }
  createBoard(count, columns)
})