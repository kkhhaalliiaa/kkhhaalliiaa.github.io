let numberButtons = Array.from(document.getElementsByClassName("number"));
let operationButtons = Array.from(document.getElementsByClassName("operations"));
let currentCalc = document.getElementById("currentCalc");

let currentNum = ''; 
let currentOperator = ''; 

let operatorList = ['/','*','-','+','.']

numberButtons.forEach(function(number) {
    number.addEventListener('click', () => {
        currentNum += number.innerHTML.trim(); 
        currentCalc.innerHTML = currentNum; 
    });
});

operationButtons.forEach(function(op) {
    op.addEventListener('click', () => {
        if (currentNum === '') return; 
        if (operatorList.includes(currentNum.slice(-1))) return;

        currentOperator = op.innerHTML.trim();

        currentNum+=currentOperator
        previousNum = currentOperator
        currentCalc.innerHTML = currentNum;
    });
});

document.getElementById("clear").addEventListener('click', () => {
    currentNum = '';
    previousNum = '';
    currentOperator = '';
    currentCalc.innerHTML = '0'; 
});

document.getElementById("delete").addEventListener('click', () => {
    currentNum = currentNum.slice(0, -1)
    currentCalc.innerHTML = currentNum
});

document.getElementById("equals").addEventListener('click', () => {
    currentNum = eval(currentNum)
    console.log(currentNum)
    if (currentNum === Infinity){ currentNum = ""; currentCalc.innerHTML = 'Error';}
    else currentCalc.innerHTML = currentNum
});