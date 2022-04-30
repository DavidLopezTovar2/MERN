var numberDisplay;
var numberA
var total;
var operator;
var completeNumber = '';
var zeroNumber = '0';
// Funtions for css styles

function changeMainColor(typeButton, element) {
    typeButton === 1 ? element.style.backgroundColor = '#808080':
                        element.style.backgroundColor = '#09AE00';
}

function returnToMainColor(typeButton, element) {
    typeButton === 1 ? element.style.backgroundColor = '#686868':
                        element.style.backgroundColor = '#26F91B'
}

// Functions for the calculator

function press(number) {
    numberDisplay = document.querySelector('#display');
    number.toString();
    completeNumber = completeNumber + number
    numberDisplay.innerText = completeNumber;
}

function setOP(oper) {
    total = parseFloat(completeNumber);
    completeNumber = ''
    numberA = total;
    operator = oper;
}

function calculate(){
    numberDisplay = document.querySelector('#display');
    total = parseFloat(completeNumber);
    console.log(numberA + '   ' + total);
    console.log(operator);
    if (operator === '+') {
        total += numberA;
    } else if (operator === '-'){
        total = numberA - total;
    }else if (operator === '/') {
        total = numberA / total;
    } else{
        total *= numberA;
    }
    console.log('Total = ' + total);
    operator = '';
    numberDisplay.innerText = total;
    completeNumber = total;
}

function clear() {
    numberDisplay = document.querySelector('#display');
    numberDisplay.innerText = zeroNumber;
}