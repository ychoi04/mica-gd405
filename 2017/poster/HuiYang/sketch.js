var sceneNum = 0;
var x = 0;
//to
var mic;
var angle = 0.0;
var speed = 0.05;
var d = 0;
//infinite
var xspeed = 0;
var yspeed = 0;
var xpos = 0;
var ypos = 0;
var x1pos = 600;
var y1pos = 0;
var x2pos = 0;
var y2pos = 0;
var x3pos = 0;
var y3pos = 0;
var x4pos = 0;
var y4pos = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
    message=("infinite");
    

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}



function draw() {
    if (sceneNum == 0) {
		sceneWelcome();
	} else if (sceneNum == 1) {
		sceneTo();
	} else if (sceneNum == 2) {
		sceneTheinfinite();
	}else if (sceneNum == 3) {
		sceneTheinfinite2();
	}
}

function sceneWelcome(){
    background(200, 250,180);

//W
fill(0);
push();
noStroke();
translate(windowWidth/6, windowHeight/3);
triangle(2, 20,30, 95, 58, 20);
pop();

push();
noStroke();
translate(width/6+56, height/3);
triangle(2+ random(-10, 0), 20,30, 95, 58, 20);
 pop();

//E
push();
translate(width/6+150, height/3);
// noStroke();
// rect(2,20,60,30);
// fill(100);
// rect(2,45,60,30);

fill(255);
strokeWeight(random(1, 4));
for(var j =20; j<=100; j +=8 + random(-3, 2)){
 line (2, j, 60, j);  
}
noStroke();
fill(200, 250,180);
rect(0,40,80,30);
fill(0);
rect(2+ random(-5, 5),45,60,20);
 pop();

//L
push();
translate(width/6+250, height/3);
noStroke();
fill(0, random(90, 100));
ellipse(2, 25+ random(-1, 5), 20, 20);
fill(0);
ellipse(2, 50, 20, 20);
ellipse(2, 90, 20, 20);
fill(0, random(90, 100));
ellipse(2, 70 + random(-3, 2), 20, 20);
fill(0);
ellipse(25+random(-3, 2), 90, 20, 20);

 pop();

//c
push();
noFill();
//translate(width/2.2+ random(-3, 2), height/3+10);
    translate(mouseX+ random(-3, 2), mouseY+ random(-3, 2));
strokeWeight(random(1, 4));
arc(50 , 50, 80, 80, 0, PI +PI*2/3);
arc(110,50, 40, 40, PI, 0);
fill(0);
 ellipse (130, 50, 10+ random(-3, 2), 10+ random(-3, 2));
pop();


//O
push();
translate(width/6+450, height/3+10);
noFill();
for(var i =0; i<=80; i +=8 + random(-3, 2)){
 ellipse (2, 50, i, i);  
}
pop();

//M
fill(0);
push();
noStroke();
translate(width/6+550, height/3);
triangle(0, 95,30+ random(-4, 3), 20,60, 95);
pop();

push();
noStroke();
translate(width/6+500, height/3);
// triangle(0, 95,30, 20,60, 95+ random(-20, 2));
triangle(0, 95,30+ random(-4, 3), 20,60, 95);
pop();

//E
push();
translate(width/6+650, height/3);
fill(255);
strokeWeight(random(0, 2));
for(var j =20; j<=100; j +=8 + random(0, 2)){
 line (2, j, 60, j);  
}
noStroke();
fill(200, 250,180);
rect(0,40,80,30);
fill(0);
rect(2+ random(-5, 5),45,60,20);
 pop();
 
//start next scene    
 if (mouseX > width/6+300 && mouseX < width/6+350 && mouseY >=height/3+10 && mouseY <= height/3+80) {
sceneNum++;
}   
   
    
}




function sceneTo(){
    background(random(150, 255), 255,180);

// Get the overall volume (between 0 and 1.0)
var vol = mic.getLevel();
fill(127);
stroke(0);

// Draw an ellipse with height based on volume
// var h = map(vol, 0, 0.5, height, 0);
// ellipse(width/2, h - 25, 50, 50);

var d = map(vol, 0, 0.5, 0, 15);
 var l2 = map(vol, 0, 0.5, 100, 400);
var l0 = map(vol, 0, 0.4, 10, 300);
var l1 = map(vol, 0, 0.5, 10, 300);
//Ooooo
push();
translate(windowWidth/2, windowHeight/2);
noFill();
for(var i =0; i<=width+100; i +=8 + random(-3, 2)* d){
 ellipse (0, 0, i, i);  
}
//small o
for(var j =0; j<=l2; j += 3 + random(-1, 2)){
ellipse (0, 0, j, j);
}
pop();

//T
strokeWeight(0); 
translate(width/2, height/2);
rotate(angle);
line(0,0,0,l0);
strokeWeight(1);
translate(0, l0);
rotate(angle);

fill(0)
rect(0,0,100,l1);
rect(50-l1/2,l1/2,l1,100);

angle += speed;
    
if (vol >= 0.4) {
sceneNum++;
    background(0);
}   
    
}




function sceneTheinfinite(){
  strokeWeight(2);
 
 //I 
   push();
  translate(windowWidth/28,0);
  
 fill(random(200), random(255),random(255));
 text(message, x2pos, y2pos);
  x2pos = random(0,0.5);
  y2pos += random(1,5);
   pop();
  
  //the
  push();
  xspeed = 1;
  yspeed = 2;
  translate(windowWidth/56,0);
  textSize(60);
  fill(random(255), random(255),random(255));
  text("the", x3pos, y3pos);
  x3pos =  0
  y3pos = y3pos + yspeed
    pop();
  
  
  //N
  textSize(14);
  stroke(0);
  push();
  translate(windowWidth/8.8,0);
  fill(random(255), random(255),random(255));
text(message, x2pos, y2pos);
  x2pos = random(0,0.5);
  y2pos += random(1,5);
   pop();
  
  translate(windowWidth/8.8,0);
  stroke(0);
   fill(255, random(255),random(255));
text(message, xpos, ypos);
  xpos += random(0,0.8);
  ypos += random(1,4);
  
  
  //|2
   push();
  translate(windowWidth/8.2,0);
  fill(random(255), random(255),random(255));
text(message, x2pos, y2pos);
  x2pos = random(0,0.5);
  y2pos += random(1,5);
   pop();
  
  //F
   push();
  translate(windowWidth/5.3,0);
  fill(random(255), random(255),random(255));
text(message, x2pos, y2pos);
  x2pos = random(0,0.5);
  y2pos += random(1,5);
   pop();
  
  
   push();
   textSize(54);
  translate(windowWidth/5.3,0);
  fill(random(255), random(255),random(255));
  text(message, x3pos, y3pos);
  xspeed = 1;
  yspeed = 0.5;
  x3pos = 0;
  y3pos = y3pos + yspeed;
   pop();
  
  push();
  textSize(54);
  translate(windowWidth/5.3,windowHeight/2.6);
  text(message, x3pos, y3pos);
  pop();
  
  
   push();
  translate(windowWidth/2.9,0);
  fill(random(255), random(255),random(255));
text(message, x2pos, y2pos);
  x2pos = random(0,0.5);
  y2pos += random(1,5);
   pop();
  
//N2
  textSize(14);
  stroke(0);
  push();
  translate(windowWidth/2.5,0);
  fill(random(255), random(255),random(255));
text(message, x2pos, y2pos);
  x2pos = random(0,0.5);
  y2pos += random(1,5);
   pop();
  
  translate(windowWidth/2.5,0);
  stroke(0);
   fill( random(255),random(255),random(200,255));
text(message, xpos, ypos);
  xpos += random(1);
  ypos += random(1,4);
  //  xpos += 0.3;
  // ypos += 1;
  
   push();
   translate(windowWidth/8.2,0);
  stroke(0);
   fill(random(255),random(255),random(255));
text(message, x4pos, y4pos);
 xspeed = 1;
  yspeed = 0.5;
  x4pos = 0;
  y4pos += yspeed
  pop();
  
   push();
   translate(windowWidth/5.75,0);
  stroke(0);
   fill(random(255),random(255),random(255));
text(message, x4pos, y4pos);
  x4pos = 0;
  y4pos += random(1,4);
  pop();
  
  //T
   push();
   translate(windowWidth/3.8,0);
  stroke(0);
   fill(random(255),random(255),random(255));
text(message, x4pos, y4pos);
  x4pos = 0;
  y4pos += random(1,4);
    pop();
  
  push();
   textSize(54);
  translate(windowWidth/4.8,0);
  fill(random(255), random(255),random(255));
  text(message, x3pos, y3pos);
  xspeed = 1;
  yspeed = 0.5;
  x3pos = 0;
  y3pos = y3pos + yspeed;
   pop();
  
  //E
   push();
   translate(windowWidth/2.9,0);
   stroke(0);
   fill(random(255),random(255),random(255));
   text(message, x4pos, y4pos);
   x4pos = 0;
   y4pos += random(1,4);
   pop();
  
  push();
  textSize(44);
  translate(windowWidth/2.9,0);
  fill(random(255), random(255),random(255));
  text(message, x3pos, y3pos);
  xspeed = 1;
  yspeed = 0.5;
  x3pos = 0;
  y3pos = y3pos + yspeed;
  pop();
  
   push();
   textSize(44);
   translate(windowWidth/2.9,windowHeight/2.6);
   fill(random(255), random(255),random(255));
   text(message, x3pos, y3pos);
   xspeed = 1;
   yspeed = 0.5;
   x3pos = 0;
   y3pos = y3pos + yspeed;
   pop();
  
   push();
   textSize(44);
  translate(windowWidth/2.9,windowHeight/1.1);
  fill(random(255), random(255),random(255));
  text(message, x3pos, y3pos);
  xspeed = 1;
  yspeed = 0.5;
  x3pos = 0;
  y3pos = y3pos + yspeed;
   pop();
  
  
    if(y3pos > 80){
    y3pos = -yspeed;
   
 } if(y4pos > height){
    y4pos -= random(1,4);
   
 } 
  if(y4pos > height){
    y4pos = 0;
   
 } if(y2pos > height){
    y2pos = 0;
   
 }  if(ypos > height){
   xpos = 0;
    ypos = 0;
 }
    
}


function sceneTheinfinite2(){
    textSize(random(400));
  textAlign(CENTER);
  //strokeWeight(random(15));
  strokeWeight(random(5));
  stroke(random(255), random(255),random(255));
  fill(random(255), random(255),random(255));
textFont("Helvetica");
    //textFont(" Barrio");
   
text("The Infinite", mouseX, mouseY );
    
}


function keyPressed() {
	if (keyCode == RIGHT_ARROW) {
		sceneNum++;
		
		background(0);
	}else if(keyCode==LEFT_ARROW){
        sceneNum--;
        background(0);
    }
    
    
}

function mousePressed() {
 if (sceneNum == 2) {
		sceneNum++;
		background(0);
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
    background(0);
}

function keyTyped(){
     if(key==' '){
        save('pattern.png');
        
    }
}
