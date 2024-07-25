import { createCard, createIconsArray } from "./cards.js";
import { startTimer } from "./timer.js";

function createBoard(count, columns){
    
    const gameBoard = document.querySelector('.board')
    gameBoard.textContent = "";

  // Создание клона шаблона
  const template = document.querySelector('#gameTableTemplate').cloneNode(true).content;
  // В шаблоне находится таблица
  const gameTable = template.querySelector('.table');
  // В шаблоне находится кнопка "Рестарт"
  const restartBtn = template.querySelector(".table__button");

  let icons = createIconsArray(count)
  
  icons.forEach((icon) => {
    gameTable.append(createCard(icon));
  });
  
  // Добавляются правила для grid-контейнера в зависимости от значения параметра columns
  gameTable.style = `
  grid-template-columns: repeat(${columns}, 1fr);
  grid-template-rows: repeat(${columns}, 1fr);
  `;

  // Получившаяся таблица добавляется в игровое поле
  gameBoard.append(gameTable);

  // Слушатель события клика на кнопке "Рестарт"
  restartBtn.addEventListener("click", () => {
    // Обновление страницы
    location.reload();
  });
  // Добавление кнопки "Рестарт" в игровое поле
  gameBoard.append(restartBtn);
  startTimer()
}

export {createBoard}