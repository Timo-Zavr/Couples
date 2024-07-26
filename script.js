import { createBoard } from "./scripts/createBoard.js";
const start = document.querySelector('.start')
const inp = document.querySelector('.inp')

const root = document.querySelector(':root')
const Rbut = document.querySelector(".red")
const Gbut = document.querySelector(".green")
const Bbut = document.querySelector(".blue")
const Ybut = document.querySelector(".yellow")

Rbut.addEventListener('click', (event) => {
    event.preventDefault()
    root.style.backgroundImage = `url(./Red.jpg)`
})
Gbut.addEventListener('click', (event) => {
    event.preventDefault()
    root.style.backgroundImage = `url(./Green.jpg)`
})

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