var input = "";
var p = document.getElementById('output')
var digcount = input.length;

function addition() {
  
}


            //BASIC KEYPAD INPUT FUNCTIONS
function number1() {
  if (input.length>10) {
  input = input + "1";
  input = input.substring(0,11);
  } else {
    input = input + "1";
  }
document.getElementById('output').innerHTML = input;
}

function number2() {
  if (input.length>10) {
    input = input + "2";
    input = input.substring(0,11);
  } else {
    input = input + "2";
  }
document.getElementById('output').innerHTML = input;
}

function number3() {
  if (input.length>10) {
  input = input + "3";
  input = input.substring(0,11);
  } else {
    input = input + "3";
  }
document.getElementById('output').innerHTML = input;
}

function number4() {
  if (input.length>10) {
  input = input + "4";
  input = input.substring(0,11);
  } else {
    input = input + "4";
  }
document.getElementById('output').innerHTML = input;
}

function number5() {
  if (input.length>10) {
  input = input + "5";
  input = input.substring(0,11);
  } else {
    input = input + "5";
  }
document.getElementById('output').innerHTML = input;
}

function number6() {
  if (input.length>10) {
  input = input + "6";
  input = input.substring(0,11);
  } else {
    input = input + "6";
  }
document.getElementById('output').innerHTML = input;
}

function number7() {
  if (input.length>10) {
  input = input + "7";
  input = input.substring(0,11);
  } else {
    input = input + "7";
  }
document.getElementById('output').innerHTML = input;
}

function number8() {
  if (input.length>10) {
  input = input + "8";
  input = input.substring(0,11);
  } else {
    input = input + "8";
  }
document.getElementById('output').innerHTML = input;
}

function number9() {
  if (input.length>10) {
  input = input + "9";
  input = input.substring(0,11);
  } else {
    input = input + "9";
  }
document.getElementById('output').innerHTML = input;
}

function number0() {
  if (input.length>10) {
  input = input + "0";
  input = input.substring(0,11);
  } else {
    input = input + "0";
  }
document.getElementById('output').innerHTML = input;
}

function dec() {
  if (input.length>10) {
  input = input + ".";
  input = input.substring(0,10);
  } else {
    input = input + ".";
  }
document.getElementById('output').innerHTML = input;
}

function reset() {
  input = " ";
  document.getElementById('output').innerHTML = input;
}
