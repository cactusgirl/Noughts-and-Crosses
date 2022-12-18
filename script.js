// Turn variable
var turn = "X"

// Button states
var values = [0, 0, 0, 0, 0, 0, 0, 0, 0]

// Winner variable
var winner = "None"

// Change turn function
function changeTurn() {
  if (turn == "X") {
    turn = "O";
  } else if (turn == "O") {
    turn = "X";
  }
}

// Function to update turns
function updateTurn() {
  document.getElementById("turnorder").innerHTML = turn;
  setTimeout(updateTurn, 1)
}

// Function that checks for click
function checkButton(name, value) {
    const button = document.getElementById(name);
    button.addEventListener("click", function handleClick() {
    if (values[value] == 0) {
      if (turn == "X") {
        values[value] = 1;
      } else if (turn == "O") {
        values[value] = 2;
      }
      button.textContent = turn;
      changeTurn();
    } 
  });
}

// Check for winner
function checkWinner() {
  if ((values[0] == values[1] && values[1] == values[2]) && values[0] != 0) {
    // Dislay winner on screen
    if (values[0] == 1) {
      winner = "Crosses"
    } else if (values[0] == 2) {
      winner = "Noughts"
    }
  }
  document.getElementById("winner").innerHTML = winner
  setTimeout(checkWinner, 1)
}

