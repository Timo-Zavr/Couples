const board = document.querySelector('.board')
const start = document.querySelector('.start')
const inp = document.querySelector('.inp')
const gameBoard = document.querySelector('.game')

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

function createBoard(count, columns){

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
  
  for (let i = 0; i < count; i++) {
    gameTable.append(createCard());
  }

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

function createCard(flippedIcon){
  const template = document.querySelector('#cardTemplate').cloneNode(true).content;
  const gameCard = template.querySelector('.card');
  gameCard.querySelector('#flippedIcon').classList.add(`fa-${flippedIcon}`)
  return gameCard

}