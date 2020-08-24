var r1,r2

function setup() {
  
  createCanvas(800,400);
  r1 = createSprite(400, 200, 50, 50);
  r2 = createSprite(100,100,80,40);

  r1.debug = true;
  r2.debug = true;
  
  r1.shapeColor = "green";
  r2.shapeColor = "green";
}

function draw() {
  background(0,0,0);  

  r1.x = mouseX;
  r1.y = mouseY;

  if ((r1.x-r2.x)<(r1.width / 2+r2.width / 2) && (r2.x-r1.x)<(r1.width / 2+r2.width / 2) && 
  (r1.y-r2.y)<(r1.height / 2+r2.height / 2) && (r2.y-r1.y)<(r1.height / 2+r2.height/ 2)) {
    r1.shapeColor = "red";
    r2.shapeColor = "red";
  } else {
    r1.shapeColor = "green";
    r2.shapeColor = "green";
  }

  drawSprites();
}