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
  createIconsArray()
})

const couple = {
  first: null,
  firstClickable: true,
  second: null,
  secondClickable: true
}

function createBoard(count, columns){

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
}

function createCard(flippedIcon){
  const template = document.querySelector('#cardTemplate').cloneNode(true).content;
  const gameCard = template.querySelector('.card');
  gameCard.querySelector('#flippedIcon').classList.add(`fa-${flippedIcon}`)
  gameCard.addEventListener("click", () => gameLogic(gameCard))
  return gameCard
}



function createIconsArray(initialCount){
  const cardsIcons = [
    "compass", "cloud", "play", "bolt",
    "stop", "cogs", "atom", "basketball-ball",
    "arrows", "angle-left", "bars", "file",
    "filter", "gear", "folder", "folder-open",
    "shield", "scissors", "pen-clip"
  ]
  let cards = cardsIcons.slice(0,Math.floor(initialCount / 2))
  const duobleCards = dublicateElements(cards)
  return shuffleArray(duobleCards)
}

function dublicateElements(array){
  let icons = []
  array.forEach((item) => {
    icons.push(item, item);
  });
  return icons
}

function shuffleArray(array){
  // Определяем количество элементов массива
  let currentIndex = array.length;

  // Повторяем до тех пор, пока текущий индекс не достиг нуля
  while (currentIndex !== 0) {
    // Отнимаем индекс
    const randomIndex = Math.floor(Math.random() * currentIndex);

    currentIndex--
    // Генерируем рандомный индекс

    // Сохраняем элемент текущего индекса
    const temp = array[currentIndex];
    // По текущему индексу размещаем элемент по случайному индексу
    array[currentIndex] = array[randomIndex];
    // А на место элемента по случайному индексу ставим сохраненный элемент бывшего текущего индекса
    array[randomIndex] = temp;
  };

  // Возвращаем измененный массив
  return array
}

function gameLogic(card) {
  // Если обе карточки не кликабельны, ничего не делаем
  if (!couple.firstClickable && !couple.secondClickable) return;

  // Переворачиваем карточку
  card.classList.add('flip');

  // Проверяем, кликнута ли первая карточка
  if (couple.first === null) {
    // Если нет, то сохраняем на нее ссылку и считаем кликнутой
    couple.first = card;
    couple.firstClickable = false;
  } else if (couple.second === null && couple.first !== card) {
    // Если да, то проверяем, кликнута ли вторая карточка и не является ли вторая карточка той же самой карточкой, что и первая, и если нет, то сохраняем ссылку на эту карточку и считаем ее кликнутой
    couple.second = card;
    couple.secondClickable = false;
  }

  // Если какой-либо карточки не кликнуто, ничего не делаем
  if (couple.first === null || couple.second === null) return;

  // Сравниваем классы двух карточек и сохраняем логический результат в переменную (это для повышения читабельности)
  const isEqual = couple.first.firstElementChild.classList[2] === couple.second.firstElementChild.classList[2];

  // Если классы одинаковы
  if (isEqual) {
    setTimeout(() => {
      // То перекрашиваем их в зеленый с задержкой в 1 секунду
      couple.first.classList.add('successfully');
      couple.second.classList.add('successfully');

      // Сбрасываем все ссылки и состояния
      refresh();
    }, 1000);
  } else {
    setTimeout(() => {
      // Иначе переворачиваем карточки обратно с задержкой в 1 секунду
      couple.first.classList.remove('flip');
      couple.second.classList.remove('flip');

      // Сбрасываем все ссылки и состояния
      refresh();
    }, 1000);
  }

  // Функция сброса ссылок и состояний
  function refresh() {
    couple.first = null;
    couple.second = null;
    couple.firstClickable = true;
    couple.secondClickable = true;
  }

  isWin()
}

function isWin() {
  const gameTable = document.querySelector('.table');
  if (Array.from(gameTable.children).every((card) => card.classList.contains('flip'))) {
    setTimeout(() => {
      // clearInterval(intervalId);
      alert("Вы победили!");
    }, 1500)
  }
}