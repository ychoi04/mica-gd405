var x = 0;
var y = 0;
var a = (79,72,71); //non archs
var sw = 8; //arc stroke
var sw2 = 3; //line stroke
var sw3 = 0; //ellipse stroke
var d = 20; //ellipse size
var sc = {r:255, g:255, b:255}; //line color
var ac = {r:255, g:255, b:255}; // arch color 
var dc = {r:255, g:255, b:255}; //dot color
var t =255;
var tt = 255;
var xmargin = 10;
var ymargin = 10;

var button1;
var button2;
var button3;
var button4;
var button5;
var s =  0;
var slider;
var t = 0;
var P;

function setup() {

    canvas = createCanvas(900,600);
    background (176, 204, 169);
    x=xmargin; 
    y=ymargin;
    
    button1 = createButton("CHANGE CIRCLE COLOR");
    button1.mousePressed (changeColor);
    
    button2 = createButton ("CHANGE CIRCLE SIZE");
    button2.mousePressed(diameter);
    
    button3 = createButton("CHANGE LINE OPACITY");
    button3.mousePressed (lineOpacity);
    
    button4 = createButton("START OVER");
    button4.mousePressed (refresh);
    
    button5 = createButton("SAVE");
    button5.mousePressed(saveImage);
    
//    button6 = createButton("CHANGE CIRCLE OPACITY");
//    button6.mousePressed (circleOpacity);
   
    slider = createSlider(5,50,15);
    
    slider.position(980,165);
    button1.position(980,220);
    button2.position(980,255);
    button3.position(980,290);
    button4.position(980,650);
    button5.position(980,685);
//    button6.position(980,290);

    
}

function changeColor(){
    dc.r = dc.r-20;
    dc.g = dc.g-30;
    dc.b = dc.b-40
    if(dc.g <100){
        dc.g = 255
    }
    if(dc.r <100){
        dc.r = 255;
    }
    if(dc.b<100){
        dc.b = 255
    }
}

function diameter(){
    d= random(10,70);
}

function lineOpacity(){
    t = random(0,255);
}

function refresh(){
    background(176, 204, 169);
    x=0;
    y=0;
}

function saveImage(){
    save('Type.png');
}

//function circleOpacity(){
//    tt = random(0,255);
//}


function keyTyped(){
    scale (0.35,0.35);
    
    if (key == 'h') {
        drawH (x,y,sw,slider.value(),dc,ac,sc,t,tt);
        x=x+250;
    } else if (key == ' '){
        x=0
        y=y+350;
//        sw2= sw2+2;
//        d = d + 4;
//        sw = sw + 8;
//        sw3 = sw3 -5;
    }else if (key == '1'){
        x=x+250;
    }else if (key == 'o'){
        drawO(x,y,sw,slider.value(),dc,ac,sc,t,tt);
        x=x+250;
    }else if (key == 'm'){
        drawM (x,y,sw,slider.value(),dc,ac,sc,t,tt);
        x=x+250;
    }else if (key == 'e'){
        drawE (x,y,sw,slider.value(),dc,ac,sc,t,tt);
        x=x+250;
    }else if (key == 'r'){
        drawR(x,y,sw,slider.value(),dc,ac,sc,t,tt);
        x=x+250;
    }else if (key == 'a'){
        drawA(x,y,sw,slider.value(),dc,ac,sc,t,tt);
        x=x+250;
    }else if (key == 'b'){
        drawB(x,y,sw,slider.value(),dc,ac,sc,t,tt);
        x=x+250;
    }else if (key == 'c'){
        drawC(x,y,sw,slider.value(),dc,ac,sc,t,tt);
        x=x+250;
    }else if (key == 'd'){
        drawD(x,y,sw,slider.value(),dc,ac,sc,t,tt);
        x=x+250;
    }else if (key == 'f'){
        drawF(x,y,sw,slider.value(),dc,ac,sc,t,tt);
        x=x+250;
    }else if (key == 'g'){
        drawG(x,y,sw,slider.value(),dc,ac,sc,t,tt);
        x=x+250;
    }else if (key == 'i'){
        drawI(x,y,sw,slider.value(),dc,ac,sc,t,tt);
        x=x+250;
    }else if (key == 'j'){
        drawJ(x,y,sw,slider.value(),dc,ac,sc,t,tt);
        x=x+250;
    }else if (key == 'k'){
        drawK(x,y,sw,slider.value(),dc,ac,sc,t,tt);
        x=x+250;
    }else if (key == 'l'){
        drawL(x,y,sw,slider.value(),dc,ac,sc,t,tt);
        x=x+250;
    }else if (key == 'n'){
        drawN(x,y,sw,slider.value(),dc,ac,sc,t,tt);
        x=x+250;
    }else if (key == 'p'){
        drawP(x,y,sw,slider.value(),dc,ac,sc,t,tt);
        x=x+250;
    }else if (key == 'q'){
        drawQ(x,y,sw,slider.value(),dc,ac,sc,t,tt);
        x=x+250;
    }else if (key == 'r'){
        drawR(x,y,sw,slider.value(),dc,ac,sc,t,tt);
        x=x+250;
    }else if (key == 's'){
        drawS(x,y,sw,slider.value(),dc,ac,sc,t,tt);
        x=x+250;
    }else if (key == 't'){
        drawT(x,y,sw,slider.value(),dc,ac,sc,t,tt);
        x=x+250;
    }else if (key == 'u'){
        drawU(x,y,sw,slider.value(),dc,ac,sc,t,tt);
        x=x+250;
    }else if (key == 'v'){
        drawV(x,y,sw,slider.value(),dc,ac,sc,t,tt);
        x=x+250;
    }else if (key == 'w'){
        drawW(x,y,sw,slider.value(),dc,ac,sc,t,tt);
        x=x+250;
    }else if (key == 'x'){
        drawX(x,y,sw,slider.value(),dc,ac,sc,t,tt);
        x=x+250;
    }else if (key == 'y'){
        drawY(x,y,sw,slider.value(),dc,ac,sc,t,tt);
        x=x+250;
    }else if (key == 'z'){
        drawZ(x,y,sw,slider.value(),dc,ac,sc,t,tt);
        x=x+250;
    }
    
    
    if (x>=2400){
        x=0;
        y=y+350;
//        sw2= sw2+2;
//        d = d + 4;
//        sw = sw + 5;
//        sw3 = sw3 -5;
    }
    
    
}

function drawA(x,y,sw,sw2,dc,ac,sc,t,tt){
    push();
    translate(x,y);
    
    stroke(ac.r, ac.g, ac.b);
    strokeWeight(sw);
    strokeCap(ROUND);
    noFill();
    arc(157,230,76,60,radians(0),radians(180));
    
    strokeCap(ROUND);
    stroke(sc.r,sc.g,sc.b,t);
    strokeWeight(sw2);
    line(150,100,220,300);
    line(150,100,100,300);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
    fill(dc.r, dc.g, dc.b,tt);
    ellipse(150,100,d,d);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
    fill(dc.r, dc.g, dc.b,tt);
    ellipse(220,300,d,d);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
    fill(dc.r, dc.g, dc.b,tt);
    ellipse(100,300,d,d);
    
    
    pop();
}
function drawB(x,y,sw,sw2,dc,ac,sc,t,tt){
    push();
    translate(x,y);
    
    stroke(ac.r, ac.g, ac.b);
    strokeWeight(sw);
    strokeCap(ROUND);
    noFill();
    arc(100,160,180,150,radians(270), radians(90));
    
    strokeCap(ROUND);
    stroke(sc.r,sc.g,sc.b,t);
    strokeWeight(sw2);
    line(100,140,200,220);
    line(200,220,100,300);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
    fill(dc.r, dc.g, dc.b,tt);
    ellipse(100,140,d,d);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
    fill(dc.r, dc.g, dc.b,tt);
    ellipse(200,220,d,d);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
    fill(dc.r, dc.g, dc.b,tt);
    ellipse(100,300,d,d);
    
    
    pop();
}
function drawC(x,y,sw,sw2,dc,ac,sc,t,tt){
    push();
    translate(x,y);
    
    stroke(ac.r, ac.g, ac.b);
    strokeWeight(sw);
    strokeCap(ROUND);
    noFill();
    arc(170,200,220,200,radians(90), radians(270));
    
    strokeCap(ROUND);
    stroke(sc.r,sc.g,sc.b,t);
    strokeWeight(sw2);
    line(180,100,60,200);
    line(60,200,180,300);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
    fill(dc.r, dc.g, dc.b,tt);
    ellipse(180,100,d,d);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
    fill(dc.r, dc.g, dc.b,tt);
    ellipse(60,200,d,d);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
    fill(dc.r, dc.g, dc.b,tt);
    ellipse(180,300,d,d);
    
    
    pop();
}
function drawD(x,y,sw,sw2,dc,ac,sc,t,tt){
    push();
    translate(x,y);
    
    stroke(ac.r, ac.g, ac.b);
    strokeWeight(sw);
    strokeCap(ROUND);
    noFill();
    arc(100,200,200,200,radians(270),radians(90));
    
    strokeCap(ROUND);
    stroke(sc.r,sc.g,sc.b,t);
    strokeWeight(sw2);
    line(100,100,100,300);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
    fill(dc.r, dc.g, dc.b,tt);
    ellipse(100,100,d,d);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
    fill(dc.r, dc.g, dc.b,tt);
    ellipse(100,300,d,d);
    
    
    pop();
}
function drawE(x,y,sw,sw2,dc,ac,sc,t,tt){
    push();
    translate(x,y);
    
    stroke(ac.r, ac.g, ac.b);
    strokeWeight(sw);
    strokeCap(ROUND);
    noFill();
    arc(100,200,200,200,radians(270), radians(90));
    
    strokeCap(ROUND);
    stroke(sc.r,sc.g,sc.b,t);
    strokeWeight(sw2);
    line(100,100,200,100);
    line(100,300,200,300);
    line(100,100,100,300);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
    fill(dc.r, dc.g, dc.b);
    ellipse(100,100,d,d);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
    fill(dc.r, dc.g, dc.b,tt);
    ellipse(200,100,d,d);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
    fill(dc.r, dc.g, dc.b,tt);
    ellipse(100,300,d,d);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
    fill(dc.r, dc.g, dc.b,tt);
    ellipse(200,300,d,d);
    
    
    pop();
}
function drawF(x,y,sw,sw2,dc,ac,sc,t,tt){
    push();
    translate(x,y);
    
    stroke(ac.r, ac.g, ac.b);
    strokeWeight(sw);
    strokeCap(ROUND);
    noFill();
    arc(100,200,200,200,radians(270), radians(90));
    
    strokeCap(ROUND);
    stroke(sc.r,sc.g,sc.b,t);
    strokeWeight(sw2);
    line(100,100,200,100);
    line(100,190,200,190);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
    fill(dc.r, dc.g, dc.b);
    ellipse(100,100,d,d);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
    fill(dc.r, dc.g, dc.b,tt);
    ellipse(200,100,d,d);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
    fill(dc.r, dc.g, dc.b,tt);
    ellipse(100,190,d,d);
    
   stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
    fill(dc.r, dc.g, dc.b,tt);
    ellipse(200,190,d,d);
    
    
    pop();
}
function drawG(x,y,sw,sw2,dc,ac,sc,t,tt){
    push();
    translate(x,y);
    
    stroke(ac.r, ac.g, ac.b);
    strokeWeight(sw);
    strokeCap(ROUND);
    noFill();
    arc(100,200,200,210,radians(270), radians(90));
    
    strokeCap(ROUND);
    stroke(sc.r,sc.g,sc.b,t);
    strokeWeight(sw2);
    line(140,200,220,200);
    line(220,200,220,300);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
    fill(dc.r, dc.g, dc.b,tt);
    ellipse(140,200,d,d);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
    fill(dc.r, dc.g, dc.b,tt);
    ellipse(220,200,d,d);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
    fill(dc.r, dc.g, dc.b,tt);
    ellipse(220,300,d,d);

    
    
    pop();
}
function drawH(x,y,sw,sw2,dc,ac,sc,t,tt){
    push();
    translate(x,y);
    
    stroke(ac.r, ac.g, ac.b);
    strokeWeight(sw);
    strokeCap(ROUND);
    noFill();
    arc(100,200,150,200,radians(270),radians(90));
    
    strokeCap(ROUND);
    stroke(sc.r,sc.g,sc.b,t);
    strokeWeight(sw2);
    line(100,200,200,200);
    line(200,100,200,300);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
    fill(dc.r, dc.g, dc.b,tt);
    ellipse(100,200,d,d);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
    fill(dc.r, dc.g, dc.b,tt);
    ellipse(200,100,d,d);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
    fill(dc.r, dc.g, dc.b,tt);
    ellipse(200,300,d,d);
    
    
    pop();
}
function drawI(x,y,sw,sw2,dc,ac,sc,t,tt){
    push();
    translate(x,y);
    
    stroke(ac.r, ac.g, ac.b);
    strokeWeight(sw);
    strokeCap(ROUND);
    noFill();
    arc(100,200,150,195,radians(270), radians(90));
    
    strokeCap(ROUND);
    stroke(sc.r,sc.g,sc.b,t);
    strokeWeight(sw2);
    line(90,100,190,100);
    line(90,300,190,300);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
    fill(dc.r, dc.g, dc.b,tt);
    ellipse(90,100,d,d);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
    fill(dc.r, dc.g, dc.b,tt);
    ellipse(190,100,d,d);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(90,300,d,d);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(190,300,d,d);
    
    
    pop();
}
function drawJ(x,y,sw,sw2,dc,ac,sc,t,tt){
    push();
    translate(x,y);
    
    stroke(ac.r, ac.g, ac.b);
    strokeWeight(sw);
    strokeCap(ROUND);
    noFill();
    arc(200,210,200,180,radians(90), radians(180));
    
    strokeCap(ROUND);
    stroke(sc.r,sc.g,sc.b,t);
    strokeWeight(sw2);
    line(100,100,200,100);
    line(200,100,200,300);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);   
    ellipse(100,100,d,d);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(200,100,d,d);
    
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(200,300,d,d);
    
    
    pop();
}
function drawK(x,y,sw,sw2,dc,ac,sc,t,tt){
    push();
    translate(x,y);
    
    stroke(ac.r, ac.g, ac.b);
    strokeWeight(sw);
    strokeCap(ROUND);
    noFill();
    arc(100,200,200,200,radians(270),radians(90));
    
    strokeCap(ROUND);
    stroke(sc.r,sc.g,sc.b,t);
    strokeWeight(sw2);
    line(200,100,100,200);
    line(100,200,200,300);
//    line(100,100,100,300);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(200,100,d,d);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(100,200,d,d);
    
    stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(200,300,d,d);
    
    
    pop();
}
function drawL(x,y,sw,sw2,dc,ac,sc,t,tt){
    push();
    translate(x,y);
   
    
    stroke(ac.r, ac.g, ac.b);
    strokeWeight(sw);
    strokeCap(ROUND);
    noFill();
    arc(110,200,180,200,radians(270),radians(90));
    
    strokeCap(ROUND);
    stroke(sc.r,sc.g,sc.b,t);
    strokeWeight(sw2);
    line(110,100,110,300);
    line(110,300,210,300);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(110,100,d,d);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(110,300,d,d);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(210,300,d,d);
    
    
    pop();
}
function drawM(x,y,sw,sw2,dc,ac,sc,t,tt){
    push();
    translate (x,y);
    
    stroke(ac.r, ac.g, ac.b);
    strokeWeight(sw);
    strokeCap(ROUND);
    noFill();
    arc(100,200,170,200,radians(270),radians(90));
    
    strokeCap(ROUND);
    stroke(sc.r,sc.g,sc.b,t);
    strokeWeight(sw2);
    line(130,200,220,100);
    line(220,100,220,300);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(130,200,d,d);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(220,100,d,d);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(220,300,d,d);
   
    pop();

}
function drawN(x,y,sw,sw2,dc,ac,sc,t,tt){
    push();
    translate (x,y);
    
    stroke(ac.r, ac.g, ac.b);
    strokeWeight(sw);
    strokeCap(ROUND);
    noFill();
    arc(100,200,170,200,radians(270),radians(90));
    
    strokeCap(ROUND);
    stroke(sc.r,sc.g,sc.b,t);
    strokeWeight(sw2);
    line(130,200,220,300);
    line(220,300,220,100);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(130,200,d,d);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(220,100,d,d);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(220,300,d,d);
   
    pop();

}
function drawO(x,y,sw,sw2,dc,ac,sc,t,tt){
   push();
    translate (x,y);
    
    stroke(ac.r, ac.g, ac.b);
    strokeWeight(sw);
    strokeCap(ROUND);
    noFill();
    arc(140,200,140,200,radians(0),radians(0));
    
    strokeCap(ROUND);
    stroke(sc.r,sc.g,sc.b,t);
    strokeWeight(sw2);
    line(140,100,140,300);
//    line(70,200,150,300);
//    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(140,100,d,d);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(140,300,d,d);
//    
//stroke(dc.r, dc.g, dc.b);
//    strokeWeight(sw3);
//    noFill();
//    ellipse(150,300,d,d);
    
   pop();
}    
function drawP(x,y,sw,sw2,dc,ac,sc,t,tt){
    push();
    translate(x,y);
    
    stroke(ac.r, ac.g, ac.b);
    strokeWeight(sw);
    strokeCap(ROUND);
    noFill();
    arc(144,175,170,150,radians(270), radians(90));
    
    strokeCap(ROUND);
    stroke(sc.r,sc.g,sc.b,t);
    strokeWeight(sw2);
    line(140,100,140,300);
    
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(140,100,d,d);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(140,300,d,d);
    

    
    
    pop();
}
function drawQ(x,y,sw,sw2,dc,ac,sc,t,tt){
    push();
    translate(x,y);
    
    stroke(ac.r, ac.g, ac.b);
    strokeWeight(sw);
    strokeCap(ROUND);
    noFill();
    arc(140,200,140,200,radians(0),radians(0));
    
    strokeCap(ROUND);
   stroke(sc.r,sc.g,sc.b,t);
    strokeWeight(sw2);
    line(140,230,215,300);
    

    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(140,230,d,d);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(215,300,d,d);
    
    
    pop();
}
function drawR(x,y,sw,sw2,dc,ac,sc,t,tt){
    push();
    translate(x,y);
    
    stroke(ac.r, ac.g, ac.b);
    strokeWeight(sw);
    strokeCap(ROUND);
    noFill();
    arc(122,175,170,150,radians(270), radians(90));
    
    strokeCap(ROUND);
    stroke(sc.r,sc.g,sc.b,t);
    strokeWeight(sw2);
    line(120,100,120,300);
    line(120,210,215,300);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(120,100,d,d);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(120,300,d,d);
    
  
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(215,300,d,d);
    
    
    pop();
}
function drawS(x,y,sw,sw2,dc,ac,sc,t,tt){
    push();
    translate(x,y);
    
    stroke(ac.r, ac.g, ac.b);
    strokeWeight(sw);
    strokeCap(ROUND);
    noFill();
    arc(130,170,130,130,radians(90), radians(270));
    arc(132,235,130,130,radians(270), radians(90));
    
    strokeCap(ROUND);
fill(dc.r, dc.g, dc.b,tt);
    strokeWeight(sw2);
    line(130,105,130,300);
   
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(130,105,d,d);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(130,300,d,d);
    
    
    pop();
}
function drawT(x,y,sw,sw2,dc,ac,sc,t,tt){
    push();
    translate(x,y);
    
    stroke(ac.r, ac.g, ac.b);
    strokeWeight(sw);
    strokeCap(ROUND);
    noFill();
    arc(130,200,160,195,radians(270), radians(90));
    
    strokeCap(ROUND);
    stroke(sc.r,sc.g,sc.b,t);
    strokeWeight(sw2);
    line(90,100,200,100);
    line(130,100,130,300);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(90,100,d,d);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(200,100,d,d);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(130,300,d,d);
    
    
    pop();
}
function drawU(x,y,sw,sw2,dc,ac,sc,t,tt){
    push();
    translate(x,y);
    
    stroke(ac.r, ac.g, ac.b);
    strokeWeight(sw);
    strokeCap(ROUND);
    noFill();
    arc(155,240,130,130,radians(0), radians(180));
    
    strokeCap(ROUND);
    stroke(sc.r,sc.g,sc.b,t);
    strokeWeight(sw2);
    line(90,100,90,230);
    line(220,100,220,230);
//    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(90,100,d,d);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(90,230,d,d);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(220,100,d,d);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(220,230,d,d);
    
    
    pop();
}
function drawV(x,y,sw,sw2,dc,ac,sc,t,tt){
    push();
    translate(x,y);
    
    stroke(ac.r, ac.g, ac.b);
    strokeWeight(sw);
    strokeCap(ROUND);
    noFill();
    arc(166,100,120,120,radians(0), radians(180));
    
    strokeCap(ROUND);
    stroke(sc.r,sc.g,sc.b,t);
    strokeWeight(sw2);
    line(100,100,170,300);
    line(170,300,230,100);
//    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(100,100,d,d);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(170,300,d,d);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(230,100,d,d);
    
//stroke(dc.r, dc.g, dc.b);
//    strokeWeight(sw3);
//    noFill();
//    ellipse(220,230,d,d);
    
    
    pop();
}
function drawW(x,y,sw,sw2,dc,ac,sc,t,tt){
    push();
    translate(x,y);
    
    stroke(ac.r, ac.g, ac.b);
    strokeWeight(sw);
    strokeCap(ROUND);
    noFill();
    arc(175,290,70,100,radians(180), radians(0));
    
    strokeCap(ROUND);
    stroke(sc.r,sc.g,sc.b,t);
    strokeWeight(sw2);
    line(100,100,140,300);
    line(250,100,210,300);
//    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(100,100,d,d);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(140,300,d,d);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(250,100,d,d);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(210,300,d,d);
    
    
    pop();
}
function drawX(x,y,sw,sw2,dc,ac,sc,t,tt){
    push();
    translate(x,y);
    
//    stroke(ac.r, ac.g, ac.b);
//    strokeWeight(sw);
//    strokeCap(ROUND);
//    noFill();
//    arc(160,130,80,50,radians(180), radians(0));
//    arc(160,270,80,50,radians(0), radians(180));
    
    strokeCap(ROUND);
    stroke(sc.r,sc.g,sc.b,t);
    strokeWeight(sw2);
    line(100,100,220,300);
    line(220,100,100,300);
//    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(100,100,d,d);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(220,300,d,d);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(220,100,d,d);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
    fill(dc.r, dc.g, dc.b,t2);
    ellipse(100,300,d,d);
    
    
    pop();
}
function drawY(x,y,sw,sw2,dc,ac,sc,t,tt){
    push();
    translate(x,y);
    
    stroke(ac.r, ac.g, ac.b);
    strokeWeight(sw);
    strokeCap(ROUND);
    noFill();
    arc(160,100,140,160,radians(0), radians(180));
    
    strokeCap(ROUND);
    stroke(sc.r,sc.g,sc.b,t);
    strokeWeight(sw2);
//    line(100,100,160,200);
//    line(160,200,220,100);
    line(160,130,160,300);
//    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(160,130,d,d);
//    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(160,300,d,d);
    
//stroke(dc.r, dc.g, dc.b);
//    strokeWeight(sw3);
//    noFill();
//    ellipse(100,100,d,d);
//    
//stroke(dc.r, dc.g, dc.b);
//    strokeWeight(sw3);
//    noFill();
//    ellipse(100,300,d,d);
//    
    
    pop();
}
function drawZ(x,y,sw,sw2,dc,ac,sc,t,tt){
    push();
    translate(x,y);
    
//    stroke(ac.r, ac.g, ac.b);
//    strokeWeight(sw);
//    strokeCap(ROUND);
//    noFill();
//    arc(160,100,140,160,radians(0), radians(180));
    
    strokeCap(ROUND);
    stroke(sc.r,sc.g,sc.b,t);
    strokeWeight(sw2);
    line(100,100,210,100);
    line(210,100,100,300);
    line(100,300,210,300);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(100,100,d,d);
    
stroke(dc.r, dc.g, dc.b);
    strokeWeight(sw3);
fill(dc.r, dc.g, dc.b,tt);
    ellipse(210,300,d,d);
    
    
    pop();
}