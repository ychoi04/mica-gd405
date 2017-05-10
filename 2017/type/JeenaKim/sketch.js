var x = 0;
var y = 0;
var slant = 100;
var sw =1;
var s = 1;
var t;
var centerX = 0.0, centerY = 0.0;
var r = 255 * noise(t+10);
var g = 255 * noise(t+15);
var b = 255 * noise(t+20);



function setup() {
    
    createCanvas(900, 600);
    t = 0.5;
    scale(0.45);
  drawT(600, 400); 
  drawY(750, 400); 
  drawP(950, 400);   
  drawE(1150, 400);   
      
  drawW(600, 600); 
  drawI(800, 600); 
  drawS(1000, 600);   
  drawH(1150, 600);
    
}

function keyTyped() {
    strokeWeight(s+5);
    strokeJoin(ROUND);
    
    if (key =='a') {
        drawA(x, y);
    x= x+ 200; } 
    
    else if (key =='b') { 
        drawB (x, y);
    x = x +200;}
    
    else if (key =='c') { 
        drawC (x, y);
    x = x +200;}
    
    else if (key =='d') { 
        drawD (x, y);
    x = x +200;}
    
    else if (key =='e') { 
        drawE (x, y);
    x = x +200;}
    
      else if (key =='f') { 
        drawF (x, y);
    x = x +200;}
    
    else if (key =='g') { 
        drawG (x, y);
    x = x +200;}
    
       else if (key =='h') { 
        drawH (x, y);
    x = x +200;}
    
    else if (key =='i') { 
        drawI (x, y);
    x = x +200;}
    
     else if (key =='j') { 
        drawJ (x, y);
    x = x +200;}
    
     else if (key =='k') { 
        drawK (x, y);
    x = x +200;}
    
     else if (key =='l') { 
        drawL (x, y);
    x = x +200;}
    
    else if (key =='n') { 
        drawN (x, y);
    x = x +200;}
    
    else if (key =='o') { 
        drawO (x, y);
    x = x +200;}
    
    else if (key =='m') { 
        drawM (x, y);
    x = x +200;}
    
    else if (key =='p') { 
        drawP (x, y);
    x = x +200;}
    
    else if (key =='q') { 
        drawQ (x, y);
    x = x +200;}
    
     else if (key =='r') { 
        drawR (x, y);
    x = x +200;}
    
    else if (key =='s') { 
        drawS (x, y);
    x = x +200;}
    
    else if (key =='t') { 
        drawT (x, y);
    x = x +200;}
    
      else if (key =='u') { 
        drawU (x, y);
    x = x +200;}
    
     else if (key =='y') { 
        drawY (x, y);
    x = x +200;}
    
    else if (key =='v') { 
        drawV (x, y);
    x = x +200;}
    
    else if (key =='w') { 
        drawW (x, y);
    x = x +200;}
    
     else if (key =='x') { 
        drawX (x, y);
    x = x +200;}
    
    
     else if (key =='z') { 
        drawZ (x, y);
    x = x +200;}
    
       else if (key ==' ') { 
    x = x +200;}
    
  
     if ( x > 1800) {
        y = y + 100;
        x = 0;
        
    }
}


function draw(){
  background(0, 3);
    
  scale(0.45);
  strokeWeight(0.1);
//  drawT(mouseX, mouseY); 
//  drawY(mouseX+150, mouseY); 
//  drawP(mouseX+350, mouseY);   
//  drawE(mouseX+550, mouseY);   
//      
//  drawW(mouseX, mouseY+170); 
//  drawI(mouseX+200, mouseY+170); 
//  drawS(mouseX+400, mouseY+170);   
//  drawH(mouseX+570, mouseY+170);     
  t = t + 0.01;
}
  
function drawA(x, y, s){
    push();
    translate(x,y);
    var r = 255 * noise(t+10);
    var g = 255 * noise(t+15);
    var b = 255 * noise(t+20);
    fill(r, g, b);
    scale(s);
    
    beginShape();
    vertex(0, 50);
    vertex(100, 0);
    vertex(200, 50);
    vertex(100, 100);
    vertex(100, 200);
    vertex(0, 150);

    beginContour();
    vertex(100, 40);
    vertex(40, 70);
    vertex(40, 130);
    vertex(80, 150);
    vertex(80, 90);
    vertex(140, 60);
    endContour();
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(20, 60);
    vertex(100, 20);
    vertex(100, 40);
    vertex(40, 70);
    vertex(40, 130);
    vertex(80, 150);
    vertex(80, 170);
    vertex(20, 140);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(100, 20);
    vertex(160, 50);
    vertex(140, 60);
    vertex(100, 40);
    endShape(CLOSE);

    beginShape();
    fill(g, r, b);
    vertex(100, 100);
    vertex(200, 50);
    vertex(200, 150);
    vertex(180, 160);
    vertex(180, 80);
    vertex(120, 110);
    vertex(120, 190);
    vertex(100, 200);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(160, 90);
    vertex(180, 80);
    vertex(180, 160);
    vertex(160, 150);
    endShape(CLOSE);
    pop();     
}

function drawB(x,y,s) {
    push();
    translate(x,y);
    var r = 255 * noise(t+10);
    var g = 255 * noise(t+15);
    var b = 255 * noise(t+20);
    fill(r, g, b);
    scale(s);
    
    beginShape();
    vertex(0, 50);
    vertex(100, 0);
    vertex(200, 50);
    vertex(180, 60);
    vertex(100, 20);
    vertex(40, 50);
    vertex(120, 90);
    vertex(100, 100);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(0,50);
    vertex(100, 100);
    vertex(100, 200);
    vertex(0, 150);

    beginContour();
    vertex(70, 110);
    vertex(30, 90);
    vertex(30, 130);
    vertex(70, 150);
    endContour();
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(30, 90);
    vertex(40, 95);
    vertex(40, 125);
    vertex(70, 140);
    vertex(70, 150);
    vertex(30, 130);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(40, 50);
    vertex(100, 20);
    vertex(100, 40);
    vertex(60, 60);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(100, 20);
    vertex(180, 60);
    vertex(180, 80);
    vertex(100, 40);
    endShape();
    
    beginShape();
    fill(b, g, r);
    vertex(180, 60);
    vertex(200, 50);
    vertex(200, 70);
    vertex(180, 80);
    endShape();
    
    beginShape();
    fill(b, g, r);
    vertex(100, 100);
    vertex(120, 90);
    vertex(120, 190);
    vertex(100, 200);
    endShape();    
    pop();
}

function drawC(x,y,s){

    push();
    translate(x,y);
    scale(s);
    var r = 255 * noise(t+10);
    var g = 255 * noise(t+15);
    var b = 255 * noise(t+20);
    
    beginShape();
    fill(r, g, b);
    vertex(0, 50);
    vertex(100, 0);
    vertex(200, 50);
    vertex(180, 60);
    vertex(100, 20);
    vertex(20, 60);
    vertex(20, 140);
    vertex(100, 180);
    vertex(100, 200);
    vertex(0, 150);
    endShape(CLOSE);

    beginShape();
    fill(g, r, b);
    vertex(20, 60);
    vertex(100, 20);
    vertex(100, 40);
    vertex(40, 70);
    vertex(40, 130);
    vertex(120, 170);
    vertex(100, 180);
    vertex(20, 140);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(100, 20);
    vertex(180, 60);
    vertex(180, 80);
    vertex(100, 40);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(100, 180);
    vertex(120, 170);
    vertex(120, 190);
    vertex(100, 200);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(180, 60);
    vertex(200, 50);
    vertex(200, 70);
    vertex(180, 80);
    endShape(CLOSE);

    pop();
}

function drawD(x,y,s){

    push();
    translate(x,y);
    scale(s);
    var r = 255 * noise(t+10);
    var g = 255 * noise(t+15);
    var b = 255 * noise(t+20);
    
    beginShape();
    fill(g, r, b);
    vertex(0,50);
    vertex(100, 100);
    vertex(100, 200);
    vertex(0, 150);

    beginContour();
    vertex(70, 110);
    vertex(30, 90);
    vertex(30, 130);
    vertex(70, 150);
    endContour();
    endShape(CLOSE);
    
    beginShape();
    fill(r, g, b);
    vertex(80, 10);
    vertex(100, 0);
    vertex(200, 50);
    vertex(100, 100);
    vertex(0, 50);
    vertex(20, 40);
    vertex(100, 80);
    vertex(160, 50);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(80, 10);
    vertex(160, 50);
    vertex(140, 60);
    vertex(80, 30);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(100, 100);
    vertex(200, 50);
    vertex(200, 70);
    vertex(120, 110);
    vertex(120, 190);
    vertex(100, 200);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(30, 90);
    vertex(40, 95);
    vertex(40, 125);
    vertex(70, 140);
    vertex(70, 150);
    vertex(30, 130);
    endShape(CLOSE);
     pop();
}

function drawE(x,y,s){

    push();
    translate(x,y);
    scale(s);
    var r = 255 * noise(t+10);
    var g = 255 * noise(t+15);
    var b = 255 * noise(t+20);
    beginShape();
    
    fill(r, g, b);
    vertex(100, 0);
    vertex(200, 50);
    vertex(100, 100);
    vertex(0, 50);
    
    beginContour();
    vertex(100, 25);
    vertex(50, 50);
    vertex(100, 75);
    vertex(150, 50);
    endContour();
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(50, 50);
    vertex(100, 25);
    vertex(100, 40);
    vertex(66, 58);
    endShape(CLOSE);
    
    beginShape();
    fill(178, 67, 255);
    vertex(100, 25);
    vertex(150, 50);
    vertex(134, 58);
    vertex(100, 40);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(0, 50);
    vertex(100, 100);
    vertex(100, 120);
    vertex(20, 80);
    vertex(20, 140);
    vertex(100, 180);
    vertex(100, 200);
    vertex(0, 150);
    endShape(CLOSE);
    
    beginShape();
    fill(r, g, b);
    vertex(20, 80);
    vertex(40, 90);
    vertex(40, 130);
    vertex(100, 160);
    vertex(130, 145);
    vertex(150, 155);
    vertex(100, 180);
    vertex(20, 140);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(100, 180);
    vertex(150, 155);
    vertex(150, 175);
    vertex(100, 200);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(100, 100);
    vertex(200, 50);
    vertex(200, 70);
    vertex(100, 120);
    endShape(CLOSE);
    
      pop();
}

function drawF(x,y,s){

    push();
    translate(x,y);
    scale(s);
    var r = 255 * noise(t+10);
    var g = 255 * noise(t+15);
    var b = 255 * noise(t+20);
    
    
    beginShape();
    fill(r, g, b);
    vertex(0, 60);
    vertex(20, 50);
    vertex(50, 65);
    vertex(130, 25);
    vertex(200, 60);
    vertex(180, 70);
    vertex(130, 45);
    vertex(70, 75);
    vertex(120, 100);
    vertex(100, 110);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(0, 60);
    vertex(100, 110);
    vertex(100, 130);
    vertex(50, 105);
    vertex(50, 185);
    vertex(30, 175);
    vertex(30, 95);
    vertex(0, 80);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(130, 45);
    vertex(180, 70);
    vertex(180, 90);
    vertex(130, 65);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(70, 75);
    vertex(130, 45);
    vertex(130, 65);
    vertex(90, 85);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(180, 70);
    vertex(200, 60);
    vertex(200, 80);
    vertex(180, 90);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(100, 110);
    vertex(120, 100);
    vertex(120, 120);
    vertex(100, 130);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(50, 105);
    vertex(70, 115);
    vertex(70, 175);
    vertex(50, 185);
    endShape(CLOSE);
    
    pop();
}

function drawG(x,y,s){

    push();
    translate(x,y);
    scale(s);
    var r = 255 * noise(t+10);
    var g = 255 * noise(t+15);
    var b = 255 * noise(t+20);
    
    beginShape();
    fill(r, g, b);
    vertex(100, 0);
    vertex(200, 50);
    vertex(100, 100);
    vertex(0, 50);
    
    beginContour();
    vertex(100, 25);
    vertex(50, 50);
    vertex(100, 75);
    vertex(150, 50);
    endContour();
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(50, 50);
    vertex(100, 25);
    vertex(100, 40);
    vertex(66, 58);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(100, 25);
    vertex(150, 50);
    vertex(134, 58);
    vertex(100, 40);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(0, 50);
    vertex(100, 100);
    vertex(100, 120);
    vertex(0, 70);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(100, 100);
    vertex(200, 50);
    vertex(200, 150);
    vertex(100, 200);
    vertex(100, 180);
    vertex(180, 140);
    vertex(180, 80);
    vertex(100, 120);
    endShape(CLOSE);
    
    beginShape();
    fill(r, g, b);
    vertex(50, 155);
    vertex(70, 145);
    vertex(100, 160);
    vertex(160, 130);
    vertex(160, 90);
    vertex(180, 80);
    vertex(180, 140);
    vertex(100, 180);
    vertex(50, 155);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(50, 155);
    vertex(100, 180);
    vertex(100, 200);
    vertex(50, 175);
    endShape(CLOSE);
}
    
function drawH(x,y,s){

    push();
    translate(x,y);
    scale(s);
    var r = 255 * noise(t+10);
    var g = 255 * noise(t+15);
    var b = 255 * noise(t+20);
    

    beginShape();
    fill(r, g, b);
    vertex(30, 50);
    vertex(130, 0);
    vertex(150, 10);
    vertex(70, 50);
    vertex(150, 90);
    vertex(130, 100);
    endShape(CLOSE);
    
    
    beginShape();
    fill(g, r, b);
    vertex(30, 50);
    vertex(130, 100);
    vertex(130, 200);
    vertex(110, 190);
    vertex(110, 110);
    vertex(50, 80);
    vertex(50, 160);
    vertex(30, 150);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(50, 80);
    vertex(70, 90);
    vertex(70, 150);
    vertex(50, 160);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(130, 100);
    vertex(150, 90);
    vertex(150, 190);
    vertex(130, 200);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(70, 50);
    vertex(150, 10);
    vertex(150, 30);
    vertex(90, 60);
    endShape(CLOSE);
    
    
    pop();
}
    
function drawI(x,y,s){

    push();
    translate(x,y);
    scale(s);
    var r = 255 * noise(t+10);
    var g = 255 * noise(t+15);
    var b = 255 * noise(t+20);
    
    
    beginShape();
    fill(r, g, b);
    vertex(100, 0);
    vertex(200, 50);
    vertex(100, 100);
    vertex(0, 50);
    
    beginContour();
    vertex(100, 25);
    vertex(50, 50);
    vertex(100, 75);
    vertex(150, 50);
    endContour();
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(50, 50);
    vertex(100, 25);
    vertex(100, 40);
    vertex(66, 58);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(100, 25);
    vertex(150, 50);
    vertex(134, 58);
    vertex(100, 40);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(0, 50);
    vertex(100, 100);
    vertex(100, 200);
    vertex(0, 150);
    vertex(0, 130);
    vertex(80, 170);
    vertex(80, 110);
    vertex(0, 70);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(100, 100);
    vertex(200, 50);
    vertex(200, 70);
    vertex(120, 110);
    vertex(120, 170);
    vertex(200, 130);
    vertex(200, 150);
    vertex(100, 200);
    endShape(CLOSE);
    
    beginShape();
    fill(r, g, b);
    vertex(0, 130);
    vertex(20, 120);
    vertex(80, 150);
    vertex(80, 170);
    endShape(CLOSE);
    
    beginShape();
    fill(r, g, b);
    vertex(120, 150);
    vertex(180, 120);
    vertex(200, 130);
    vertex(120, 170);
    endShape(CLOSE);
    
    pop();
}

function drawJ(x,y,s){

    push();
    translate(x,y);
    scale(s);
    var r = 255 * noise(t+10);
    var g = 255 * noise(t+15);
    var b = 255 * noise(t+20);
    
    beginShape();
    fill(r, g, b);
    vertex(100, 0);
    vertex(200, 50);
    vertex(100, 100);
    vertex(0, 50);
    
    beginContour();
    vertex(100, 25);
    vertex(50, 50);
    vertex(100, 75);
    vertex(150, 50);
    endContour();
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(50, 50);
    vertex(100, 25);
    vertex(100, 40);
    vertex(66, 58);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(100, 25);
    vertex(150, 50);
    vertex(134, 58);
    vertex(100, 40);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(0, 50);
    vertex(100, 100);
    vertex(100, 200);
    vertex(0, 150);
    vertex(0, 130);
    vertex(80, 170);
    vertex(80, 110);
    vertex(0, 70);
    endShape(CLOSE);
    
    beginShape();
    fill(r, g, b);
    vertex(0, 130);
    vertex(40, 110);
    vertex(60, 120);
    vertex(40, 130);
    vertex(80, 150);
    vertex(80, 170);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(40, 130);
    vertex(60, 120);
    vertex(60, 140);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(100, 100);
    vertex(200, 50);
    vertex(200, 70);
    vertex(120, 110);
    vertex(120, 190);
    vertex(100, 200);
    endShape(CLOSE);
    
    
    pop();
}

function drawK(x,y,s){

    push();
    translate(x,y);
    scale(s);
    var r = 255 * noise(t+10);
    var g = 255 * noise(t+15);
    var b = 255 * noise(t+20);
    
    beginShape();
    fill(r, g, b);
    vertex(0, 50);
    vertex(100, 0);
    vertex(120, 10);
    vertex(40, 50);
    vertex(100, 80);
    vertex(180, 40);
    vertex(200, 50);
    vertex(100, 100);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(120, 10);
    vertex(120, 30);
    vertex(60, 60);
    vertex(40, 50);
    endShape(CLOSE);
    
    beginShape();
    fill(69, 204, 255);
    vertex(0, 50);
    vertex(100, 100);
    vertex(100, 200);
    vertex(80, 190);
    vertex(80, 110);
    vertex(0, 70);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(100, 100);
    vertex(200, 50);
    vertex(200, 70);
    vertex(120, 110);
    vertex(120, 170);
    vertex(200, 130);
    vertex(200, 150);
    vertex(100, 200);
    endShape(CLOSE);
    
    beginShape();
    fill(r, g, b);
    vertex(120, 150);
    vertex(160, 130);
    vertex(140, 120);
    vertex(160,110);
    vertex(200, 130);
    vertex(120, 170);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(140, 120);
    vertex(160, 130);
    vertex(140, 140);
    endShape(CLOSE);
    
    pop();
}

function drawL(x,y,s){

    push();
    translate(x,y);
    scale(s);
    var r = 255 * noise(t+10);
    var g = 255 * noise(t+15);
    var b = 255 * noise(t+20);
    
    beginShape();
    fill(r, g, b);
    vertex(100, 0);
    vertex(120, 10);
    vertex(20, 60);
    vertex(20, 140);
    vertex(100, 180);
    vertex(200, 130);
    vertex(200, 150);
    vertex(100, 200);
    vertex(0, 150);
    vertex(0, 50);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(20, 60);
    vertex(120, 10);
    vertex(120, 30);
    vertex(40, 70);
    vertex(40, 130);
    vertex(20, 140);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(40, 130);
    vertex(100, 160);
    vertex(180, 120);
    vertex(200, 130);
    vertex(100, 180);
    vertex(20, 140);
    endShape(CLOSE);
    
    
    
    pop();
}

function drawM(x,y,s){

    push();
    translate(x,y);
    scale(s);
    var r = 255 * noise(t+10);
    var g = 255 * noise(t+15);
    var b = 255 * noise(t+20);
    
    beginShape();
    fill(r, g, b);
    vertex(0, 50);
    vertex(100, 0);
    vertex(200, 50);
    vertex(120, 90);
    vertex(100, 80);
    vertex(160, 50);
    vertex(100, 20);
    vertex(20, 60);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(0, 50);
    vertex(20, 60);
    vertex(20, 160);
    vertex(0, 150);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(20, 60);
    vertex(100, 20);
    vertex(100, 40);
    vertex(40, 70);
    vertex(40, 150);
    vertex(20, 160);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(100, 20);
    vertex(160, 50);
    vertex(140, 60);
    vertex(100, 40);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(100, 80);
    vertex(120, 90);
    vertex(120, 110);
    vertex(100, 100);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(80, 170);
    vertex(100, 180);
    vertex(100, 200);
    vertex(80, 190);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(160, 90);
    vertex(180, 80);
    vertex(180, 140);
    vertex(160, 130);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(100, 180);
    vertex(180, 140);
    vertex(180, 80);
    vertex(120, 110);
    vertex(120, 90);
    vertex(200, 50);
    vertex(200, 150);
    vertex(100, 200);
    endShape(CLOSE);
    
    beginShape();
    fill(r, g, b);
    vertex(80, 170);
    vertex(160, 130);
    vertex(180, 140);
    vertex(100, 180);
    endShape(CLOSE);
    
    pop();
    
}

function drawN(x,y,s){

    push();
    translate(x,y);
    scale(s);
    var r = 255 * noise(t+10);
    var g = 255 * noise(t+15);
    var b = 255 * noise(t+20);
    
    beginShape();
    fill(r, g, b);
    vertex(0, 50);
    vertex(100, 0);
    vertex(200, 50);
    vertex(100, 100);
    vertex(80, 90);
    vertex(160, 50);
    vertex(100, 20);
    vertex(20, 60);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(0, 50);
    vertex(20, 60);
    vertex(20, 160);
    vertex(0, 150);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(80, 90);
    vertex(100, 100);
    vertex(100, 200);
    vertex(80, 190);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(100, 20);
    vertex(160, 50);
    vertex(140, 60);
    vertex(100, 40);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(20, 60);
    vertex(100, 20);
    vertex(100, 40);
    vertex(40, 70);
    vertex(40, 150);
    vertex(20, 160);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(100, 100);
    vertex(200, 50);
    vertex(200, 70);
    vertex(120, 110);
    vertex(120, 190);
    vertex(100, 200);
    endShape(CLOSE);
    
    pop();
}

function drawO(x, y,s){
    push();
    translate(x,y);
    fill(255, 212, 50);
    scale(s);
    var r = 255 * noise(t+10);
    var g = 255 * noise(t+15);
    var b = 255 * noise(t+20);
    
    beginShape();
    vertex(0, 50);
    vertex(100, 0);
    vertex(200, 50);
    vertex(100, 100);
    vertex(100, 200);
    vertex(0, 150);

    beginContour();
    vertex(100, 40);
    vertex(40, 70);
    vertex(40, 130);
    vertex(80, 150);
    vertex(80, 90);
    vertex(140, 60);
    endContour();
    endShape(CLOSE);
    
    beginShape();
    fill(69, 204, 255);
    vertex(20, 60);
    vertex(100, 20);
    vertex(100, 40);
    vertex(40, 70);
    vertex(40, 130);
    vertex(80, 150);
    vertex(80, 170);
    vertex(20, 140);
    endShape(CLOSE);
    
    beginShape();
    fill(178, 67, 255);
    vertex(100, 20);
    vertex(160, 50);
    vertex(140, 60);
    vertex(100, 40);
    endShape(CLOSE);

    beginShape();
    fill(69, 204, 255);
    vertex(100, 100);
    vertex(200, 50);
    vertex(200, 70);
    vertex(120, 110);
    vertex(120, 190);
    vertex(100, 200);
    endShape(CLOSE);
    
}

function drawP(x,y,s){

    push();
    translate(x,y);
    scale(s);
    var r = 255 * noise(t+10);
    var g = 255 * noise(t+15);
    var b = 255 * noise(t+20);
    
    
    beginShape();
    fill(r, g, b);
    vertex(100, 0);
    vertex(200, 50);
    vertex(100, 100);
    vertex(0, 50);
    
    beginContour();
    vertex(100, 25);
    vertex(50, 50);
    vertex(100, 75);
    vertex(150, 50);
    endContour();
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(50, 50);
    vertex(100, 25);
    vertex(100, 40);
    vertex(66, 58);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(100, 25);
    vertex(150, 50);
    vertex(134, 58);
    vertex(100, 40);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(0, 50);
    vertex(100, 100);
    vertex(100, 120);
    vertex(20, 80);
    vertex(20, 140);
    vertex(100, 180);
    vertex(100, 200);
    vertex(0, 150);
    endShape(CLOSE);
    
    beginShape();
    fill(r,g, b);
    vertex(20, 80);
    vertex(40, 90);
    vertex(40, 130);
    vertex(120, 170);
    vertex(100, 180);
    vertex(20, 140);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(100, 100);
    vertex(200, 50);
    vertex(200, 70);
    vertex(100, 120);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(100, 180);
    vertex(120, 170);
    vertex(120, 190);
    vertex(100, 200);
    endShape(CLOSE);
    
      pop();
}

function drawQ(x,y,s){

    push();
    translate(x,y);
    scale(s);
    var r = 255 * noise(t+10);
    var g = 255 * noise(t+15);
    var b = 255 * noise(t+20);
    
    beginShape();
    fill(r, g, b);
    vertex(100, 0);
    vertex(200, 50);
    vertex(100, 100);
    vertex(0, 50);
    
    beginContour();
    vertex(100, 25);
    vertex(50, 50);
    vertex(100, 75);
    vertex(150, 50);
    endContour();
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(50, 50);
    vertex(100, 25);
    vertex(100, 40);
    vertex(66, 58);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(100, 25);
    vertex(150, 50);
    vertex(134, 58);
    vertex(100, 40);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(0, 50);
    vertex(100, 100);
    vertex(100, 120);
    vertex(0, 70);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(80, 170);
    vertex(100, 180);
    vertex(100, 200);
    vertex(80, 190);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(100, 100);
    vertex(200, 50);
    vertex(200, 150);
    vertex(100, 200);
    vertex(100, 180);
    vertex(180, 140);
    vertex(180, 80);
    vertex(100, 120);
    endShape(CLOSE);
    
    beginShape();
    fill(r, g, b);
    vertex(160, 90);
    vertex(180, 80);
    vertex(180, 140);
    vertex(100, 180);
    vertex(80, 170);
    vertex(160, 130);
    endShape(CLOSE);
    pop();
}

function drawR(x,y,s){

    push();
    translate(x,y);
    scale(s);
    var r = 255 * noise(t+10);
    var g = 255 * noise(t+15);
    var b = 255 * noise(t+20);
    
    beginShape();
    fill(r, g, b);
    vertex(0, 50);
    vertex(100, 0);
    vertex(200, 50);
    vertex(100, 100);
    vertex(80, 90);
    vertex(160, 50);
    vertex(100, 20);
    vertex(20, 60);
    vertex(20, 140);
    vertex(100, 180);
    vertex(100, 200);
    vertex(0, 150);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(100, 20);
    vertex(100, 40);
    vertex(40, 70);
    vertex(40, 130);
    vertex(120, 170);
    vertex(100, 180);
    vertex(20, 140);
    vertex(20, 60);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(80, 90);
    vertex(100, 100);
    vertex(100, 120);
    vertex(80, 110);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(100, 20);
    vertex(160, 50);
    vertex(140, 60);
    vertex(100, 40);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(100, 100);
    vertex(200, 50);
    vertex(200, 70);
    vertex(100, 120);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(100, 180);
    vertex(120,170);
    vertex(120, 190);
    vertex(100, 200);
    endShape(CLOSE);
    
    pop();
}

function drawS(x,y,s){

    push();
    translate(x,y);
    scale(s);
    var r = 255 * noise(t+10);
    var g = 255 * noise(t+15);
    var b = 255 * noise(t+20);
    
    beginShape();
    fill(r, g, b);
    vertex(0, 50);
    vertex(100, 0);
    vertex(200, 50);
    vertex(180, 60);
    vertex(100, 20);
    vertex(40, 50);
    vertex(120, 90);
    vertex(100, 100);
    endShape(CLOSE);
    
    
    beginShape();
    fill(r, g, b);
    vertex(0, 130);
    vertex(20, 120);
    vertex(80, 150);
    vertex(80, 170);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(0, 50);
    vertex(100, 100);
    vertex(100, 200);
    vertex(0, 150);
    vertex(0, 130);
    vertex(80, 170);
    vertex(80, 110);
    vertex(0, 70);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(100, 20);
    vertex(180, 60);
    vertex(180, 80);
    vertex(100, 40);
    endShape(CLOSE);

    beginShape();
    fill(b, g, r);
    vertex(40, 50);
    vertex(100, 20);
    vertex(100, 40);
    vertex(60, 60);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(100, 100);
    vertex(120, 90);
    vertex(120, 190);
    vertex(100, 200);
    endShape(CLOSE);

    beginShape();
    fill(b, g, r);
    vertex(180, 60);
    vertex(200, 50);
    vertex(200, 70);
    vertex(180, 80);
    endShape(CLOSE);

    
    pop();
}

function drawT(x,y,s){

    push();
    translate(x,y);
    scale(s);
    var r = 255 * noise(t+10);
    var g = 255 * noise(t+15);
    var b = 255 * noise(t+20);
    
    beginShape();
    fill(r, g, b);
    vertex(0, 60);
    vertex(20, 50);
    vertex(50, 65);
    vertex(130, 25);
    vertex(150, 35);
    vertex(70, 75);
    vertex(120, 100);
    vertex(100, 110);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(0, 60);
    vertex(100, 110);
    vertex(100, 130);
    vertex(50, 105);
    vertex(50, 185);
    vertex(30, 175);
    vertex(30, 95);
    vertex(0, 80);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(70, 75);
    vertex(150, 35);
    vertex(150, 55);
    vertex(90, 85);
    
    endShape(CLOSE);

    beginShape();
    fill(b, g, r);
    vertex(100, 110);
    vertex(120, 100);
    vertex(120, 120);
    vertex(100, 130);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(50, 105);
    vertex(70, 115);
    vertex(70, 175);
    vertex(50, 185);
    endShape(CLOSE);
    
    pop();
}

function drawU(x, y,s){
    push();
    translate(x,y);
    scale(s);
    var r = 255 * noise(t+10);
    var g = 255 * noise(t+15);
    var b = 255 * noise(t+20);
    
    
    fill(r, g, b);
    beginShape();
    vertex(0, 50);
    vertex(100, 0);
    vertex(120, 10);
    vertex(20, 60);
    vertex(20, 140);
    vertex(80, 170);
    vertex(80, 90);
    vertex(180, 40);
    vertex(200, 50);
    vertex(100, 100);
    vertex(100, 200);
    vertex(0, 150);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(20, 60);
    vertex(120, 10);
    vertex(120, 30);
    vertex(40, 70);
    vertex(40, 130);
    vertex(80, 150);
    vertex(80, 170);
    vertex(20, 140);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(100, 100);
    vertex(200, 50);
    vertex(200, 70);
    vertex(120, 110);
    vertex(120, 190);
    vertex(100, 200);
    endShape(CLOSE);
}

function drawV(x, y,s){
    push();
    translate(x,y);
    scale(s);
    var r = 255 * noise(t+10);
    var g = 255 * noise(t+15);
    var b = 255 * noise(t+20);
    
    fill(r,g, b);
    beginShape();
    vertex(80, 10);
    vertex(100, 0);
    vertex(200, 50);
    vertex(200, 150);
    vertex(100, 200);
    vertex(100, 100);
    vertex(0, 50);
    vertex(20, 40);
    vertex(120, 90);
    vertex(120, 170);
    vertex(180, 140);
    vertex(180, 60);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(0, 50);
    vertex(100, 100);
    vertex(100, 200);
    vertex(80, 190);
    vertex(80, 110);
    vertex(0, 70);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(80, 10);
    vertex(180, 60);
    vertex(180, 140);
    vertex(120, 170);
    vertex(120, 150);
    vertex(160, 130);
    vertex(160, 70);
    vertex(80, 30);
    endShape(CLOSE);
    
    pop();
}

function drawW(x, y,s){
    push();
    translate(x,y);
    scale(s);
    var r = 255 * noise(t+10);
    var g = 255 * noise(t+15);
    var b = 255 * noise(t+20);
    
    fill(r, g, b);
    beginShape();
    vertex(0, 50);
    vertex(60, 20);
    vertex(80, 30);
    vertex(40, 50);
    vertex(100, 80);
    vertex(160, 50);
    vertex(120, 30);
    vertex(140, 20);
    vertex(200, 50);
    vertex(100, 100);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(0,50);
    vertex(100, 100);
    vertex(100, 200);
    vertex(0, 150);

    beginContour();
    vertex(70, 110);
    vertex(30, 90);
    vertex(30, 130);
    vertex(70, 150);
    endContour();
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(30, 90);
    vertex(40, 95);
    vertex(40, 125);
    vertex(70, 140);
    vertex(70, 150);
    vertex(30, 130);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(100, 100);
    vertex(200, 50);
    vertex(200, 150);
    vertex(100, 200);
    
    beginContour();
    vertex(170, 90);
    vertex(130, 110);
    vertex(130, 150);
    vertex(170, 130);
    endContour();
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(160, 95);
    vertex(170, 90);
    vertex(170, 130);
    vertex(130, 150);
    vertex(130, 140);
    vertex(160, 125);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(120, 30);
    vertex(160, 50);
    vertex(140, 60);
    vertex(120, 50);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(40, 50);
    vertex(80, 30);
    vertex(80, 50);
    vertex(60, 60);
    endShape(CLOSE);
    pop();
}

function drawX(x, y,s){
    push();
    translate(x,y);
    scale(s);
    var r = 255 * noise(t+10);
    var g = 255 * noise(t+15);
    var b = 255 * noise(t+20);
    
    
    fill(r, g, b);
    beginShape();
    vertex(0, 50);
    vertex(60, 20);
    vertex(80, 30);
    vertex(40, 50);
    vertex(100, 80);
    vertex(160, 50);
    vertex(120, 30);
    vertex(140, 20);
    vertex(200, 50);
    vertex(100, 100);
    endShape(CLOSE);
    
    fill(r, g, b);
    beginShape();
    vertex(40, 110);
    vertex(60, 120);
    vertex(40, 130);
    vertex(80, 150);
    vertex(80, 170);
    vertex(0, 130);
    endShape(CLOSE);
    
    fill(r, g, b);
    beginShape();
    vertex(140, 120);
    vertex(160, 110);
    vertex(200, 130);
    vertex(120, 170);
    vertex(120, 150);
    vertex(160, 130);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(0,50);
    vertex(100, 100);
    vertex(100, 200);
    vertex(0, 150);
    vertex(0, 130);
    vertex(80, 170);
    vertex(80, 110);
    vertex(0, 70);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(40,50);
    vertex(80, 30);
    vertex(80, 50);
    vertex(60, 60);
    endShape(CLOSE);

    beginShape();
    fill(b, g, r);
    vertex(100,100);
    vertex(200, 50);
    vertex(200, 70);
    vertex(120, 110);
    vertex(120, 170);
    vertex(200, 130);
    vertex(200, 150);
    vertex(100, 200);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(120,30);
    vertex(160, 50);
    vertex(140, 60);
    vertex(120, 50);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(140,120);
    vertex(160, 130);
    vertex(140, 140);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(40, 130);
    vertex(60, 120);
    vertex(60, 140);
    endShape(CLOSE);
    pop();
}

function drawY(x,y,s){

    push();
    translate(x,y);
    scale(s);
    var r = 255 * noise(t+10);
    var g = 255 * noise(t+15);
    var b = 255 * noise(t+20);
    
    beginShape();
    fill(r, g, b);
    vertex(0, 50);
    vertex(100, 0);
    vertex(120, 10);
    vertex(40, 50);
    vertex(100, 80);
    vertex(180, 40);
    vertex(200, 50);
    vertex(100, 100);
    endShape(CLOSE);
    
    beginShape();
    fill(r, g, b);
    vertex(50, 155);
    vertex(70, 145);
    vertex(100, 160);
    vertex(160, 130);
    vertex(160, 90);
    vertex(180, 80);
    vertex(180, 140);
    vertex(100, 180);
    vertex(50, 155);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(50, 155);
    vertex(100, 180);
    vertex(100, 200);
    vertex(50, 175);
    endShape(CLOSE);
    
    beginShape();
    fill(g, r, b);
    vertex(0, 50);
    vertex(100, 100);
    vertex(100, 120);
    vertex(0, 70);
    endShape(CLOSE);
    
    
    beginShape();
    fill(b, g, r);
    vertex(100, 100);
    vertex(200, 50);
    vertex(200, 150);
    vertex(100, 200);
    vertex(100, 180);
    vertex(180, 140);
    vertex(180, 80);
    vertex(100, 120);
    endShape(CLOSE);
    
    beginShape();
    fill(b, g, r);
    vertex(120, 10);
    vertex(120, 30);
    vertex(60, 60);
    vertex(40, 50);
    endShape(CLOSE);
    
    pop();
}

function drawZ(x, y,s){
    push();
    translate(x,y);
    scale(s);
    var r = 255 * noise(t+10);
    var g = 255 * noise(t+15);
    var b = 255 * noise(t+20);
    
    
    fill(r, g, b);
    beginShape();
    vertex(0, 50);
    vertex(100, 0);
    vertex(200, 50);
    vertex(100, 100);
    vertex(80, 90);
    vertex(160, 50);
    vertex(100, 20);
    vertex(20, 60);
    endShape(CLOSE);
    
    fill(r, g, b);
    beginShape();
    vertex(120, 150);
    vertex(180, 120);
    vertex(200, 130);
    vertex(120, 170);
    endShape(CLOSE);
    
    fill(g, r, b);
    beginShape();
    vertex(0, 50);
    vertex(20, 60);
    vertex(20, 80);
    vertex(0, 70);
    endShape(CLOSE);
    
    fill(g, r, b);
    beginShape();
    vertex(80, 90);
    vertex(100, 100);
    vertex(100, 200);
    vertex(80, 190);
    endShape(CLOSE);
    
    fill(g, r, b);
    beginShape();
    vertex(100, 20);
    vertex(160, 50);
    vertex(140, 60);
    vertex(100, 40);
    endShape(CLOSE);
    
    fill(b, g, r);
    beginShape();
    vertex(20, 60);
    vertex(100, 20);
    vertex(100, 40);
    vertex(20, 80);
    endShape(CLOSE);
    
    fill(b, g, r);
    beginShape();
    vertex(100, 100);
    vertex(200, 50);
    vertex(200, 70);
    vertex(120, 110);
    vertex(120, 170);
    vertex(200, 130);
    vertex(200, 150);
    vertex(100, 200);
    endShape(CLOSE);
    


    pop();
}
