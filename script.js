const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.getElementById('equals');
const pointButton = document.getElementById('point');
const display = document.querySelector('.display');
const clear = document.getElementById('clear');

let pastString ='';
let currentString = '0';
let clearMode = true;

display.style.display = 'flex';
display.style.justifyContent = 'flex-end';
display.style.alignItems = 'flex-end';

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
    if(!clearMode) 
    {
        clearMode = true;
    }
})

let a = '';
let b = '';

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        clearMode = false;
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
