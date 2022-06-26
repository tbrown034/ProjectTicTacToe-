const cellElements = document.querySelectorAll('.cell');
const board = document.getElementById('board')
// Pull in the result text from DOM
const resultElement = document.getElementById('result');

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