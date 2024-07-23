let totalTime = 60;
let totalFlips = 0;
let intervalId;

function startTimer() {
    const time = document.querySelector(".state__time");
    const moves = document.querySelector(".state__moves");
  
    intervalId = setInterval(() => {
      totalTime--;
      moves.textContent = `Шаги: ${totalFlips} шагов`;
      time.textContent = `Время: ${totalTime} сек`;
      if (totalTime === 0) {
        clearInterval(intervalId);
      }
    }, 1000);
}

export {startTimer}