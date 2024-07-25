import { gameLogic } from "./gameLogic.js";

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

export { createCard, createIconsArray}