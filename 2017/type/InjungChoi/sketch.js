var x = 50; //x position
var y = 30; //y position
var slant = 100;
var rgbe = 212; // rgb effect
var rgbe2 = 144; // rgb effect 2
var o = 300; // opacity

var button0; //button to set StrokeWeight 0
var button1; //button to set StrokeWeight 1
var button2; //button to set StrokeWeight 2
var button3; //button to set StrokeWeight 3
var buttonS = false; //Stroke
var buttonC; //Color
var buttonD; //Opacity Down
var buttonU; //Opacity Up
var buttonCl; //Clear Button
var buttonSa; //Save Button
var slider; 
var sw = 3; //stroke Weight

function setup() {
    createCanvas(900,600);
    background (255);
//    slider=createSlider(0,10,3);
//    button4 = createButton("Slide to Change Stroke Weight");
    button3 = createButton("3");
    button3.mousePressed(changeStroke3);

    button2 = createButton("2");
    button2.mousePressed(changeStroke2);
    
    button1 = createButton("1");
    button1.mousePressed(changeStroke1);
    
    button0 = createButton("0");
    button0.mousePressed(changeStroke0);
    
    buttonS = createButton("Stroke");
    
    buttonC = createButton("Color");
    buttonC.mousePressed(changeColor);
    
    buttonD = createButton("Opacity - ");
    buttonD.mousePressed(changeOpacityD);
    
    buttonU = createButton("Opacity + ");
    buttonU.mousePressed(changeOpacityU);
    
    buttonCl = createButton("CLEAR");
    buttonCl.mousePressed(clearBackground); 
    
    buttonSa = createButton("SAVE");
    buttonSa.mousePressed(saveImage); 
    
    button3.position(770,10);
    button2.position(750,10);
    button1.position(730,10);
    button0.position(710,10);
    buttonS.position(660,10);
    buttonC.position(570,10);
    buttonD.position(500,10);
    buttonU.position(430,10);
    buttonCl.position(800,10);
    buttonSa.position(860,10);
}
function changeStroke3() {
    sw = 3;
}
function changeStroke2() {
    sw = 2;
}
function changeStroke1() {
    sw = 1;
}
function changeStroke0() {
    sw = 0;
}
function changeColor() {
    rgbe = rgbe-40;  
    rgbe2 = rgbe2-20;
    if (rgbe<100) {
        rgbe = 242;
    }
    if (rgbe2<100) {
        rgbe2 = 244;
    }
}
function changeOpacityU() {
    o=o+90;
    if (o>300) {
        o=300;
    }
}
function changeOpacityD() {
    o=o-90;
    if (o<0) {
        o=0;
    }
}
function clearBackground() {
    background (255);
    x = 50;
    y = 30;
}
function saveImage () {
    save('My_Type.png')
}
function draw() {
    fill(rgbe2,195,rgbe,o);
    ellipse (635,17,20,20);
    
} 

function keyTyped() {
    scale(0.5,0.5);
    if (key == "a") {
        drawA(x, y, slant, false);
        x += 80;
    } else if (key == "b") {
        drawB(x, y, slant, false);
        x += 80;
    } else if (key == "c") {
        drawC(x, y, slant, false);
        x += 80;
    } else if (key == "d") {
        drawD(x, y, slant, false);
        x += 80;
    } else if (key == "e") {
        drawE(x, y, slant, false);
        x += 80;
    } else if (key == "f") {
        drawF(x, y, slant, false);
        x += 80;
    } else if (key == "g") {
        drawG(x, y, slant, false);
        x += 80;
    } else if (key == "h") {
        drawH(x, y, slant, false);
        x += 80;
    } else if (key == "i") {
        drawI(x, y, slant, false);
        x += 80;
    } else if (key == "j") {
        drawJ(x, y, slant, false);
        x += 80;
    } else if (key == "k") {
        drawK(x, y, slant, false);
        x += 80;
    } else if (key == "l") {
        drawL(x, y, slant, false);
        x += 80;
    } else if (key == "m") {
        drawM(x, y, slant, false);
        x += 80;
    } else if (key == "n") {
        drawN(x, y, slant, false);
        x += 80;
    } else if (key == "o") {
        drawO(x, y, slant, false);
        x += 80;
    } else if (key == "p") {
        drawP(x, y, slant, false);
        x += 80;
    } else if (key == "q") {
        drawQ(x, y, slant, false);
        x += 80;
    } else if (key == "r") {
        drawR(x, y, slant, false);
        x += 80;
    } else if (key == "s") {
        drawS(x, y, slant, false);
        x += 80;
    } else if (key == "t") {
        drawT(x, y, slant, false);
        x += 80;
    } else if (key == "u") {
        drawU(x, y, slant, false);
        x += 80;
    } else if (key == "v") {
        drawV(x, y, slant, false);
        x += 80;
    } else if (key == "w") {
        drawW(x, y, slant, false);
        x += 80;
    } else if (key == "x") {
        drawX(x, y, slant, false);
        x += 80;
    } else if (key == "y") {
        drawY(x, y, slant, false);
        x += 80;
    } else if (key == "z") {
        drawZ(x, y, slant, false);
        x += 80;
    } else if (key == " ") {
        x += 80;
    } else if (key == 'ENTER') {
        x =50
        y = y+100;
    } if (x > width-300) {
        x = 50;
        y = y+100;
    } 
}

function drawA(x,y){
    push();
    translate(x,y);
    beginShape();
    c (x,y+10);
    c (x,y);
    c (x+10,y+25);
    c (x+10,y+15);
    c (x+10,y+5);
    c (x+20,y+30);
    c (x+20,y+20);
    c (x+10,y+35);
    c (x+10,y+25);
    c (x,y+40);
    c (x,y+30);
    c (x-10,y+45);
    c (x-20,y+20);
    c (x-30,y+25);
    c (x-40,y+40);
    c (x-40,y+30);
    c (x-40,y+20);
    c (x-30,y+45);
    c (x-30,y+35);
    c (x-20,y+50);
    c (x-20,y+10);
    c (x-10,y+25);
    c (x-10,y+35);
    c (x-20,y+40);
    c (x,y+20);
    c (x-10,y+55);
    endShape();
    pop();
}
function drawB(x,y){
    push();
    translate(x,y);
    beginShape();
    c (x,y+20);
    c (x,y+10);
    c (x,y);
    c (x-10,y+15);
    c (x-10,y+5);
    c (x-20,y+20);
    c (x-10,y+25);
    c (x,y+40);
    c (x,y+30);
    c (x-10,y+45);
    c (x-30,y+25);
    c (x-30,y+15);
    c (x-40,y+40);
    c (x-40,y+30);
    c (x-40,y+20);
    c (x-30,y+45);
    c (x-30,y+35);
    c (x-20,y+50);
    c (x-10,y+35);
    endShape();
    pop();
}
function drawC(x,y){
    push();
    translate(x,y);
    beginShape();
    c (x,y);
    c (x+10,y+25);
    c (x+10,y+15);
    c (x+10,y+5);
    c (x-10,y+25);
    c (x-10,y+15);
    c (x-10,y+5);
    c (x+20,y+30);
    c (x+20,y+20);
    c (x-20,y+30);
    c (x-20,y+20);
    c (x-30,y+25);
    c (x-40,y+40);
    c (x-40,y+30);
    c (x-40,y+20);
    c (x-30,y+45);
    c (x-30,y+35);
    c (x-20,y+50);
    endShape();
    pop();
}
function drawD (x,y){
    push();
    translate(x,y);
    beginShape();
    c (x+20,y+30);
    c (x+20,y+20);
    c (x+20,y+10);
    c (x+10,y+35);
    c (x+10,y+25);
    c (x,y+40);
    c (x,y+30);
    c (x-10,y+45);
    c (x-20,y+20);
    c (x-30,y+25);
    c (x-40,y+40);
    c (x-40,y+30);
    c (x-40,y+20);
    c (x-30,y+45);
    c (x-30,y+35);
    c (x-20,y+50);
    c (x-20,y+10);
    c (x-10,y+25);
    c (x-10,y+35);
    c (x,y+20);
    endShape();
    pop();
}
function drawE(x,y){
    push();
    translate(x,y);
    beginShape();
    c (x,y+10);
    c (x,y);
    c (x-10,y+15);
    c (x+10,y+25);
    c (x+10,y+15);
    c (x+10,y+5);
    c (x+20,y+30);
    c (x+20,y+20);
    c (x+10,y+35);
    c (x+10,y+25);
    c (x-20,y+20);
    c (x-30,y+25);
    c (x-40,y+40);
    c (x-40,y+30);
    c (x-40,y+20);
    c (x-30,y+45);
    c (x-30,y+35);
    c (x-20,y+50);
    c (x-20,y+10);
    c (x-10,y+35);
    c (x-10,y+25);
    c (x,y+40);
    endShape();
    pop();
}
function drawF(x,y){
    push();
    translate(x,y);
    beginShape();
    c (x-20,y+20);
    c (x+10,y+25);
    c (x+10,y+15);
    c (x+10,y+5);
    c (x,y+30);
    c (x,y+20);
    c (x-10,y+25);
    c (x-10,y+15);
    c (x-20,y+40);
    c (x-20,y+30);
    c (x-30,y+45);
    c (x,y+40);
    c (x,y+30);
    c (x+20,y+30);
    c (x+20,y+20);
    endShape();
    pop();
}
function drawG(x,y){
    push();
    translate(x,y);
    beginShape();
    c (x,y+10);
    c (x,y);
    c (x-10,y+35);
    c (x-10,y+15);
    c (x+10,y+25);
    c (x+10,y+15);
    c (x+10,y+5);
    c (x-20,y+20);
    c (x-20,y+10);
    c (x-10,y+25);
    c (x+20,y+30);
    c (x+20,y+20);
    c (x+10,y+35);
    c (x+10,y+25);
    c (x,y+40);
    c (x,y+30);
    c (x-10,y+45);
    c (x-40,y+40);
    c (x-40,y+30);
    c (x-40,y+20);
    c (x-30,y+45);
    c (x-30,y+35);
    c (x-20,y+50);  
    endShape();
    pop();
}
function drawH(x,y){
    push();
    translate(x,y);
    beginShape();
    c (x,y+20);
    c (x,y+10);
    c (x,y);
    c (x-10,y+15);
    c (x-20,y+20);
    c (x-30,y+35);
    c (x-30,y+25);
    c (x-40,y+40);
    c (x-40,y+30);
    c (x-40,y+20);
    c (x-20,y+10);
    c (x-10,y+25);
    c (x,y+40);
    c (x,y+30);
    c (x-10,y+45);
    c (x-10,y+35);
    c (x-20,y+50);
    endShape();
    pop();
}
function drawI(x,y){
    push();
    translate(x,y);
    beginShape();
    c (x+10,y+25);
    c (x+10,y+15);
    c (x-10,y+35);
    c (x-10,y+25);
    c (x-10,y+15);
    c (x-20,y+40);
    c (x-20,y+30);
    c (x-30,y+45);
    endShape();
    pop();
}
function drawJ(x,y){
    push();
    translate(x,y);
    beginShape();
    c (x-40,y+40);
    c (x-40,y+30);
    c (x+10,y+25);
    c (x+10,y+15);
    c (x+10,y+5);
    c (x-10,y+35);
    c (x-10,y+25);
    c (x-10,y+15);
    c (x-20,y+40);
    c (x-20,y+30);
    c (x-30,y+45);
    endShape();
    pop();
}
function drawK(x,y){
    push();
    translate(x,y);
    beginShape();
    c (x,y+20);
    c (x,y+10);
    c (x,y);
    c (x+20,y+30);
    c (x+20,y+20);
    c (x+10,y+35);
    c (x-10,y+45);
    c (x-20,y+20);
    c (x-30,y+35);
    c (x-30,y+25);
    c (x-40,y+40);
    c (x-40,y+30);
    c (x-40,y+20);
    c (x-20,y+50);
    c (x-20,y+10);
    c (x-10,y+25);
    c (x-10,y+35);
    endShape();
    pop();
}
function drawL(x,y){
    push();
    translate(x,y);
    beginShape();
    c (x+10,y+25);
    c (x+10,y+15);
    c (x+10,y+5);
    c (x,y+30);
    c (x,y+20);
    c (x-10,y+35);
    c (x-20,y+40);
    c (x-20,y+30);
    c (x-30,y+45);
    endShape();
    pop();
}
function drawM(x,y){
    push();
    translate(x,y);
    beginShape();
    c (x,y+10);
    c (x,y);
    c (x-10,y+15);
    c (x-20,y+20);
    c (x-30,y+35);
    c (x-30,y+25);
    c (x-40,y+40);
    c (x-40,y+30);
    c (x-40,y+20);
    c (x-20,y+10);
    c (x-10,y+35);
    c (x+10,y+15);
    c (x+10,y+5);
    c (x,y+20);
    c (x-10,y+25);
    c (x+20,y+30);
    c (x+10,y+35);
    c (x+10,y+25);
    c (x,y+40);
    c (x,y+30);
    c (x-10,y+45);
    c (x-20,y+50);
    endShape();
    pop();
}
function drawN(x,y){
    push();
    translate(x,y);
    beginShape();
    c (x,y+10);
    c (x,y);
    c (x-10,y+15);
    c (x-20,y+30);
    c (x-20,y+20);
    c (x-30,y+35);
    c (x-30,y+25);
    c (x-40,y+40);
    c (x-40,y+30);
    c (x-40,y+20);
    c (x-20,y+10);
    c (x+10,y+15);
    c (x+10,y+5);
    c (x+20,y+30);
    c (x+10,y+35);
    c (x+10,y+25);
    c (x,y+40);
    c (x,y+30);
    c (x-10,y+45);
    c (x-20,y+50);
    endShape();
    pop();
}
function drawO(x,y){
    push();
    translate(x,y);
    beginShape();
    c (x,y);
    c (x+10,y+25);
    c (x+10,y+15);
    c (x+10,y+5);
    c (x-10,y+25);
    c (x-10,y+15);
    c (x-10,y+5);
    c (x+20,y+30);
    c (x+20,y+20);
    c (x-20,y+30);
    c (x-20,y+20);
    c (x-30,y+25);
    c (x-40,y+40);
    c (x-40,y+30);
    c (x-40,y+20);
    c (x-30,y+45);
    c (x-30,y+35);
    c (x+10,y+35);
    c (x,y+40);
    c (x,y+30);
    c (x-10,y+45);
    c (x-20,y+50);
    endShape();
    pop();
}
function drawP(x,y){
    push();
    translate(x,y);
    beginShape();
    c (x,y);
    c (x+10,y+25);
    c (x+10,y+15);
    c (x+10,y+5);
    c (x-10,y+25);
    c (x-10,y+15);
    c (x-10,y+5);
    c (x+20,y+30);
    c (x+20,y+20);
    c (x-20,y+30);
    c (x-20,y+20);
    c (x-30,y+35);
    c (x-30,y+25);
    c (x-40,y+40);
    c (x-40,y+30);
    c (x-40,y+20);
    c (x-10,y+35);
    c (x+10,y+35);
    c (x,y+40);
    c (x,y+30);
    endShape();
    pop();
}
function drawQ(x,y){
    push();
    translate(x,y);
    beginShape();
    c (x,y);
    c (x+10,y+25);
    c (x+10,y+15);
    c (x+10,y+5);
    c (x-10,y+25);
    c (x-10,y+15);
    c (x-10,y+5);
    c (x+20,y+30);
    c (x+20,y+20);
    c (x-20,y+30);
    c (x-20,y+20);
    c (x-10,y+35);
    c (x-10,y+25);
    c (x+10,y+35);
    c (x,y+40);
    c (x,y+30);
    c (x-10,y+45);
    c (x-20,y+50);
    endShape();
    pop();
}
function drawR(x,y){
    push();
    translate(x,y);
    beginShape();
    c (x,y+20);
    c (x,y+10);
    c (x,y);
    c (x-10,y+25);
    c (x-10,y+15);
    c (x-10,y+5);
    c (x-20,y+30);
    c (x-20,y+20);
    c (x-30,y+35);
    c (x-30,y+25);
    c (x-40,y+40);
    c (x-40,y+30);
    c (x-40,y+20);
    c (x,y+30);
    c (x,y+20);
    c (x+10,y+35);
    endShape();
    pop();
}
function drawS(x,y){
    push();
    translate(x,y);
    beginShape();
    c (x,y+10);
    c (x,y);
    c (x-10,y+35);
    c (x-10,y+15);
    c (x+10,y+25);
    c (x+10,y+15);
    c (x+10,y+5);
    c (x-20,y+20);
    c (x-20,y+10);
    c (x-10,y+25);
    c (x+20,y+30);
    c (x+20,y+20);
    c (x,y+40);
    c (x,y+30);
    c (x-10,y+45);
    c (x-40,y+40);
    c (x-40,y+30);
    c (x-40,y+20);
    c (x-30,y+45);
    c (x-30,y+35);
    c (x-20,y+50);  
    endShape();
    pop();
}
function drawT(x,y){
    push();
    translate(x,y);
    beginShape();
    c (x-20,y+20);
    c (x-20,y+10);
    c (x+10,y+25);
    c (x+10,y+15);
    c (x+10,y+5);
    c (x,y+30);
    c (x,y+20);
    c (x-10,y+35);
    c (x-10,y+25);
    c (x-20,y+40);
    c (x-30,y+45);
    c (x-30,y+35);
    c (x,y+40);
    c (x-20,y+50);
    endShape();
    pop();
}
function drawU(x,y){
    push();
    translate(x,y);
    beginShape();
    c (x,y+20);
    c (x,y+10);
    c (x,y);
    c (x-10,y+25);
    c (x-10,y+15);
    c (x-10,y+5);
    c (x+20,y+30);
    c (x+20,y+20);
    c (x-20,y+30);
    c (x-20,y+20);
    c (x-30,y+25);
    c (x-40,y+40);
    c (x-40,y+30);
    c (x-40,y+20);
    c (x-30,y+45);
    c (x-30,y+35);
    c (x+10,y+35);
    c (x,y+40);
    c (x,y+30);
    c (x-10,y+45);
    c (x-20,y+50);
    endShape();
    pop();
}
function drawV(x,y){
    push();
    translate(x,y);
    beginShape();
    c (x,y+20);
    c (x,y+10);
    c (x,y);
    c (x-10,y+25);
    c (x-10,y+15);
    c (x-10,y+5);
    c (x+20,y+30);
    c (x+20,y+20);
    c (x-20,y+30);
    c (x-20,y+20);
    c (x-30,y+35);
    c (x-30,y+25);
    c (x-30,y+45);
    c (x+10,y+35);
    c (x,y+40);
    c (x,y+30);
    c (x-10,y+45);
    c (x-10,y+35);
    endShape();
    pop();
}
function drawW(x,y){
    push();
    translate(x,y);
    beginShape();
    c (x,y+20);
    c (x,y+10);
    c (x,y);
    c (x-10,y+25);
    c (x-10,y+15);
    c (x-10,y+5);
    c (x+20,y+30);
    c (x+20,y+20);
    c (x-20,y+30);
    c (x-20,y+20);
    c (x-30,y+25);
    c (x-40,y+40);
    c (x-40,y+30);
    c (x-40,y+20);
    c (x-10,y+25);
    c (x-20,y+40);
    c (x-30,y+45);
    c (x+10,y+35);
    c (x,y+40);
    c (x,y+30);
    c (x-10,y+45);
    c (x-20,y+50);
    c (x-10,y+35);
    endShape();
    pop();
}
function drawX(x,y){
    push();
    translate(x,y);
    beginShape();
    c (x,y+20);
    c (x,y+10);
    c (x,y);
    c (x-10,y+25);
    c (x-10,y+15);
    c (x+20,y+30);
    c (x+20,y+20);
    c (x-30,y+35);
    c (x-30,y+25);
    c (x-40,y+40);
    c (x-40,y+30);
    c (x-40,y+20);
    c (x-10,y+35);
    c (x-10,y+25);
    c (x+10,y+35);
    c (x-10,y+45);
    c (x-20,y+50);
    c (x-20,y+40);
    endShape();
    pop();
}
function drawY(x,y){
    push();
    translate(x,y);
    beginShape();
    c (x,y+20);
    c (x,y+10);
    c (x,y);
    c (x-10,y+15);
    c (x-10,y+5);
    c (x+20,y+30);
    c (x+20,y+20);
    c (x-20,y+30);
    c (x-20,y+20);
    c (x-40,y+40);
    c (x-40,y+30);
    c (x-10,y+25);
    c (x-30,y+45);
    c (x+10,y+35);
    c (x+10,y+25);
    c (x,y+40);
    c (x-10,y+45);
    c (x-20,y+50);
    c (x-10,y+35);
    endShape();
    pop();
}
function drawZ(x,y){
    push();
    translate(x,y);
    beginShape();
    c (x,y+10);
    c (x,y);
    c (x+10,y+25);
    c (x+10,y+15);
    c (x+10,y+5);
    c (x+20,y+30);
    c (x+20,y+20);
    c (x+10,y+35);
//    c (x+10,y+25);
    c (x-30,y+25);
    c (x-40,y+40);
    c (x-40,y+30);
    c (x-40,y+20);
    c (x-30,y+45);
    c (x-30,y+35);
    c (x-10,y+35);
    c (x-10,y+25);
    c (x-20,y+50);
    endShape();
    pop();
}

function c(x,y) {
    push();
    translate(x,y);
    beginShape();
    strokeCap(ROUND);
    strokeJoin(ROUND);
//    strokeWeight(slider.value());
    strokeWeight(sw);
  
    //inside
    fill(rgbe,161,rgbe2,o); 
    quad(x-20,y+10,x,y+20,x,y+40,x-20,y+30);
    //up
    fill(rgbe2,195,rgbe,o);
    quad(x,y,x+20,y+10,x,y+20,x-20,y+10);
    //front
    fill(161,rgbe,rgbe2,o);
    quad(x,y+20,x+20,y+10,x+20,y+30,x,y+40);
    endShape();
    pop();
}