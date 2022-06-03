let operationPressed = false;
const numbers = document.querySelectorAll(".number");
const currDisplay = document.querySelector("#current");
const clear = document.querySelector("#clear");
clear.addEventListener("click", executeClear);
numbers.forEach((number) => number.addEventListener("click", updateDisplay));
function updateDisplay(){
    currDisplay.textContent += this.textContent;
}
function executeClear(){
    currDisplay.textContent = "";
}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    return a/b;
}

