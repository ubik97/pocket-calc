var input = "";
var p = document.getElementById('output')
var digcount = input.length;
var addnum = 0;
var subnum = 0;
var optype;
var sum = 0;
var dif = 0;
var status = "clean";

function addition() {
  addnum = Number(addnum) + Number(input);
  input = "";
  optype = 1;

}

function subtraction() {
  subnum = Number(input) - Number(subnum);
  input = "";
  optype = 2;
}

function equals() {
  switch(optype) {
    case 1:
      sum = eval(Number(input) + Number(addnum));
      status = "dirty";
      document.getElementById('output').innerHTML = sum;
      break;

    case 2:
      dif = eval(Number(subnum) - Number(input));
      status = "dirty";
      document.getElementById('output').innerHTML = dif;
      break;



  }
}

            //BASIC KEYPAD INPUT FUNCTIONS
function number1() {
  if (status != "clean") {
    input = "1";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  } else {
    console.log(status);
  if (input.length>=9) {
  input = input + "1";
  input = input.substring(0,9);
  } else {
    input = input + "1";
  }
}
document.getElementById('output').innerHTML = input;
}

function number2() {
  if (status != "clean") {
    input = "2";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  } else {
  if (input.length>9) {
    input = input + "2";
    input = input.substring(0,9);
  } else {
    input = input + "2";
  }
}
document.getElementById('output').innerHTML = input;
}

function number3() {
  if (status != "clean") {
    input = "3";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  } else {
  if (input.length>9) {
    input = input + "3";
    input = input.substring(0,9);
  } else {
    input = input + "3";
  }
}
document.getElementById('output').innerHTML = input;
}

function number4() {
  if (status != "clean") {
    input = "4";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  } else {
  if (input.length>9) {
    input = input + "4";
    input = input.substring(0,9);
  } else {
    input = input + "4";
  }
  }
  document.getElementById('output').innerHTML = input;
  }

function number5() {
  if (status != "clean") {
    input = "5";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  } else {
  if (input.length>9) {
    input = input + "5";
    input = input.substring(0,9);
  } else {
    input = input + "5";
  }
}
document.getElementById('output').innerHTML = input;
}

function number6() {
  if (status != "clean") {
    input = "6";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  } else {
  if (input.length>9) {
    input = input + "6";
    input = input.substring(0,9);
  } else {
    input = input + "6";
  }
}
document.getElementById('output').innerHTML = input;
}

function number7() {
  if (status != "clean") {
    input = "7";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  } else {
  if (input.length>9) {
    input = input + "7";
    input = input.substring(0,9);
  } else {
    input = input + "7";
  }
}
document.getElementById('output').innerHTML = input;
}

function number8() {
  if (status != "clean") {
    input = "8";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  } else {
  if (input.length>9) {
    input = input + "8";
    input = input.substring(0,9);
  } else {
    input = input + "8";
  }
}
document.getElementById('output').innerHTML = input;
}

function number9() {
  if (status != "clean") {
    input = "9";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  } else {
  if (input.length>9) {
    input = input + "9";
    input = input.substring(0,9);
  } else {
    input = input + "9";
  }
}
document.getElementById('output').innerHTML = input;
}

function number0() {
  if (status != "clean") {
    input = "0";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  } else {
  if (input.length>9) {
    input = input + "0";
    input = input.substring(0,9);
  } else {
    input = input + "0";
  }
}
document.getElementById('output').innerHTML = input;
}

function dec() {
if (input.length>10) input = input.substring(0,10)
input = input + ".";
document.getElementById('output').innerHTML = input;
}

function reset() {
  input = " ";
  addnum = 0;
  subnum = 0;
  document.getElementById('output').innerHTML = input;
}
