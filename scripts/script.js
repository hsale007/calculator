let prev = "";
let next = "";
let operation = "";
const display = document.querySelector(".userInput");
const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const input = button.value;
    checkInput(input);
  });
});

body.addEventListener("keypress", (e) => {
  let key = e.key;
  key = key === "Enter" ? "=" : key;
  key = key === "*" || key === "x" ? "X" : key;
  checkInput(key);
});

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

function modulo(a, b) {
  return a % b;
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
    case "x":
      prev = multiply(a, b);
      break;
    case "/":
      if (b === 0) {
        prev = "NOT ALLOWED";
        return;
      }
      prev = divide(a, b);
      break;
    case "%":
      prev = modulo(a, b);
      break;
  }
  prev = parseFloat(prev.toFixed(5));
}

function operate(operator) {
  //check if user has already two values - if so then calcuate based on operator
  if (operation) {
    calculate();
    display.innerText = prev;
    if (isNaN(prev)) prev = "";
  } else {
    //continue operations based off result if user has not entered a new value (ie user press = with only one value)
    prev = next ? next : prev;
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

function toggleOperator(input) {
  const activeButton = document.querySelector(".active");
  if (activeButton) activeButton.classList.toggle("active");
  if (input !== "=")
    document
      .querySelector(`button[value="${input}"]`)
      .classList.toggle("active");
}

function checkInput(input) {
  if (
    (input >= "0" && input <= "9") ||
    (input === "." && !next.includes("."))
  ) {
    next += input;
    display.innerText = next;
  } else if (
    input === "+" ||
    input === "-" ||
    input === "X" ||
    input === "x" ||
    input === "/" ||
    input === "%" ||
    input === "="
  ) {
    toggleOperator(input);
    operate(input);
  } else if (input === "AC") {
    clearCalculator();
  } else if (input === "DE") {
    if (!next) {
      next = prev + "";
      prev = "";
    }
    next = next.slice(0, -1);
    display.innerText = next;
  } else if (input === "+/-") {
    if (!next) {
      next = prev;
      prev = "";
    }
    next = -Number(next) + "";
    display.innerText = next;
  }
}
