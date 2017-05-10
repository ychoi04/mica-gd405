/*
Title of the project
Feb 2017

Some notes -- how to use it etc.
*/

var scl;
var displayHelp = true;
var sceneCount = 0;


//variabls specific to sceneIntro
var speedInt = 7;
var minNumInt = 0;
var maxNumInt = 600;
var extendInt = minNumInt + 1;

//variabls specific to sceneDrag
var letterCount = 0;

//variabls specific to sceneDiagram
var trans = 150;


function setup() {
  
  createCanvas(900, 600);
  
}
function draw() {
  
  //scenes
  if (sceneCount == 0) {
    sceneIntro();
  } else if (sceneCount == 1) {
    sceneAlphabet();
  } else if (sceneCount == 2) {
    sceneDiagram();
  } else if (sceneCount == 3) {
    sceneDrag();
  } 
  
  if (sceneCount > 3) {
    sceneCount = 0;
  } else if (sceneCount < 0) {
    sceneCount = 3;
  }
  
  //help displays
  if (displayHelp == true && sceneCount == 3) {
    sceneHelpDrag();
  }
  if (displayHelp == true && sceneCount == 2) {
    sceneHelpDiagram();
  }
  
}

//scenes
function sceneIntro() {
  
  background(247);
  strokeWeight(1.5);
  line(58, 300, 600, 300);
  
  
  //explanatory text
  noStroke();
  textFont("Times");
  textStyle(ITALIC);
  textSize(32);
  text("AMBUSH  is  an  interactive  Blackletter  typeface", 60, 360);
  text("that  uses  geometric  shapes  to construct  malleable", 60, 410);
  text("letterfomrs.  Use  the  Left  and  Right  arrow  keys  to", 60, 460);
  text("navigate  and  the  Space  Bar  for  instructions.", 60, 510);
  

  //ambush animated type
  fill(30, 31, 32);
  stroke(30, 31, 32);
  strokeWeight(2);
  
  push();
  translate(40, 40);
  scl = 0.5;
  scale(scl);
  
  var serif = 680;
  var extend = extendInt;
  
  drawA(0, 0, serif, extend);
  translate(240, 0);
  drawM(0, 0, serif, extend);
  translate(290, 0);
  drawB(0, 0, serif, extend);
  translate(230, 0);
  drawU(0, 0, serif, extend);
  translate(310, 0);
  drawS(0, 0, serif, extend);
  translate(190, 0);
  drawH(0, 0, serif, extend);
  
  pop();
  
  //movement variables
  extendInt = extendInt + speedInt; 

  if ( extendInt > maxNumInt ) { 
    speedInt = speedInt * -1; //reversing speed
  } else if ( extendInt < minNumInt) {
    speedInt = speedInt * -1; //reversing speed
  }
  
  //create cursor
  fill(30, 31, 32);
  stroke(0);
  strokeWeight(3);
  ellipse(mouseX, mouseY, 20, 20);
  noCursor();
  
}
function sceneAlphabet() {
  
  background(30, 31, 32);
  scl = 0.26;
  fill(247);
  stroke(247);
  
  push();
  scale(scl);
  translate(34/scl, 100/scl); //translate whole alphabet
  
  //draw alphabet line 1
  push();
  drawA(0, 0, mouseX, mouseY);
  translate(90/scl, 0);
  drawB(0, 0, mouseX, mouseY);
  translate(86/scl, 0);
  drawC(0, 0, mouseX, mouseY);
  translate(83/scl, 0);
  drawD(0, 0, mouseX, mouseY);
  translate(88/scl, 0);
  drawE(0, 0, mouseX, mouseY);
  translate(80/scl, 0);
  drawF(0, 0, mouseX, mouseY);
  translate(78/scl, 0);
  drawG(0, 0, mouseX, mouseY);
  translate(86/scl, 0);
  drawH(0, 0, mouseX, mouseY);
  translate(94/scl, 0);
  drawI(0, 0, mouseX, mouseY);
  translate(66/scl, 0);
  drawJ(0, 0, mouseX, mouseY);
  translate(81/scl, 0);
  pop();

  //draw alphabet line 2
  push();
  translate(28/scl, 0);
  drawK(0, 116/scl, mouseX, mouseY);
  translate(97/scl, 0);
  drawL(0, 116/scl, mouseX, mouseY);
  translate(74/scl, 0);
  drawM(0, 116/scl, mouseX, mouseY);
  translate(88/scl, 0);
  drawN(0, 116/scl, mouseX, mouseY);
  translate(99/scl, 0);
  drawO(0, 116/scl, mouseX, mouseY);
  translate(82/scl, 0);
  drawP(0, 116/scl, mouseX, mouseY);
  translate(88/scl, 0);
  drawQ(0, 116/scl, mouseX, mouseY);
  translate(82/scl, 0);
  drawR(0, 116/scl, mouseX, mouseY);
  translate(86/scl, 0);
  drawS(0, 116/scl, mouseX, mouseY);
  translate(82/scl, 0);
  pop();
  
  //draw alphabet line 3
  push();
  translate(80/scl, 0);
  drawT(0, 232/scl, mouseX, mouseY);
  translate(75/scl, 0);
  drawU(0, 232/scl, mouseX, mouseY);
  translate(91/scl, 0);
  drawV(0, 232/scl, mouseX, mouseY);
  translate(91/scl, 0);
  drawW(0, 232/scl, mouseX, mouseY);
  translate(91/scl, 0);
  drawX(0, 232/scl, mouseX, mouseY);
  translate(94/scl, 0);
  drawY(0, 232/scl, mouseX, mouseY);
  translate(80/scl, 0);
  drawZ(0, 232/scl, mouseX, mouseY);
  translate(80/scl, 0);
  pop();
  pop();
  
  //cursor
  fill(30, 31, 32);
  stroke(0);
  strokeWeight(1.5);
  ellipse(mouseX, mouseY, 20, 20);
  noCursor();
  
}
function sceneDrag() {
  
  background (30, 31, 32);
  //setting letter to mouse
  push()
  scl = 0.4;
  scale(scl);
  fill(247);
  stroke(247);
  
  var offsetx = 160;
  var offsety = 180;
  var limitx = 80;
  var limitx = 80;
  
  var mouseSerifCon = constrain(mouseX, 100, 800);
  var mouseSerif = map(mouseX, 100, 800, 0, 900);
  var mouseExtendCon = constrain(mouseY, 100, 500);
  var mouseExtend = map(mouseY, 100, 500, 0, 600);
  
  //toggle through letters
    if (letterCount == 0) {
    drawA(mouseX/scl - offsetx, mouseY/scl - offsety, mouseSerif, mouseExtend);
  } else if (letterCount == 1){
    drawB(mouseX/scl - offsetx, mouseY/scl - offsety, mouseX+limitx, mouseY+limitx);
  } else if (letterCount == 2){
    drawC(mouseX/scl - offsetx, mouseY/scl - offsety, mouseX+limitx, mouseY+limitx);
  } else if (letterCount == 3){
    drawD(mouseX/scl - offsetx, mouseY/scl - offsety, mouseX+limitx, mouseY+limitx);
  } else if (letterCount == 4){
    drawE(mouseX/scl - offsetx, mouseY/scl - offsety, mouseX+limitx, mouseY+limitx);
  } else if (letterCount == 5){
    drawF(mouseX/scl - offsetx, mouseY/scl - offsety, mouseX+limitx, mouseY+limitx);
  } else if (letterCount == 6){
    drawG(mouseX/scl - offsetx, mouseY/scl - offsety, mouseX+limitx, mouseY+limitx);
  } else if (letterCount == 7){
    drawH(mouseX/scl - offsetx, mouseY/scl - offsety, mouseX+limitx, mouseY+limitx);
  } else if (letterCount == 8){
    drawI(mouseX/scl - offsetx, mouseY/scl - offsety, mouseX+limitx, mouseY+limitx);
  } else if (letterCount == 9){
    drawJ(mouseX/scl - offsetx, mouseY/scl - offsety, mouseX+limitx, mouseY+limitx);
  } else if (letterCount == 10){
    drawK(mouseX/scl - offsetx, mouseY/scl - offsety, mouseX+limitx, mouseY+limitx);
  } else if (letterCount == 11){
    drawL(mouseX/scl - offsetx, mouseY/scl - offsety, mouseX+limitx, mouseY+limitx);
  } else if (letterCount == 12){
    drawM(mouseX/scl - offsetx, mouseY/scl - offsety, mouseX+limitx, mouseY+limitx);
  } else if (letterCount == 13){
    drawN(mouseX/scl - offsetx, mouseY/scl - offsety, mouseX+limitx, mouseY+limitx);
  } else if (letterCount == 14){
    drawO(mouseX/scl - offsetx, mouseY/scl - offsety, mouseX+limitx, mouseY+limitx);
  } else if (letterCount == 15){
    drawP(mouseX/scl - offsetx, mouseY/scl - offsety, mouseX+limitx, mouseY+limitx);
  } else if (letterCount == 16){
    drawQ(mouseX/scl - offsetx, mouseY/scl - offsety, mouseX+limitx, mouseY+limitx);
  } else if (letterCount == 17){
    drawR(mouseX/scl - offsetx, mouseY/scl - offsety, mouseX+limitx, mouseY+limitx);
  } else if (letterCount == 18){
    drawS(mouseX/scl - offsetx, mouseY/scl - offsety, mouseX+limitx, mouseY+limitx);
  } else if (letterCount == 19){
    drawT(mouseX/scl - offsetx, mouseY/scl - offsety, mouseX+limitx, mouseY+limitx);
  } else if (letterCount == 20){
    drawU(mouseX/scl - offsetx, mouseY/scl - offsety, mouseX+limitx, mouseY+limitx);
  } else if (letterCount == 21){
    drawV(mouseX/scl - offsetx, mouseY/scl - offsety, mouseX+limitx, mouseY+limitx);
  } else if (letterCount == 22){
    drawW(mouseX/scl - offsetx, mouseY/scl - offsety, mouseX+limitx, mouseY+limitx);
  } else if (letterCount == 23){
    drawX(mouseX/scl - offsetx, mouseY/scl - offsety, mouseX+limitx, mouseY+limitx);
  } else if (letterCount == 24){
    drawY(mouseX/scl - offsetx, mouseY/scl - offsety, mouseX+limitx, mouseY+limitx);
  } else if (letterCount == 25){
    drawZ(mouseX/scl - offsetx, mouseY/scl - offsety, mouseX+limitx, mouseY+limitx);
  }
  
  //loop letters round 
  if (letterCount > 25) {
    letterCount = 0;
  } else if (letterCount < 0) {
    letterCount = 25;
  }
  
  pop();
  
}
function sceneDiagram() {
  
  background(247);
  noFill();
  strokeWeight(1.5);
  stroke(0);
  
  push();
  
  scale(0.9);
  translate(50, 10);
  
  //drawing grid
  var lin = 270;
  var lin2 = 90;
  rect(270, 90, 360, 420);
  line(lin, 90, lin, 450);
  line(lin+60, 90, lin+60, 510);
  line(lin+120, 90, lin+120, 510);
  line(lin+180, 90, lin+180, 510);
  line(lin+240, 90, lin+240, 510);
  line(lin+300, 90, lin+300, 510);
  line(270, 150, 630, 150);
  line(270, 210, 630, 210);
  line(270, 270, 630, 270);
  line(270, 330, 630, 330);
  line(270, 390, 630, 390);
  line(270, 450, 630, 450);
  
  //drawing R
  push();
  stroke(0);
  fill(74, 134, 255, trans);
  strokeWeight(3);
  scale(1.5);
  drawR(140, -20, mouseX/0.9, mouseY);
  pop ();
  
  pop();
  
  //cursor
  noCursor();
  fill(30, 31, 32);
  stroke(0);
  strokeWeight(1.5);
  ellipse(mouseX, mouseY, 20, 20);
  
}
function compositions(){
  
}

//help displays
function sceneHelpDrag(){
  noStroke();
  fill(255);
  rect(90, 70, 410, 150);
  fill(0);
  textFont("Times");
  textStyle(ITALIC);
  textSize(20);
  text("Use the up and down arrow keys to change ", 110, 110);
  text("the letter", 110, 140);
  textSize(10);
  text("(PRESS  SPACE  TO  CLOSE  THIS  WINDOW)", 110, 200);
}
function sceneHelpDiagram(){
  
  //window size & colour
  noStroke();
  fill(255);
  rect(90, 70, 480, 150);
  //text
  fill(0);
  textFont("Times");
  textStyle(ITALIC);
  textSize(20);
  text("Use the + and - keys the change the transparency ", 110, 110);
  text("of the shape", 110, 140);
  textSize(10);
  text("(PRESS  SPACE  TO  CLOSE  THIS  WINDOW)", 110, 200);
}

function keyTyped(){
  
  if (keyCode == 32){
    displayHelp = !displayHelp; //toggle display on and off
  }
  
}
function keyPressed() {
  
  //scene-to-scene letter navigation
  if (keyCode == LEFT_ARROW) {
    sceneCount--;
  } else if (keyCode == RIGHT_ARROW) {
    sceneCount++;
  }
  
  //sceneDrag letter navigation
  if (keyCode == UP_ARROW) {
    letterCount--;
  } else if (keyCode == DOWN_ARROW) {
    letterCount++;
  }

  //sceneDiagram transparancy change
  if (keyCode == 187) {
    trans = trans + 20;
  } else if (keyCode == 189) {
    trans = trans - 20;
  }
  
}

//draw letters
function drawA(x, y, serif, extend) {
    
  push();
  translate(x, y);
    
  var mx = constrain(serif, 80, width-80);
  var my = constrain(extend, 80, height-80);
    
  var a1 = map(my, 80, height-80, 0, 40);
  var a2 = map(my, 80, height-80, 0, 60);
  var a3 = map(mx, 80, width-80, -40, 25);
  var a4 = map(mx, 80, width-80, -60, 30);
  var a5 = map(my, 80, height-80, 0, 110);
    
  quad(40-a3, 360, 80-a3, 320, 160+a3, 320, 120+a3, 360);	
	quad(80, 360, 120, 320, 120, 200+a1, 80, 240+a1);
	quad(80-a5/2, 240, 120-a5/2, 200, 200+a5, 200, 160+a5, 240);
	quad(200, 360+a2, 240, 320+a2, 240, 80-a2/4, 200, 120-a2/4); 
	quad(120, 120, 160, 80, 240, 80, 200, 120);
  quad(160-a3, 360, 200-a3, 320, 280+a3, 320, 240+a3, 360);
  quad(80, 160, 160, 80, 200, 120, 120, 200);
    
  pop();
    
    
}
function drawB(x, y, serif, extend) {
    
  push();
  translate(x, y);
  
  var mx = constrain(serif, 80, width-80);
  var my = constrain(extend, 80, height-80);
  var my2 = constrain(extend, 80, 380);
    
  var b1 = map(my, 80, height-80, 0, 110);
  var b2 = map(my2, 80, height-80, 0, 100);
  var b3 = map(mx, 80, width-80, 0, 90);
  var b4 = map(mx, 80, width-80, 0, 50);
  var b5 = map(my2, 80, height-80, 0, 90);
  
  
  quad(80-b3, 360, 120-b3, 320, 240, 320, 200, 360);
  quad(80, 360, 120, 320, 120, 120+b2, 80, 160+b2); 
  quad(40-b4, 120, 80-b4, 80, 200, 80, 160, 120);
  quad(160, 120, 200, 80, 240, 120, 200, 160);
  quad(240, 120, 260, 140, 160-b5, 240+b5, 140-b5, 220+b5);
  quad(160-b1, 240-b1, 200-b1, 200-b1, 280, 280, 240, 320);
  quad(220, 300, 240, 320, 200, 360, 180, 340);
    
  pop();
  
}
function drawC(x, y, serif, extend) {
  
  push();
  translate(x, y);

  var mx = constrain(serif, 80, width - 80);
  var my = constrain(extend, 80, height - 80);
    
  var c1 = map(my, 80, height - 80, -120, 0);
  
  
  quad(120, 360, 40, 280, 80, 240, 160, 320);
  quad(40, 200, 160, 80, 180, 100, 60, 220);
  quad(60, 230, 180+c1, 110-c1, 210+c1, 130-c1, 90, 250);
  quad(160, 80, 240, 160, 200, 200, 120, 120);
  quad(40, 280, 40, 200, 80, 240, 80, 320);
  quad(160, 360, 200, 320, 160, 320, 120, 360);
  quad(160, 360, 140, 340, 220, 260, 240, 280);
  
  pop();
  
}
function drawD(x, y, serif, extend) {
  push();
  translate(x, y);
  
  var mx = constrain(serif, 80, width-80);
  var my = constrain(extend, 80, height-80);
  var my2 = constrain(extend, 80, 380);
    
  var d1 = map(my, 80, height-80, 0, 180);
  var d2 = map(my, 80, height-80, 0, 120);
  var d3 = map(mx, 80, width-80, 0, 40);
  var d4 = map(mx, 80, width-80, 0, 80);
  var d5 = map(my2, 80, height-80, 0, 60);
  
  quad(280, 240, 240, 200, 240, 120, 280, 160); 
  quad(260-d1, 260-d1, 240-d1, 280-d1, 240, 280, 260, 260);
  quad(80, 120+d2, 120, 80+d2, 120, 360+d5, 80, 320+d5);
  quad(160, 120, 200, 80, 280, 160, 240, 200);
  quad(200, 80, 160, 120, 40-d3, 120, 80-d3, 80);
  quad(200, 320, 160, 360, 80-d4, 360, 120-d4, 320);
  quad(140-d5, 340+d5, 260, 220, 280, 240, 160-d5, 360+d5);
  
  pop();
  
}
function drawE(x, y, serif, extend) {
    
    push();
    translate(x, y);
    
    var mx = constrain(serif, 80, width-80);
    var my = constrain(extend, 80, height-80);
    
    var e1 = map(my, 80, height-80, 0, 20);
    var e2 = map(my, 80, height-80, 0, 60);
    var e3 = map(mx, 80, width-80, 0, 40);
    var e4 = map(mx, 80, width-80, 0, 80);
    var e5 = map(my, 80, height-80, 0, 40);
    
    quad(80, 360+e2, 120, 320+e2, 120, 120-e5*2, 80, 160-e5*2);
    quad(40-e3, 120, 80-e3, 80, 260-e5, 80, 220-e5, 120);
    quad(80-e4, 360, 120-e4, 320, 260-e5, 320, 220-e5, 360);
    quad(220+e5, 200, 180+e5, 240, 80-e2*1.3, 240, 120-e2*1.3, 200);
    
    pop();
    
}
function drawF(x, y, serif, extend) {
  
  push();
  translate(x, y);
  
  
  var mx = constrain(serif, 80, 920);
  var my = constrain(extend, 80, 520);
    
  var f1 = map(my, 80, 520, 0, 20);
  var f2 = map(my, 80, 520, 0, 60);
  var f3 = map(mx, 80, 920, 0, 40);
  var f4 = map(mx, 80, 920, -40, 20);
  var f5 = map(my, 80, 520, 0, 40);
  var f6 = map(mx, 80, 920, -40, 40);
  var f7 = map(my, 80, 920, -40, 80);
  
  quad(80, 160-f5*2, 120, 120-f5*2, 120, 320+f2, 80, 360+f2);
  quad(40-f3, 120, 80-f3, 80, 240+f5, 80, 200+f5, 120);
  quad(200+f5, 200, 160+f5, 240, 40-f7, 240, 80-f7, 200);
  quad(160+f4, 320, 120+f4, 360, 40-f6, 360, 80-f6, 320);
  
  
  pop();
  
}
function drawG(x, y, serif, extend) {
  
  push();
  translate(x, y);
    
  var mx = constrain(serif, 80, 920);
  var my = constrain(extend, 80, 520);
    
  var g1 = map(my, 80, 520, 0, 40);
  var g2 = map(my, 80, 520, 0, 60);
  var g3 = map(mx, 80, 920, 0, 30);
  var g4 = map(mx, 80, 920, 0, 60);
  var g5 = map(my, 80, 520, 0, 90);
    
  quad(80+g1, 120, 120+g1, 80, 240+g2, 80, 200+g2, 120);
  quad(240, 80-g3, 200, 120-g3, 200, 120+g4, 240, 80+g4);
  quad(80, 120-g2*1.4, 40, 160-g2*1.4, 40, 240, 80, 200);
	quad(240, 200-g2, 200, 240-g2, 200, 320+g5, 240, 280+g5);
  quad(160-g5*1.3, 240, 200-g5*1.3, 200, 240+g4*1.7, 200, 200+g4*1.7, 240);
  quad(40, 240, 80, 200, 200, 320, 160, 360);
  quad(140, 340, 220, 260, 240, 280, 160, 360);
    
  pop();
    
}
function drawH(x, y, serif, extend) {
    
  push();
  translate(x, y);
    
  var mx = constrain(serif, 80, 920);
  var my = constrain(extend, 80, 520);
    
   
  var a1 = map(my, 80, 520, 0, 80);
  var a2 = map(my, 80, 520, 0, 40);
  var a3 = map(mx, 80, 920, -40, 25);
  var a4 = map(mx, 80, 920, -40, 45);
  var a5 = map(my, 80, 520, 0, 60);
  
  quad(40-a3, 120, 80-a3, 80, 160+a3, 80, 120+a3, 120);
  quad(80, 360+a2, 120, 320+a2, 120, 80+a1, 80, 120+a1);
  quad(40-a3, 360, 80-a3, 320, 160+a4, 320, 120+a4, 360); 
  quad(320+a3, 320, 280+a3, 360, 200-a4, 360, 240-a4, 320); 
  quad(280, 80-a5, 240, 120-a5, 240, 360+a5, 280, 320+a5);
  quad(320+a4, 80, 280+a4, 120, 200-a4, 120, 240-a4, 80);
  quad(240, 200, 200, 240, 80-a2, 240, 120-a2, 200);
    
  pop();
    
}
function drawI(x, y, serif, extend) {

  push();
  translate(x, y);
    
  var mx = constrain(serif, 80, 920);
  var my = constrain(extend, 80, 520);
    
  var i1 = map(my, 80, 520, 0, 80);
  var i2 = map(my, 80, 520, 0, 20);
  var i3 = map(mx, 80, 920, -80, 0);
  var i4 = map(mx, 80, 920, -80, 30);
    
  quad(120, 360+i1, 160, 320+i1, 160, 80-i2, 120, 120-i2);
	quad(40-i4, 120, 80-i4, 80, 240+i3, 80, 200+i3, 120); 	
	quad(40-i4, 360, 80-i4, 320, 240+i3, 320, 200+i3, 360);
    
  pop();
    
}
function drawJ(x, y, serif, extend) {
  
  push();
  translate(x, y);
    
  var mx = constrain(serif, 80, 920);
  var my = constrain(extend, 80, 520);
  var my2 = constrain(extend, 80, 380);
    
  var j1 = map(my, 80, 520, 0, 60);
  var j2 = map(my2, 80, 520, 0, 60);
  var j3 = map(mx, 80, 920, 0, 60);
  var j4 = map(mx, 80, 920, -80, 30);
  var j5 = map(my, 80, 520, 0, 100);
  
  
  quad(40, 120, 80, 80, 240+j3, 80, 200+j3, 120);
  quad(160, 360+j2, 200, 320+j2, 200, 120-j5, 160, 160-j5);
  quad(120, 360, 160, 320, 200, 320, 160, 360)
  quad(40, 280, 80, 240, 160+j1, 320+j1, 120+j1, 360+j1);
    
  pop();
}
function drawK(x, y, serif, extend) {
  
  push();
  translate(x, y);
  
  var mx = constrain(serif, 80, width - 80);
  var my = constrain(extend, 80, height - 80);
  var my2 = constrain(extend, 80, 280);
    
  var k1 = map(my, 80, height - 80, 0, 60);
  var k2 = map(my2, 80, 380, 0, 100);
  var k3 = map(mx, 80, width - 80, -40, 20);
  var k4 = map(mx, 80, width - 80, 0, 20);
  var k6 = map(mx, 80, width - 80, -40, 40);
  var k5 = map(my2, 80, 380, 0, 60);
  
  quad(160-k3, 120, 200-k3, 80, 280+k6, 80, 240+k6, 120);
  quad(120, 80-k1, 80, 120-k1, 80, 360-k5, 120, 320-k5);
  quad(160+k3, 320, 120+k3, 360, 40-k3, 360, 80-k3, 320);
  quad(160+k3, 80, 120+k3, 120, 40-k3, 120, 80-k3, 80);
  quad(280, 240, 240, 280, 240, 360+k1, 280, 320+k1);
  quad(320+k3, 320, 280+k3, 360, 200-k3, 360, 240-k3, 320);
  quad(240, 80, 260, 100, 100, 260, 80, 240);
  quad(160, 200, 200, 160, 280, 240, 240, 280);

  pop();
}
function drawL(x, y, serif, extend) {
  
  push();
  translate(x, y);
  
  var mx = constrain(serif, 80, 920);
  var my = constrain(extend, 80, 520);
    
  var l1 = map(my, 80, 520, 0, 40);
  var l2 = map(my, 80, 520, 0, 60);
  var l3 = map(mx, 80, 920, -40, 60);
  var l4 = map(mx, 80, 920, -40, 30);
  var l5 = map(mx, 80, 920, 0, 40);
  
  quad(40-l5, 360, 80-l5, 320, 240+l1, 320, 200+l1, 360);
  quad(80, 360-l2, 120, 320-l2, 120, 80-l2, 80, 120-l2);
  quad(40-l3, 120, 80-l3, 80, 160+l4, 80, 120+l4, 120);
  
  pop();
}
function drawM(x, y, serif, extend) {

    push();
    translate(x, y);
    
    var mx = constrain(serif, 80, 920);
    var my = constrain(extend, 80, 520);
    var my2 = constrain(extend, 140, 380);
    
    var m1 = map(my, 80, 520, 0, 60);
    var m2 = map(my, 80, 520, 0, 40);
    var m3 = map(mx, 80, 920, 0, 40);
    var m4 = map(mx, 80, 920, -40, 20);
    var m5 = map(my2, 140, 520, 0, 100);
    var m6 = map(my, 80, 520, 0, 100);
    

    
    quad(160, 360+m1, 200, 320+m1, 200, 120+m6, 160, 160+m6);
    quad(80, 360-m1, 120, 320-m1, 120, 80, 80, 120); 
    quad(40-m4, 360, 80-m4, 320, 160+m4, 320, 120+m4, 360); 
    quad(160-m3, 360, 200-m3, 320, 240+m4, 320, 200+m4, 360); 
    quad(240, 360+m2, 280, 320+m2, 280, 120, 240, 160);
    quad(200-m4, 360, 240-m4, 320, 280+m3, 320, 240+m3, 360); 
    quad(120, 120, 160, 80, 200, 120, 160, 160);
    quad(200, 120, 240, 80, 280, 120, 240, 160);
    quad(80, 160, 160, 80, 180, 100, 100, 180);
    quad(160-m5, 160+m5, 240, 80, 260, 100, 180-m5, 180+m5);

    pop();
    
}
function drawN(x, y, serif, extend) {
  
  push();
  translate(x, y);
  
  var mx = constrain(serif, 80, 920);
  var my = constrain(extend, 80, 520);
  var my2 = constrain(extend, 100, 520);
  
  var n1 = map(my, 80, 520, 0, 80);
  var n2 = map(my2, 80, 520, -20, 20);
  var n3 = map(mx, 80, 920, -40, 25);
  var n4 = map(mx, 80, 920, -40, 45);
  var n5 = map(my, 80, 520, 0, 60);
  
  quad(120, 80+n1, 80, 120+n1, 80, 360+n5, 120, 320+n5);
  quad(100+n2, 140+n2, 120+n2, 120+n2, 280, 280, 260, 300);
  quad(280, 80-n1/2, 240, 120-n1/2, 240, 360+n5, 280, 320+n5);
  quad(320+n3, 320, 280+n3, 360, 200-n4, 360, 240-n4, 320);
  quad(160+n3, 320, 120+n3, 360, 40-n3, 360, 80-n3, 320);
  quad(160+n4, 80, 120+n4, 120, 40-n3, 120, 80-n3, 80);
  quad(320+n3, 80, 280+n3, 120, 200-n4, 120, 240-n4, 80);
  
  pop();
}
function drawO(x, y, serif, extend) {
    
    push();
    translate(x, y);
    
    var mx = constrain(serif, 80, 920);
    var my = constrain(extend, 80, 520);
    var my2 = constrain(extend, 80, 440);
  
    var o1 = map(my, 80, 520, 0, 80);
    var o2 = map(my, 80, 520, 0, 30);
    var o3 = map(mx, 80, 920, 0, 80);
    var o4 = map(mx, 80, 920, -60, 30);
    var o5 = map(my2, 80, 520, -120, 60);
    
    
  quad(80, 120, 40, 160, 40, 280-o1, 80, 240-o1);
	quad(160, 80, 120, 120, 80-o3, 120, 120-o3, 80);
  quad(120, 120, 160, 80, 240+o2*1.4, 160+o2*1.4, 200+o2*1.4, 200+o2*1.4);
	quad(240, 240, 200, 200, 200, 120, 240, 160);
  quad(80-o1/2, 240-o1/2, 160, 320, 120, 360, 40-o1/2, 280-o1/2);
  quad(100, 340, 220, 220, 240, 240, 120, 360);
  quad(70, 310, 190+o5, 190-o5, 210+o5, 210-o5, 90, 330);
    
    pop();
    
}
function drawP(x, y, serif, extend) {
  
  push();
  translate(x, y);
  
  var mx = constrain(serif, 80, 920);
  var my = constrain(extend, 80, 520);
  var my2 = constrain(extend, 80, 380);
    
  var p1 = map(my, 80, 520, 0, 60);
  var p2 = map(my, 80, 520, 0, 40);
  var p3 = map(mx, 80, 920, -40, 40);
  var p4 = map(mx, 80, 920, 0, 80);
  var p5 = map(my2, 80, 520, -80, 60);
  
  quad(120, 80+p1, 80, 120+p1, 80, 360+p1, 120, 320+p1);
  quad(200, 80, 160, 120, 40-p3, 120, 80-p3, 80);
  quad(160, 120, 200, 80, 280, 160, 240, 200);
  quad(160+p3, 320, 120+p3, 360, 40-p3, 360, 80-p3, 320);
  quad(180-p2, 220+p2, 260, 140, 280, 160, 200-p2, 240+p2);
  quad(140-p5, 200+p5, 220, 120, 240, 140, 160-p5, 220+p5);
  quad(240-p1, 200, 200-p1, 240, 80-p2*2, 240, 120-p2*2, 200);
  
  pop();
}
function drawQ(x, y, serif, extend) {
  
  push();
  translate(x, y);
  
  var mx = constrain(serif, 80, 920);
  var my = constrain(extend, 80, 520);
  var my2 = constrain(extend, 80, 380);
  var mx2 = constrain(serif, 80, 720);
  
  var q1 = map(my2, 80, 380, 0, 80);
  var q2 = map(my, 80, 520, 0, 60);
  var q3 = map(mx, 80, 920, 0, 60);
  var q4 = map(mx2, 80, 920, 0, 80);
  var q5 = map(my2, 80, 380, 0, 80);
  
  quad(200, 320-q2, 240, 280-q2, 240, 160, 200, 200);
  quad(80, 120, 40, 160, 40, 280-q1, 80, 240-q1);
  quad(160, 80, 120, 120, 80-q3, 120, 120-q3, 80);
  quad(280, 320, 240, 360, 120-q4, 360, 160-q4, 320);
  quad(140, 340, 220, 260, 240, 280, 160, 360);
  quad(40-q2, 280-q2, 80-q2, 240-q2, 160, 320, 120, 360);
  quad(120, 120, 160, 80, 240, 160, 200, 200);
  quad(140+q5, 320-q5, 120+q5, 300-q5, 120, 300, 140, 320);
  
  pop();
}
function drawR(x, y, serif, extend) {
  
  push();
  translate(x, y);
  
  var mx = constrain(serif, 80, 920);
  var my = constrain(extend, 80, 520);
  var my2 = constrain(extend, 80, 380);
    
  var r1 = map(my, 80, 520, 0, 110);
  var r2 = map(my2, 80, 520, 0, 140);
  var r3 = map(mx, 80, 920, -40, 20);
  var r4 = map(mx, 80, 920, 0, 50);
  var r5 = map(my2, 80, 520, 0, 90);
  var r6 = map(my, 80, 520, 0, 80);
  
  quad(120, 80+r2, 80, 120+r2, 80, 360, 120, 320);
  quad(200, 80, 160, 120, 40-r4, 120, 80-r4, 80);
  quad(160, 120, 200, 80, 260, 140, 220, 180);
  quad(140-r5, 220+r5, 240, 120, 260, 140, 160-r5, 240+r5);
  quad(160-r1, 240-r1, 200-r1, 200-r1, 240, 240, 200, 280);
  quad(160+r3, 320, 120+r3, 360, 40-r3, 360, 80-r3, 320);
  quad(240, 240, 200, 280, 200, 360+r6, 240, 320+r6);
  quad(280+r3, 320, 240+r3, 360, 160-r3, 360, 200-r3, 320);
  
  pop();
}
function drawS(x, y, serif, extend) {
  
  push();
  translate(x, y);
  
  var mx = constrain(serif, 80, 920);
  var my = constrain(extend, 80, 520);
  var my2 = constrain(extend, 300, 520);
 
  var s1 = map(my, 80, 520, 0, 60);
  var s2 = map(my, 80, 520, 0, 40);
  var s3 = map(mx, 80, 920, 0, 40);
  var s4 = map(mx, 80, 920, 0, 80);
  
  quad(80-s4, 120, 120-s4, 80, 200, 80, 160, 120);
  quad(200, 80-s3, 160, 120-s3, 160, 120+s4, 200, 80+s4);
  quad(40, 360+s1, 80, 320+s1, 80, 240-s1, 40, 280-s1);
  quad(40-s3, 360, 80-s3, 320, 200, 320, 160, 360);
  quad(40, 160, 80, 120, 240, 280, 200, 320);
  quad(220, 260, 240, 280, 160, 360, 140, 340);
 
  pop();
 
}
function drawT(x, y, serif, extend) {
  
  push();
  translate(x, y);
  
  var mx = constrain(serif, 80, 920);
  var my = constrain(extend, 80, 520);
  var my2 = constrain(extend, 80, 380);
    
  var t1 = map(my, 80, 520, 0, 120);
  var t2 = map(my2, 80, 520, 0, 40);
  var t3 = map(mx, 80, 920, 0, 60);
  var t4 = map(mx, 80, 920, 0, 60);
  var t5 = map(my2, 80, 520, 0, 60);
  var t6 = map(my, 80, 520, 0, 80)
  
  quad(120, 360+t5, 160, 320+t5, 160, 120-t1, 120, 160-t1);
  quad(40-t6, 120, 80-t6, 80, 260+t2, 80, 220+t2, 120);
  quad(120-t3, 360, 160-t3, 320, 160+t3, 320, 120+t3, 360);
  
  
  pop();
}
function drawU(x, y, serif, extend) {

    push();
    translate(x, y);
    
    var mx = constrain(serif, 80, 920);
    var my = constrain(extend, 80, 520);
    var my2 = constrain(extend, 80, 340);
    
    var u1 = map(my, 80, 520, 0, 60);
    var u2 = map(my2, 80, 340, -100, 0);
    var u3 = map(mx, 80, 920, -40, 50);
    var u4 = map(mx, 80, 920, -40, 40);
    var u5 = map(mx, 80, 920, -40, 20);
    
    quad(240, 360, 280, 320, 280, 80+u1, 240, 120+u1); 
    quad(40-u5, 120, 80-u5, 80, 160+u4, 80, 120+u4, 120);
    quad(200-u3, 120, 240-u3, 80, 320+u5, 80, 280+u5, 120);
    quad(200-u5, 360, 240-u5, 320, 320+u5, 320, 280+u5, 360);
    quad(80, 280, 120, 240, 120, 80-u1, 80, 120-u1);
    quad(80, 280, 120, 240, 200, 320, 160, 360);
    quad(160, 360, 140, 340, 260, 220, 280, 240);
    quad(160-u2, 300+u2, 140-u2, 280+u2, 260, 160, 280, 180);
    
    pop();
}
function drawV(x, y, serif, extend) {
  
  push();
  translate(x, y);
  
  var mx = constrain(serif, 80, width - 80);
  var my = constrain(extend, 80, height - 80);
  var my2 = constrain(extend, 80, 280);
    
  var v1 = map(my, 80, height - 80, 0, 60);
  var v2 = map(my2, 80, 380, 0, 100);
  var v3 = map(mx, 80, width - 80, -40, 20);
  var v4 = map(mx, 80, width - 80, 0, 20);
  var v6 = map(mx, 80, width - 80, -40, 40);
  var v5 = map(my2, 80, 380, 0, 60);
  
  quad(240, 280, 280, 240, 280, 80+v5, 240, 120+v5);
  quad(120, 240, 80, 280, 80, 120-v1, 120, 80-v1);
  quad(320+v3, 80, 280+v3, 120, 200-v6, 120, 240-v6, 80, 320);
  quad(40-v3, 120, 80-v3, 80, 160+v3, 80, 120+v3, 120);
  quad(80, 280, 120, 240, 200, 320, 160, 360);
  quad(260, 220, 280, 240, 160, 360, 140, 340);
  
  
  pop();
}
function drawW(x, y, serif, extend) {
  
  push();
  translate(x, y);
    
  var mx = constrain(serif, 80, 920);
  var my = constrain(extend, 80, 520);
  var my2 = constrain(extend, 140, 380);
    
  var w1 = map(my, 80, 520, 0, 60);
  var w2 = map(my, 80, 520, 0, 40);
  var w3 = map(mx, 80, 920, 0, 40);
  var w4 = map(mx, 80, 920, -40, 20);
  var w5 = map(my2, 140, 520, 0, 100);
  var w6 = map(my, 80, 520, 0, 100);
  
  quad(200, 80-w1, 160, 120-w1, 160, 320-w6, 200, 280-w6);
  quad(280, 80+w1, 240, 120+w1, 240, 320, 280, 280);
  quad(120, 80-w2, 80, 120-w2, 80, 320, 120, 280);
  quad(320+w4, 80, 280+w4, 120, 200-w4, 120, 240-w4, 80);
  quad(200+w3, 80, 160+w3, 120, 120-w4, 120, 160-w4, 80);
  
  quad(120+w3, 80, 80+w3, 120, 40-w4, 120, 80-w4, 80);
  quad(160, 320, 200, 280, 240, 320, 200, 360);
  quad(180, 340, 260, 260, 280, 280, 200, 360);
  quad(80, 320, 120, 280, 160, 320, 120, 360);
  quad(100, 340, 180+w5, 260-w5, 200+w5, 280-w5, 120, 360);
  
  pop();
  
}
function drawX(x, y, serif, extend) {
  
  push();
  translate(x, y);
    
  var mx = constrain(serif, 80, 920);
  var my = constrain(extend, 80, 520);
  var my2 = constrain(extend, 120, 400);
    
  var x1 = map(my2, 120, 400, 0, 140);
  var x2 = map(my, 80, 520, -40, 20);
  var x3 = map(mx, 80, 920, 0, 60);
  var x4 = map(mx, 80, 920, 0, 30);
  var x5 = map(my2, 140, 520, 0, 100);
  var x6 = map(my, 80, 520, 0, 100);
  
  quad(120+x3, 320, 80+x3, 360, 40-x4, 360, 80-x4, 320);
  quad(320, 320, 280, 360, 200, 360, 240, 320);
  quad(240-x3, 120, 280-x3, 80, 320+x4, 80, 280+x4, 120);
  quad(160, 80, 120, 120, 40, 120, 80, 80);
  quad(80, 320, 200, 200, 220, 220, 100, 340);
  quad(80+x2, 160+x2, 120+x2, 120+x2, 320, 320, 280, 360);
  quad(140, 220, 260, 100, 280, 120, 160, 240);
  quad(200-x1, 360-x1, 220-x1, 340-x1, 220, 340, 200, 360);
  pop();
  
}
function drawY(x, y, serif, extend) {
  
  push();
  translate(x, y);
  
  var mx = constrain(serif, 80, width - 80);
  var my = constrain(extend, 80, height - 80);
  var my2 = constrain(extend, 80, 280);
    
  var y1 = map(my, 80, height - 80, 0, 60);
  var y2 = map(my2, 80, 380, 0, 100);
  var y3 = map(mx, 80, width - 80, -40, 20);
  var y4 = map(mx, 80, width - 80, -40, 10);
  var y6 = map(mx, 80, width - 80, -40, 40);
  var y5 = map(my2, 80, 380, 0, 60);
  
  quad(120, 80-y1, 80, 120-y1, 80, 200, 120, 160);
  quad(200, 120-y1, 200, 360, 240, 320, 240, 80-y1);
  quad(240, 200, 220, 180, 180, 220, 200, 240);
  quad(160, 280, 200, 240, 120, 160, 80, 200);
  quad(240, 320, 200, 360, 40, 360, 80, 320);
  quad(160+y4, 80, 120+y4, 120, 40-y3, 120, 80-y3, 80);
  quad(280+y3, 80, 240+y3, 120, 160-y3, 120, 200-y3, 80);
  
  pop();
}
function drawZ(x, y, serif, extend) {
  
  push();
  translate(x, y);
  
  var mx = constrain(serif, 80, width - 80);
  var my = constrain(extend, 80, height - 80);
  var my2 = constrain(extend, 80, 280);
    
  var y1 = map(my, 80, height - 80, 0, 60);
  var y2 = map(my2, 80, 380, 0, 100);
  var y3 = map(mx, 80, width - 80, -40, 20);
  var y4 = map(mx, 80, width - 80, -40, 10);
  var y6 = map(mx, 80, width - 80, -40, 40);
  var y5 = map(my2, 80, 380, 0, 60);
  
  quad(280, 80, 240, 120, 40, 120, 80, 80);
  quad(240, 120, 280, 80, 280, 120, 240, 160);
  quad(280, 320, 240, 360, 40, 360, 80, 320);
  quad(200-y1, 200+y1, 180-y1, 180+y1, 260, 100, 280, 120);
  quad(200+y1, 200-y1, 240+y1, 240-y1, 120, 360, 80, 320);
  
  pop();
}