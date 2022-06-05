const numbers = document.querySelectorAll(".number");
const currDisplay = document.querySelector("#current");
const lastDisplay = document.querySelector("#last");
const clear = document.querySelector("#clear");
const operations = document.querySelectorAll(".operation");
const equals = document.querySelector("#equals");
let firstOperand = null;
let secondOperand = null;
let operation = null;
let gotAnswer = false;
clear.addEventListener("click", executeClear);
equals.addEventListener("click", () => {
    if (firstOperand === null) {
        currDisplay.textContent = 0;
        return;
    }
    let answer = executeEval(operation, firstOperand, secondOperand);
    executeClear();
    currDisplay.textContent = answer;
    firstOperand = answer;
    gotAnswer = true;
});
numbers.forEach((number) => number.addEventListener("click", updateCurrDisplay));
operations.forEach((operation) => operation.addEventListener("click", updateOperation))
function updateCurrDisplay() {
    if(gotAnswer){
        currDisplay.textContent = "";
        gotAnswer = false;
    }
    if (firstOperand !== null && operation && currDisplay.textContent.length < 8) {
        currDisplay.textContent += this.textContent;
        secondOperand = currDisplay.textContent;
    }
    else if (currDisplay.textContent === "0") {
        currDisplay.textContent = this.textContent;
        firstOperand = currDisplay.textContent;
    }
    else if (currDisplay.textContent.length < 8) {
        currDisplay.textContent += this.textContent;
        firstOperand = currDisplay.textContent;
    }
}
function updateOperation() {
    if (firstOperand !==null && secondOperand!== null) {
        firstOperand = executeEval(operation, firstOperand, secondOperand);
        secondOperand = null;
        currDisplay.textContent = "";
    }
    else if(firstOperand === null && this.textContent === "-"){
        firstOperand = "-";
        currDisplay.textContent = "-";
        return;
    }
    else if(operation !== null && secondOperand === null && this.textContent === "-"){
        secondOperand = "-";
        currDisplay.textContent = "-";
        return;
    }
    currDisplay.textContent = "";
    operation = this.textContent;
    lastDisplay.textContent = `${firstOperand} ${operation}`;
}
function executeClear() {
    currDisplay.textContent = "0";
    lastDisplay.textContent = "";
    firstOperand = null;
    secondOperand = null;
    operation = null;
}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function executeEval(operation, firstOperand, secondOperand) {
    if (secondOperand === null) {
        return firstOperand;
    }
    a = Number.parseInt(firstOperand);
    b = Number.parseInt(secondOperand);
    switch (operation) {
        case "+": return add(a, b);
        case "-": return subtract(a, b);
        case "x": return multiply(a, b);
        case "/": return divide(a, b);
    }
}