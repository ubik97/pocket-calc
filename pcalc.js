var input = "";
var output;
var p = document.getElementById('output')
var digcount = input.length;
var prevnum;
var optype;
var status;
var chain = 1;
var string = "";



//OPERATIONS
function addition() {
  optype = 1;
  chain = 2;
  input = "";
  string = string + "+";
  console.log(string);
}

function subtraction() {
  optype = 2;
  chain = 2;
  input = "";
  string = string + "-";
  console.log(string);

}

function multiplication() {
  optype = 3;
  chain = 2;
  input = "";
  string = string + "*";
  console.log(string);
}

function division() {
  optype = 4;
  chain = 2;
  input = "";
  string = string + "/";
  console.log(string);
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
      output = eval(string).toLocaleString();
      console.log(output);
      status = "dirty";
      break;

    case 2:
    output = eval(string).toLocaleString();
    console.log(output);
    status = "dirty";
      break;

    case 3:
    output = eval(string).toLocaleString();
    console.log(output);
    status = "dirty";
      break;

    case 4:
    output = eval(string).toLocaleString();
    console.log(output);
    status = "dirty";
      break;
  }
  if (chain=2) {
    document.getElementById('output').innerHTML = (Number(prevnum) + Number(input));
  }
  document.getElementById('output').innerHTML = String(output).substring(0,10);
  optype = 0;
}

//RESET
function reset() {
  input = " "
  string = "";
  chain = 1;
  document.getElementById('output').innerHTML = 0;
}

function comma(){
  if(Number(value) >= 0){
    ignoreMinus = 0;
  }else if(Number(value) < 0){
    ignoreMinus = 1;
  }
  if(ignoreMinus == 0){
    if(box.length > 11) box = box.substring(0, 11);
  }else{
    if(box.length > 12) box = box.substring(0, 12);
  }
  let h = box.split("");
  let h1 = [];
  let h2 = [];
  let u = 0;
  let dec = 0;
  let neg = 0;

  for(let j = box.length; j > 0; j--){
    if(h[j] === ","){
      h.splice(j, 1);
    }
  }
  box = h.join("");
  for(let j = box.length; j > 0; j--){
    if(h[j-1] === "."){
      dec = 1;
    }
  }
  for(let j = 0; j <= presCount; j++){
    if(h[j] === "-"){
      h.splice(j, 1);
      neg = 1;
      box = h.join("");
    }
  }
  if(dec == 1){
    h1 = box.split(".")
    let cbox = h1[0];
    let vbox = h1[1];
    h2 = cbox.split("");
    for(let i = cbox.length; i > 3; i=i-3){
      h2.splice((-3-(4*u)), 0, ",");
      u++;
    }
    cbox = h2.join("");
    box = cbox + "." + vbox;
  }else{
    cbox = box;
    for(let i = box.length; i > 3; i=i-3){
      h.splice((-3-(4*u)), 0, ",");
      u++;
    }
    if(presCount == 1){
      for(let j = box.length; j > 0; j--){
        if(h[j] === ","){
          h.splice(j, 1);
        }
      }
    }
    box = h.join("");
    }
    if(neg == 1){
    box = "-" + box;
  }
}

function num(x){
  checkReplace();
  box = box + x;
  value = value + x;
  comma();
  document.getElementById("output").innerHTML = box;
}

function num0(){
  checkReplace();
  if(box == "0" || box == "-"){
  box = 0;
  }else{
  box = box + "0";
  value = value + "0";
  }
  comma();
  document.getElementById("output").innerHTML = box;
}

//NUMBER INPUT
function number1() {

  if (status != "clean") {
      if (chain = 2) {
        string = string + "1"
        input = input + "1";
      } else {
    input = "1";
    string = "1";
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
  }
}
console.log(string);
document.getElementById('output').innerHTML = input;
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
console.log(string);
document.getElementById('output').innerHTML = input;
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
  console.log(string);
  document.getElementById('output').innerHTML = input;
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
console.log(string);
document.getElementById('output').innerHTML = input;
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
console.log(string);
document.getElementById('output').innerHTML = input;
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
console.log(string);
document.getElementById('output').innerHTML = input;
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
console.log(string);
document.getElementById('output').innerHTML = input;
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
console.log(string);
document.getElementById('output').innerHTML = input;
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
console.log(string);
document.getElementById('output').innerHTML = input;
}

function number0() {
  if (input = "0") {
    input = "0";
  } else {

    if (status = "dirty") {
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

}
document.getElementById('output').innerHTML = input;
}

function dec() {
if (input.length>9) input = input.substring(0,10)
input = input + ".";
document.getElementById('output').innerHTML = input;
}

