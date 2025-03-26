let prev = "";
let next = "";
let operation = "";
const display = document.querySelector(".userInput");

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(operator) {
  //check if user has already two values
  if (operation) {
    const a = Number(prev);
    const b = Number(next);
    switch (operation) {
      case "+":
        prev = add(a, b);
        break;
      case "-":
        prev = subtract(a, b);
        break;
      case "*":
        prev = multiply(a, b);
        break;
      case "/":
        prev = subtract(a, b);
        break;
    }
    display.innerText = prev;
    next = "";
    operation = "";
  } else {
    operation = operator;
    display.innerText = "";
    total = next;
    prev = "";
  }
}

function checkInput(input) {
  if (input >= "0" && input <= "9") {
    next += input;
    display.innerText = next;
  } else if (input === "+" || input === "-" || input === "*" || input === "/") {
    operate(input);
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const input = button.innerText;
    checkInput(input);
  });
});
