const board = document.querySelector('.board')
const start = document.querySelector('.start')
const inp = document.querySelector('.inp')
const game = document.querySelector('.game')


let number;
let S;
start.addEventListener('click', createBoard)

function createBoard(){
    number = parseInt(inp.value)
    if(number <= 6 && number%2 == 0){
        S = number*number
        console.log(S)
        board.style.display = 'none'
        game.style.height = '125px'

    } else{
        inp.value = 4
    }
}