const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.getElementById('equals');
const pointButton = document.getElementById('point');
const display = document.querySelector('.display');
const clear = document.getElementById('clear');
const del = document.getElementById('delete');

let pastString ='';
let currentString = '0';
let clearMode = true;
var equalsPressed = false;

display.style.display = 'flex';
display.style.justifyContent = 'flex-end';
display.style.alignItems = 'flex-end';
display.style.flexDirection = 'column';

var upperElement = document.createElement('div');
upperElement.className = 'upper';
upperElement.style.fontSize = '30px';
upperElement.textContent = '';
upperElement.style.color = 'white';
display.append(upperElement);


if(clearMode) {
    var initialZero = document.createElement('div');
    initialZero.className = 'zero';
    initialZero.style.fontSize = '70px';
    initialZero.style.color = 'white';
    initialZero.textContent = currentString;
    display.append(initialZero);
}



clear.addEventListener('click', () => {
    currentString = '0';
    initialZero.textContent = currentString;
    upperElement.textContent = '';
    if(!clearMode) 
    {
        clearMode = true;
    }
})

let a;
let b;

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        clearMode = false;
        equalsPressed = true;
        if(currentString==='0') {
            currentString='';
        }
        currentString += button.textContent;
        if(currentString.length <=8)
        {
            initialZero.textContent = currentString
        }
    })
})

pointButton.addEventListener('click', () => {
    if(currentString.includes('.')) {
        return;
    }
    currentString += '.';
    initialZero.textContent = currentString;
})

del.addEventListener('click', () => {
    if(currentString.length === 1) {
        currentString = '0';
        initialZero.textContent = currentString;
    } else {
        currentString = currentString.slice(0, -1);
        initialZero.textContent = currentString;
    }
})

var operator;

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(currentString.length!==0) {
            a = (+currentString);
            currentString+= button.textContent;
            operator = button.textContent;
            upperElement.textContent = currentString;
            currentString = '0';
            initialZero.textContent = currentString;
        }
        
    })
})

equalsButton.addEventListener("click", () => {
  if (currentString.length !== 0 && equalsPressed) {
    b = (+currentString);
    upperElement.textContent += currentString;
    equalsPressed = false;
    if (operator === "+") {
      add();
    } else if (operator === "-") {
      subtract();
    } else if (operator === "*") {
      multiply();
    } else if (operator === "/") {
      divide();
    }
  }
});

var result;

function add() {
    result = a + b;
    currentString = `${result}`;
    initialZero.textContent = currentString;
}

function subtract() {
    result = a - b;
    currentString = `${result}`;
    initialZero.textContent = currentString;
}

function multiply() {
    result = a * b;
    currentString = `${result}`;
    initialZero.textContent = currentString;
}

function divide() {
  if (b !== 0) {
    result = a / b;
    currentString = `${result}`;
    initialZero.textContent = currentString;
  }
  else {
    initialZero.textContent = "ERROR";
  }
}
