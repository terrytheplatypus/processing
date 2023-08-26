canvasSize = 400;
xPos = Math.floor(Math.random() * canvasSize);
yPos = Math.floor(Math.random() * canvasSize);
velocity = 5;
angle = Math.random()*Math.PI*2;
xVel = velocity*Math.cos(angle);
yVel = velocity*Math.sin(angle);
//timer = 0;
colorVelocity = 16;
colorUpperLimit = 180;
circleLowerLimit = 20;
circleUpperLimit = 80;
circleSize = 80;
circleSizeVelocity = 4;

r = Math.random()*255;
g = Math.random()*255;
b = Math.random()*255;

function setup() {
  createCanvas(400, 400);
}



function draw() {
  /*
  either constant speed with constantly randomly changing direction
  or initial speed that changes by a random amount
  */
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  if (frameCount % 1 == 0 ) { 
    //add random amount to angle
    angleIncrement = Math.random()*Math.PI/2 - Math.PI/4;
    angle +=angleIncrement;
    if(xPos < 0) {
      angle = 0;
    }
    if(yPos < 0) {
      angle = Math.PI/2;
    }
    if(xPos > canvasSize) {
      angle = Math.PI;
    }
    if(yPos > canvasSize) {
      angle = -Math.PI/2;
    }
    
    xVel = velocity*Math.cos(angle);
    yVel = velocity*Math.sin(angle);
    xPos += xVel;
    yPos += yVel;
    
    r+=Math.random()*colorVelocity-colorVelocity/2;
    g+=Math.random()*colorVelocity-colorVelocity/2;
    b+=Math.random()*colorVelocity-colorVelocity/2;
    
    if(r < 0) {
      r+=10;
    }
    if(g < 0) {
      g+=10;
    }
    if(b < 0) {
      b+=10;
    }
    
    if(r >colorUpperLimit) {
      r-=10;
    }
    
    if(g > colorUpperLimit) {
      g-=10;
    }
    if(b > colorUpperLimit) {
      b-=10;
    }
    
    circleSize += Math.random()>.5?circleSizeVelocity:-1* circleSizeVelocity;
    if(circleSize > circleUpperLimit) {
      circleSize -= circleSizeVelocity;
    } else if(circleSize < circleLowerLimit) {
      circleSize += circleSizeVelocity;
    }
    
    
    stroke(r, g, b);
    ellipse(xPos, yPos, circleSize, circleSize);
  }
  
}
