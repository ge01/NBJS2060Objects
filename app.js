/****************************************************
*                      Objects                      *
****************************************************/
var tuna = "hey i am a tuna fish!";
document.write(tuna.length);
document.write("<br>");

/****************************************************
*              Creating Our Own Objects             *
****************************************************/
// constructor function
function person(name, age) {
  this.name = name;
  this.age = age;
}

// create a new instance of an Objects
var bucky = new person("Bucky Roberts", 24);
var taylor = new person("Taylor Hopkins", 20);
document.write("<br>");

document.write(bucky.name);
document.write("<br>");
document.write(taylor.age);
document.write("<br>");

/****************************************************
*                 Object Initializers               *
****************************************************/
plucky = {name:"Plucky Chicken", age:25};
traylor = {name:"Traylor Shift", age:20};

document.write(plucky.name + " loves " + traylor.name + " because she is " + traylor.age);
document.write("<br>");

/****************************************************
*            Adding Methods to Our Objects          *
****************************************************/
function people(name1, age1) {
  this.name1 = name1;
  this.age1 = age1;
  this.yearsTilRetire = yearsLeft;
}

function yearsLeft(){
  var numYears = 65 - this.age1;
  return numYears;
}
var natalie = new people("Natalia kukulska", 29);
var vlada = new people("Vlada Roslyakova", 30);

document.write(natalie.yearsTilRetire());
document.write("<br>");
document.write(vlada.yearsTilRetire());
