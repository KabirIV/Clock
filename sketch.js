function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  var hour
  var minute
  var second
}

function draw() {
  hour = hour();
  minute = minute();
  second = second
  angleMode(45)
  secondAngle = map(second,0,60,0,360)
  minuteAngle = map(minute,0,1,0,360)
  hourAngle = map(hour,0,12,0,360)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  translate(width/2,height/2);
  line(0,0,20,20)
  background(255,255,255);  
  drawSprites();
}