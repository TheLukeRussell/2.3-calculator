// alert("hello");
// const calculator = document.querySelector('.calculator');
// const buttons = document.querySelector('.calculator-buttons');
const calculator = { displayValue: '0', firstOperand: null, waitingForSecondOperand: false, operator: null, };
const buttons = document.querySelectorAll('button');
const numberButton = document.querySelectorAll('.button-number');
const operationButton = document.querySelectorAll('.data-operation');
const equalsButton = document.querySelector('.data-equals');
const allClearButton = document.querySelector('.data-all-clear');
const plusMinusButton = document.querySelector('.data-plus-minus');

function updateDisplay() {
  const display = document.querySelector('#results_bar');
  display.value = calculator.displayValue;
}

updateDisplay();
// for(let i=0, i < buttons.length; i = i+ 1){
//   buttons[i].addEventListener
// }
