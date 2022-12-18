function checkButton(name) {
      const button = document.getElementById(name);
    button.addEventListener("click", function handleClick() {button.textContent = "Clicked"});
    }