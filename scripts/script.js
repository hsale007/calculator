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

function calculate() {
  const a = Number(prev);
  const b = Number(next);
  switch (operation) {
    case "+":
      prev = add(a, b);
      break;
    case "-":
      prev = subtract(a, b);
      break;
    case "X":
      prev = multiply(a, b);
      break;
    case "/":
      prev = divide(a, b);
      break;
  }
}

function operate(operator) {
  //check if user has already two values - if so then calcuate based on operator
  if (operation) {
    calculate();
    display.innerText = prev;
  } else {
    display.innerText = operator === "=" ? display.innerText : ""; // no operattor provided
    prev = next ? next : prev; //continue operations based off reseult if user has not entered a new value
  }

  operation = operator === "=" ? "" : operator;
  next = "";
}

function clearCalculator() {
  prev = "";
  next = "";
  operation = "";
  display.innerText = "";
}

function checkInput(input) {
  if ((input >= "0" && input <= "9") || input === ".") {
    next += input;
    display.innerText = next;
  } else if (
    input === "+" ||
    input === "-" ||
    input === "X" ||
    input === "/" ||
    input === "="
  ) {
    operate(input);
  } else if (input === "AC") {
    clearCalculator();
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const input = button.innerText;
    checkInput(input);
  });
});
