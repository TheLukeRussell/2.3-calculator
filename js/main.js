// alert("hello");
// const calculator = document.querySelector('.calculator');
// const buttons = document.querySelector('.calculator-buttons');
// const calculator = { displayValue: '0', firstOperand: null, waitingForSecondOperand: false, operator: null, };
// const buttons = document.querySelectorAll('button');
// const numberButton = document.querySelectorAll('.digit');
// const operationButton = document.querySelectorAll('.operator');
// const equalsButton = document.querySelector('.data-equals');
// const allClearButton = document.querySelector('.data-all-clear');
// const plusMinusButton = document.querySelector('.data-plus-minus');

// function updateDisplay() {
//   const display = document.querySelector('#results_bar');
//   display.value = calculator.displayValue;
// }

// updateDisplay();

// for(let i=0, i < buttons.length; i = i+ 1){
//   buttons[i].addEventListener
// }

// for(let i = 0; i < buttons.length; i++) {
// console.log(buttons[i])
// }
// const keys = document.querySelector('.calculator-buttons');
const keys = document.querySelector('.calculator-buttons');
keys.addEventListener('click', (event) => {
  const { target } = event;
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    console.log('operator', target.value);
    return;
  }

  if (target.classList.contains('decimal')) {
    console.log('decimal', target.value);
    return;
  }

  if (target.classList.contains('all-clear')) {
    console.log('clear', target.value);
    return;
  }

  if (target.classList.contains('digit')) {
    console.log('digit', target.value);
    return;
  }
});

//convert number to string// Number('123') = 123
//
// let age = 21 //change this value//
//
// if (age >= 21) {
//   console.log('you may enter')
// } else {
//   console.log('try again next year!')
// }
//
// if(age >= 21) {
//   console.log('enter');
// } else if (age === 20) {
//   console.log('try again');
// } else {
//   console.log('mom')
// }
//
// let myFunction = (a, b) => {
//   return a + b;
// }
// console.log(myFunction(5,6));
