var wdth = .75;
var wdthTw = .5;
var scaleFactor;
var t = ".";
var sceneCount = 0;
var xpos = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(10);
}

function draw(){

    if (sceneCount == 0) {
    sceneOne();
  } else if (sceneCount == 1) {
    sceneTwo();
  } else if (sceneCount == 2) {
    sceneThree();
  } else if (sceneCount == 3) {
    sceneFour();
  } else if (sceneCount == 4) {
    sceneFive();
  } else if (sceneCount == 5) {
    sceneSix();
  }


    if (sceneCount > 5) {
    sceneCount = 0;
  } else if (sceneCount < 0) {
    sceneCount = 5;
  }

}

function sceneOne(){
    //moving cursor along y axis effects character weight.
scale(.75);
background(77,130,195);
  strokeWeight(550);
  line(0,10,2800,10);
stroke(205,206,206);
strokeWeight(2);
  //bottom left rule
  stroke(0);
    line(50,750,800,750);
   stroke(241,90,44);
  strokeWeight(3);
  //bottom right rule
   line(900,750,1150,750);
 //arrow bottom right
line(1150,725,1150,770);
  line(1125,725,1150,750);
  line(1125,770,1150,750);
   scale(.7);    fill(0,0,0);
    stroke(249,170,146);
   drawW(100,200);
    drawE(430,230);
    drawI(620,230);
    drawG(830,230);
  drawH(970,230);
    drawT(1160,230);
    drawE(1350,230);
    drawD(1550,200);
  //  drawI(350,500);
scale(.5);
    drawF(430,900);
    drawL(620,900);
   drawE(770,900);
    drawX(1000,870);
     drawI(1110,900);
    
    drawB(1300,900);
    drawI(1455,900);
    drawL(1650,900);
    drawI(1800,900);
     drawT(2000,900);
     drawY(2170,870);
 stroke(0,87,156);
  stroke(0,87,156);
    drawCHRIS(1400,1700);
    drawSPECIMEN(400,1700);
  scale(.5);
  drawARROW(5150, 4000);
      strokeWeight(2);
  //  stroke(255);
    line(50,750,110,750);
  }

function sceneTwo(){

    //moving cursor along y axis effects character weight.
scale(.75);
        background(241,90,44);
stroke(205,206,206);
 strokeWeight(2);
//bottom left rule
  line(50,750,800,750);
   stroke(247,247,248);
  strokeWeight(3);
  //bottom right rule
   line(900,750,1150,750);
 //arrow bottom right
line(1150,725,1150,770);
  line(1125,725,1150,750);
  line(1125,770,1150,750);
   scale(.5);    fill(0,0,0);
    stroke(249,176,146);
   // scale(.75);
    drawA(100,200);
    drawB(400,230);
    drawC(630,230);
    drawD(800,200);
  drawE(1000,230);
    drawF(1220,230);
    drawG(1450,230);
    drawH(150,500);
    drawI(350,500);
 drawJ(650,500);
    drawK(790,500);
   drawL(1000,500);
    drawM(1200,470);
     drawN(1500,470);
    drawO(100,800);
    drawP(330,800);
     drawQ(525,800);
     drawR(770,800);
     drawS(1000,800);
    drawT(1150,800);
    drawU(1600,800);
    drawV(150,1050);
    drawW(430,1050);
    drawX(850,1050);
       drawY(1000,1050);
  drawZ(1350,1050);
  stroke(77,130,195);
 strokeWeight(200);
line(0,10,5800,10);
stroke(0,87,156);
   scale(.5);
 }
function sceneThree(){
scale(.75);
      //moving cursor along y axis effects character weight.
background(225,227,226);
    strokeWeight(2);
    line(50,400,1000,400);
   line(50,385,50,415);
       line(100,395,100,405);
    line(150,385,150,415);
       line(200,395,200,405);
     line(250,385,250,415);
       line(300,395,300,405);
line(350,385,350,415);
line(400,395,400,405);
line(450,385,450,415);
line(500,395,500,405);
line(550,385,550,415);
line(600,395,600,405);
line(650,385,650,415);
 line(700,395,700,405);
line(750,385,750,415);
line(800,395,800,405);
strokeWeight(600);
stroke(205,206,206);
strokeWeight(2);
//bottom left rule
  stroke(0);
  strokeWeight(3);
    line(50,750,800,750);
   stroke(77,130,195);
//bottom right rule
   line(900,750,1150,750);
 //arrow bottom right
line(1150,725,1150,770);
  line(1125,725,1150,750);
  line(1125,770,1150,750);
scale(.7);    fill(0,0,0);
    stroke(249,170,146);
scale(1.125);
  drawH(100,100);
  drawE(300,100);
  drawA(440,70);
  drawD(720,70);
   drawE(920,100);
  drawR(1130,100);
  drawS(1350,100);
drawW(100,300);
  drawI(460,330);
  drawT(670,330);
  drawH(880,330);
 drawI(100,550);
  drawM(340,520);
  drawP(550,550);
  drawA(625,520);
   drawC(920,550);
  drawT(1060,550);
drawBODY(20,20);
     drawBODY(20,60);
     drawBODY(20,100);
     drawBODY(20,140);
     drawBODY(20,180);
     drawBODY(20,220);
     drawBODY(20,260);
     drawBODY(20,300);
     drawBODY(20,340);
     drawBODY(20,380);
     drawBODY(20,420);
drawBODY(20,460);
     drawBODY(20,500);
     drawBODY(20,540);
     drawBODY(20,580);
     drawBODY(20,620);
     drawBODY(20,660);
     drawBODY(20,700);
     drawBODY(20,740);
     drawBODY(20,780);
drawBODY(400,0);
     drawBODY(400,40);
     drawBODY(400,80);
     drawBODY(400,120);
     drawBODY(400,160);
drawBODY(400,260);
     drawBODY(400,300);
     drawBODY(400,340);
     drawBODY(400,380);
     drawBODY(400,420);
drawBODY(400,460);
     drawBODY(400,500);
     drawBODY(400,540);
     drawBODY(400,580);
     drawBODY(400,620);
     drawBODY(400,660);
     drawBODY(400,700);
     drawBODY(400,740);
     drawBODY(400,780);
scale(2);
      drawBODY(400,0);
     drawBODY(400,40);
     drawBODY(400,80);
     drawBODY(400,120);
     drawBODY(400,160);
drawBODY(400,260);
     drawBODY(400,300);
     drawBODY(400,340);
     drawBODY(400,380);
     drawBODY(400,420);
drawBODY(400,460);
     drawBODY(400,500);
     drawBODY(400,540);
     drawBODY(400,580);
     drawBODY(400,620);
     drawBODY(400,660);
     drawBODY(400,700);
     drawBODY(400,740);
     drawBODY(400,780);
stroke(0,87,156);
stroke(0,87,156);
    drawCHRIS(100,1500);
  scale(.5);
  drawARROW(2000, 3000);
}
function sceneFour(){
scale(.75);
background(225,226,266);
strokeWeight(600);
stroke(205,206,206);
strokeWeight(2);
//bottom left rule
  stroke(0);
  strokeWeight(3);
    line(50,750,800,750);
   stroke(132,203,161);
//bottom right rule
   line(900,750,1150,750);
 //arrow bottom right
line(1150,725,1150,770);
  line(1125,725,1150,750);
  line(1125,770,1150,750);
 fill(0,0,0);
    stroke(77,130,195);
scale(1);
  drawAA(700,120);
 stroke(0,87,156);
  drawV(850,450);
scale(.25);
  stroke(241,90,44);
 drawAV(100,230);
 drawAV(100,590);
  drawAV(100,950);
  drawAV(100,1310);
  drawAV(100,1670);
   drawAV(100,2030);
  drawAV(100,2390);
// drawAV(10,2530);
   //drawAV(10,2890);
 // drawAV(10,3250);
   stroke(0,87,2750);
}

function sceneFive(){
background(77,130,195);
drawMetric(100,50);
strokeWeight(600);
//  line(0,10,2800,10);
   scale(.75); 
    stroke(205,206,206);
strokeWeight(2);
 fill(0,0,0);
    stroke(241,90,44);
scale(2.2);
 drawR(25,25)
  drawA(250,-5);
  drawW(28, 130);
scale(.25);
stroke(0,87,156);
}

function sceneSix(){
scale(.75);
background(249,176,146);
drawMetric(50,50);
strokeWeight(600);
stroke(205,206,206);
strokeWeight(2);
//bottom left rule
  stroke(0);
  strokeWeight(3);
    line(50,750,800,750);
   stroke(132,203,161);
//bottom right rule
   line(900,750,1150,750);
 //arrow bottom right
line(1150,725,1150,770);
  line(1125,725,1150,750);
  line(1125,770,1150,750);
fill(0,0,0);
    stroke(0,87,156);
scale(2);
 drawT(25,25)
  drawH(200,25);
  drawE(300, 190);
scale(.25);
stroke(0,87,156);
}

function drawCHRIS(x, y) {
  push();
translate(x, y);
    scale(.25);
  drawC(100,100);
  drawH(260,100);
  drawR(480,100);
  drawI(690,100);
  drawS(900,100);
drawP(1300,100);
  drawA(1380,75);
  drawR(1680,100);
  drawK(1890,100);
  drawS(2100,100);
;    pop();
    
}

function drawSPECIMEN(x, y) {
  push();
translate(x, y);
    scale(.25);
    stroke(247,247,248);
  drawT(100,100);
  drawY(260,70);
  drawP(460,100);
  drawE(670,100);
drawS(1090,100);
  drawP(1240,100);
  drawE(1420,100);
  drawC(1660,100);
  drawI(1810,100);
  drawM(2060,70);
  drawE(2280,100);
  drawN(2520,70);
    ;    pop();
    
}


 function drawARROW(x, y) {
  push();
translate(x, y);
    scale(.40);
 stroke(241,90,44);
  drawU(120,100);
  drawS(190,100);
  drawE(350,100);
 // drawI(700,100);
  drawA(800,75);
  
  drawR(1100,100);
  drawR(1300,100);
  drawO(1500,100);
  drawW(1700,75);
// draw(2100,100);
  
  drawK(2200,100);
  drawE(2400,100);
     drawY(2575,75);
     drawS(2750,100);
     
    ;    pop();
    
}

function drawA(x, y) {
  push();
translate(x+200, y+200);
    rotate(PI);
 strokeWeight(mouseX/35);
      //a crossbar 
    fill(0);
    rect(7,60,100,wdth);
     //A  1
     shearX(PI/6.7);
     fill(0);
   
    rect(-45,25,wdth,144);
    //A  2
     shearX(7.4/PI);
     fill(0);
 rect(150,25,wdth,144);
;    pop();
    
}


  function drawB(x, y) {
 push();
strokeWeight(mouseX/35);
    translate(x, y);
  //b horizontal bar
    fill(0);
    rect(0,0,60,wdth);
    //f vertical bar
    fill(0);
    rect(0,0,wdth,144);
    //b crossbar 
    fill(0);
    rect(0,70,60,wdth); 
//b horizontal bar
  rect(0,144,60,wdth);
noFill(0);
      rotate(HALF_PI);
strokeWeight((.5)+(mouseX/35));
arc(107, -70, 72, 72, PI, TWO_PI);
noFill(0);
strokeWeight((.5)+(mouseX/35));
arc(36,-60, 72, 72, PI, TWO_PI);
;    pop();
    
}

function drawC(x, y) { push();
 strokeWeight(mouseX/35);
    translate(x, y);
noFill(0);
      rotate(QUARTER_PI);
rotate(QUARTER_PI);
rotate(QUARTER_PI);
rotate(QUARTER_PI);
noFill(0);
  strokeWeight((.5)+(mouseX/35));
 rotate(QUARTER_PI);
arc(-72,-32, 144, 144, PI,HALF_PI);
    ;    pop();
}

function drawD(x, y){ push();
strokeWeight(mouseX/35);
    translate(x, y);
  //f horizontal bar
    fill(0);
    rect(0,30,70,wdth);
    //f vertical bar
    fill(0);
    rect(0,30,wdth,144);
//f horizontal bar
    fill(0);
    rect(0,174,70,wdth);
      noFill(0);
      rotate(QUARTER_PI);
           rotate(QUARTER_PI);
noFill(0);
  strokeWeight((.5)+(mouseX/35));
 arc(103,-70, 144, 144, PI, TWO_PI);
 ;    pop();
}

function drawE(x, y) {
  push();
 
     strokeWeight(mouseX/35);
    translate(x, y);
  //f horizontal bar
    fill(0);
    rect(0,0,144,wdth);
    //f vertical bar
    fill(0);
    rect(0,0,wdth,144);
    //f crossbar 
    fill(0);
    rect(0,80,100,wdth); 
 //f horizontal bar
    fill(0);
    rect(0,144,144,wdth);
;    pop();
    
}
 
   function drawF(x, y) {
  push();
strokeWeight(mouseX/35);
    translate(x, y);
  //f horizontal bar
    fill(0);
    rect(0,0,144,wdth);
    //f vertical bar
    fill(0);
    rect(0,0,wdth,144);
    //f crossbar 
    fill(0);
    rect(0,80,100,wdth);    
;    pop();
    
}

 function drawFf(x, y) {
  push();
translate(x, y);
  //f horizontal bar
    fill(0);
    noStroke();
    rect(0,25,(windowWidth/12),wdthTw+(mouseY/10));
    //f vertical bar
    fill(0);
    noStroke();
    rect(0,25,wdthTw+(mouseX/16),((windowHeight/4)+(mouseY/9)));
 //f crossbar 
    fill(0);
    noStroke();
    rect(0,(windowHeight/5.5),((windowWidth/18)+(mouseY/35)),(wdthTw+mouseY/12));    
;    pop();
    
}

function drawG(x, y) { push();
 strokeWeight(mouseX/35);
    translate(x, y);
fill(0,0,0);
        rect(87,92,wdth,52);
//h crossbar 
    fill(0,0,0);
        rect(15,92,72,wdth);
      noFill(0);
      rotate(QUARTER_PI);
       rotate(QUARTER_PI);
rotate(QUARTER_PI);
rotate(QUARTER_PI);
noFill(0);
  strokeWeight((.5)+(mouseX/35));
rotate(QUARTER_PI);
arc(-72,-32, 144, 144, PI,HALF_PI);
    ;    pop();
}


 function drawH(x, y) {
  push();
    translate(x, y);
   // strokeWeight(mouseX/35);
          strokeWeight(mouseX/35);
//h vertical bar
    fill(0,0,0);
          rect(0,0,wdth,144);
//h vertical bar 2
    fill(0,0,0);
        rect(144,0,wdth,144);
//h crossbar 
    fill(0,0,0);
        rect(0,80,144,wdth);
    ;    pop();
    
}


 function drawI(x, y) {
  push();
    //translate(x, y+mouseY);
    translate(x, y);
     strokeWeight(mouseX/35);
   //I horizontal bar
    fill(0);
  rect(0,0,144,wdth);
    //I vertical bar
    fill(0);
rect(72,0,wdth,144);
       //I horizontal bar II
    fill(0);
   rect(0,144,144,wdth); 
;    pop();
    
}

function drawJ(x, y)  {
  push();
        //translate(x, y+mouseY);
     strokeWeight(mouseX/35);
translate(x, y);
    rotate(PI);
//f vertical bar
    fill(0);
    rect(-40,-75,wdth,70);
//f horizontal bar
    fill(0);
    rect(-40,0,100,wdth);
    ;   

 //translate(x, y+mouseY);
     strokeWeight(mouseX/35);
 translate(x, y);
  //f horizontal bar
  rotate(HALF_PI);
    fill(0);
//f horizontal bar
    fill(0);
noFill(0);
rotate(QUARTER_PI);
      rotate(QUARTER_PI);
      rotate(PI);
noFill(0);
  strokeWeight((.5)+(mouseX/35));
  arc(-618,-580, 144, 144, PI, TWO_PI);
;    pop();

    
     }

function drawK(x, y) {
  push();
    //translate(x, y+mouseY);
     strokeWeight(mouseX/35);
    translate(x, y);
    //K vertical bar
    fill(0);
    rect(0,0,wdth,144);
rotate(HALF_PI);
    
    //K crossbar 1
     shearX(PI/6.7);
     fill(0);
    //noStroke();
    rect(85,-150,wdth,144);
     //K crossbar 2
     shearX(7.6/PI);
     fill(0);
    rect(85,-150,wdth,144);

;    pop();
    
}

function drawL(x, y) {
  push();
        //translate(x, y+mouseY);
     strokeWeight(mouseX/35);
    translate(x, y);
 //f vertical bar
    fill(0);
    rect(0,0,wdth,144);
//f horizontal bar
    fill(0);
    rect(0,144,100,wdth);   pop();
    
     }

function drawM(x, y) {
  push();
    //translate(x, y+mouseY);
translate(x, y);
 strokeWeight(mouseX/35);
        //M vertical bar
    fill(0);
    //noStroke();
    rect(-30,31,wdth,144);
 //M vertical bar 2
    fill(0);
    //noStroke();
    rect(150,31,wdth,144);
//M crossbar 1
     shearX(PI/6.7);
     fill(0);
    //noStroke();
    rect(-35,31,wdth,144);
//M crossbar 2
     shearX(7.4/PI);
     fill(0);
    //noStroke();
    rect(155,31,wdth,144);
 ;    pop();
    
}

 function drawN(x, y) {
  push();
translate(x, y);
 strokeWeight(mouseX/35);
        //N vertical bar
    fill(0);
    //noStroke();
    rect(-30,31,wdth,144);
//N vertical bar 2
    fill(0);
    //noStroke();
    rect(80,31,wdth,144);
//N crossbar 
     shearX(PI/6);
     fill(0);
    //noStroke();
    rect(-35,31,wdth,144);
     ;    pop();
    
}

function drawO(x, y){ push();
strokeWeight(mouseX/35);
    translate(x, y);
 noFill(0);
      rotate(QUARTER_PI);
rotate(QUARTER_PI);
rotate(QUARTER_PI);
rotate(QUARTER_PI);
rotate(QUARTER_PI);
rotate(QUARTER_PI);
 noFill(0);
strokeWeight((.5)+(mouseX/35));
 arc(-70,70, 144, 144, PI, TWO_PI);
rotate(QUARTER_PI);
arc(0,100, 144, 144, PI, TWO_PI);
rotate(QUARTER_PI);   
rotate(QUARTER_PI); 
rotate(QUARTER_PI);   rotate(QUARTER_PI); 
rotate(QUARTER_PI); 
arc(-72,-72, 144, 144, HALF_PI,HALF_PI);
    ;    pop();
}

function drawP(x, y) {
  push();

     strokeWeight(mouseX/35);
    translate(x, y);
  //f horizontal bar
    fill(0);
    rect(0,0,90,wdth);
    //f vertical bar
    fill(0);
    rect(0,0,wdth,144);
    //f crossbar 
    fill(0);
    rect(0,80,90,wdth); 
noFill(0);
 rotate(HALF_PI);
strokeWeight((.5)+(mouseX/35));
arc(40,-90, 80, 80, PI, TWO_PI);
    ;    pop();
    
}

function drawQ(x, y) { push();
strokeWeight(mouseX/35);
    translate(x, y);
 noFill(0);
 rotate(QUARTER_PI);
rotate(QUARTER_PI);
rotate(QUARTER_PI);
rotate(QUARTER_PI);
rotate(QUARTER_PI);
rotate(QUARTER_PI);
noFill(0);
strokeWeight((.5)+(mouseX/35));
arc(-70,70, 144, 144, PI, TWO_PI);
rotate(QUARTER_PI);
 arc(0,100, 144, 144, PI, TWO_PI);
rotate(QUARTER_PI);   
rotate(QUARTER_PI); 
rotate(QUARTER_PI);   rotate(QUARTER_PI); 
rotate(QUARTER_PI); 
arc(-72,-72, 144, 144, HALF_PI,HALF_PI);
shearX(PI/3.7);
                       rect(0,-150,wdth,50);
    ;    pop();
}

function drawR(x, y) {
  push();
    //translate(x, y+mouseY);
     strokeWeight(mouseX/35);
    translate(x, y);
      fill(0);
    rect(0,0,90,wdth);
    //R vertical bar
    fill(0);
    rect(0,0,wdth,144);
    //R crossbar 
    fill(0);
    rect(0,80,90,wdth); 
noFill(0);
      rotate(HALF_PI);
noFill(0);
strokeWeight((.5)+(mouseX/35));
arc(40,-100, 80, 80, PI, TWO_PI);
shearX(PI/6.7);
     fill(0);
//K crossbar 2
     shearX(7.6/PI);
     fill(0);
    rect(90,-145,wdth,144);
;    pop();
    
}

function drawS(x, y) {
  push();
     strokeWeight(mouseX/35);
    translate(x, y);
  //f horizontal bar
    fill(0);
    rect(18,0,60,wdth);

    fill(0);
    rect(18,72,40,wdth); 
    fill(0);
    rect(-10,144,70,wdth);
    //f horizontal bar
     noFill(0);
      rotate(HALF_PI);  
      strokeWeight((.5)+(mouseX/35));
       arc(108, -62, 72, 72, PI, TWO_PI);
noFill(0);
      rotate(QUARTER_PI);
    rotate(HALF_PI);
rotate(QUARTER_PI);
//TOP CURVE
noFill(0);
strokeWeight((.5)+(mouseX/35));
arc(-37,15, 72, 72, PI, TWO_PI);
    ;    pop();
    
}
 function drawT(x, y) {
  push();
  translate(x, y);
strokeWeight(mouseX/35);
   //t horizontal bar
    fill(0);
 rect(0,0,144,wdth);
    //t vertical bar
    fill(0);
  rect(72,0,wdth,144);
;    pop();
    
}

function drawU(x, y) { push();
//translate(x, y+mouseY);
     strokeWeight(mouseX/35);
translate(x, y);
  //f horizontal bar
rotate(HALF_PI);
    fill(0);
    rect(0,30,70,wdth);
//f horizontal bar
    fill(0);
    rect(0,174,70,wdth);
      noFill(0);
      rotate(QUARTER_PI);
rotate(QUARTER_PI);
noFill(0);
  strokeWeight((.5)+(mouseX/35));
arc(103,-70, 144, 144, PI, TWO_PI);
 ;    pop();
}


function drawV(x, y) {
  push();
 translate(x, y);
 strokeWeight(mouseX/35);
//v crossbar 1
     shearX(PI/6.7);
     fill(0);
 rect(-45,31,wdth,144);
 //v crossbar 2
     shearX(7.4/PI);
     fill(0);
rect(150,31,wdth,144);
;    pop();
    
}


function drawW(x, y) {
  push();
     translate(x, y+5);
 strokeWeight(mouseX/35);
    //W crossbar 1
     shearX(PI/7);
     fill(0);
rect(-35,25,wdth,144);
    //W crossbar 2
     shearX(7.5/PI);
     fill(0);
rect(140,25,wdth,144);
     //W crossbar 4
fill(0);
rect(310,25,wdth,144);
    //W crossbar 3
     shearX(PI/4.3);
     fill(0);
rect(140,25,wdth,144);
   ;    pop();
    }


function drawX(x, y)  {
  push();
 translate(x, y);
 strokeWeight(mouseX/35);
//v crossbar 1
     shearX(PI/6.7);
     fill(0);
 rect(-35,31,wdth,144);
 //v crossbar 2
     shearX(7.4/PI);
     fill(0);
rect(70,31,wdth,144);
;    pop();
    
}

function drawY(x, y) {
  push();
 translate(x, y);
 strokeWeight(mouseX/17);
    scale(.5);
//v crossbar 1
    rect(140,200,wdth,144);
     shearX(PI/6.7);
     fill(0);
 rect(25,61,wdth,144);
 //v crossbar 2
     shearX(7.4/PI);
     fill(0);
rect(250,61,wdth,144);
;    pop();
    
}

function drawZ(x, y) {
  push();
translate(x, y);
    rotate(HALF_PI);
 strokeWeight(mouseX/35);
        //N vertical bar
    fill(0);
 rect(30,0,wdth,144);
 //N vertical bar 2
    fill(0);
rect(170,0,wdth,144);
//N crossbar 
     shearX(PI/4.8);
     fill(0);
    //noStroke();
    rect(45,0,wdth,148);
     ;    pop();
    
}
function drawSS(x, y) {
  push();
 //THIS IS A COMMA
    //translate(x, y+mouseY);
translate(x+105, y+0);
 strokeWeight(mouseX/35);
    shearX(PI/-6);
    //t vertical bar
    fill(0);
 rect(20,170,wdth,25);
;    pop();
    
}

function drawSSS(x, y) {
  push();
//THIS IS A FORWARD SLASH
    //translate(x, y+mouseY);
  translate(x+105, y-95);
 strokeWeight(mouseX/35);
    shearX(PI/-6);
    //t vertical bar
    fill(0);
 rect(20,130,wdth,140);
;    pop();
    
}
function drawNumeralOne(x, y) { push();
 strokeWeight(mouseX/35);
    translate(x, y);
 noFill(0);
  rotate(QUARTER_PI);
rotate(QUARTER_PI);
rotate(QUARTER_PI);
rotate(QUARTER_PI);
rotate(QUARTER_PI);
rotate(QUARTER_PI);
noFill(0);
strokeWeight((.5)+(mouseX/35));
arc(-70,70, 144, 144, PI, TWO_PI);
rotate(QUARTER_PI);
arc(0,100, 144, 144, PI, TWO_PI);
rotate(QUARTER_PI);   
rotate(QUARTER_PI); 
 rotate(QUARTER_PI);   rotate(QUARTER_PI); 
rotate(QUARTER_PI); 
arc(-72,-72, 144, 144, HALF_PI,HALF_PI);
shearX(PI/3.7);
rect(0,-100,wdth,72);
    ;    pop();
}
  function drawAV(x, y) {
  push();
translate(x, y);
    drawA(0,0);
    drawA(230,0);
    drawA(460,0);
    drawA(690,0);
  drawA(920,0);
    drawA(1150,0);
    drawA(1380,0);
drawV(85,180);
drawV(315,180);
    drawV(545,180);
drawV(775,180);
     drawV(1005,180);
  drawV(1235,180);
    drawV(1465,180);
drawV(85,180);
drawV(315,180);
    drawV(545,180);
drawV(775,180);
     drawV(1005,180);
 drawV(1235,180);
    drawV(1465,180);;   
drawV(775,180);
     drawV(1005,180);
 drawV(1235,180);
    drawV(1465,180);
pop();
}
function drawAA(x, y) {
  push();
translate(x+200, y+200);
    rotate(PI);
 strokeWeight(mouseX/3);
      //a crossbar 
    fill(0);
    rect(-43,60,100,wdth);
     //A  1
     shearX(PI/6.7);
     fill(0);
rect(-120,25,wdth,144);
    //A  2
     shearX(7.4/PI);
     fill(0);
 rect(130,25,wdth,144);
;    pop();
    
}
function drawBODY(x, y) {
  push();
translate(x, y);
    scale(.05);
stroke(241,90,44);
drawB(100,150);
 drawO(270,150);
 drawD(490,120);
drawY(680,120);
 drawC(1130,150);
  drawO(1250,150);
   drawP(1450,150);
    drawY(1600,120);
 drawT(1950,150);
  drawH(2150,150);
   drawA(2300,130);
    drawT(2550,150);
  drawA(3000,150);
  drawD(3300,150);
   drawD(3500,150);
    drawS(3750,170);
  drawT(4130,150);
  drawE(4350,150);
   drawX(4575,130);
    drawT(4700,150);
     drawU(5100,150);
  drawR(5180,150);
   drawE(5400,150);
    drawS(5680,150);
    ;    pop();
    
}

function drawMetric(x, y) { push();
translate(x, y);  stroke(247,247,248);
  strokeWeight(.5);
  line(500,350,800,350);
  line(500,325,500,375);
   line(800,325,800,375);
   line(575,325,575,375);
   line(725,325,725,375);
  
    line(550,315,550,385);
  
   line(750,315,750,385);}
function keyPressed() {

 if (keyCode == LEFT_ARROW) {
    sceneCount--;
  } else if (keyCode == RIGHT_ARROW) {
    sceneCount++;
  }
}
function windowResized(){
resizeCanvas(windowWidth, windowHeight);}