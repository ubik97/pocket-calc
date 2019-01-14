var input = "";
var output;
var p = document.getElementById('output')
var digcount = input.length;
var prevnum;
var optype;
var status;
var chain = 1;



//OPERATIONS
function addition() {
  optype = 1;
  if (chain == 1) {
    prevnum = Number(input);
  } else {
    equals();
  }
  chain = 2;
  input = "";
}

function subtraction() {
  prevnum = Number(input);
  input = "";
  optype = 2;

}

function multiplication() {
  prevnum = Number(input);
  input = "";
  optype = 3;
}

function division() {
  prevnum = Number(input);
  input = "";
  optype = 4;
}

function percent() {
  input = (Number(input) / 100);
  document.getElementById('output').innerHTML = input;
  status = "dirty";
}

function negate() {
  input = (Number(input) * (-1))
  document.getElementById('output').innerHTML = input;
}


//EQUALS
function equals() {

  switch(optype) {
    case 1:
      prevnum = eval(Number(prevnum) + Number(input));
      status = "dirty";
      break;

    case 2:
      prevnum = eval(Number(prevnum) - Number(input));
      status = "dirty";
      break;

    case 3:
      prevnum = eval(Number(prevnum) * Number(input));
      status = "dirty";
      break;

    case 4:
      prevnum = eval(Number(prevnum) / Number(input));
      status = "dirty";
      break;
  }
  if (chain=2) {
    document.getElementById('output').innerHTML = (Number(prevnum) + Number(input));
  }
  document.getElementById('output').innerHTML = String(prevnum).substring(0,10);
  optype = 0;
}

//RESET
function reset() {
  input = "";
  chain = 1;
  prevnum = "";
  document.getElementById('output').innerHTML = input;
}

function commas() {

  let arr = [];
  arr.push((input).toString(10).split(""));

}

//NUMBER INPUT
function number1() {
  if (input = "0") {
    input = "1";
    document.getElementById('output').innerHTML = input;
  } else {
  if (status != "clean") {
    input = "1";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  } else {
  if (input.length>9) {
    input = input + "1";
    input = input.substring(0,10);
  } else {
    input = input + "1";
  }
  }
  commas();
  document.getElementById('output').innerHTML = input;
  }
  }

function number2() {
  if (input = "0") {
    input = "2";
    document.getElementById('output').innerHTML = input;
  } else {
  if (status != "clean") {
    input = "2";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  } else {
  if (input.length>9) {
    input = input + "2";
    input = input.substring(0,10);
  } else {
    input = input + "2";
  }
}
commas();
document.getElementById('output').innerHTML = input;
}
}
function number3() {
  if (input = "0") {
    input = "3";
    document.getElementById('output').innerHTML = input;
  } else {
  if (status != "clean") {
    input = "3";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  } else {
  if (input.length>9) {
    input = input + "3";
    input = input.substring(0,10);
  } else {
    input = input + "3";
  }
  }
  commas();
  document.getElementById('output').innerHTML = input;
  }
  }

function number4() {
  if (input = "0") {
    input = "4";
    document.getElementById('output').innerHTML = input;
  } else {
  if (status != "clean") {
    input = "4";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  } else {
  if (input.length>9) {
    input = input + "4";
    input = input.substring(0,10);
  } else {
    input = input + "4";
  }
}
commas();
document.getElementById('output').innerHTML = input;
}
}

function number5() {
  if (input = "0") {
    input = "5";
    document.getElementById('output').innerHTML = input;
  } else {
  if (status != "clean") {
    input = "5";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  } else {
  if (input.length>9) {
    input = input + "5";
    input = input.substring(0,10);
  } else {
    input = input + "5";
  }
}
commas();
document.getElementById('output').innerHTML = input;
}
}

function number6() {
  if (input = "0") {
    input = "6";
    document.getElementById('output').innerHTML = input;
  } else {
  if (status != "clean") {
    input = "6";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  } else {
  if (input.length>9) {
    input = input + "6";
    input = input.substring(0,10);
  } else {
    input = input + "6";
  }
}
commas();
document.getElementById('output').innerHTML = input;
}
}
function number7() {
  if (input = "0") {
    input = "7";
    document.getElementById('output').innerHTML = input;
  } else {
  if (status != "clean") {
    input = "7";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  } else {
  if (input.length>9) {
    input = input + "7";
    input = input.substring(0,10);
  } else {
    input = input + "7";
  }
}
commas();
document.getElementById('output').innerHTML = input;
}
}

function number8() {
  if (input = "0") {
    input = "8";
    document.getElementById('output').innerHTML = input;
  } else {
  if (status != "clean") {
    input = "8";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  } else {
  if (input.length>9) {
    input = input + "8";
    input = input.substring(0,10);
  } else {
    input = input + "8";
  }
}
commas();
document.getElementById('output').innerHTML = input;
}
}

function number9() {
  if (input = "0") {
    input = "9";
    document.getElementById('output').innerHTML = input;
  } else {
  if (status != "clean") {
    input = "9";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  } else {
  if (input.length>9) {
    input = input + "9";
    input = input.substring(0,10);
  } else {
    input = input + "9";
  }
}
commas();
document.getElementById('output').innerHTML = input;
}
}



function number0() {
  if (input != "0") {
  if (status != "clean") {
    input = "0";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  } else {
  if (input.length>9) {
    input = input + "0";
    input = input.substring(0,10);
  } else {
    input = input + "0";
  }
  }
  document.getElementById('output').innerHTML = input;
}
  else {
    if (input = "0") {
      document.getElementById('output').innerHTML = input;
    }
  }
  }

function dec() {
if (input.length>9) input = input.substring(0,10)
input = input + ".";
document.getElementById('output').innerHTML = input;
}
