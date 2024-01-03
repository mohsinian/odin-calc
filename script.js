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
    const initialZero = document.createElement('div');
    initialZero.style.fontSize = '70px';
    initialZero.style.color = 'white';
    initialZero.textContent = '0';
    display.append(initialZero);
}



clear.addEventListener('click', () => {
    const showZero = document.createElement('div');
    showZero.style.fontSize = '70px';
    showZero.style.color = 'white';
    showZero.textContent = currentString;
    if(!clearMode) 
    {
        display.append(showZero);
        clearMode = true;
    }
})