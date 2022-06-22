alert("This a simple calculator that does the following operations: \n Addition \n Subtraction \n Multiplication \n Division \n\n Click Ok To Continue");
play = "on"

while (play == "on") {
    var num1 = prompt("Enter first number");
var operator = prompt("Enter operator(+, -, *, /)");
var num2 = prompt("Enter second number")

num1 = Number(num1);
num2 = Number(num2);

var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var divide = num1/num2;


function calculate() {
    if (operator == "+") {
        alert("Your answer is: " + sum);
    } else if (operator == "-") {
        alert("Your answer is: " + difference);
    } else if (operator == "*") {
        alert("Your answer is: " + product);
    } else if (operator == "/") {
        alert("Your answer is: " + divide);
    } else {
        alert("This calculator cannot perform that operation at this time.");
    }
}

calculate();

var repeat = prompt("Do you want to calculate again? (y/n)");

if (repeat=="n" || repeat==null) {
    play = "off"
}
}
