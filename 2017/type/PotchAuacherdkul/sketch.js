/*
specimen with 4 scene
-- 1-3 scene control by mouse
-- 4 is typing scene
*/

var x = 10;
var y = 15;
var Stroke = 0.5;
var Slant = 0;
var length = 0;
//b for control color
var b = 220;
var sceneCount = 0;
var sliderAtoZ;



function setup() {
  createCanvas(900, 600);
}

function sceneType() {
    fill(b);
    noStroke();
    textSize(18);
    textFont("PT Serif");
    text("type!! you can control Italic be key '1,2'",40,560);
    noFill();
}

//keyPressed use to control every scene by 'enter,shift'
function keyPressed() {
	if (keyCode == 13) {
		sceneCount++;
        background(0);
		x = 20;
        y = 30;
        length = 1;
        Stroke = 0.5;
        Slant = 1;
        b = 220;
	}if (keyCode == 16) {
        sceneCount--;
        background(0);
        x = 20;
        y = 30;
        length = 1;
        Stroke = 0.5;
        Slant = 1;
        b = 220;
    } if (sceneCount < 0) {
        sceneCount = 0;
    } if (sceneCount > 4) {
        sceneCount = 4;
    }
}

function draw() {
if (sceneCount == 0){
        sceneIntro();
  } else if (sceneCount == 1){
        sceneAtoZ();
  } else if (sceneCount == 2){
        sceneBigslant();
  } else if (sceneCount == 3){
        scenePoster();
  } else if (sceneCount == 4){
        sceneType();
  } 
}

//only for sceneType
function keyTyped() {
   if (key=='a'){
        //b = map(mouseX,0,800,0,255)
        stroke(215,230,b);
        strokeCap(PROJECT);
        drawa(x,y,length,Stroke,Slant);
        x=x+35;
    } else if(key=='b'){
        //b = map(mouseX,0,800,0,255)
        stroke(215,230,b);
        strokeCap(PROJECT);
        drawb(x,y,length,Stroke,Slant);
        x=x+35;
    }
     else if(key=='c'){
        //b = map(mouseX,0,800,0,255)
        stroke(215,230,b);
        strokeCap(ROUND);
        drawc(x,y,length,Stroke,Slant);
        x=x+35;
    }
     else if(key=='d'){
        //b = map(mouseX,0,800,0,255)
        stroke(215,230,b);
        strokeCap(ROUND);
        drawd(x,y,length,Stroke,Slant);
        x=x+30;
    } else if(key=='e'){
        //b = map(mouseX,0,800,0,255)
        stroke(215,230,b);
        strokeCap(ROUND);
        drawe(x,y,length,Stroke,Slant);
        x=x+40;
    } else if(key=='f'){
        //b = map(mouseX,0,800,0,255)
        stroke(215,230,b);
        strokeCap(ROUND);
        drawf(x,y,length,Stroke,Slant);
        x=x+25;
    } else if(key=='g'){
        //b = map(mouseX,0,800,0,255)
        stroke(215,230,b);
        strokeCap(ROUND);
        drawg(x,y,length,Stroke,Slant);
        x=x+30;
    }  else if(key=='h'){
        //b = map(mouseX,0,800,0,255)
        stroke(215,230,b);
        strokeCap(PROJECT);
        drawh(x,y,length,Stroke,Slant);
        x=x+35;
    }  else if(key=='i'){
        //b = map(mouseX,0,800,0,255)
        stroke(215,230,b);
        strokeCap(ROUND);
        drawi(x,y,length,Stroke,Slant);
        x=x+20;
    }  else if(key=='j'){
        //b = map(mouseX,0,800,0,255)
        stroke(215,230,b);
        strokeCap(ROUND);
        drawj(x,y,length,Stroke,Slant);
        x=x+30;
    }  else if(key=='k'){
        //b = map(mouseX,0,800,0,255)
        stroke(215,230,b);
        strokeCap(ROUND);
        drawk(x,y,length,Stroke,Slant);
        x=x+40;
    }  else if(key=='l'){
        //b = map(mouseX,0,800,0,255)
        stroke(215,230,b);
        strokeCap(ROUND);
        drawl(x,y,length,Stroke,Slant);
        x=x+20;
    }  else if(key=='m'){
        //b = map(mouseX,0,800,0,255)
        stroke(215,230,b);
        strokeCap(ROUND);
        drawm(x,y,length,Stroke,Slant);
        x=x+40;
    } else if(key=='n'){
        //b = map(mouseX,0,800,0,255)
        stroke(215,230,b);
        strokeCap(PROJECT);
        drawn(x,y,length,Stroke,Slant);
        x=x+40;
    } else if(key=='o'){
        //b = map(mouseX,0,800,0,255)
        stroke(215,230,b);
        strokeCap(ROUND);
        drawo(x,y,length,Stroke,Slant);
        x=x+40;
    } else if(key=='p'){
        //b = map(mouseX,0,800,0,255)
        stroke(215,230,b);
        strokeCap(PROJECT);
        drawp(x,y,length,Stroke,Slant);
        x=x+35;
    } else if(key=='q'){
        //b = map(mouseX,0,800,0,255)
        stroke(215,230,b);
        strokeCap(ROUND);
        drawq(x,y,length,Stroke,Slant);
        x=x+40;
    }  else if(key=='r'){
        //b = map(mouseX,0,800,0,255)
        stroke(215,230,b);
        strokeCap(ROUND);
        drawr(x,y,1,length,Stroke,Slant);
        x=x+30;
    } else if(key=='s'){
        //b = map(mouseX,0,800,0,255)
        stroke(215,230,b);
        strokeCap(ROUND);
        draws(x,y,length,Stroke,Slant);
        x=x+35;
    } else if(key=='t'){
        //b = map(mouseX,0,800,0,255)
        stroke(215,230,b);
        strokeCap(ROUND);
        drawt(x,y,length,Stroke,Slant);
        x=x+25;
    } else if(key=='u'){
        //b = map(mouseX,0,800,0,255)
        stroke(215,230,b);
        strokeCap(ROUND);
        drawu(x,y,length,Stroke,Slant);
        x=x+30;
    } else if(key=='v'){
        //b = map(mouseX,0,800,0,255)
        stroke(215,230,b);
        strokeCap(ROUND);
        drawv(x,y,length,Stroke,Slant);
        x=x+35;
    }  else if(key=='w'){
        //b = map(mouseX,0,800,0,255)
        stroke(215,230,b);
        strokeCap(ROUND);
        draww(x,y,length,Stroke,Slant);
        x=x+35;
    } else if(key=='x'){
        //b = map(mouseX,0,800,0,255)
        stroke(215,230,b);
        strokeCap(ROUND);
        drawx(x,y,length,Stroke,Slant);
        x=x+40;
    }  else if(key=='y'){
        //b = map(mouseX,0,800,0,255)
        stroke(215,230,b);
        strokeCap(ROUND);
        drawy(x,y,length,Stroke,Slant);
        x=x+40;
    } else if(key=='z'){
        //b = map(mouseX,0,800,0,255)
        stroke(215,230,b);
        strokeCap(ROUND);
        drawz(x,y,length,Stroke,Slant);
        x=x+30;
    } else if(key==' '){
        x=x+20;
        Stroke=Stroke+1;
    } else if (key=='2'){
        Slant=Slant+10;
    } else if (key=='1'){
        Slant=Slant-10;
    }  if (Slant>40){
        Slant = 40;
    } if (Slant<0){
        Slant = 0;
    } if (x>840){
        y=y+100+length+5;
        b=b-20;
        x=20;
        length=length+15;
    } if (Stroke>12){
        Stroke=0.5;
    } 
}

function sceneIntro() {
    background(0,0,0);
    noFill();
    stroke(b);
    length = 0;
    Stroke = 0.5;
    Slant = 0;
    drawl(20,30,length,Stroke,Slant);
    drawi(40,30,length,Stroke,Slant);
    draws(60,30,length,Stroke,Slant);
    drawn(95,30,length,Stroke,Slant);
    drawb(155,30,length,Stroke,Slant);
    drawl(185,30,length,Stroke,Slant);
    drawa(205,30,length,Stroke,Slant);
    drawc(235,30,length,Stroke,Slant);
    drawk(265,30,length,Stroke,Slant);
    draws(325,30,length,Stroke,Slant);
    drawp(355,30,length,Stroke,Slant);
    drawe(385,30,length,Stroke,Slant);
    drawc(415,30,length,Stroke,Slant);
    drawi(445,30,length,Stroke,Slant);
    drawm(465,30,length,Stroke,Slant);
    drawe(505,30,length,Stroke,Slant);
    drawn(540,30,length,Stroke,Slant);
    //line(40,140,860,140)
    textSize(18);
    fill(255);
    noStroke();
    textFont("PT Serif");
    text("A black letter drawing in fixwidth style ", 40, 200);
    text("Click mouse to save an image \nEnjoy!!",40,240)
    fill(0,255,60);
    text("Press Enter to Start \nPress Shift to Reset",40,520);
}

function sceneAtoZ(){
    background(0);
    fill(255);
    noStroke();
    textFont("PT Serif");
    text("move your mouse around!!",40,560);
    stroke(b);
    noFill();
    Slant = 0;
    length = mouseY/2;
    Stroke = map(mouseX, 0, 900, 0.5, 12);
    drawq(20,20,length,Stroke,Slant);
    drawu(50,20,length,Stroke,Slant);
    drawi(80,20,length,Stroke,Slant);
    drawc(100,20,length,Stroke,Slant);
    drawk(130,20,length,Stroke,Slant);
    
    drawb(190,20,length,Stroke,Slant);
    drawr(220,20,1,length,Stroke,Slant);
    drawo(245,20,length,Stroke,Slant);
    draww(285,20,length,Stroke,Slant);
    drawn(315,20,length,Stroke,Slant);
    
    drawf(375,20,length,Stroke,Slant);
    drawo(395,20,length,Stroke,Slant);
    drawx(435,20,length,Stroke,Slant);
    
    drawj(485,20,length,Stroke,Slant);
    drawu(515,20,length,Stroke,Slant);
    drawm(540,20,length,Stroke,Slant);
    drawp(575,20,length,Stroke,Slant);
    
    drawo(20,130+length,length,Stroke,Slant);
    drawv(50,130+length,length,Stroke,Slant);
    drawe(80,130+length,length,Stroke,Slant);
    drawr(110,130+length,1,length,Stroke,Slant);
    
    drawt(165,130+length,length,Stroke,Slant);
    drawh(185,130+length,length,Stroke,Slant);
    drawe(215,130+length,length,Stroke,Slant);
    //space+55
    drawl(270,130+length,length,Stroke,Slant);
    drawa(290,130+length,length,Stroke,Slant);
    drawz(320,130+length,length,Stroke,Slant);
    drawy(340,130+length,length,Stroke,Slant);
    //space+75
    drawd(410,130+length,length,Stroke,Slant);
    drawo(440,130+length,length,Stroke,Slant);
    drawg(475,130+length,length,Stroke,Slant);
}

function scenePoster() {
    background(0);
    stroke(b);
    noFill();
    Slant = map(mouseX, 0, 900, 0, 50);
    Stroke = mouseY/80;
    drawa(10,y,length,Stroke,Slant);
    drawg(60,y,length,Stroke,Slant);
    drawr(90,y,1,length,Stroke,Slant);
    drawe(110,y,length,Stroke,Slant);
    drawe(140,y,length,Stroke,Slant);
    drawn(180,y,length,Stroke,Slant);
    
    drawp(240,y,length,Stroke,Slant);
    drawl(270,y,length,Stroke,Slant);
    drawa(290,y,length,Stroke,Slant);
    draws(320,y,length,Stroke,Slant);
    drawt(355,y,length,Stroke,Slant);
    drawi(375,y,length,Stroke,Slant);
    drawc(400,y,length,Stroke,Slant);
    
    draww(470,y,length,Stroke,Slant);
    drawa(500,y,length,Stroke,Slant);
    drawt(530,y,length,Stroke,Slant);
    drawe(550,y,length,Stroke,Slant);
    drawr(585,y,1,length,Stroke,Slant);
    drawi(620,y,length,Stroke,Slant);
    drawn(640,y,length,Stroke,Slant);
    drawg(680,y,length,Stroke,Slant);
    
    drawc(740,y,length,Stroke,Slant);
    drawa(770,y,length,Stroke,Slant);
    drawn(800,y,length,Stroke,Slant);
    
    drawf(10,y+100,length,Stroke,Slant);
    drawo(25,y+100,length,Stroke,Slant);
    drawr(60,y+100,1,length,Stroke,Slant);
    
    stroke(b);
    drawa(120,y+100,length,Stroke,Slant);
    
    drawf(170,y+100,length,Stroke,Slant);
    drawa(195,y+100,length,Stroke,Slant);
    drawk(220,y+100,length,Stroke,Slant);
    drawe(255,y+100,length,Stroke,Slant);
    
    drawc(310,y+100,length,Stroke,Slant);
    drawh(340,y+100,length,Stroke,Slant);
    drawi(380,y+100,length,Stroke,Slant);
    drawn(400,y+100,length,Stroke,Slant);
    drawe(430,y+100,length,Stroke,Slant);
    draws(460,y+100,length,Stroke,Slant);
    drawe(490,y+100,length,Stroke,Slant);
    
    line(570+mouseX/60,170,870,170-mouseX/60)
    
    drawr(230,y+210,1,20,Stroke,Slant);
    drawu(265,y+210,20,Stroke,Slant);
    drawb(295,y+210,20,Stroke,Slant);
    drawb(325,y+210,20,Stroke,Slant);
    drawe(355,y+210,20,Stroke,Slant);
    drawr(385,y+210,1,20,Stroke,Slant);
    
    drawp(440,y+210,20,Stroke,Slant);
    drawl(470,y+210,20,Stroke,Slant);
    drawa(500,y+210,20,Stroke,Slant);
    drawn(530,y+210,20,Stroke,Slant);
    drawt(565,y+210,20,Stroke,Slant);
    
    line(20,265,190,275-mouseX/70);
    line(650,285,870,295-mouseX/70);
    stroke(b);
    
    line(50+mouseX/50,400,15,550);
    line(825+mouseX/50,400,880,550);
    
    drawi(10+60,y+350,120,Stroke,Slant);
    drawn(35+60,y+350,120,Stroke,Slant);
    
    drawt(100+60,y+350,120,Stroke,Slant);
    drawh(125+60,y+350,120,Stroke,Slant);
    drawe(155+60,y+350,120,Stroke,Slant);
    
    drawf(220+60,y+350,120,Stroke,Slant);
    drawa(245+60,y+350,120,Stroke,Slant);
    drawk(265+60,y+350,120,Stroke,Slant);
    drawe(295+60,y+350,120,Stroke,Slant);
    
    drawp(360+60,y+350,120,Stroke,Slant);
    drawl(390+60,y+350,120,Stroke,Slant);
    drawa(410+60,y+350,120,Stroke,Slant);
    draws(440+60,y+350,120,Stroke,Slant);
    drawt(475+60,y+350,120,Stroke,Slant);
    drawi(495+60,y+350,120,Stroke,Slant);
    drawc(510+60,y+350,120,Stroke,Slant);

    draww(590+60,y+350,120,Stroke,Slant);
    drawo(620+60,y+350,120,Stroke,Slant);
    drawr(650+60,y+350,1,120,Stroke,Slant);
    drawl(675+60,y+350,120,Stroke,Slant);
    drawd(705+60,y+350,120,Stroke,Slant);
}

function sceneBigslant(){
    background(0,0,20);
    stroke(230,230,b);
    noFill();
    scale (2,2);
    b = map(mouseY, 0, 600, 100, 255);
    length = 0;
    Stroke = 0.5;
    Slant = map(mouseX, 0, 900, 0, 30);
    drawf(70+55,95,length,Stroke,Slant);
    drawl(100+55,95,length,Stroke,Slant);
    drawy(120+55,95,length,Stroke,Slant);
    drawb(150+55,95,length,Stroke,Slant);
    drawy(180+55,95,length,Stroke,Slant);
}

function mousePressed(){
    save('lyricposter.png');
}


//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

/* drawing letters */

function drawa(x,y,al,strokea,sl){
    push();
    translate(x,y);
    beginShape();
    vertex(10+sl*2/8,30);
    vertex(20+sl*2/8,20);
    vertex(30+sl*2/8,30);
    vertex(30,70+al);
    vertex(40,80+al);
    vertex(30,70+al);
    vertex(20,80+al);
    vertex(10,70+al);
    vertex(10+sl*1/8,50);
    endShape();
    beginShape();
    strokeWeight(strokea);
    vertex(10+sl*1/8,50);
    vertex(20+sl*2/8,40);
    vertex(30+sl*1/8,50);
    endShape();
    beginShape();
    strokeWeight(1);
    vertex(10+sl*2/8,30);
    vertex(30+sl*1/8,50);
    endShape();
    pop();
}
    
function drawe(x,y,el,strokeb,sl){
    push();
    translate(x,y);
    beginShape();
    vertex(10,80+el);
    vertex(20,70+el);
    vertex(20+sl*1.5/8,30);
    vertex(30+sl*1.5/8,20);
    vertex(40+sl*1.5/8,30);
    vertex(40+sl*1.5/8,40);
    vertex(20+sl*1.5/8,50);
    endShape();
    beginShape();
    strokeWeight(strokeb);
    vertex(20,70+el);
    vertex(30,80+el);
    vertex(40,70+el);
    endShape();
    pop();
}
    
function drawi(x,y,il,strokei,sl){
    push();
    translate(x,y);
    beginShape();
    vertex(10+sl*2/8,20);
    vertex(20+sl*2/8,10);
    endShape();
    beginShape();
    strokeWeight(strokei);
    vertex(10+sl*2/8,30);
    vertex(20+sl*2/8,20);
    endShape();
    beginShape();
    strokeWeight(1);
    vertex(20+sl*2/8,20);
    vertex(20,80+il);
    endShape();
    beginShape();
    strokeWeight(strokei);
    vertex(20,80+il);
    vertex(30,70+il);
    endShape();
    pop();
}
    
function drawo(x,y,ol,strokeb,sl){
    push();
    translate(x,y);
    beginShape();
    vertex(10,80+ol);
    vertex(20,70+ol);
    endShape();
    beginShape();
    vertex(20,70+ol);
    vertex(30,80+ol);
    vertex(40,70+ol);
    vertex(40+sl*2/8,30);
    vertex(30+sl*2/8,20);
    vertex(20+sl*2/8,30);
    vertex(20,70+ol);
    endShape();
    beginShape();
    strokeWeight(strokeb);
    vertex(20+sl*1/8,50);
    vertex(40+sl*2/8,40);
    endShape();
    pop();
}    
    
function drawu(x,y,ul,strokeb,sl){
    push();
    translate(x,y);
    beginShape();
    vertex(10+sl*2/8,20);
    vertex(10,70+ul);
    endShape();
    beginShape();
    strokeWeight(strokeb);
    vertex(10,70+ul);
    vertex(20,80+ul);
    vertex(30,70+ul);
    endShape();
    beginShape();
     strokeWeight(1);
    vertex(30,70+ul);
    vertex(30+sl*2/8,20);
    endShape();
    beginShape();
    strokeWeight(1);
    vertex(10+sl*1/8,50);
    vertex(30+sl*1/8,40);
    endShape();
    beginShape();
    strokeWeight(1);
    vertex(30,70+ul);
    vertex(30,80+ul);
    vertex(40,70+ul);
    endShape();
    pop();
}
   
function drawn(x,y,lengthn,strokeb,sl){
    push();
    translate(x,y);
    beginShape();
    vertex(10+sl*2/8,30);
    vertex(20+sl*2/8,20);
    vertex(20,70+lengthn);
    vertex(10,80+lengthn);
    endShape();
    beginShape();
    strokeWeight(strokeb);
    vertex(20+sl*2/8,30);
    vertex(30+sl*2/8,20);
    vertex(40+sl*2/8,30);
    endShape();
    beginShape();
    strokeWeight(1);
    vertex(40+sl*2/8,30);
    vertex(40,80+lengthn);
    endShape();
    pop();
}
    
function drawh(x,y,hl,strokeb,sl){
    push();
    translate(x,y);
    beginShape();
    vertex(10+sl*2/8,10);
    vertex(20+sl*3/8,0);
    vertex(20,70+hl);
    vertex(10,80+hl);
    endShape();
    beginShape();
    strokeWeight(strokeb);
    vertex(20+sl*2/8,30);
    vertex(30+sl*2/8,20);
    vertex(40+sl*2/8,30);
    endShape();
    beginShape();
    strokeWeight(1);
    vertex(40+sl*2/8,30);
    vertex(40,80+hl);
    endShape();
    pop();
}
    
function drawb(x,y,bl,strokeb,sl){
    push();
    translate(x,y);
    beginShape();
    vertex(10+sl*2/8,10);
    vertex(20+sl*3/8,0);
    vertex(20,70+bl);
    vertex(10,80+bl);
    vertex(20,70+bl);
    vertex(30,80+bl);
    vertex(40,70+bl);
    vertex(40+sl*2/8,30);
    endShape();
    beginShape();
    strokeWeight(strokeb);
    vertex(40+sl*2/8,30);
    vertex(30+sl*2/8,20);
    vertex(20+sl*2/8,30);
    endShape();
    pop();
}
    
function drawm(x,y,ml,strokem,sl){
    push();
    translate(x,y);
    beginShape();
    vertex(10+sl*2/8,30);
    vertex(20+sl*2/8,20);
    vertex(20,80+ml);
    endShape();
    beginShape();
    strokeWeight(1);
    vertex(20,80+ml);
    vertex(30,70+ml);
    endShape();
    beginShape();
    strokeWeight(strokem);
    vertex(20+sl*2/8,30);
    vertex(30+sl*2/8,20);
    endShape();
    beginShape();
    strokeWeight(1);
    vertex(30+sl*2/8,20);
    vertex(30,80+ml);
    endShape();
    beginShape();
    strokeWeight(strokem);
    vertex(30,80+ml);
    vertex(40,70+ml);
    endShape();
    beginShape();
    strokeWeight(1);
    vertex(30+sl*2/8,30);
    vertex(40+sl*2/8,20);
    vertex(40,80+ml);
    vertex(50,70+ml);
    endShape();
    pop();
}
    
function draws(x,y,sl,strokes,slant){
    push();
    translate(x,y);
    beginShape();
    vertex(10,80+sl);
    vertex(20,70+sl);
    endShape();
    beginShape();
    vertex(40+slant*2/8,30);
    vertex(30+slant*2/8,20);
    vertex(20+slant*2/8,30);
    vertex(20+slant*2/8,40);
    vertex(40+slant*1/8,50);
    vertex(40,70+sl);
    endShape();
    beginShape();
    strokeWeight(strokes);
    vertex(40,70+sl);
    vertex(30,80+sl);
    vertex(20,70+sl);
    endShape();
    beginShape();
    strokeWeight(1);
    vertex(20,70+sl);
    vertex(20+slant*1/8,60);
    vertex(40+slant*2/8,30);
    endShape();
    pop();
}
    
function drawy(x,y,yl,strokeb,sl){
    push();
    translate(x,y);
    beginShape();
    vertex(10+sl*2/8,30);
    vertex(20+sl*2/8,20);
    vertex(20,70+yl);
    endShape();
    beginShape();
    strokeWeight(strokeb);
    vertex(20,70+yl);
    vertex(30,80+yl);
    vertex(40,70+yl);
    endShape();
    beginShape();
    strokeWeight(1);
    vertex(40,70+yl);
    vertex(40+sl*2/8,20);
    vertex(20+sl*2/8,30);
    endShape();
    beginShape();
    vertex(40,70+yl);
    vertex(40-sl*1/8,90+yl);
    vertex(30,100+yl);
    vertex(20,90+yl);
    vertex(30,80+yl);
    endShape();
    pop();
}

function drawg(x,y,gl,strokeg,sl){
    push();
    translate(x,y);
    beginShape();
    vertex(10+sl*2/8,30);
    vertex(20+sl*2/8,20);
    vertex(30+sl*2/8,30);
    vertex(30,70+gl);
    endShape();
    beginShape();
    strokeWeight(strokeg);
    vertex(30,70+gl);
    vertex(20,80+gl);
    vertex(10,70+gl);
    endShape();
    beginShape();
    strokeWeight(1);
    vertex(10,70+gl);
    vertex(10+sl*2/8,30);
    endShape();
    beginShape();
    vertex(30+sl*2/8,30);
    vertex(40+sl*2/8,20);
    endShape();
    beginShape();
    vertex(30,70+gl);
    vertex(30-sl*1/8,90+gl);
    vertex(20,100+gl);
    vertex(10,90+gl);
    vertex(20,80+gl);
    endShape();
    pop();
}

function drawd(x,y,dl,stroked,sl){
    push();
    translate(x,y);
    beginShape();
    strokeWeight(1);
    vertex(40+sl*2/8,10);
    vertex(30+sl*3/8,0);
    vertex(30+sl*2/8,30);
    endShape();
    beginShape();
    vertex(10+sl*2/8,30);
    vertex(20+sl*2/8,20);
    vertex(30+sl*2/8,30);
    vertex(30,70+dl);
    endShape();
    beginShape();
    strokeWeight(stroked);
    vertex(30,70+dl);
    vertex(20,80+dl);
    vertex(10,70+dl);
    endShape();
    beginShape();
    strokeWeight(1);
    vertex(10,70+dl);
    vertex(10+sl*2/8,30);
    endShape();
    beginShape();
    vertex(30,70+dl);
    vertex(40,80+dl);
    endShape();
    pop();
}
    
function drawf(x,y,fl,strokef,sl){
    push();
    translate(x,y);
    beginShape();
    vertex(40+sl*2/8,10);
    vertex(30+sl*2/8,0);
    vertex(20+sl*2/8,10);
    vertex(20,70+fl);
    vertex(10,80+fl);
    endShape();
    beginShape();
    strokeWeight(strokef);
    vertex(10+sl*2/8,40);
    vertex(30+sl*2/8,30);
    endShape();
    pop();
}
    
function drawt(x,y,tl,strokeb,sl){
    push();
    translate(x,y);
    beginShape();
    strokeWeight(strokeb);
    vertex(10+sl*3/8,20);
    vertex(20+sl*3/8,10);
    endShape();
    beginShape();
    strokeWeight(1);
    vertex(20+sl*3/8,10);
    vertex(20,80+tl);
    endShape();
    beginShape();
    strokeWeight(strokeb);
    vertex(20,80+tl);
    vertex(30,70+tl);
    endShape();
    beginShape();
    strokeWeight(1);
    vertex(10+sl*3/8,40);
    vertex(30+sl*3/8,30);
    endShape();
    pop();
}
    
function drawr(x,y,swr,rl,stroker,sl){
    push();
    translate(x,y);
    beginShape();
    vertex(10+sl*2/8,30);
    vertex(20+sl*2/8,20);
    vertex(20,70+rl);
    vertex(10,80+rl);
    endShape();
    beginShape();
    strokeWeight(stroker);
    vertex(20+sl*2/8,30);
    vertex(40+sl*2/8,20);
    endShape();
    beginShape();
    strokeWeight(1);
    vertex(40+sl*2/8,20);
    vertex(40+sl*2/8,30);
    endShape();
    pop();
}

function drawv(x,y,vl,strokeb,sl){
    push();
    translate(x,y);
    beginShape();
    vertex(10+sl*2/8,30);
    vertex(20+sl*2/8,20);
    vertex(20,70+vl);
    vertex(30,80+vl);
    vertex(40,70+vl);
    vertex(40+sl*2/8,20);
    endShape();
    beginShape();
    strokeWeight(strokeb);
    vertex(20+sl*1/8,50);
    vertex(40+sl*2/8,40);
    endShape();
    pop();
}

function drawl(x,y,ll,strokel,sl){
    push();
    translate(x,y);
    beginShape();
    strokeWeight(strokel);
    vertex(10+sl*3/8,10);
    vertex(20+sl*3/8,0);
    endShape();
    beginShape();
    strokeWeight(1);
    vertex(20+sl*3/8,0);
    vertex(20,80+ll);
    endShape();
    beginShape();
    strokeWeight(strokel);
    vertex(20,80+ll);
    vertex(30,70+ll);
    endShape();
    pop();
}

function drawc(x,y,cl,strokeb,sl){
    push();
    translate(x,y);
    beginShape();
    vertex(10,80+cl);
    vertex(20,70+cl);
    vertex(20+sl*1/8,30);
    vertex(30+sl*1/8,20);
    vertex(40+sl*1/8,30);
    endShape();
    beginShape();
    strokeWeight(strokeb);
    vertex(20,70+cl);
    vertex(30,80+cl);
    vertex(40,70+cl);
    endShape();
    pop();
}

function drawk(x,y,kl,strokeb,sl){
    push();
    translate(x,y);
    beginShape();
    vertex(10+sl*2/8,10);
    vertex(20+sl*2/8,0);
    vertex(20,70+kl);
    endShape();
    beginShape();
    strokeWeight(strokeb);
    vertex(20,70+kl);
    vertex(30,80+kl);
    vertex(40,70+kl);
    endShape();
    beginShape();
    strokeWeight(1);
    vertex(20+sl*2/8,30);
    vertex(30+sl*2/8,20);
    vertex(40+sl*2/8,30);
    vertex(20+sl*1/8,50);
    endShape();
    beginShape();
    strokeWeight(1);
    vertex(30+sl*2/8,40);
    vertex(40+sl*1/8,50);
    vertex(40,80+kl);
    vertex(50,70+kl);
    endShape();
    pop();
}

function draww(x,y,wl,strokeb,sl){
    push();
    translate(x,y);
    beginShape();
    strokeWeight(strokeb);
    vertex(0+sl*2/8,20);
    vertex(10+sl*2/8,30);
    endShape();
    beginShape();
    strokeWeight(1);
    vertex(10+sl*2/8,20);
    vertex(10,70+wl);
    vertex(20,80+wl);
    vertex(20,70+wl);
    endShape();
    beginShape();
    vertex(20+sl*2/8,20);
    vertex(20,70+wl);
    endShape();
    beginShape();
    strokeWeight(strokeb);
    vertex(20,70+wl);
    vertex(30,80+wl);
    endShape();
    beginShape();
    strokeWeight(1);
    vertex(30,80+wl);
    vertex(30+sl*2/8,20);
    endShape();
    beginShape();
    vertex(30,70+wl);
    vertex(40,80+wl);
    endShape();
    pop();
}

function drawx(x,y,xl,strokeb,sl){
    push();
    translate(x,y);
    beginShape();
    vertex(10+sl*2/8,30);
    vertex(20+sl*2/8,20);
    vertex(20,70+xl);
    endShape();
    beginShape();
    strokeWeight(1);
    vertex(20,70+xl);
    vertex(10,80+xl);
    endShape();
    beginShape();
    strokeWeight(1);
    vertex(20+sl*2/8,30);
    vertex(30+sl*2/8,20);
    vertex(40+sl*1/8,30);
    endShape();
    beginShape();
    strokeWeight(1);
    vertex(20,70+xl);
    vertex(30,80+xl);
    endShape();
    beginShape();
    strokeWeight(strokeb);
    vertex(10+sl*2/8,40);
    vertex(30+sl*2/8,40);
    endShape();
    pop();
}
    
function drawz(x,y,zl,strokeb,sl){
    push();
    translate(x,y);
    beginShape();
    vertex(10+sl*2/8,30);
    vertex(20+sl*2/8,20);
    vertex(30+sl*2/8,30);
    vertex(10+sl*2/8,50);
    endShape();
    beginShape();
    vertex(20+sl*2/8,40);
    vertex(30+sl*2/8,50);
    vertex(30,90+zl);
    endShape();
    beginShape();
    strokeWeight(strokeb);
    vertex(30,90+zl);
    vertex(20,100+zl);
    vertex(10,90+zl);
    endShape();
    pop();
}
    
function drawj(x,y,jlength,strokeb,sl){
    push();
    translate(x,y);
    beginShape();
    vertex(20+sl*2/8,20);
    vertex(30+sl*2/8,10);
    endShape();
    beginShape();
    vertex(20+sl*2/8,30);
    vertex(30+sl*2/8,20);
    vertex(30,90+jlength);
    endShape();
    beginShape();
    strokeWeight(strokeb);
    vertex(30,90+jlength);
    vertex(20,100+jlength);
    vertex(10,90+jlength);
    endShape();
    pop();
}

function drawp(x,y,pl,strokeb,sl){
    push();
    translate(x,y);
    beginShape();
    vertex(10+sl*2/8,30);
    vertex(20+sl*2/8,20);
    vertex(20,90+pl);
    vertex(10,100+pl);
    endShape();
    beginShape();
    strokeWeight(strokeb);
    vertex(20+sl*2/8,30);
    vertex(30+sl*2/8,20);
    vertex(40+sl*2/8,30);
    endShape();
    beginShape();
    strokeWeight(1);
    vertex(40+sl*2/8,30);
    vertex(40,70+pl);
    vertex(30,80+pl);
    vertex(20,70+pl);
    endShape();
    pop();
}

function drawq(x,y,ql,strokeb,sl){
    push();
    translate(x,y);
    beginShape();
    vertex(10+sl*2/8,30);
    vertex(20+sl*2/8,20);
    vertex(30+sl*2/8,30);
    vertex(30,70+ql);
    endShape();
    beginShape();
    strokeWeight(strokeb);
    vertex(30,70+ql);
    vertex(20,80+ql);
    vertex(10,70+ql);
    endShape();
    beginShape();
    strokeWeight(1);
    vertex(10,70+ql);
    vertex(10+sl*2/8,30);
    endShape();
    beginShape();
    strokeWeight(1);
    vertex(40+sl*2/8,30);
    vertex(30+sl*2/8,20);
    vertex(30,90+ql);
    vertex(40,100+ql);
    endShape();
    pop();
}

