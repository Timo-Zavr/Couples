export function generateConfetti(num) {
    // Массив цветов для конфетти
    var colors = ['d13447', 'ffbf00', '263672'];

    // Пустой массив для готовых конфетти
    var confettiArray = []
    // Цикл, который повторяет действия num раз
    for (let i = 0; i <= num; i++) {
        // Метод createElement создает HTML-элемент, 
        // тег которого указывается строкой аргументом, 
        // а ссылка на готовый элемент сохраняется в переменную confetti
        const confetti = document.createElement('div');

        // Заполняем около-рандомные стили для элемента конфетти
        confetti.style = `
        position: absolute;
        width: ${Math.floor(Math.random() * 20)}px;
        height: ${Math.floor(Math.random() * 10)}px;
        background-color: #${colors[Math.floor(Math.random() * colors.length)]};
        top: -10%;
        left: ${Math.random() * 100}%;
        opacity: ${Math.random() + 0.1};
        transform: rotate(${Math.random() * 360}deg);
        animation: moveDown ease-in-out ${((Math.random() + 0.2) * 10)}s infinite;`;

        // Вставляем готовый элемент конфетти в массив
        confettiArray.push(confetti);
    }
    // Возвращаем готовый массив конфетти.
    return confettiArray;
}