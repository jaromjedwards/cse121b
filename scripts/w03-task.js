/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    let sum = number1 + number2;
    return sum;
}
function addnumbers (){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value); 
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addnumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    let difference = number1 - number2;
    return difference;
};
const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
    let product = number1 * number2;
    return product;
};
const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
};
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    if (divisor === 0) {
        return "Division by zero is not allowed";
    }
    return dividend / divisor;
}
const divideNumbers = function () {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    let result = divide(dividend, divisor);

    document.querySelector('#quotient').value = result;
};
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.querySelector('#year').value = currentYear;


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let arrayString = numbersArray.join(', '); 
document.querySelector('#array').textContent = arrayString;

/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(function (number) {
    return number % 2 === 1;
});
let oddsElement = document.getElementById('odds');
let oddNumbersString = oddNumbers.join(', ');
oddsElement.textContent = oddNumbersString;

/* Output Evens Only Array */
let evenNumbers = numbersArray.filter(function (number) {
    return number % 2 === 0;
});
let evensElement = document.getElementById('evens');
let evenNumbersString = evenNumbers.join(', ');
evensElement.textContent = evenNumbersString;

/* Output Sum of Org. Array */
let sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById('sumOfArray').textContent = sum;

/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map((number) => number * 2);
document.getElementById('multiplied').textContent = multipliedArray.join(', ');

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = numbersArray
  .map((number) => number * 2)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;