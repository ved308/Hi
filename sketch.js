var a = prompt("Enter the first variable");
var b = prompt("Enter the second variable");

function setup() {
  createCanvas(400, 400);

  var b2 = createButton("Click here to swap");
  b2.mousePressed(swap);
}

function draw() {
  background(0);
}

function swap(){

  [a,b] = [b,a];

  console.log("The value of a after swapping " +a);
  console.log("The value of b after swapping " +b);
}


