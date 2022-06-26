const playerX = 'x'
const playerO ='o'


const cells = document.querySelectorAll(".cell");

const winningMessage = document.querySelectorAll("#winningMessageText");

const restartButton = document.querySelectorAll("#restartButton");

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let moves = ["", "", "", "", "", "", "", "", ""]

let PlayerOneName ='X'
let PlayerTwoName ='0'
let activeGame = false;

const gameState = {
    players: ['x', 'o'],
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }