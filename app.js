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
