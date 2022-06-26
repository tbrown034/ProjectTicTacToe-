const cellElements = document.querySelectorAll('.cell');
const board = document.getElementById('board')
const resultElement = document.getElementById('result');
const cells = document.querySelectorAll(".cell");
const statusText = document.querySelectorAll("#StatusText");
const restartButton = document.querySelectorAll("#restartButton"); 
const playerX = 'x';
const playerO ='o';
let currentPlayer = 'x' 
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];
const randomPlayer = () => Math.random() > 0.5 ? "X" : "O";

// Add event listener
cellElements.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    placeMarker(index);
  });
});

 
function nameOneFunc() {
  var onefunc = document.getElementById("PlayerOneName").value;
  document.getElementById("play1name").innerHTML = onefunc;
}

function nameTwoFunc() {
  var twofunc = document.getElementById("PlayerTwoName").value;
  document.getElementById("play2name").innerHTML = twofunc;
}