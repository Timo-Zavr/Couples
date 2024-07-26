import { createBoard } from "./scripts/createBoard.js";
const start = document.querySelector('.start')
const inp = document.querySelector('.inp')

const styledElement = document.getElementById('css');
const Rbut = document.querySelector(".red")
const Gbut = document.querySelector(".green")
const Bbut = document.querySelector(".blue")
const Ybut = document.querySelector(".yellow")

Rbut.addEventListener('click', (event) => {
  event.preventDefault()
  styledElement.href = './red.css'
})
Gbut.addEventListener('click', (event) => {
  event.preventDefault()
  styledElement.href = './green.css'
})
Bbut.addEventListener('click', (event) => {
  event.preventDefault()
  styledElement.href = './blue.css'
})
Ybut.addEventListener('click', (event) => {
  event.preventDefault()
  styledElement.href = './yellow.css'
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