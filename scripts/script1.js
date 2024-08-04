let globalVariable = "I am a global variable"

function myFunction(){
    console.log(globalVariable);

    let localVariable= "I am a local variable";
    console.log(localVariable);
}

function myOtherFunction(){
    console.log(globalVariable);
}

//myFunction();
//myOtherFunction()

/* a function with a text as parameter */

function greet(name){
    console.log("Hello" + name);
}

greet("Miguel");

/* a function with numbers as parameters */
/* add numbers: num1 + num2 */

function addNumbers(num1, num2){
    let result = num1 + num2;
    return result;
}

let result1 = addNumbers(2, 3);
console.log(result1);
let result2 = addNumbers(67, 89);
console.log(result2);
let result3 = addNumbers(result1, result2);
console.log(result3);

/* challenge 1 = double number */

function doubleNumber(num1){
    let result = num1 * 2;
    return result;
    //could also just have 'return num *2'
}

let answer1 = doubleNumber(2);
console.log("the double of the number is " + answer1);
let answer2 = doubleNumber(9);
console.log("the double of the number is " + answer2);

/*getting values from the prompt*/
let num = parseInt(prompt("Enter a number: "));
let result4 = doubleNumber(num);
console.log("The double of " + num + " is " + result4);

/* rectangle challenge*/
function rectangleArea(width, length){
    return width * length;
}

let promptWidth = parseInt(prompt("Please enter the width"));
let promptLength = parseInt(prompt("Now type the length"));

console.log("The area is " + rectangleArea(promptWidth, promptLength));