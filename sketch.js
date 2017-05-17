var circleX = 200;
var circleY = 300;
var circleD = 20;
var circleR = 144;



function setup() {
createCanvas (windowWidth, windowHeight);
}

function draw() {
  //background (255,0,0);
  frameRate(60);
  noStroke();
  fill(random(255), random(255), random(255));
  rect (circleX, circleY, circleD, circleR);
  
  circleX = circleX + random (-10,10);
  circleY = circleY + random (-10,10);
  circleD = circleD + random (-5,5);
  circleR = circleR = random (-11,7);
  
 
  fill (random(255),random(255),random(255), random(100)); 
  ellipse (random (400), random (600), 70)
  fill (random(255),random(255),random(255));
  rect (130, 570, 150, 599);
  fill (random(255),random(255),random(255));
  quad (130, 570, 180, 450, 220, 450, 280, 570);
  fill (random(255),random(255),random(255));
  quad (180, 450, 220, 450, 180, 200, 220, 200);
  fill (random(255),random(255),random(255));
  arc(200, 200, 40, 90, 500, PI, CHORD);
  

}

function mouseDragged() {
  background(random(255), random(255), random(255));
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}