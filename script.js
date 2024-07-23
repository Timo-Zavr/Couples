import { createBoard } from "./scripts/createBoard";
import { createCard, createIconsArray } from "./scripts/cards";
import { gameLogic } from "./scripts/gameLogic";
import { startTimer } from "./scripts/timer";

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
  createIconsArray()
})