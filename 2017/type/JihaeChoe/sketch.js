var x = 0;
var y = 0;
var slant = 100;
var lg = 0;


function setup() {
    createCanvas (900, 600);
    background(255);
    noFill();
    strokeWeight(3);
}

function draw() {
 
}

//what i need to do: y,z 


function keyTyped(){
    if (key == 'a'){
        stroke(0);
        drawA(x, y, lg, false);
        stroke(255);
        strokeWeight(3);
        drawA(x+5, y, lg, false);
        x = x + 10;
    }else if (key == 'b'){
        stroke(0);
        drawB(x, y, lg, false);
        stroke(255);
        strokeWeight(3);
        drawB(x+4, y, slant, false);
        x = x + 10;
    }else if (key == 'c') {
        stroke(0);
        drawC (x, y, lg, false);
        stroke(255);
        strokeWeight(3);
        drawCblack (x+10, y+10, lg, false);
        x= x+10;
    }else if (key == 'd'){
        strokeWeight(3);
        stroke(0);
        drawD (x, y, lg, false);
        stroke(255);
        drawD (x+5, y, lg, false);
        x= x+10;
    }else if (key == 'e') {
        stroke(0);
        drawE (x,y,lg, false);
        stroke(255);
        drawE (x+5 ,y+2 ,lg, false);
        x = x+120;
    }else if (key == 'g') {
        drawG (x,y,slant, false);
        x = x+120;
    }else if (key == 'h'){
        drawH (x, y, slant, false);
        x= x+ 120;
    }else if (key == 'i') {
        drawI (x, y, lg, false);
        x= x+120;
    }else if (key == 'j') {
        drawJ (x,y,slant,false);
        x= x+120
    }else if (key == 'k') {
        drawK (x,y,lg, false);
        x= x+120;
    }else if (key == 'm') {
        drawM (x, y, lg, false);
        x = x+120;
    }else if (key == 'n'){
        drawN (x,y, lg, false);
        x= x+120;
    }else if (key == 'o'){
        drawO (x,y,lg,false);
        x= x+120;
    }else if (key == 'p'){
        drawP(x, y, lg, false);
        x = x + 120;
    }else if (key == 'q') {
        drawQ(x,y,lg, false);
        x= x+120;
    }else if (key == 'r'){
        drawR (x,y,lg,false);
        x= x+120;
    }else if (key == 's') {
        drawS (x, y, lg, false);
        x = x+120;
    }else if (key == 't'){
        drawT(x, y, lg, false);
        x= x+120;
    }else if (key == 'u') {
        drawU (x,y, lg, false);
        x= x+120
    }else if (key == 'v') {
        stroke(0);
        drawV (x, y, lg, false);
        stroke(255);
        drawV (x, y+7, lg, false);
        x= x+120;
    }else if (key == 'w') {
        drawW (x, y, false);
        x = x+140;
    }else if (key == 'x') {
        drawX (x, y, false);
        x= x+120;
    }else if (key == 'y'){
        drawY (x, y, false);
        x= x+120;
    }else if (key == 'z'){
        stroke(0);
        drawZ (x, y, lg, false);
        stroke(255);
        drawZ (x, y+4.5, lg, false);
        x= x+10;
    }
    
if (x > width){
    y = y + 100;
    x = 0;
    }
}


function drawB (x,y) {
    push();
        translate(x,y);
        ellipse(50, 100, 100, 100);
        ellipse(50, 100, 80, 80);
        ellipse(50, 100, 60, 60);
        ellipse(50, 100, 40, 40);
        line(0, 150, 0, 15);
        line(10, 150, 10, 15);
        line(20, 150, 20, 15);
        line(30, 150, 30, 15);    
    pop();
}



function drawP (x,y) {
    push();
        translate(x, y);
        ellipse(50, 100, 100, 100);
        ellipse(50, 100, 80, 80);
        ellipse(50, 100, 60, 60);
        ellipse(50, 100, 40, 40);
        line(0, 50, 0, 185);
        line(10, 50, 10, 185);
        line(20, 50, 20, 185);
        line(30, 50, 30, 185);
    pop();
}


function drawH (x,y) {
    push();
        translate(x,y);
        line(0, 150, 0, 15);
        line(10, 150, 10, 15);
        line(20, 150, 20, 15);
        line(30, 150, 30, 15); 
        arc(50, 100, 100, 100, PI, 0);
        arc(50, 100, 80, 80, PI, 0);
        arc(50, 100, 60, 60, PI, 0);
        arc(50, 100, 40, 40, PI, 0);
        line(70, 150, 70, 100);
        line(80, 150, 80, 100);
        line(90, 150, 90, 100); 
        line(100, 150, 100, 100); 
    pop();
}


function drawG (x, y) {
    push();
        translate (x, y);
        ellipse(50, 100, 100, 100);
        ellipse(50, 100, 80, 80);
        ellipse(50, 100, 60, 60);
        ellipse(50, 100, 40, 40);
        line(70, 50, 70, 150);
        line(80, 50, 80, 150);
        line(90, 50, 90, 150);
        line(100, 50, 100, 150);
        arc(50.5, 150, 100, 100, 0, PI*1/2);
        arc(50.5, 150, 80, 80, 0, PI*1/2);
        arc(50.5, 150, 60, 60, 0, PI*1/2);
        arc(50.5, 150, 40, 40, 0, PI*1/2);
        line(10, 169.5, 50, 169.5);
        line(10, 179.5, 50, 179.5);
        line(10, 189.5, 50, 189.5);
        line(10, 199.5, 50, 199.5);
    pop();
}


function drawJ (x,y,lg) {
    push();
    translate(x,y);
        ellipse(50, 70, 30, 30);
        line(35,50, 35, 150);
        line(45,50, 45, 150);
        line(55,50, 55, 150);
        line(65,50, 65, 150);
        arc(15.5, 150, 100, 100, 0, PI*1/2);
        arc(15.5, 150, 80, 80, 0, PI*1/2);
        arc(15.5, 150, 60, 60, 0, PI*1/2);
        arc(15.5, 150, 40, 40, 0, PI*1/2);
        line(-17, 169.5, 13, 169.5);
        line(-17, 179.5, 13, 179.5);
        line(-17, 189.5, 13, 189.5);
        line(-17, 199.5, 13, 199.5);
    pop();
}


function drawN (x,y) {
    push();
        translate(x,y);
        line(0, 96, 0, 150);
        line(10, 96, 10, 150);
        line(20, 96, 20, 150);
        line(30, 96, 30, 150);
        arc(50.5, 95, 100, 100, PI, 0);
        arc(50.5, 95, 80, 80, PI, 0);
        arc(50.5, 95, 60, 60, PI, 0);
        arc(50.5, 95, 40, 40, PI, 0);
        line(69.9, 96, 69.9, 150);
        line(79.9, 96, 79.9, 150);
        line(89.9, 96, 89.9, 150);
        line(99.9, 96, 99.9, 150);
    pop();
}

function drawNblack1 (x,y,lg) {
    push();
    translate(x,y); 
        arc(740, 190, 100, 100+lg, PI, 0);
        arc(740, 190, 80, 80+lg, PI, 0);
        arc(740, 190, 60, 60+lg, PI, 0);
        arc(740, 190, 40, 40+lg, PI, 0);
    pop();
}

function drawNblack2 (x,y,lg) {
    push();
    translate(x,y);
        line(689.8, 190, 689.8, 260+lg/2);
        line(700.8, 190, 700.8, 260+lg/2);
        line(710.8, 190, 710.8, 260+lg/2);
        line(720.8, 190, 720.8, 260+lg/2);
        arc(738.9, 190, 20, 20, PI, 0);
        line(760.8, 190, 760.8, 260+lg/2);
        line(770.8, 190, 770.8, 260+lg/2);
        line(780.8, 190, 780.8, 260+lg/2);
        line(790.8, 190, 790.8, 260+lg/2);
    pop();
}


function drawK (x,y) {
    push();
    translate(x,y);
        arc(30, 50, 120, 120, 0, PI*1/2);
        arc(30, 50, 100, 100, 0, PI*1/2);
        arc(30, 50, 80, 80, 0, PI*1/2);
        arc(30, 50, 60, 60, 0, PI*1/2);
        line(0, 150, 0, 15);
        line(10, 150, 10, 15);
        line(20, 150, 20, 15);
        line(30, 150, 30, 15);
        arc(30, 150, 140, 140, PI*3/2, 0);
        arc(30, 150, 120, 120, PI*3/2, 0);
        arc(30, 150, 100, 100, PI*3/2, 0);
        arc(30, 150, 80, 80, PI*3/2, 0);
    pop();
}


function drawA (x,y) {
    push();
        translate(x, y);
        ellipse(50, 100, 100, 100);
        ellipse(50, 100, 80, 80);
        ellipse(50, 100, 60, 60);
        ellipse(50, 100, 40, 40);
        line(70, 50, 70, 150);
        line(80, 50, 80, 150);
        line(90, 50, 90, 150);
        line(100, 50, 100, 150);
    pop();
}


function drawM (x, y) {
    push();
        translate (x, y);
        line(0, 80, 0, 150);
        line(10, 80, 10, 150);
        line(20, 80, 20, 150);
        line(30, 80, 30, 150);
        ellipse(39.5, 80, 77, 77);
        ellipse(39.5, 80, 57, 57);
        ellipse(39.5, 80, 37, 37);
        ellipse(39.5, 80, 17, 17);
        line(96.3, 80, 96.3, 150);
        line(106.3, 80, 106.3, 150);
        line(116.3, 80, 116.3, 150);
        line(126.3, 80, 126.3, 150);
        ellipse(88.5, 80, 77, 77);
        ellipse(88.5, 80, 57, 57);
        ellipse(88.5, 80, 37, 37);
        ellipse(88.5, 80, 17, 17);
    pop();
}


function drawI (x, y) {
    push();
        translate (x, y);
        ellipse(50, 70, 30, 30);
        line(35,50, 35, 150);
        line(45,50, 45, 150);
        line(55,50, 55, 150);
        line(65,50, 65, 150);
    pop();
}



function drawO (x, y) {
    push();
        translate (x, y);
        ellipse(50, 100, 100, 100);
        ellipse(50, 100, 80, 80);
        ellipse(50, 100, 60, 60);
        ellipse(50, 100, 40, 40);
    pop();
}


function drawA2 (x,y) {
    push();
        translate(x, y);
        ellipse(760, 200, 100, 100);
        ellipse(760, 200, 80, 80);
        ellipse(760, 200, 60, 60);
        ellipse(760, 200, 40, 40);
        line(810, 150, 810, 250);
        line(800, 150, 800, 250);
        line(790, 150, 790, 250);
        line(780, 150, 780, 250);
    pop();
}

function drawM2 (x1, y1) {
    push();
        translate (x1, y1);
        line(530, 180, 530, 250);
        line(540, 180, 540, 250);
        line(550, 180, 550, 250);
        line(560, 180, 560, 250);
        ellipse(570, 180, 77, 77);
        ellipse(570, 180, 57, 57);
        ellipse(570, 180, 37, 37);
        ellipse(570, 180, 17, 17);
        line(629, 180, 629, 250);
        line(639, 180, 639, 250);
        line(649, 180, 649, 250);
        line(659, 180, 659, 250);
        ellipse(620, 180, 77, 77);
        ellipse(620, 180, 57, 57);
        ellipse(620, 180, 37, 37);
        ellipse(620, 180, 17, 17);
    pop();
}

function drawI2 (x2, y2) {
    push();
        translate (x2, y2);
        ellipse(465, 170, 30, 30);
        line(450, 150, 450, 250);
        line(460, 150, 460, 250);
        line(470, 150, 470, 250);
        line(480, 150, 480, 250);
    pop();
}

function drawG2 (x3, y3) {
    push();
        translate (x3, y3);
        ellipse(360, 200, 100, 100);
        ellipse(360, 200, 80, 80);
        ellipse(360, 200, 60, 60);
        ellipse(360, 200, 40, 40);
        line(410, 150, 410, 250);
        line(400, 150, 400, 250);
        line(390, 150, 390, 250);
        line(380, 150, 380, 250);
        arc(360, 250, 100, 100, 0, PI*1/2);
        arc(360, 250, 80, 80, 0, PI*1/2);
        arc(360, 250, 60, 60, 0, PI*1/2);
        arc(360, 250, 40, 40, 0, PI*1/2);
        line(330, 299.5, 360, 299.5);
        line(330, 289.5, 360, 289.5);
        line(330, 279.5, 360, 279.5);
        line(330, 269.5, 360, 269.5);
    pop();
}

function drawO2 (x4, y4) {
    push();
        translate (x4, y4);
        ellipse(220, 200, 100, 100);
        ellipse(220, 200, 80, 80);
        ellipse(220, 200, 60, 60);
        ellipse(220, 200, 40, 40);
    pop();
}

function drawS2 (x5, y5) {
    push();
        translate (x5, y5);
        arc(755, 185, 60, 60, PI*1/2, PI*3/2);
        arc(755, 185, 40, 40, PI*1/2, PI*3/2);
        arc(755, 185, 20, 20, PI*1/2, PI*3/2);
        line(755, 155, 810, 155);
        line(755, 165, 810, 165);
        line(755, 175, 810, 175);
        line(755, 185, 810, 185);
        arc(790, 225, 60, 60, PI*3/2, PI*1/2); 
        arc(790, 225, 40, 40, PI*3/2, PI*1/2); 
        arc(790, 225, 20, 20, PI*3/2, PI*1/2); 
        line(755, 195, 790, 195);
        line(755, 205, 790, 205);
        line(755, 215, 790, 215);
        line(727, 225, 790, 225);
        line(727, 235, 790, 235);
        line(727, 245, 790, 245);
        line(727, 255, 790, 255);
    pop();
}

function drawL (x,y,lg) {
    push();
        translate(x,y);
        line(730, 120-lg, 730, 250+lg/2);
        line(720, 120-lg, 720, 250+lg/2);
        line(710, 120-lg, 710, 250+lg/2);
        line(700, 120-lg, 700, 250+lg/2);
    pop();   
}

function drawLblack (x,y,lg) {
    push();
        translate(x,y);
        line(728.5, 120-lg, 728.5, 250+lg/2);
        line(718.5, 120-lg, 718.5, 250+lg/2);
        line(708.5, 120-lg, 708.5, 250+lg/2);
        line(698.5, 120-lg, 698.5, 250+lg/2);
    pop();
}

//c is perfect
function drawC (x, y) {
    push();
        translate(x, y);
        arc(50, 100, 100, 100, PI*3/11, PI*3/2+PI*2/11);
        arc(50, 100, 80, 80, PI*3/11, PI*3/2+PI*2/11);
        arc(50, 100, 60, 60, PI*3/11, PI*3/2+PI*2/11);
        arc(50, 100, 40, 40, PI*3/11, PI*3/2+PI*2/11);
    pop();
}


function drawCblack (x, y) {
    push();
        translate(x,y);
        arc(250, 205, 100, 100, PI*1/11, ((PI*3/2)+(PI*4/11)));
        arc(250, 205, 80, 80, PI*1/11, ((PI*3/2)+(PI*4/11)));
        arc(250, 205, 60, 60, PI*1/11, ((PI*3/2)+(PI*4/11)));
        arc(250, 205, 40, 40, PI*1/11, ((PI*3/2)+(PI*4/11)));
        arc(250.8, 205, 20, 10, PI*1/11, ((PI*3/2)+(PI*4/11)));
    pop();
    
}

//d is perfect 
function drawD (x,y,lg) {
    push();
        translate(x,y);
        line(70, 150, 70, 15);
        line(80, 150, 80, 15);
        line(90, 150, 90, 15);
        line(100, 150, 100, 15);
        ellipse(50, 100, 100, 100);
        ellipse(50, 100, 80, 80);
        ellipse(50, 100, 60, 60);
        ellipse(50, 100, 40, 40);
    pop();   
}

//e is done... 
function drawE (x,y,lg) {
    push();
        translate(x,y);
        arc(50, 100, 100, 100, PI, 0);
        arc(50, 100, 80, 80, PI, 0);
        arc(50, 100, 60, 60, PI, 0);
        arc(50, 100, 40, 40, PI, 0);
        arc(50, 100, 100, 100, PI/2, PI-PI/11);
        arc(50, 100, 80, 80, PI/2, PI-PI/8.5);
        arc(50, 100, 60, 60, PI/2, PI-PI/6.5);
        arc(50, 100, 40, 40, PI/2, PI-PI/4.5);
        line(50, 120, 100, 120);
        line(50, 130, 100, 130);
        line(50, 140, 100, 140);
        line(50, 150, 100, 150);
    pop();
    
}

function drawF (x,y) {
    push();
    translate(x,y);
        line(610, 155, 610, 255);
        line(600, 155, 600, 255);
        line(590, 155, 590, 255);
        line(580, 155, 580, 255);
        arc(619.5, 155, 77, 77, PI, 0);
        arc(619.5, 155, 57, 57, PI, 0);
        arc(619.5, 155, 37, 37, PI, 0);
        arc(619.5, 155, 17, 17, PI, 0);
        line(0, 150, 0, 15);
        line(10, 150, 10, 15);
        line(20, 150, 20, 15);
        line(30, 150, 30, 15);
    pop();
}


//q is perfect
function drawQ (x,y, lg) {
    push();
        translate(x, y);
        ellipse(50, 100, 100, 100);
        ellipse(50, 100, 80, 80);
        ellipse(50, 100, 60, 60);
        ellipse(50, 100, 40, 40);
         line(70, 50, 70, 199);
        line(80, 50, 80, 198.5);
        line(90, 50, 90, 195);
        line(100, 50, 100, 190);
        arc(70.5, 150, 100, 100, 0, PI*1/2);
        arc(70.5, 150, 80, 80, 0, PI*1/2);
        arc(70.5, 150, 60, 60, 0, PI*1/2);
        arc(70.5, 150, 40, 40, 0, PI*1/2);
    pop();
}


//r is perfect
function drawR (x,y, lg) {
        push();
        translate(x,y);
            line(35,50, 35, 150);
            line(45,50, 45, 150);
            line(55,50, 55, 150);
            line(65,50, 65, 150);
            arc(85.5, 100, 100, 100, PI, PI*3/2+PI*2/11);
            arc(85.5, 100, 80, 80, PI, PI*3/2+PI*2/11);
            arc(85.5, 100, 60, 60, PI, PI*3/2+PI*2/11);
            arc(85.5, 100, 40, 40, PI, PI*3/2+PI*2/11);
        pop();
}

function drawT (x,y,lg) {
        push();
        translate(x,y);
            line(35, 40, 35, 100);
            line(45, 40, 45, 100);
            line(55, 40, 55, 100);
            line(65, 40, 65, 100);
            arc(85.5, 100, 100, 100, PI/2, PI);
            arc(85.5, 100, 80, 80, PI/2, PI);
            arc(85.5, 100, 60, 60, PI/2, PI);
            arc(85.5, 100, 40, 40, PI/2, PI);
            line(35, 60, 80, 60);
            line(35, 70, 80, 70);
            line(35, 80, 80, 80);
            line(35, 90, 80, 90);
        pop();
}


//u is perfect
function drawU (x,y, lg) {
    push();
    translate(x,y);
        arc(50.5, 100, 100, 100, 0, PI);
        arc(50.5, 100, 80, 80, 0, PI);
        arc(50.5, 100, 60, 60, 0, PI);
        arc(50.5, 100, 40, 40, 0, PI);
        line(0, 50, 0, 100);
        line(10, 50, 10, 100);
        line(20, 50, 20, 100);
        line(30, 50, 30, 100);
        line(70, 50, 70, 100);
        line(80, 50, 80, 100);
        line(90, 50, 90, 100);
        line(100, 50, 100, 100);
    pop();
}

function drawV (x,y,lg) {
     push();
     translate(x,y);
        line (0, 50, 30.5, 150);
        line (10, 50, 40.5, 150);
        line (20, 50, 50.5, 150);
        line (30, 50, 60.5, 150);
        line (50.5, 150, 80, 50);
        line (60.5, 150, 90, 50);
        line (70.5, 150, 100, 50);
        line (80.5, 150, 110, 50);
        line (30.5, 150, 80.5, 150);
    pop();
}

function drawW (x, y, lg) {
    push();
    translate(x, y);
        line (0, 50, 28.5, 150);
        line (8, 50, 38.5, 150);
        line (18, 50, 48.5, 150);
        line (28, 50, 58.5, 150);
        line (48, 50, 28.5, 150);
        line (58, 50, 38.5, 150);
        line (68, 50, 48.5, 150);
        line (78, 50, 58.5, 150);
        line (48, 50, 78.5, 150);
        line (58, 50, 88.5, 150);
        line (68, 50, 98.5, 150);
        line (78, 50, 108.5, 150);
        line (98.5, 50, 78.5, 150);
        line (108.5, 50, 88.5, 150);
        line (118.5, 50, 98.5, 150);
        line (128.5, 50, 108.5, 150);
    pop();
}

function drawX (x, y, lg) {
    push();
    translate(x, y);
        line(0, 50, 70, 150);
        line(10, 50, 80, 150);
        line(20, 50, 90, 150);
        line(30, 50, 100, 150);
        line(0, 150, 70, 50);
        line(10, 150, 80, 50);
        line(20, 150, 90, 50);
        line(30, 150, 100, 50);
    pop();
}

function drawY (x, y, lg) {
    push();
    translate (x, y);
        arc(50.5, 100, 100, 100, 0, PI);
        arc(50.5, 100, 80, 80, 0, PI);
        arc(50.5, 100, 60, 60, 0, PI);
        arc(50.5, 100, 40, 40, 0, PI);
        line(0, 50, 0, 100);
        line(10, 50, 10, 100);
        line(20, 50, 20, 100);
        line(30, 50, 30, 100);
        line(70, 50, 70, 150);
        line(80, 50, 80, 150);
        line(90, 50, 90, 150);
        line(100, 50, 100, 150);
        arc(50.5, 150, 100, 100, 0, PI*1/2);
        arc(50.5, 150, 80, 80, 0, PI*1/2);
        arc(50.5, 150, 60, 60, 0, PI*1/2);
        arc(50.5, 150, 40, 40, 0, PI*1/2);
        line(10, 169.5, 50, 169.5);
        line(10, 179.5, 50, 179.5);
        line(10, 189.5, 50, 189.5);
        line(10, 199.5, 50, 199.5);
    pop();
}

function drawS (x, y, lg) {
    push();
    translate(x, y);
        arc(30, 75, 60, 60, PI*1/2, PI*3/2);
        arc(30, 75, 40, 40, PI*1/2, PI*3/2);
        arc(30, 75, 20, 20, PI*1/2, PI*3/2);
        line(30, 44.5, 85.5, 45.5);
        line(30, 54.5 , 85.5, 54.5);
        line(30, 64.5, 85.5, 64.5);
        line(30, 74.5, 85.5, 74.5);
        arc(65, 114.9, 60, 60, PI*3/2, PI*1/2); 
        arc(65, 114.9, 40, 40, PI*3/2, PI*1/2); 
        arc(65, 114.9, 20, 20, PI*3/2, PI*1/2); 
        line(30, 84.5, 65, 84.5);
        line(30, 94.5, 65, 94.5);
        line(30, 104.5, 65, 104.5);
        line(0, 114.5, 63, 114.5);
        line(0, 124.5, 63, 124.5);
        line(0, 134.5, 63, 134.5);
        line(0, 144.5, 63, 144.5);
    pop();
}

function drawZ (x,y,lg) {
    push();
    translate (x,y);
        arc(66.5, 73.8, 60, 60, PI*3/2, PI*1/2);
        arc(66.5, 73.8, 40, 40, PI*3/2, PI*1/2);
        arc(66.5, 73.8, 20, 20, PI*3/2, PI*1/2);
        line(10, 43.5, 65.5, 43.5);
        line(10, 53.5 , 65.5, 53.5);
        line(10, 63.5, 65.5, 63.5);
        line(10, 73.5, 65.5, 73.5);
        arc(30, 113.9, 60, 60, PI*1/2, PI*3/2); 
        arc(30, 113.9, 40, 40, PI*1/2, PI*3/2); 
        arc(30, 113.9, 20, 20, PI*1/2, PI*3/2); 
        line(30, 83.5, 65, 83.5);
        line(30, 93.5, 65, 93.5);
        line(30, 103.5, 65, 103.5);
        line(30, 113.5, 93, 113.5);
        line(30, 123.5, 93, 123.5);
        line(30, 133.5, 93, 133.5);
        line(30, 143.5, 93, 143.5); 
    pop();
}

function drawBsmall (x,y) {
    push();
    translate(x,y);
        ellipse(25, 50, 50, 50);
        ellipse(25, 50, 40, 40);
        ellipse(25, 50, 30, 30);
        ellipse(25, 50, 20, 20);
        line(0, 75, 0, 7.5);
        line(5, 75, 5, 7.5);
        line(10, 75, 10, 7.5);
        line(10, 75, 10, 7.5);
    pop();
}

function drawYsmall (x,y) {
    push();
    translate (x, y);
        arc(25.25, 50, 50, 50, 0, PI);
        arc(25.5, 50, 40, 40, 0, PI);
        arc(25.25, 50, 30, 30, 0, PI);
        arc(25.25, 50, 20, 20, 0, PI);
        line(0, 25, 0, 50);
        line(5, 25, 5, 50);
        line(10, 25, 10, 50);
        line(15, 25, 15, 50);
        line(35, 25, 35, 75);
        line(40, 25, 40, 75);
        line(45, 25, 45, 75);
        line(50, 25, 50, 75);
        arc(25.25, 75, 50, 50, 0, PI*1/2);
        arc(25.25, 75, 40, 40, 0, PI*1/2);
        arc(25.25, 75, 30, 30, 0, PI*1/2);
        arc(25.25, 75, 20, 20, 0, PI*1/2);
        line(5, 84.75, 25, 84.75);
        line(5, 89.75, 25, 89.75);
        line(5, 94.75, 25, 94.75);
        line(5, 99.75, 25, 99.75);
    pop();
}

function drawJsmall (x,y) {
    push();
    translate(x,y);
        ellipse(25, 35, 15, 15);
        line(17.5 , 25, 17.5, 75);
        line(22.5 , 25, 22.5, 75);
        line(27.5, 25, 27.5, 75);
        line(32.5, 25, 32.5, 75);
        arc(7.75, 75, 50, 50, 0, PI*1/2);
        arc(7.75, 75, 40, 40, 0, PI*1/2);
        arc(7.74, 75, 30, 30, 0, PI*1/2);
        arc(7.74, 75, 20, 20, 0, PI*1/2);
        line(-8.5, 84.75, 6.5, 84.75);
        line(-8.5, 89.75, 6.5, 89.75);
        line(-8.5, 94.75, 6.5, 94.75);
        line(-8.5, 99.75, 13, 99.75);
    pop();
}

function drawHsmall (x,y) {
    push();
        translate(x,y);
        line(0, 75, 0, 7.5);
        line(5, 75, 5, 7.5);
        line(10, 75, 10, 7.5);
        line(15, 75, 15, 7.5); 
        arc(25, 50, 50, 50, PI, 0);
        arc(25, 50, 40, 40, PI, 0);
        arc(25, 50, 30, 30, PI, 0);
        arc(25, 50, 20, 20, PI, 0);
        line(35, 75, 35, 50);
        line(40, 75, 40, 50);
        line(45, 75, 45, 50);
        line(50, 75, 50, 50);
    pop();
    
}
