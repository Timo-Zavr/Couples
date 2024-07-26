import { totalFlips } from "./gameLogic.js";

let totalTime = 60;
let intervalId;

function startTimer() {
  const moves = document.querySelector(".steps");
  const time = document.querySelector(".sec");
  
  intervalId = setInterval(() => {
    totalTime--;
    moves.textContent = `Шаги: ${totalFlips} шагов`;
    time.textContent = `Время: ${totalTime} сек`;
    if (totalTime === 0) {
      clearInterval(intervalId);
    }
  }, 1000);
}

function stopTimer(){
    clearInterval(intervalId)
}

export {startTimer, totalTime, stopTimer}