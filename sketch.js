var hr,min,sec;
var hrAngle,minAngle,secAngle;  

function setup() {
  createCanvas(800,400);
 angleMode( DEGREES );
}

function draw() {
  background(0);
  translate(200,200);
  rotate(-90);
  hr=hour();
  min=minute();
  sec=second();
secAngle = map(sec,0,60,0,360);
minAngle = map(min,0,60,0,360);
hrAngle = map(hr % 12,0,12,0,360);

push();
rotate(secAngle);
stroke(255,0,0);
strokeWeight(10);
line(0,0,70,0);
pop();


push();
rotate(minAngle);
stroke(0,255,0);
strokeWeight(10);
line(0,0,50,0);
pop();


push();
rotate(hrAngle);
stroke(0,0,255);
strokeWeight(10);
line(0,0,30,0);
pop();


stroke(255,0,255);
point(0,0);

strokeWeight(12);
noFill()

stroke(255,0,0);
arc(0,0,301,301,0,secAngle);

stroke(0,0,255);
arc(0,0,261,261,0,hrAngle);

stroke(0,255,0);
arc(0,0,281,281,0,minAngle);
  
}