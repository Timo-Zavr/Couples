const board = document.querySelector('.board')
const start = document.querySelector('.start')
const inp = document.querySelector('.inp')
const gameBoard = document.querySelector('.game')


let number;
let S;
start.addEventListener('click', createBoard)

function createBoard(columns){
    number = parseInt(inp.value)
    if(number <= 6 && number%2 == 0){
        S = number*number
        board.style.display = 'none'
        game.style.height = '125px'
    } else{
        inp.value = 4
    }

    gameBoard.textContent = "";

  // Создание клона шаблона
  const template = document.querySelector('#gameTableTemplate').cloneNode(true).content;
  // В шаблоне находится таблица
  const gameTable = template.querySelector('.table');
  // В шаблоне находится кнопка "Рестарт"
  const restartBtn = template.querySelector(".table__button");

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
}