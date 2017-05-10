var sw = 0; //strokeWeight
var sw2 = 0;
var d = 0;
var x = 0;
var y = 0;
var rw = 0;
var rh = 0
var rw2 = 0;
var c = 0;
var qw = 0;
var qww = 0;
var ex = 0;
var ey = 0;
var cy = 0;
var sceneNum = 0;
var r = 0;
var g = 0;
var b = 0;

function setup() {
    createCanvas(900, 600);
    textSize(36);

}

function draw() {
    if (sceneNum == 0) {
		sceneIntro();
	} else if (sceneNum == 1) {
		sceneType();
	}
        
}

function mousePressed() {
    var r = random(200, 255);
    var g = random(200, 255);
    var b = random(200, 255);
    background(r, g, b);
    x = 0;
    y = 0;
}


function sceneIntro() {
	background(231,250,100);
     textFont("Avenir Next");
    push();
        textSize(100);
	    text("Naughty 1", 100, 200);
        pop();
    //content
        push();
        textSize(20);
        textAlign(LEFT);
        lines = "Naughty 1 is a typeface that you can make change to it \nby moving the mouse in the horizontal direction before typing."
        text(lines, 100, 280);
        pop();
    
    //instruction
        push();
        textSize(20);
        fill(55, 107, 203);
        text("Press the right arrow to continue",100,450);
   
        stroke(150);
        strokeWeight(2);
        pop();
    
}





function sceneType() {
    
    //instruction
        push();
        textSize(15);
        fill(55, 107, 203);
        textAlign(LEFT);
        text("Make change to the letters by moving the mouse in the horizontal direction before typing! \nPress the mouse if you want to clear the canvas. ",60,550);
        strokeWeight(0);
        pop();
	
}



function drawH(x, y){
    push();
    translate(x, y);
    fill(0);
    strokeWeight(0.1); 
    rw2 = map(mouseX, 0, width, 12, 0);
    rect(90, 20, rw2, 80 + mouseY/40);
    qww = map(mouseX, 0, 2 * width, 30, 20);
    cy = map(mouseY, 0, height, 1, 20);
    
    quad(20 + mouseX/80, 20 + cy, 30, 20 + cy, 30 + mouseX/60, 100 + cy, qww, 100 + cy);
    rw = map(mouseX, 0, 2 * width, 1, 12);
    noFill();
    sw = map(mouseX, 0, 2 * width, 4, 0.2);
    strokeWeight(sw);
    
    ex = 55;
    ey = 60 + cy;
    c = 70;
    d = map(mouseX,0,2 * width,5, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    sw = map(mouseX,0, 2 * width,0.2,8);
    strokeWeight(sw);
    pop();
}

function drawA(x, y){
    push();
    translate(x,y);
    fill(0);
    sw = map(mouseX, 0, width, 0.2, 9);
    strokeWeight(1);
    qw = 55 + mouseX/50;
    cy = map(mouseY, 0, height, 1, 20);
    quad(55, 20 + cy, qw, 20 + cy, 30, 100, 20, 100);
    strokeCap(SQUARE);
    sw = map(mouseX, 0, width, 0.2, 4);
    strokeWeight(sw);
    line(65, 15 + cy, 100, 100);
    noFill();
    sw = map(mouseX, 0, 2 * width, 3, 0.2);
    strokeWeight(sw);
    c = 70;
    ex = 55;
    ey = 60 + cy;
    c = 70;
    d = map(mouseX,0,2 * width,5, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    pop();
}


function drawM(x, y){
    push();
    translate(x,y);
    fill(0);
    sw = map(mouseX, 0, 2 * width, 0.2, 4);
    strokeWeight(sw);
    
    cy = map(mouseY, 0, height, 1, 20);
    quad(45, 20 + cy, 55, 20 + cy, 30 + mouseX/50, 100, 20, 100);
    strokeCap(SQUARE);
    line(55, 20 + cy, 80, 100);
    line(80, 100, 105, 20 + cy);
    line(105, 20 + cy, 130, 100);
    noFill();
    sw = map(mouseX, 0, 2 * width, 4, 0);
    strokeWeight(sw);
    c = 70;
    d = map(mouseX,0,2 * width,5, c);
    ellipse(80, 95, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(80, 95, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(80, 95, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(80, 95, d, d);
    c = c - 20;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(80, 95, d, d);
    pop();
}

function drawB(x, y){
    push();
    translate(x,y);
    fill(0);
    sw = map(mouseX, 0, 2 * width, 4, 0.2);
    strokeWeight(sw);
    qww = map(mouseX, 0, 2 * width, 20, 30);
    cy = map(mouseY, 0, height, 1, 20);
    quad(20 + mouseX/80, 20 + cy, 30, 20 + cy, 30 + mouseX/60, 100, 20, 100);
    noFill();
    //ellipse
    ellipse(70, 40, d - 10, d - 10);
    c = 70;
    d = map(mouseX,0,2 * width,5, c);
    ellipse(70, 40, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(70, 40, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(70, 40, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(70, 40, d, d);
    c = 70;
    d = map(mouseX,0,2 * width,5, c);
    ellipse(70, 40, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(70, 40, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(70, 40, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(70, 40, d, d);
    ellipse(70, 80, d - 10, d - 10);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(70, 80, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(70, 80, d, d);
    line(20, 20 + cy, 70, 20 + cy);
    line(20, 100, 70, 100);
    sw = map(mouseX, 0, 2 * width, 0.2, 4);
    strokeWeight(sw);
    arc(70, 40, 40, 40, -PI/2, PI/2);
    arc(70, 80, 40, 40, -PI/2, PI/2);
    pop();
}

function drawU(x, y){
    push();
    translate(x,y);
    fill(0);
    qww = map(mouseX, 0, 2 * width, 20, 30);
    quad(80 + mouseX/80, 20, 90, 20, 90 + mouseX/60, 100, 80, 100);
    noFill();
    ex = 64;
    ey = 70;
    c = 70;
    d = map(mouseX,0,2 * width,5, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    sw = map(mouseX, 0, 2 * width, 4, 0);
    strokeWeight(sw);
    line(30, 20, 30, 65);
    arc(60, 65, 60, 60, 0, PI);
    }

function drawR(x, y){
    push();
    translate(x,y);
    fill(0);
    rw = map(mouseX, 0, 2 * width, 12, 0);
    rect(20, 20, rw, 80);
    strokeCap(SQUARE);
    noFill();
    ellipse(70, 40, d - 10, d - 10);
    sw = map(mouseX, 0, 2 * width, 4, 0.1);
    strokeWeight(sw);
    ex = 70;
    ey = 40;
    c = 70;
    d = map(mouseX,0,2 * width,5, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    line(20, 20, 70, 20);
    line(20, 60, 70, 60);
    line(30, 60, 90, 100);
    arc(70, 40, 40, 40, -PI/2, PI/2);
    fill(0);
    triangle(25, 60, 30 + mouseX/60, 60, 90, 100);
    pop();
}

function drawG(x, y){
    push();
    translate(x,y);
    fill(0);
    sw = map(mouseX, 0, 2 * width, 0.2, 4);
    strokeWeight(sw);
    triangle(18, 20, 30 + mouseX/60, 20, 18, 65);
    strokeCap(SQUARE);
    noFill();
    sw = map(mouseX, 0, 2 * width, 4, 0.2);
    strokeWeight(sw);
    ellipse(80, 70, d, d);
    ex = 80;
    ey = 70;
    c = 70;
    d = map(mouseX,0,2 * width,5, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    sw = map(mouseX, 0, 2 * width, 0.2, 4);
    strokeWeight(sw);
     line(20, 20, 80, 20);
    arc(50, 70, 63, 63, 0, PI);
    pop();
    }

function drawE(x, y){
    push();
    translate(x,y);
    fill(0);
    sw = map(mouseX, 0, 2 * width, 0.2, 4);
    strokeWeight(sw);
    qww = map(mouseX, 0, 2 * width, 30, 20);
    quad(20 + mouseX/80, 20, 30, 20, 30 + mouseX/60, 100, qww, 100);
    strokeCap(SQUARE);
    noFill();
    sw = map(mouseX, 0, 2 *width, 4, 0.2);
    strokeWeight(sw);
    ellipse(70, 60, d - 10, d - 10);
    ex = 70;
    ey = 60;
    c = 70;
    d = map(mouseX,0,2 * width,5, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    sw = map(mouseX, 0, width, 0.2, 15);
    
    ex = 70;
    ey = 30;
    c = 70;
    d = map(mouseX,0,2 * width,5, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    sw = map(mouseX, 0, width, 0.2, 15);
    
    ex = 70;
    ey = 90;
    c = 70;
    d = map(mouseX,0,2 * width,5, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    sw = map(mouseX, 0, width, 0.2, 15);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    sw = map(mouseX, 0, width, 0.2, 15);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    sw = map(mouseX, 0, 2 * width, 0.5, 0);
    strokeWeight(sw);
    
    line(20, 20, 75, 20);
    line(20, 100, 75, 100);
    pop();
    }    

function drawF(x, y){
    push();
    translate(x,y);
    fill(0);
    sw = map(mouseX, 0, 2 * width, 4, 0.2);
    strokeWeight(sw);
    triangle(20, 20, 30 + mouseX/60, 20, 20, 100);
    
    strokeCap(SQUARE);
    noFill();
    sw = map(mouseX, 0, width, 8, 0.2);
    strokeWeight(sw);
    ellipse(50, 60, d - 10, d - 10);
    ex = 50;
    ey = 60;
    c = 70;
    d = map(mouseX,0,2 * width,5, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    sw = map(mouseX, 0, width, 0.2, 15);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    sw = map(mouseX, 0, 2 * width, 0.2, 4);
    strokeWeight(sw);
    line(20, 20, 75, 20);
    pop();
    }    

function drawN(x, y){
    push();
    translate(x,y);
    fill(0);
    sw = map(mouseX, 0, 2 * width, 0.2, 3);
    strokeWeight(sw);
    triangle(20, 20, 30 + mouseX/28, 100, 20, 100);
    noFill();
    sw = map(mouseX, 0, width, 8, 0.2);
    strokeWeight(sw);
    d = map(mouseX,0,width,5,70);
    ex = 90;
    ey = 95;
    c = 70;
    d = map(mouseX,0,2 * width,5, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    sw = map(mouseX, 0, width, 0.2, 15);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    sw = map(mouseX,0,2 * width,0.2,2);
    strokeWeight(sw);
    strokeCap(SQUARE);
    line(90, 20, 90, 100);
     line(20, 20, 90, 100);
    pop();
    }    

function drawS(x, y){
    push();
    translate(x,y);
    fill(0);
    sw = map(mouseX, 0, 2 * width, 4, 0.2);
    strokeWeight(sw);
    line(20, 60, 50, 60);
    strokeCap(SQUARE);
    fill(0);
    triangle(20, 20, 70, 20, 20, mouseY/50);
    noFill();
    sw = map(mouseX, 0, width, 8, 0.2);
    strokeWeight(sw);
    ellipse(3, 97, d - 10, d - 10);
    ex = 3;
    ey = 97;
    c = 70;
    d = map(mouseX,0,2 * width,5, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    sw = map(mouseX, 0, width, 0.2, 15);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    sw = map(mouseX, 0, width, 0.2, 2);
    strokeWeight(sw);
    line(20, 20, 70, 20);
    line(00, 100, 50, 100);
    arc(20, 40, 40, 40, PI/2, -PI/2);
    arc(50, 80, 40, 40, -PI/2, PI/2);
    pop();
    }

function drawT(x, y){
    push();
    translate(x,y);
    fill(0);
    sw = map(mouseX, 0, width, 0.2, 4);
    strokeWeight(sw);
    cy = map(mouseY, 0, 2 * height, 0, 25);
    quad(20, 20 - cy/2, 100, 20 + cy, 100, 30 - cy, 20, 30 + cy);
    noFill();
    sw = map(mouseX, 0, 2 * width, 4, 0.2);
    strokeWeight(sw);
    d = map(mouseX , 0, width , 5, 70);
    ellipse(60, 96, d, d);
    ex = 60;
    ey = 96;
    c = 70;
    d = map(mouseX,0,2 * width,5, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    sw = map(mouseX, 0, width, 0.2, 15);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    sw = map(mouseX,0,width,0.2,8);
    strokeWeight(sw);
    strokeCap(SQUARE);
    line(60, 30, 60, 100);
    pop();
    }    

function drawI(x, y){
    push();
    translate(x,y);
    fill(0);
    sw = map(mouseX, 0, width, 0.2, 9);
    strokeWeight(sw);
    strokeCap(SQUARE);
    line(55, 20, 55, 100);
    noFill();
    sw = map(mouseX, 0, 2 * width, 4, 0.2);
    strokeWeight(sw);
    
    ex = 60;
    ey = 20;
    c = 90;
    d = map(mouseX,0,2 * width,5, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    c = c - 5;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    sw = map(mouseX,0,width,0.2,8);
    noStroke();
    fill(0);
    rh = map(mouseX, 0, 2 * width, 15, 1);
    rect(40, 100, 40, rh)
    pop();
    }   

function drawV(x, y){
    push();
    translate(x,y);
    fill(0);
    sw = map(mouseX, 0, 2 * width, 0.2, 4);
    strokeWeight(sw);
    strokeCap(SQUARE);
    line(100, 20, 65, 100);
     triangle(20, 20, 25 + mouseX/25, 20, 65, 100);
    noFill();
    sw = map(mouseX, 0, 2 * width, 4, 0.2);
    strokeWeight(sw);
    ellipse(97, 23, d, d);
    ex = 97;
    ey = 23;
    c = 90;
    d = map(mouseX,0,2 * width,5, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    pop();
}

function drawO(x, y){
    push();
    translate(x,y);
    fill(0);
    sw = map(mouseX, 0, 2 * width, 0.2, 4);
    strokeWeight(sw);
    strokeCap(SQUARE);
    noFill();
    sw = map(mouseX, 0, 2 * width, 4, 0.2);
    strokeWeight(sw);
    ellipse(50, 50, d, d);
    ex = 50;
    ey = 50;
    c = 90;
    d = map(mouseX,0,2 * width,5, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    sw = map(mouseX, 0, 2 * width, 0.2, 15);
    strokeWeight(sw);
    arc(50, 70, 60, 60, 0, PI);
    arc(50, 40, 60, 60, PI, 0);
    pop();
    }

function drawC(x, y){
    push();
    translate(x,y);
    fill(0);
    rw = map(mouseX, 0, 2 * width, 8, 0.2);
    rect(20, 30, rw, 50);
    strokeCap(SQUARE);
    noFill();
    sw = map(mouseX, 0, 2 * width, 4, 0.2);
    strokeWeight(sw);
    ellipse(80, 75, d, d);
    
    ex = 80;
    ey = 40;
    c = 40;
    d = map(mouseX,0,2 * width,5, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    sw = map(mouseX, 0, 2 * width, 0.2, 15);
    strokeWeight(sw);
    arc(50, 70, 60, 60, 0, PI);
    arc(50, 40, 60, 60, PI, 0);
    pop();
    }


function drawD(x, y){
    push();
    translate(x,y);
    fill(0);
    sw = map(mouseX, 0, 2 * width, 0.2, 4);
    strokeWeight(sw);
    qww = map(mouseX, 0, 2 * width, 20, 30);
    triangle(20 + mouseX/100, 20, 30 + mouseX/40, 100, 20, 100);
    noFill();
      arc(70, 60, 80, 80, -PI/2, PI/2);
    sw = map(mouseX, 0, 2 * width, 4, 0.2);
    strokeWeight(sw);
    ellipse(80, 60, d - 10, d - 10);
    ex = 80;
    ey = 60;
    c = 70;
     d = map(mouseX,0,2 * width,5, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    line(20, 20, 70, 20);
    line(20, 100, 70, 100);
    pop();
}

function drawQ(x, y){
    push();
    translate(x,y);
    fill(0);
    sw = map(mouseX, 0, 2 * width, 0.2, 4);
    strokeWeight(sw);
    strokeCap(SQUARE);
    noFill();
    sw = map(mouseX, 0, 2 * width, 4, 0.2);
    strokeWeight(sw);
    ex = 50;
    ey = 60;
    c = 90;
    d = map(mouseX,0,2 * width,5, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    sw = map(mouseX, 0, 2 * width, 0.2, 15);
    strokeWeight(sw);
    arc(50, 70, 60, 60, 0, PI);
    sw = map(mouseX, 0, 2 * width, 1, 15);
    strokeWeight(sw);
    arc(50, 40, 60, 60, PI, 0);
     strokeWeight(0);
    fill(0);
    triangle(50, 60, 50, 110, 50 + mouseX/50, 110);
    pop();
    
    }

function drawP(x, y){
    push();
    translate(x,y);
    fill(0);
    strokeCap(SQUARE);
    noFill();
    ellipse(70, 40, d - 10, d - 10);
    sw = map(mouseX, 0, 2 * width, 4, 0.1);
    strokeWeight(sw);
    ex = 70;
    ey = 40;
    c = 70;
    d = map(mouseX,0,2 * width,5, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    line(20, 20, 70, 20);
    line(20, 60, 70, 60);
    arc(70, 40, 40, 40, -PI/2, PI/2);
    fill(0);
    noStroke();
    triangle(20, 20, 20 + mouseX/80, 100, 20, 100);
    pop();
}

function drawJ(x, y){
    push();
    translate(x,y);
    fill(0);
    triangle(80, 18, 80, 80, 70 - mouseX/70, 18);
    strokeCap(SQUARE);
    noFill();
    sw = map(mouseX, 0, 2 * width, 4, 0.2);
    strokeWeight(sw);
    ex = 55;
    ey = 80;
    c = 40;
    d = map(mouseX,0,2 * width,5, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    sw = map(mouseX, 0, 2 * width, 0.2, 4);
    strokeWeight(sw);
     line(80, 20, 60, 20);
    arc(ex, ey, 50, 50, 0, PI);
    pop();
    }

function drawK(x, y){
    push();
    translate(x,y);
    fill(0);
    sw = map(mouseX, 0, 2 * width, 0.2, 3);
    strokeWeight(sw);
    triangle(20, 20, 30 + mouseX/25, 100, 20, 100);
    noFill();
    sw = map(mouseX, 0, 2 * width, 4, 0.2);
    strokeWeight(sw);
    ex = 75;
    ey = 85;
    c = 70;
    d = map(mouseX,0,2 * width,5, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    sw = map(mouseX, 0, width, 0.2, 15);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    sw = map(mouseX,0,2 * width,0.2,4);
    strokeWeight(sw);
    strokeCap(SQUARE);
     line(20, 100, 90, 20);
    pop();
    }    

function drawL(x, y){
    push();
    translate(x,y);
    fill(0);
    sw = map(mouseX, 0, 2 * width, 0.2, 4);
    strokeWeight(sw);
    triangle(20, 20, 30 + mouseX/90, 100, 20, 100);
    strokeCap(SQUARE);
    noFill();
    sw = map(mouseX, 0, 2 * width, 4, 0.2);
    strokeWeight(sw);
    ex = 50;
    ey = 100;
    c = 70;
    d = map(mouseX,0,2 * width,5, c);
    arc(ex, ey, d, d, PI, 0);
    c = c - 10;
    d = map(mouseX,0,2 * width,5, c);
    arc(ex, ey, d, d, PI, 0);
    c = c - 10;
    d = map(mouseX,0,2 * width,5, c);
    arc(ex, ey, d, d, PI, 0);
    c = c - 10;
    d = map(mouseX,0,2 * width,5, c);
    arc(ex, ey, d, d, PI, 0);
    c = c - 10;
    d = map(mouseX,0,2 * width,5, c);
    arc(ex, ey, d, d, PI, 0);
    c = c - 10;
    d = map(mouseX,0,2 * width,5, c);
    arc(ex, ey, d, d, PI, 0);
    c = c - 10;
    d = map(mouseX,0,2 * width,5, c);
    arc(ex, ey, d, d, PI, 0);
    c = c - 10;
    d = map(mouseX,0,2 * width,5, c);
    arc(ex, ey, d, d, PI, 0);
    pop();
    }

function drawW(x, y){
    push();
    translate(x,y);
    fill(0);
    sw = map(mouseX, 0, 2 * width, 0.2, 3);
    strokeWeight(sw);
    triangle(20, 20, 30 + mouseX/45, 100, 20, 100);
    line(30 + mouseX/45, 100, 55 + mouseX/35, 20);
    line(55 + mouseX/35, 20, 75 + mouseX/35 , 100);
    triangle(75 + mouseX/35 , 100, 95 + mouseX/25, 20, 95 + mouseX/45, 100);
    noFill();
    sw = map(mouseX, 0, 2 * width, 4, 0.2);
    strokeWeight(sw);
    ex = 55 + mouseX/35, 20;
    ey = 20;
    c = 70;
    d = map(mouseX,0,2 * width,5, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    sw = map(mouseX, 0, width, 0.2, 15);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    pop();
    }    

function drawX(x, y){
    push();
    translate(x,y);
    fill(0);
    sw = map(mouseX, 0, width, 0.2, 9);
    strokeWeight(1);
    qw = 75 + mouseX/50
    quad(75, 20, qw, 20, qw - 50, 100, 20, 100);
    strokeCap(SQUARE);
    sw = map(mouseX, 0, width, 0.2, 4);
    strokeWeight(sw);
    line(25, 20, 100, 100);
    noFill();
    sw = map(mouseX, 0, 2 * width, 3, 0.2);
    strokeWeight(sw);
    ex = 55;
    ey = 55;
    c = 70;
    d = map(mouseX,0,2 * width,5, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,5, c);
    ellipse(ex, ey, d, d);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
     c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    sw = map(mouseX, 0, width, 0.2, 15);
    c = c - 10;
    d = map(mouseX,0,2 * width,1, c);
    ellipse(ex, ey, d, d);
    pop();
}

function drawY(x, y){
    push();
    translate(x,y);
   
    fill(0);
    sw = map(mouseX, 0, width, 0.2, 9);
    strokeWeight(1);
    qw = 75 + mouseX/50
    quad(75, 20, qw, 20, qw - 40, 100, 20, 100);
    strokeCap(SQUARE);
    sw = map(mouseX, 0, 2 * width, 4, 0);
    strokeWeight(sw);
    line(20, 20, 50, 50);
    noFill();
    
    ex = 35;
    ey = 35;
    c = 60;
    d = map(mouseX,0,2 * width,5, c);
    arc(ex, ey, d, d, 5 * PI/4, PI/4);
    c = c - 10;
    d = map(mouseX,0,2 * width,5, c);
    arc(ex, ey, d, d, 5 * PI/4, PI/4);
    c = c - 10;
    d = map(mouseX,0,2 * width,5, c);
    arc(ex, ey, d, d, 5 * PI/4, PI/4);
    c = c - 10;
    d = map(mouseX,0,2 * width,5, c);
    arc(ex, ey, d, d, 5 * PI/4, PI/4);
    c = c - 10;
    d = map(mouseX,0,2 * width,5, c);
    arc(ex, ey, d, d, 5 * PI/4, PI/4);
    pop();
}

function drawZ(x, y){
    push();
    translate(x,y);
    fill(0);
    sw = map(mouseX, 0, 2 * width, 0.2, 2);
    strokeWeight(sw);
    triangle(20, 20, 90, 20, 20, 20 + mouseY/35);
    triangle(20, 100, 90, 100 - mouseY/45, 90, 100);
    noFill();
    sw = map(mouseX, 0, 2 * width, 4, 0.2);
    strokeWeight(sw);
    ex = 55;
    ey = 55;
    c = 80;
    d = map(mouseX,0,2 * width,5, c);
    arc(ex, ey, d, d, 3 * PI/4, 7 * PI/4);
    c = c - 10;
    d = map(mouseX,0,2 * width,5, c);
    arc(ex, ey, d, d, 3 * PI/4, 7 * PI/4);
    c = c - 10;
    d = map(mouseX,0,2 * width,5, c);
    arc(ex, ey, d, d, 3 * PI/4, 7 * PI/4);
    c = c - 10;
    d = map(mouseX,0,2 * width,5, c);
    arc(ex, ey, d, d, 3 * PI/4, 7 * PI/4);
    c = c - 10;
    d = map(mouseX,0,2 * width,5, c);
    arc(ex, ey, d, d, 3 * PI/4, 7 * PI/4);
    c = c - 10;
    d = map(mouseX,0,2 * width,5, c);
    arc(ex, ey, d, d, 3 * PI/4, 7 * PI/4);
    c = c - 10;
    d = map(mouseX,0,2 * width,5, c);
    arc(ex, ey, d, d, 3 * PI/4, 7 * PI/4);
    c = c - 10;
    d = map(mouseX,0,2 * width,5, c);
    arc(ex, ey, d, d, 3 * PI/4, 7 * PI/4);
    c = c - 10;
    d = map(mouseX,0,2 * width,5, c);
    arc(ex, ey, d, d, 3 * PI/4, 7 * PI/4);
    c = c - 10;
    d = map(mouseX,0,2 * width,5, c);
    arc(ex, ey, d, d, 3 * PI/4, 7 * PI/4);
    c = c - 10;
    d = map(mouseX,0,2 * width,5, c);
    arc(ex, ey, d, d, 3 * PI/4, 7 * PI/4);
    c = c - 10;
    d = map(mouseX,0,2 * width,5, c);
    arc(ex, ey, d, d, 3 * PI/4, 7 * PI/4);
    c = c - 10;
    d = map(mouseX,0,2 * width,5, c);
    arc(ex, ey, d, d, 3 * PI/4, 7 * PI/4);
     sw = map(mouseX, 0, 2 * width, 0.4, 5);
    strokeWeight(sw);
    line(20, 100, 90, 20);
    pop();
}

function keyPressed() {
	if (keyCode == RIGHT_ARROW) {
		sceneNum++;
		x = 50;
		background(255);
	}else if(keyCode==LEFT_ARROW){
        sceneNum--;
        background(255);
    }

}






function keyTyped(){
//    shearX(mouseX *.00008*PI);

    if(key=='h'){
        drawH(x,y);
        x=x+100;
        
    }else if(key=='a'){
        drawA(x,y);
        x=x+100;
        
    }else if(key=='m'){
        drawM(x,y);
        x=x+100;
    }else if(key=='b'){
        drawB(x,y);
        x=x+100;
    }else if(key=='u'){
        drawU(x,y);
        x=x+100;
    }else if(key=='r'){
        drawR(x,y);
        x=x+100;
    }else if(key=='g'){
        drawG(x,y);
        x=x+100;
    }else if(key=='e'){
        drawE(x,y);
        x=x+100;
    }else if(key=='f'){
        drawF(x,y);
        x=x+100;
    }else if(key=='o'){
        drawO(x,y);
        x=x+100;
    }else if(key=='n'){
        drawN(x,y);
        x=x+100;
    }else if(key=='s'){
        drawS(x,y);
        x=x+100;
    }else if(key=='t'){
        drawT(x,y);
        x=x+100;
    }else if(key=='i'){
        drawI(x,y);
        x=x+100;
    }else if(key=='c'){
        drawC(x,y);
        x=x+100;
    }else if(key==' '){
        
        x=x+100;
    }else if(key=='l'){
        drawL(x,y);
        x=x+100;
    }else if(key=='v'){
        drawV(x,y);
        x=x+100;
    }else if(key=='o'){
        drawO(x,y);
        x=x+100;
    }else if(key=='c'){
        drawC(x,y);
        x=x+100;
    }else if(key=='d'){
        drawD(x,y);
        x=x+100;
    }else if(key=='q'){
        drawQ(x,y);
        x=x+100;
    }else if(key=='p'){
        drawP(x,y);
        x=x+100;
    }else if(key=='j'){
        drawJ(x,y);
        x=x+100;
    }else if(key=='k'){
        drawK(x,y);
        x=x+100;
        
    }else if(key=='w'){
        drawW(x,y);
        x=x+100;
    }else if(key=='x'){
        drawX(x,y);
        x=x+100;
    }else if(key=='y'){
        drawY(x,y);
        x=x+100;
    }else if(key=='z'){
        drawZ(x,y);
        x=x+100;
    }
    
    if(x>width-100){
        y=y+100;
        x=0;
    }
}

