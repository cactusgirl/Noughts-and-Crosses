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
  if (turn == "X") {
    document.getElementById("turnorder").innerHTML = "Crosses";
  } else if (turn == "O") {
    document.getElementById("turnorder").innerHTML = "Noughts";
  }
  setTimeout(updateTurn, 1)
}

//Turn box green
function green(item) {
  document.getElementById(item).style.backgroundColor = "#51a851";
  document.getElementById(item).style.borderColor = "#428c42";
  document.getElementById(item).style.color = "white";
}

//Turn box amber
function amber(item) {
  document.getElementById(item).style.backgroundColor = "#edb658";
  document.getElementById(item).style.borderColor = "#d4a24e";
  document.getElementById("grid").style.backgroundColor = "#d4a24e";
  document.getElementById(item).style.color = "white";
}

//Turn box blue
function blue(item) {
  document.getElementById(item).style.backgroundColor = "#bde2ff";
  document.getElementById(item).style.borderColor = "#96bad6";      document.getElementById(item).style.color = "#525252";
}

//Turn box yellow
function yellow(item) {
  document.getElementById(item).style.backgroundColor = "#ffffba";
  document.getElementById(item).style.borderColor = "#c4c487";
  document.getElementById(item).style.color = "#525252";
}

// Function that checks for click
function checkButton(name, value) {
    const button = document.getElementById(name);
    button.addEventListener("click", function handleClick() {
    if (values[value] == 0 && winner == "None") {
      if (turn == "X") {
        blue(name)
        values[value] = 1;
      } else if (turn == "O") {
        yellow(name)
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
    green("button1")
    green("button2")
    green("button3")
    // Dislay winner on screen
    if (values[0] == 1) {
      winner = "Crosses"
    } else if (values[0] == 2) {
      winner = "Noughts"
    }
  } else if ((values[3] == values[4] && values[4] == values[5]) && values[3] != 0) {
    green("button4")
    green("button5")
    green("button6")
    // Dislay winner on screen
    if (values[3] == 1) {
      winner = "Crosses"
    } else if (values[3] == 2) {
      winner = "Noughts"
    }
  } else if ((values[6] == values[7] && values[7] == values[8]) && values[6] != 0) {
    green("button7")
    green("button8")
    green("button9")
    // Dislay winner on screen
    if (values[6] == 1) {
      winner = "Crosses"
    } else if (values[6] == 2) {
      winner = "Noughts"
    }
  } else if ((values[0] == values[3] && values[3] == values[6]) && values[0] != 0) {
    green("button1")
    green("button4")
    green("button7")
    // Dislay winner on screen
    if (values[0] == 1) {
      winner = "Crosses"
    } else if (values[0] == 2) {
      winner = "Noughts"
    }
  } else if ((values[1] == values[4] && values[4] == values[7]) && values[1] != 0) {
    green("button2")
    green("button5")
    green("button8")
    // Dislay winner on screen
    if (values[1] == 1) {
      winner = "Crosses"
    } else if (values[1] == 2) {
      winner = "Noughts"
    }
  } else if ((values[2] == values[5] && values[5] == values[8]) && values[2] != 0) {
    green("button3")
    green("button6")
    green("button9")
    // Dislay winner on screen
    if (values[2] == 1) {
      winner = "Crosses"
    } else if (values[2] == 2) {
      winner = "Noughts"
    }
  } else if ((values[0] == values[4] && values[4] == values[8]) && values[0] != 0) {
    green("button1")
    green("button5")
    green("button9")
    // Dislay winner on screen
    if (values[0] == 1) {
      winner = "Crosses"
    } else if (values[0] == 2) {
      winner = "Noughts"
    }
  } else if ((values[2] == values[4] && values[4] == values[6]) && values[6] != 0) {
    green("button3")
    green("button5")
    green("button7")
    // Dislay winner on screen
    if (values[2] == 1) {
      winner = "Crosses"
    } else if (values[2] == 2) {
      winner = "Noughts"
    }
  } else if (((((((((values[0] != 0) && values [1] != 0) && values[2] != 0) && values[3] != 0) && values[4] != 0) && values[5] != 0) && values[6] != 0) && values[7] != 0) && values[8] != 0) {
    amber("button1")
    amber("button2")
    amber("button3")
    amber("button4")
    amber("button5")
    amber("button6")
    amber("button7")
    amber("button8")
    amber("button9")
    winner = "Draw"
  }
  document.getElementById("winner").innerHTML = winner
  setTimeout(checkWinner, 1)
}

