var input = "";
var output;
var p = document.getElementById('output')
var digcount = input.length;
var prevnum;
var optype;
var status;
var chain = 1;
var string = "";
var opdouble = 1;
var expArr = [];
var mostRecent;


function array() {
  expArr = string.split("");
  let replace;

  if (expArr[expArr.length - 1] === "+" || expArr[expArr.length - 1] === "-" || expArr[expArr.length - 1] === "*" || expArr[expArr.length - 1] === "/") {
    if (expArr[expArr.length - 2] === "+" || expArr[expArr.length - 2] === "-" || expArr[expArr.length - 2] === "*" || expArr[expArr.length - 2] === "/") {
      replace = expArr[expArr.length - 1];
      expArr.pop(expArr[expArr.length - 1]);
      expArr.pop(expArr[expArr.length - 2]);
      expArr.push(replace);
    }
    console.log(expArr);
    string = expArr.join("");
    console.log(string);
  }
console.log(expArr[expArr.length - 1]);
console.log(expArr);
}

function dec() {
if (document.getElementById('output').innerHTML === 0 || document.getElementById('output').innerHTML === "0") {
  input = input + "0.";
  string = string + "0.";
} else {
      input = input + ".";
      input = input.substring(0,10)
      string = string + ".";
  }
array();
document.getElementById('output').innerHTML = input;
document.getElementById('dec').disabled = true;
}

//OPERATIONS
function addition() {
  optype = 1;
  chain = 2;
  input = "";
  if (opdouble = 1) {
  string = string + "+";
} else {
  opdouble = 2;
  mostRecent = "+";
}
array();
console.log(string);
}

function subtraction() {
  optype = 2;
  chain = 2;
  input = "";
  string = string + "-";
  console.log(string);
  mostRecent = "-";
  array();
}

function multiplication() {
  optype = 3;
  chain = 2;
  input = "";
  string = string + "*";
  console.log(string);
  mostRecent = "*";
  array();
}

function division() {
  optype = 4;
  chain = 2;
  input = "";
  string = string + "/";
  console.log(string);
  mostRecent = "/";
  array();
}

function percent() {
  input = (Number(input) / 100);
  string = String(Number(input) / 100);
  document.getElementById('output').innerHTML = input;
  status = "dirty";
  string = String(input);
}

function negate() {
  input = (Number(input) * (-1))
  document.getElementById('output').innerHTML = input;
  string = String(input);
}

//EQUALS
function equals() {

  switch(optype) {
    case 1:
      ouput = eval(string);
      if (eval(string) > 999999999) {
        output = String(output.toExponential());
      } else {
        output = eval(string).toLocaleString();
      }
      status = "dirty";
      break;

    case 2:
    output = eval(string);
    console.log(output);

    if (Number(output) > 999999999) {
      output = String(output.toExponential(2));
    } else {
      output = eval(string).toLocaleString();
    }
    status = "dirty";
    break;

    case 3:
    output = eval(string);
    console.log(output);

    if (Number(output) > 999999999) {
      output = String(output.toExponential(2));
    } else {
      output = eval(string).toLocaleString();
    }
    status = "dirty";
    break;

    case 4:
    output = eval(string);
    console.log(output);

    if (Number(output) > 999999999) {
      output = String(output.toExponential(2));
    } else {
      output = eval(string).toLocaleString();
    }
    status = "dirty";
    break;
  }
  document.getElementById('output').innerHTML = output;
  optype = 0;
  opdouble = 1;
  string = String(output);
}

//RESET
function reset() {
  input = " ";
  string = "";
  expArr = [];
  chain = 1;
  status = "clean";
  output = "";
  document.getElementById('output').innerHTML = 0;
  document.getElementById('zero').disabled = true;
  document.getElementById('dec').disabled = false;
}



//NUMBER INPUT
function number1() {
  if (status != "clean") {
      if (chain = 2) {
        string = string + "1";
        input = input + "1";
      } else {
    input = "1";
    string = "1";
    array();
    document.getElementById('output').innerHTML = input;
    status = "clean";
  }} else {
    console.log(status);
  if (input.length>=9) {
  input = input + "1";
  input = input.substring(0,10);
  } else {
    input = input + "1";
    string = string + "1";
    array();
  }
  }
  document.getElementById('zero').disabled = false;
  console.log(string);
  document.getElementById('output').innerHTML = input.substring(0,10);
  }

function number2() {
  if (status != "clean") {
      if (chain = 2) {
        string = string + "2";
        input = input + "2";
      } else {
    input = "2";
    string = "2";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  }} else {
    console.log(status);
  if (input.length>=9) {
  input = input + "2";
  input = input.substring(0,10);
  } else {
    input = input + "2";
    string = string + "2";
  }
}
array();
console.log(input);
document.getElementById('output').innerHTML = input.substring(0,10);
document.getElementById('zero').disabled = false;
}

function number3() {
  if (status != "clean") {
      if (chain = 2) {
        string = string + "3";
        input = input + "3";
      } else {
    input = "3";
    string = "3";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  }} else {
    console.log(status);
  if (input.length>=9) {
  input = input + "3";
  input = input.substring(0,10);
  } else {
    input = input + "3";
    string = string + "3";
  }
  }
  array();
  console.log(string);
  document.getElementById('output').innerHTML = input.substring(0,10);
  document.getElementById('zero').disabled = false;
  }

function number4() {
  if (status != "clean") {
      if (chain = 2) {
        string = string + "4";
        input = input + "4";
      } else {
    input = "4";
    string = "4";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  }} else {
    console.log(status);
  if (input.length>=9) {
  input = input + "4";
  input = input.substring(0,10);
  } else {
    input = input + "4";
    string = string + "4";
  }
}
array();
console.log(string);
document.getElementById('output').innerHTML = input.substring(0,10);
document.getElementById('zero').disabled = false;
}

function number5() {
  if (status != "clean") {
      if (chain = 2) {
        string = string + "5";
        input = input + "5";
      } else {
    input = "5";
    string = "5";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  }} else {
    console.log(status);
  if (input.length>=9) {
  input = input + "5";
  input = input.substring(0,10);
  } else {
    input = input + "5";
    string = string + "5";
  }
}
array();
console.log(string);
document.getElementById('output').innerHTML = input.substring(0,10);
document.getElementById('zero').disabled = false;
}

function number6() {
  if (status != "clean") {
      if (chain = 2) {
        string = string + "6";
        input = input + "6";
      } else {
    input = "6";
    string = "6";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  }} else {
    console.log(status);
  if (input.length>=9) {
  input = input + "6";
  input = input.substring(0,10);
  } else {
    input = input + "6";
    string = string + "6";
  }
}
array();
input = input.substring(0,10);
document.getElementById('output').innerHTML = input;
document.getElementById('zero').disabled = false;
}

function number7() {
  if (status != "clean") {
      if (chain = 2) {
        string = string + "7";
        input = input + "7";
      } else {
    input = "7";
    string = "7";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  }} else {
    console.log(status);
  if (input.length>=9) {
  input = input + "7";
  input = input.substring(0,10);
  } else {
    input = input + "7";
    string = string + "7";
  }
}
array();
console.log(string);
document.getElementById('output').innerHTML = input.substring(0,10);
document.getElementById('zero').disabled = false;
}

function number8() {
  if (status != "clean") {
      if (chain = 2) {
        string = string + "8";
        input = input + "8";
      } else {
    input = "8";
    string = "8";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  }} else {
    console.log(status);
  if (input.length>=9) {
  input = input + "8";
  input = input.substring(0,10);
  } else {
    input = input + "8";
    string = string + "8";
  }
}
array();
console.log(string);
document.getElementById('output').innerHTML = input.substring(0,10);
document.getElementById('zero').disabled = false;
}

function number9() {
  if (status != "clean") {
      if (chain = 2) {
        string = string + "9";
        input = input + "9";
      } else {
    input = "9";
    string = "9";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  }} else {
    console.log(status);
  if (input.length>=9) {
  input = input + "9";
  input = input.substring(0,10);
  } else {
    input = input + "9";
    string = string + "9";
  }
}
array();
console.log(string);
document.getElementById('output').innerHTML = input.substring(0,10);
document.getElementById('zero').disabled = false;
}

function number0() {
  let repeat;

  if (document.getElementById('output').innerHTML === "0" || document.getElementById('output').innerHTML === 0) {
    reset();
    repeat = "no";
  }

if (repeat = "yes") {
  if (status != "clean") {
      if (chain = 2) {
        string = string + "0";
        input = input + "0";
      } else {
    input = "0";
    string = "0";
    document.getElementById('output').innerHTML = input;
    status = "clean";
  }} else {
    console.log(status);
  if (input.length>=9) {
  input = input + "0";
  input = input.substring(0,10);
  } else {
    input = input + "0";
    string = string + "0";
  }
}
array();
console.log(string);
document.getElementById('output').innerHTML = input.substring(0,10);
}
}
