// Functions for the basic math operators
function add(arg1, arg2) {
  return arg1 + arg2;
}

function subtract(arg1, arg2) {
  return arg1 - arg2;
}

function multiply(arg1, arg2) {
  return arg1 * arg2;
}

function divide(arg1, arg2) {
  return arg1 / arg2;
}

// Function to call the appropriate math operator
function operate(num1, num2, operator) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
}

// Global variables to store calculator state
let argument1 = '';
let argument2 = '';
let operator = null;
let shouldResetDisplay = false;

// DOM elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

// Event listener for all button clicks
buttons.forEach(button => {
  button.addEventListener("click", () => {
    // Handle the 'clear' button
    if (button.textContent === "clear") {
      display.textContent = "0";
      argument1 = '';
      argument2 = '';
      operator = null;
    } 
    // Handle operator buttons
    else if (button.textContent === '+' || button.textContent === '-' || button.textContent === '*' || button.textContent === '/') {
      argument1 = display.textContent;
      operator = button.textContent;
      shouldResetDisplay = true;
    } 
    // Handle the 'equals' button
    else if (button.textContent === "=") {
      if (!argument1 || !operator) return; // Do nothing if there's no operation to perform
      argument2 = display.textContent;
      display.textContent = operate(Number(argument1), Number(argument2), operator);
      operator = null; // Reset operator after calculation
    } 
    // Handle number buttons
    else {
      if (display.textContent === '0' || shouldResetDisplay) {
        display.textContent = button.textContent;
        shouldResetDisplay = false;
      } else {
        display.textContent += button.textContent;
      }
    }
  });
});
