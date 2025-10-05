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

function operate(argument1, argument2, operator) {
  if (operator === "add") {
    return add(argument1, argument2);
  } else if (operator === "subtract") {
    return subtract(argument1, argument2);
  } else if (operator === "multiply") {
    return multiply(argument1, argument2);
  } else if (operator === "divide") {
    return divide(argument1, argument2);
  }
}
