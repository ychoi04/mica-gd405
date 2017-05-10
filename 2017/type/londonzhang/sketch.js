var slant = 0;
var x=0;
var y=0;
function setup() {
    createCanvas(900,600);
    background(200);
    noFill();
}

function draw() {

}

function keyTyped() {
    
    if(key == 'a'){
        drawA(x,y,slant,false);
        x = x + 70;
        
    } else if (key =='b') {
        drawB(x,y,slant,false);
        x=x+70;
        
    } else if (key =='c') {
    drawC(x,y,slant,false);
    x=x+70;
    
    } else if (key =='d') {
    drawD(x,y,slant,false);
    x=x+70;
        
    }else if (key =='e') {
        drawE(x,y,slant,false);
        x=x+70;
        
    } else if (key =='f') {
    drawF(x,y,slant,false);
    x=x+70;
    
    } else if (key =='g') {
    drawG(x,y,slant,false);
    x=x+70;
        
    }else if (key =='h') {
        drawH(x,y,slant,false);
        x=x+70;
        
    } else if (key =='i') {
    drawI(x,y,slant,false);
    x=x+70;
    
    } else if (key =='j') {
    drawJ(x,y,slant,false);
    x=x+70;
        
    }else if (key =='k') {
        drawK(x,y,slant,false);
        x=x+70;
        
    } else if (key =='l') {
    drawL(x,y,slant,false);
    x=x+70;
    
    } else if (key =='m') {
    drawM(x,y,slant,false);
    x=x+70;
        
    }else if (key =='n') {
        drawN(x,y,slant,false);
        x=x+70;
        
    } else if (key =='o') {
    drawO(x,y,slant,false);
    x=x+70;
    
    } else if (key =='p') {
    drawP(x,y,slant,false);
    x=x+70;
        
    }else if (key =='q') {
        drawQ(x,y,slant,false);
        x=x+70;
        
    } else if (key =='r') {
    drawR(x,y,slant,false);
    x=x+70;
    
    } else if (key =='s') {
    drawS(x,y,slant,false);
    x=x+70;
        
    }else if (key =='t') {
        drawT(x,y,slant,false);
        x=x+70;
        
    } else if (key =='u') {
    drawU(x,y,slant,false);
    x=x+70;
    
    } else if (key =='v') {
    drawV(x,y,slant,false);
    x=x+70;
        
    }else if (key =='w') {
        drawW(x,y,slant,false);
        x=x+70;
        
    } else if (key =='x') {
    drawX(x,y,slant,false);
    x=x+70;
    
    } else if (key =='y') {
    drawY(x,y,slant,false);
    x=x+70;
        
    }else if (key =='z') {
    drawZ(x,y,slant,false);
    x=x+70;
        
    }
    
    else if (key ==' '){
        x=x+70;
    }
    
    if (x > width) {
        y=y+100;
        x=0;
    }
    
}


function drawA(x, y, sl, round) {
    push();
    translate(x, y);
    beginShape();
  if (round) curveVertex(10+sl*4/8,50);
    line(mouseX,mouseY,10,40);
    line(25,10,40,40);
    line(12.5,35,37.5,35);
    if (round) curveVertex(50+sl*3/8,60);
    endShape();
    pop();
}

function drawB(x, y, sl, round) {
    push();
    translate(x, y);
    beginShape();
    if (round) curveVertex(10+sl,10);
    line(mouseX,10,20,40);
    line(20,10,30,15);
    line(30,15,30,20);
    line(30,mouseX,20,25);
    line(20,25,mouseX,30);
    line(30,30,30,35);
    line(30,mouseX,20,40);
    if (round) curveVertex(10+sl*5/8,40);
    endShape();
    pop();
}

function drawC(x, y, sl, round) {
    push();
    translate(x, y);
    beginShape();
    if (round) curveVertex(10+sl,10);
    vertex(mouseX,20);
    vertex(35,10);
    vertex(20,10);
    vertex(mouseX,20);
    vertex(15,30);
    vertex(mouseX,40);
    vertex(35,40);
    vertex(40,30);
    if (round) curveVertex(10+sl*5/8,40);
    endShape();
    pop();
}

function drawD(x, y, sl, round) {
    push();
    translate(x, y);
    beginShape();
    if (round) curveVertex(10+sl,10);
    vertex(mouseX,10);
    vertex(10,40);
    vertex(20,40);
    vertex(mouseX,30);
    vertex(30,20);
    vertex(20,10);
    vertex(10,10);
    if (round) curveVertex(10+sl*5/8,40);
    endShape();
    pop();
}


function drawE(x, y, sl, round) {
    push();
    translate(x, y);
    beginShape();
  if (round) curveVertex(10+sl*4/8,50);
    vertex(mouseY,10);
    vertex(10,10);
    vertex(mouseY,25);
    vertex(mouseY,25);
    vertex(10,25);
    vertex(10,40);
    vertex(30,40);
    if (round) curveVertex(50+sl*3/8,60);
    endShape();
    pop();
}

function drawF(x, y, sl, round) {
    push();
    translate(x, y);
    beginShape();
    if (round) curveVertex(10+sl,10);
    vertex(mouseX,10);
    vertex(10,10);
    vertex(10,25);
    vertex(mouseX,25);
    vertex(10,25);
    vertex(10,40);
    if (round) curveVertex(10+sl*5/8,40);
    endShape();
    pop();
}

function drawG(x, y, sl, round) {
    push();
    translate(x, y);
    beginShape();
    if (round) curveVertex(10+sl,10);
    vertex(40,20);
    vertex(35,10);
    vertex(mouseX,10);
    vertex(15,20);
    vertex(15,mouseX);
    vertex(20,40);
    vertex(35,40);
    vertex(40,30);
    vertex(36,30);
    vertex(43.5,30);
    if (round) curveVertex(10+sl*5/8,40);
    endShape();
    pop();
}

function drawH(x, y, sl, round) {
    push();
    translate(x, y);
    beginShape();
    if (round) curveVertex(10+sl,10);
    vertex(10,10);
    vertex(mouseX,40);
    vertex(10,25);
    vertex(25,mouseX);
    vertex(25,10);
    vertex(mouseX,40);
    if (round) curveVertex(10+sl*5/8,40);
    endShape();
    pop();
}


function drawI(x, y, sl, round) {
    push();
    translate(x, y);
    beginShape();
  if (round) curveVertex(10+sl*4/8,50);
    vertex(10,10);
    vertex(30,10);
    vertex(20,10);
    vertex(20,40);
    vertex(10,40);
    vertex(30,40);
    if (round) curveVertex(50+sl*3/8,60);
    endShape();
    pop();
}

function drawJ(x, y, sl, round) {
    push();
    translate(x, y);
    beginShape();
    if (round) curveVertex(10+sl,10);
    vertex(10,10);
    vertex(30,mouseX);
    vertex(23,10);
    vertex(mouseX,40);
    vertex(15,40);
    vertex(10,mouseX);
    if (round) curveVertex(10+sl*5/8,40);
    endShape();
    pop();
}

function drawK(x, y, sl, round) {
    push();
    translate(x, y);
    beginShape();
    if (round) curveVertex(10+sl,10);
    vertex(10,10);
    vertex(10,40);
    vertex(10,mouseX);
    vertex(mouseX,10);
    vertex(10,25);
    vertex(30,mouseX);
    if (round) curveVertex(10+sl*5/8,40);
    endShape();
    pop();
}

function drawL(x, y, sl, round) {
    push();
    translate(x, y);
    beginShape();
    if (round) curveVertex(10+sl,10);
    vertex(mouseY,10);
    vertex(mouseX,40);
    vertex(35,mouseY);
    if (round) curveVertex(10+sl*5/8,40);
    endShape();
    pop();
}


function drawM(x, y, sl, round) {
    push();
    translate(x, y);
    beginShape();
  if (round) curveVertex(10+sl*4/8,50);
    vertex(10,mouseY);
    vertex(mousex,10);
    vertex(25,40);
    vertex(35,mouseY);
    vertex(40,mouseY);
    if (round) curveVertex(50+sl*3/8,60);
    endShape();
    pop();
}

function drawN(x, y, sl, round) {
    push();
    translate(x, y);
    beginShape();
    if (round) curveVertex(10+sl,10);
    vertex(10,10);
    vertex(10,40);
    vertex(mousex,10);
    vertex(30,40);
    if (round) curveVertex(10+sl*5/8,40);
    endShape();
    pop();
}

function drawO(x, y, sl, round) {
    push();
    translate(x, y);
    beginShape();
    if (round) curveVertex(10+sl,10);
    vertex(10,35);
    vertex(10,20);
    vertex(20,10);
    vertex(30,10);
    vertex(40,20);
    vertex(40,35);
    vertex(30,45);
    vertex(20,45);
    vertex(10,35); 
    if (round) curveVertex(10+sl*5/8,40);
    endShape();
    pop();
}

function drawP(x, y, sl, round) {
    push();
    translate(x, y);
    beginShape();
    if (round) curveVertex(10+sl,10);
    vertex(10,10);
    vertex(23,20);
    vertex(23,25);
    vertex(10,30);
    vertex(10,10);
    vertex(10,40);
    if (round) curveVertex(10+sl*5/8,40);
    endShape();
    pop();
}


function drawQ(x, y, sl, round) {
    push();
    translate(x, y);
    beginShape();
  if (round) curveVertex(10+sl*4/8,50);
    vertex(10,40);
    vertex(10,20);
    vertex(20,10);
    vertex(30,10);
    vertex(40,20);
    vertex(40,40);
    vertex(30,30);
    vertex(45,45);
    vertex(40,40);
    vertex(30,49);
    vertex(20,49);
    vertex(10,40); 
    if (round) curveVertex(50+sl*3/8,60);
    endShape();
    line(60-sl*1/8, 100, 50, 90);
    pop();
}

function drawR(x, y, sl, round) {
    push();
    translate(x, y);
    beginShape();
    if (round) curveVertex(10+sl,10);
    vertex(10,10);
    vertex(20,10);
    vertex(30,20);
    vertex(30,25);
    vertex(20,30);
    vertex(10,30);
    vertex(10,10);
    vertex(10,40);
    vertex(10,30);
    vertex(30,40);
    if (round) curveVertex(10+sl*5/8,40);
    endShape();
    pop();
}

function drawS(x, y, sl, round) {
    push();
    translate(x, y);
    beginShape();
    if (round) curveVertex(10+sl,10);
    vertex(30,10);
    vertex(10,10);
    vertex(10,20);
    vertex(30,20);
    vertex(30,30);
    vertex(10,30);
    if (round) curveVertex(10+sl*5/8,40);
    endShape();
    pop();
}

function drawT(x, y, sl, round) {
    push();
    translate(x, y);
    beginShape();
    if (round) curveVertex(10+sl,10);
    vertex(10,10);
    vertex(30,10);
    vertex(20,10);
    vertex(20,40);
    if (round) curveVertex(10+sl*5/8,40);
    endShape();
    pop();
}


function drawU(x, y, sl, round) {
    push();
    translate(x, y);
    beginShape();
  if (round) curveVertex(10+sl*4/8,50);
    vertex(10,10);
    vertex(10,30);
    vertex(15,40);
    vertex(30,40);
    vertex(35,30);
    vertex(35,10);
    if (round) curveVertex(50+sl*3/8,60);
    endShape();
    line(60-sl*1/8, 100, 50, 90);
    pop();
}

function drawV(x, y, sl, round) {
    push();
    translate(x, y);
    beginShape();
    if (round) curveVertex(10+sl,10);
    vertex(10,10);
    vertex(20,40);
    vertex(30,10);
    if (round) curveVertex(10+sl*5/8,40);
    endShape();
    pop();
}

function drawW(x, y, sl, round) {
    push();
    translate(x, y);
    beginShape();
    if (round) curveVertex(10+sl,10);
    vertex(10,10);
    vertex(15,40);
    vertex(20,10);
    vertex(25,40);
    vertex(30,10);
    if (round) curveVertex(10+sl*5/8,40);
    endShape();
    pop();
}

function drawX(x, y, sl, round) {
    push();
    translate(x, y);
    beginShape();
    if (round) curveVertex(10+sl,10);
   line(10,10,30,30);
   line(30,10,10,30);
    if (round) curveVertex(10+sl*5/8,40);
    endShape();
    pop();
}


function drawY(x, y, sl, round) {
    push();
    translate(x, y);
    beginShape();
  if (round) curveVertex(10+sl*4/8,50);
    vertex(10,10);
    vertex(20,20);
    vertex(30,10);
    vertex(20,20);
    vertex(20,40);
    if (round) curveVertex(50+sl*3/8,60);
    endShape();
    pop();
}

function drawZ(x, y, sl, round) {
    push();
    translate(x, y);
    beginShape();
    if (round) curveVertex(10+sl,10);
    vertex(10,10);
    vertex(30,10);
    vertex(10,30);
    vertex(30,30);
    if (round) curveVertex(10+sl*5/8,40);
    endShape();
    pop();
}