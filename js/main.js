// alert("hello");
// const calculator = document.querySelector('.calculator');
// const buttons = document.querySelector('.calculator-buttons');
const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};
const buttons = document.querySelectorAll('button');
// const numberButton = document.querySelectorAll('.digit');
// const operationButton = document.querySelectorAll('.operator');
// const equalsButton = document.querySelector('.data-equals');
// const allClearButton = document.querySelector('.data-all-clear');
// const plusMinusButton = document.querySelector('.data-plus-minus');

function updateDisplay() {
  const display = document.querySelector('#calculator-screen');
  display.value = calculator.displayValue;
}
//
updateDisplay();

// for(let t=0, i < $buttons.length; i = i + 1){
//   buttons[i].addEventListener('click', () => {
//     console.log('event', event)
//   });
// }
//
// for(let i = 0; i < buttons.length; i++) {
// console.log(buttons[i])
// }

const numbers = document.querySelectorAll('.digit');
// console.log('numbers', numbers);


// keys.addEventListener('click', (event) => {
//     (event.target.classList.contains('operator'))
//     console.log('operator', event.target.value);
//     // alert(`you pressed ${event.target.value}`);
//     return;
//
//   });
//
// keys.addEventListener('click', (event) => {
//     (event.target.classList.contains('decimal'))
//     console.log('decimal', event.target.value);
//     // alert(`you pressed ${event.target.value}`);
//     return;
//
// });
// keys.addEventListener('click', (event) => {
//     (event.target.classList.contains('all-clear'))
//     console.log('clear', event.target.value);
//     // alert(`you pressed ${event.target.value}`);
//     return;
//
// });

for(let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', (event) => {
      // (event.target.classList.contains('digit'))
      console.log('digit', event.target.value);
      // alert(`you pressed ${event.target.value}`);
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
// console.log(myFunction(5,6));
