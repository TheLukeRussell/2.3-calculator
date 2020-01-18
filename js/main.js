(function() {
  'use strict';

  const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };

  function pushDigit(digit) {
    const displayValue = calculator.displayValue;
    // Overwrite `displayValue` if the current value is '0' or adds to current display
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    console.log(calculator);
  }

  function pushDecimal(dot) {
    // If the `displayValue` does not contain a decimal point
    if (!calculator.displayValue.includes(dot)) {
      //adds the decimal point or dot
      calculator.displayValue += dot;
    }
  }

  function handleOperator(nextOperator) {
    const {firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      calculator.firstOperand = inputValue;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);
  }

  function updateDisplay() {
    const display = document.querySelector('#results-bar');
    display.value = calculator.displayValue;
  }
  //
  updateDisplay();

  const operator = document.querySelectorAll('.operator');
  const decimal = document.querySelector('.decimal');
  const allClear = document.querySelector('.all-clear');
  const digit = document.querySelectorAll('.digit');
  // console.log('numbers', numbers);

  for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', (event) => {
    handleOperator(event.target.value);
      // alert(`you pressed operator value of ${event.target.value}`);
      return;
    });
  }

  decimal.addEventListener('click', (event) => {
    pushDecimal(event.target.value);
    updateDisplay();
    // alert(`you pressed the ${event.target.value}`);
    return;
  });

  allClear.addEventListener('click', (event) => {
    console.log('allClear', event.target.value)
    // alert(`you pressed ${event.target.value}`);
    return;
  });

  for (let i = 0; i < digit.length; i++) {
    digit[i].addEventListener('click', (event) => {
      pushDigit(event.target.value);
      updateDisplay();
      return;
    });
  }

  ///////IN CLASS DEMO//////
  // for(let i = 0; i < buttons.length; i++) {
  // buttons[i].addEventListener('click', (event) => {
  //   console.log('value', event.target.value);
  // });
  // }
  //
  // let pushNumber = (event) => {
  //   console.log('you pressed the number $event.target.value');
  // }
  ///////IN CLASS DEMO////////


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
  // console.log(myFunction(5,6))
}())
