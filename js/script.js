const display = document.querySelector("input.display");
const equal = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const numbers = document.querySelectorAll(".button-numbers");
const operations1 = document.querySelectorAll(".button-operations.calc");
const operations2 = document.querySelectorAll(".button-operations-right.calc");

clearBtn.addEventListener("click", () => {
  display.value = "";
});

numbers.forEach((number) => number.addEventListener("click", (event) => {
  const number = event.target.textContent;

  if(number == ",") {
    updateDisplay(".");
  } else {
    updateDisplay(number);
  };
}));

operations1.forEach((operation) => operation.addEventListener("click", (event) => {
  const operation = event.target.textContent;

  if (operation === "+/-") {
    invertValue();
  } else if(operation === "%") {
    calculatePercentage();
  } else {
    updateDisplay(operation);
  }
}));

operations2.forEach((operation) => operation.addEventListener("click", (event) => {
  const operation = event.target.textContent;

  if (operation === "÷") {
    updateDisplay("/");
  } else if(operation === "X") {
    updateDisplay("*");
  } else {
    updateDisplay(operation);
  }
}));

function updateDisplay(value) {
  display.value += value;
};

function invertValue() {
  const value = display.value;
  
  display.value = value * -1;
};

function calculatePercentage() {
  const value = display.value;

  display.value = value / 100;
};

equal.addEventListener("click", () => {
  const operation = display.value;

  display.value = eval(operation);
});