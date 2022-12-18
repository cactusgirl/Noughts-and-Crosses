var turn = "X"

var values = [0, 0, 0, 0, 0, 0, 0, 0, 0]

function changeTurn() {
  if (turn == "X") {
    turn = "O";
  } else if (turn == "O") {
    turn = "X";
  }
}

function updateTurn() {
  document.getElementById("turnorder").innerHTML = turn;
  setTimeout(updateTurn, 1)
}

function checkButton(name, value) {
      const button = document.getElementById(name);
    button.addEventListener("click", function handleClick() {
      if (values[value] == 0) {
        button.textContent = turn;
        changeTurn();
        if (turn == "X") {
          values[value] = 1;
        } else if (turn == "O") {
          values[value] = 2;
        }
      } 
    });
  }