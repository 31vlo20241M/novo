function setup() {
  createCanvas(600, 600);
   background("yellow");
}


function draw() {
  
  stroke ("blue");
  fill ("blue");
  
  if (mouseIsPressed){
    rect(mouseX, mouseY, 20, 35);
  }
}
