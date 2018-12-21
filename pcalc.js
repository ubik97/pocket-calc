var input = " ";
var p = document.getElementById('output')


            //BASIC KEYPAD INPUT FUNCTIONS
function number1() {
document.getElementById('output').innerHTML = input + "1";
input = input + "1";
}
function number2() {
document.getElementById('output').innerHTML = input + "2";
input = input + "2";
}
function number3() {
document.getElementById('output').innerHTML = input + "3";
input = input + "3";
}
function number4() {
document.getElementById('output').innerHTML = input + "4";
input = input + "4";
}
function number5() {
document.getElementById('output').innerHTML = input + "5";
input = input + "5";
}
function number6() {
document.getElementById('output').innerHTML = input + "6";
input = input + "6";
}
function number7() {
document.getElementById('output').innerHTML = input + "7";
input = input + "7";
}
function number8() {
document.getElementById('output').innerHTML = input + "8";
input = input + "8";
}
function number9() {
document.getElementById('output').innerHTML = input + "9";
input = input + "9";
}
function number0() {
document.getElementById('output').innerHTML = input + "0";
input = input + "0";
}
function dec() {
document.getElementById('output').innerHTML = input + ".";
input = input + ".";
}
function reset() {
  input = " ";
  document.getElementById('output').innerHTML = input;
}
