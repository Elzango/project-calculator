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
  } else if (operator === "x") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    if (num2 == 0) {
      return "Division by zero is undefined";
    }
    // Only divide if num2 is not zero
    return divide(num1, num2);
  }
}

// Global variables to store calculator state
let argument1 = "";
let argument2 = "";
let operator = null;
let shouldResetDisplay = false;

// DOM elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

// Handling Keyboard Input
window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    let enterKey = document.getElementById("equalButton");
    enterKey.click();
  } else if (event.key === "Backspace") {
    let backSpaceKey = document.getElementById("delButton");
    backSpaceKey.click();
  } else { // Only loop if it wasn't a special key
    buttons.forEach((button) => {
      if (event.key === button.textContent) {
        button.click();
      }
    });
  }
});

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
    else if (button.textContent === '+' || button.textContent === '-' || button.textContent === 'x' || button.textContent === '/') {
      if (argument1 !== "" && operator !== null ) {
        argument2 = display.textContent;
        const result = operate(Number(argument1), Number(argument2), operator);

        // If 'result' is not a number, it must be our error string
        if (typeof result !== 'number') {
          shouldResetDisplay = true;
        }

        display.textContent = result;
        operator = null; // Reset operator after calculation
        argument1 = result;
	operator = button.textContent;
	shouldResetDisplay = true;
      }
      else {
      argument1 = display.textContent;
      operator = button.textContent;
      shouldResetDisplay = true;
      }
    } 
    // Handle the 'equals' button
    else if (button.textContent === "=") {
      if (!argument1 || !operator) return; // Do nothing if there's no operation to perform
      argument2 = display.textContent;
      
      const result = operate(Number(argument1), Number(argument2), operator);

      // If 'result' is not a number, it must be our error string
      if (typeof result !== 'number') {
        shouldResetDisplay = true;
      }

      display.textContent = result;
      operator = null; // Reset operator after calculation
    } 
     // Handle decimal point
    else if (button.textContent === ".") {
      if (!display.textContent.includes(".")) {
        display.textContent += ".";
      }
    }
     // Handle the delete button
     else if (button.textContent === "del") {
       const n = display.textContent.length; 
       if (n === 1) {      
         display.textContent = "0";} 
       else {                                                            
         display.textContent = display.textContent.slice(0, n - 1);
         }
     }	  
    // Handle number buttons
    else {
      if (display.textContent === '0' || shouldResetDisplay) {
        display.textContent = button.textContent;
        shouldResetDisplay = false;
      } else {
	if (display.textContent.length <= 16)
        display.textContent += button.textContent;
      }
    }
  });
});
