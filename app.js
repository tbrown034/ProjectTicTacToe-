const game = {
  xTurn: true,
  xState: [],
  oState: [],
  winningStates: [
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],
      ['0', '3', '6'],
      ['1', '4', '7'],
      ['2', '5', '8'],
      ['0', '4', '8'],
      ['2', '4', '6']
  ]
}

document.addEventListener('click', event => { //need to figure this out more //
  const target = event.target
  const isCell = target.classList.contains('cell')
  const isDisabled = target.classList.contains('disabled')

  if (isCell && !isDisabled) {
      const cellValue = target.dataset.value

      game.xTurn === true
          ? game.xState.push(cellValue)
          : game.oState.push(cellValue)

      target.classList.add('disabled')
      target.classList.add(game.xTurn ? 'x' : 'o')

      game.xTurn = !game.xTurn   
  }
})






function nameOneFunc() {
    var onefunc = document.getElementById("PlayerOneName").value;
    document.getElementById("play1name").innerHTML = onefunc;
   }
    
   function nameTwoFunc() {
    var twofunc = document.getElementById("PlayerTwoName").value;
    document.getElementById("play2name").innerHTML = twofunc;
   }

   document.getElementById("reset").addEventListener("click",  ['0', '1', '2'],
   ['3', '4', '5'],
   ['6', '7', '8'],
   ['0', '3', '6'],
   ['1', '4', '7'],
   ['2', '5', '8'],
   ['0', '4', '8'],
   ['2', '4', '6'])
