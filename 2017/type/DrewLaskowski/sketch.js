//variables
var xmargin = 50;
var ymargin = 30;
var letterspace = 65;
var space = 40;
var leading = 140;
var sceneCount = 0;

//canvas setup
function setup() {
    createCanvas(900, 600);
    background(255, 0, 0);
    x = xmargin;
    y = ymargin;
}

/*toggle between the three styling options below to explore various layering effects*/
/*press "/" to return to the top left so you can layer letters*/
/*click the mouse to reset the background and return to the top*/

function draw() {
//opaque, layered type
    noFill();
    stroke(mouseX/3);
    strokeWeight(mouseY/8);

//fixed transparency, layered type
//    noFill();
//    stroke(mouseX/3, 80);
//    strokeWeight(mouseY/8);

//adjustable transparency,layered type
//    noFill();
//    stroke(0, mouseX/3);
//    strokeWeight(mouseY/8);
 
//blue type, adjustable transparency    
//    noFill();
//    stroke(0, 0, 255, mouseX/3);
//    strokeWeight(mouseY/8);
}

//to reset the background and type to origin
function mousePressed() {
    background(255, 0, 0);
    x = xmargin
    y = ymargin
}

//keyTyped functions
function keyTyped (){
    if (key == 'a'){
        drawA(x, y);
        x += letterspace;
    } else if (key == 'b'){
        drawB(x, y);
        x += letterspace;
    } else if (key == 'c'){
        drawC(x, y);
        x += letterspace;
    } else if (key == 'd'){
        drawD(x, y);
        x += letterspace;
    } else if (key == 'e'){
        drawE(x, y);
        x += letterspace;
    } else if (key == 'f'){
        drawF(x, y);
        x += letterspace;
    } else if (key == 'g'){
        drawG(x, y);
        x += letterspace;
    } else if (key == 'h'){
        drawH(x, y);
        x += letterspace;
    } else if (key == 'i'){
        drawI(x, y);
        x += 25;   
    } else if (key == 'j'){
        drawJ(x, y);
        x += letterspace; 
    } else if (key == 'k'){
        drawK(x, y);
        x += letterspace; 
    } else if (key == 'l'){
        drawL(x, y);
        x += letterspace;    
    } else if (key == 'm'){
        drawM(x, y);
        x += letterspace;
    } else if (key == 'n'){
        drawN(x, y);
        x += letterspace;
    } else if (key == 'o'){
        drawO(x, y);
        x += letterspace;       
    } else if (key == 'p'){
        drawP(x, y);
        x += letterspace;
    } else if (key == 'q'){
        drawQ(x, y);
        x += letterspace;     
    } else if (key == 'r'){
        drawR(x, y);
        x += letterspace;
    } else if (key == 's'){
        drawS(x, y);
        x += letterspace;      
    } else if (key == 't'){
        drawT(x, y);
        x += letterspace;
    } else if (key == 'u'){
        drawU(x, y);
        x += letterspace;
    } else if (key == 'v'){
        drawV(x, y);
        x += letterspace;
    } else if (key == 'w'){
        drawW(x, y);
        x += letterspace;
    } else if (key == 'x'){
        drawX(x, y);
        x += letterspace;
    } else if (key == 'y'){
        drawY(x, y);
        x += letterspace;
    } else if (key == 'z'){
        drawZ(x, y);
        x += letterspace;
    } else if (key == ' '){
        x += space;
    } else if (key == '/'){
        x = xmargin;
        y = ymargin;
    }
    
    if (x > width - 80){
        x = xmargin;
        y += leading;
    }
    
    if (y > height - 130){
        x = xmargin;
        y = ymargin;
    }   
}

//A
function drawA(x, y) {
    push();
    translate(x, y);
    
    beginShape();
    vertex(15, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(15, 10);
    bezierVertex(18, 10, 20, 12, 20, 15);
    vertex(20, 105);
    bezierVertex(20,108, 18, 110, 15, 110);
    endShape();
      
    beginShape();
    vertex(60, 15);
    vertex(60, 15);
    bezierVertex(60, 18, 58, 20, 55, 20);
    vertex(15, 20);
    bezierVertex(12, 20, 10, 18, 10, 15);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(55, 10);
    bezierVertex(58, 10, 60, 12, 60, 15);
    endShape();

    beginShape();
    vertex(55, 110);
    vertex(55, 110);
    bezierVertex(52, 110, 50, 108, 50, 105);
    vertex(50, 15);
    bezierVertex(50, 12, 52, 10, 55, 10);
    vertex(55, 10);
    bezierVertex(58, 10, 60, 12, 60, 15);
    vertex(60, 105);
    bezierVertex(60, 108, 58, 110, 55, 110);
    endShape();

    beginShape();
    vertex(60, 55);
    vertex(60, 55);
    bezierVertex(60, 58, 58, 60, 55, 60);
    vertex(15, 60);
    bezierVertex(12, 60, 10, 58, 10, 55);
    vertex(10, 55);
    bezierVertex(10, 52, 12, 50, 15, 50);
    vertex(55, 50);
    bezierVertex(58, 50, 60, 52, 60, 55);
    endShape();
    
    pop();
}

//B
function drawB(x, y) {
    push();
    translate(x, y);
    
    beginShape();
    vertex(15, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(15, 10);
    bezierVertex(18, 10, 20, 12, 20, 15);
    vertex(20, 105);
    bezierVertex(20, 108, 18, 110, 15, 110);
    endShape();
    
    beginShape();
    vertex(55, 50);
    vertex(55, 50);
    bezierVertex(52, 50, 50, 48, 50, 45);
    vertex(50, 15);
    bezierVertex(50, 12, 52, 10, 55, 10);
    vertex(55, 10);
    bezierVertex(58, 10, 60, 12, 60, 15);
    vertex(60, 45);
    bezierVertex(60, 48, 58, 50, 55, 50);
    endShape();

    beginShape();
    vertex(60, 15);
    vertex(60, 15);
    bezierVertex(60, 18, 58, 20, 55, 20);
    vertex(15, 20);
    bezierVertex(12, 20, 10, 18, 10, 15);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(55, 10);
    bezierVertex(58, 10, 60, 12, 60, 15);
    endShape();

    beginShape();
    vertex(60, 105);
    vertex(60, 105);
    bezierVertex(60, 107.761, 57.761, 110, 55, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 105);
    bezierVertex(10, 102, 12, 100, 15, 100);
    vertex(55, 100);
    bezierVertex(58, 100, 60, 102, 60, 105);
    endShape();

    beginShape();
    vertex(60, 55);
    vertex(60, 55);
    bezierVertex(60, 58, 58, 60, 55, 60);
    vertex(15, 60);
    bezierVertex(12, 60, 10, 58, 10, 55);
    vertex(10, 55);
    bezierVertex(10, 52, 12, 50, 15, 50);
    vertex(55, 50);
    bezierVertex(58, 50, 60, 52, 60, 55);
    endShape();

    beginShape();
    vertex(55, 110);
    vertex(55, 110);
    bezierVertex(52, 110, 50, 108, 50, 105);
    vertex(50, 65);
    bezierVertex(50, 62, 52, 60, 55, 60);
    vertex(55, 60);
    bezierVertex(58, 60, 60, 62, 60, 65);
    vertex(60, 105);
    bezierVertex(60, 108, 58, 110, 55, 110);
    endShape();
    
    pop();
}

//C
function drawC(x, y) {
    push();
    translate(x, y);
    
    beginShape();
    vertex(15, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(15, 10);
    bezierVertex(18, 10, 20, 12, 20, 15);
    vertex(20, 105);
    bezierVertex(20, 108, 18, 110, 15, 110);
    endShape();
    
    beginShape();
    vertex(60, 15);
    vertex(60, 15);
    bezierVertex(60, 18, 58, 20, 55, 20);
    vertex(15, 20);
    bezierVertex(12, 20, 10, 18, 10, 15);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(55, 10);
    bezierVertex(58, 10, 60, 12, 60, 15);
    endShape();

    beginShape();
    vertex(60, 105);
    vertex(60, 105);
    bezierVertex(60, 108, 58, 110, 55, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 105);
    bezierVertex(10, 102, 12, 100, 15, 100);
    vertex(55, 100);
    bezierVertex(58, 100, 60, 102, 60, 105);
    endShape();
    
    pop();
}

//D
function drawD(x, y) {
    push();
    translate(x, y);

    beginShape();
    vertex(15, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(15, 10);
    bezierVertex(18, 10, 20, 12, 20, 15);
    vertex(20, 105);
    bezierVertex(20, 108, 18, 110, 15, 110);
    endShape();

    beginShape();
    vertex(50, 15);
    vertex(50, 15);
    bezierVertex(50, 18, 48, 20, 45, 20);
    vertex(15, 20);
    bezierVertex(12, 20, 10, 18, 10, 15);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(45, 10);
    bezierVertex(48, 10, 50, 12, 50, 15);
    endShape();

    beginShape();
    vertex(50, 105);
    vertex(50, 105);
    bezierVertex(50, 108, 48, 110, 45, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 105);
    bezierVertex(10, 102, 12, 100, 15, 100);
    vertex(45, 100);
    bezierVertex(48, 100, 50, 102, 50, 105);
    endShape();

    beginShape();
    vertex(55, 100);
    vertex(55, 100);
    bezierVertex(52, 100, 50, 97.761, 50, 95);
    vertex(50, 25);
    bezierVertex(50, 22, 52, 20, 55, 20);
    vertex(55, 20);
    bezierVertex(57.761, 20, 60, 22.239, 60, 25);
    vertex(60, 95);
    bezierVertex(60, 97.761, 57.761, 100, 55, 100);
    endShape();
    
    pop();
}

//E
function drawE(x, y) {
    push();
    translate(x, y);
    
    beginShape();
    vertex(15, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(15, 10);
    bezierVertex(18, 10, 20, 12, 20, 15);
    vertex(20, 105);
    bezierVertex(20, 108, 18, 110, 15, 110);
    endShape();
    
    beginShape();
    vertex(60, 15);
    vertex(60, 15);
    bezierVertex(60, 18, 58, 20, 55, 20);
    vertex(15, 20);
    bezierVertex(12, 20, 10, 18, 10, 15);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(55, 10);
    bezierVertex(58, 10, 60, 12, 60, 15);
    endShape();
    
    beginShape();
    vertex(60, 55);
    vertex(60, 55);
    bezierVertex(60, 58, 58, 60, 55, 60);
    vertex(15, 60);
    bezierVertex(12, 60, 10, 58, 10, 55);
    vertex(10, 55);
    bezierVertex(10, 52, 12, 50, 15, 50);
    vertex(55, 50);
    bezierVertex(58, 50, 60, 52, 60, 55);
    endShape();
    
    beginShape();
    vertex(60, 105);
    vertex(60, 105);
    bezierVertex(60, 108, 58, 110, 55, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 105);
    bezierVertex(10, 102, 12, 100, 15, 100);
    vertex(55, 100);
    bezierVertex(58, 100, 60, 102, 60, 105);
    endShape();
    
    pop();
}

//F
function drawF(x, y) {
    push();
    translate(x, y);
    
    beginShape();
    vertex(15, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(15, 10);
    bezierVertex(18, 10, 20, 12, 20, 15);
    vertex(20, 105);
    bezierVertex(20, 108, 18, 110, 15, 110);
    endShape();
    
    beginShape();
    vertex(60, 15);
    vertex(60, 15);
    bezierVertex(60, 18, 58, 20, 55, 20);
    vertex(15, 20);
    bezierVertex(12, 20, 10, 18, 10, 15);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(55, 10);
    bezierVertex(58, 10, 60, 12, 60, 15);
    endShape();

    beginShape();
    vertex(60, 55);
    vertex(60, 55);
    bezierVertex(60, 58, 58, 60, 55, 60);
    vertex(15, 60);
    bezierVertex(12, 60, 10, 58, 10, 55);
    vertex(10, 55);
    bezierVertex(10, 52, 12, 50, 15, 50);
    vertex(55, 50);
    bezierVertex(58, 50, 60, 52, 60, 55);
    endShape();

    pop();
}

//G
function drawG(x, y) {
    push();
    translate(x, y);
    
    beginShape();
    vertex(15, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(15, 10);
    bezierVertex(18, 10, 20, 12, 20, 15);
    vertex(20, 105);
    bezierVertex(20, 108, 18, 110, 15, 110);
    endShape();
    
    beginShape();
    vertex(60, 15);
    vertex(60, 15);
    bezierVertex(60, 18, 58, 20, 55, 20);
    vertex(15, 20);
    bezierVertex(12, 20, 10, 18, 10, 15);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(55, 10);
    bezierVertex(58, 10, 60, 12, 60, 15);
    endShape();

    beginShape();
    vertex(60, 105);
    vertex(60, 105);
    bezierVertex(60, 108, 58, 110, 55, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 105);
    bezierVertex(10, 102, 12, 100, 15, 100);
    vertex(55, 100);
    bezierVertex(58, 100, 60, 102, 60, 105);
    endShape();
    
    beginShape();
    vertex(55, 110);
    vertex(55, 110);
    bezierVertex(52, 110, 50, 108, 50, 105);
    vertex(50, 65);
    bezierVertex(50, 62, 52, 60, 55, 60);
    vertex(55, 60);
    bezierVertex(58, 60, 60, 62, 60, 65);
    vertex(60, 105);
    bezierVertex(60, 108, 58, 110, 55, 110);
    endShape();

    pop();
}

//H
function drawH(x, y) {
    push();
    translate(x, y);
    
    beginShape();
    vertex(15, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(15, 10);
    bezierVertex(18, 10, 20, 12, 20, 15);
    vertex(20, 105);
    bezierVertex(20, 108, 18, 110, 15, 110);
    endShape();
    
    beginShape();
    vertex(55, 110);
    vertex(55, 110);
    bezierVertex(52, 110, 50, 108, 50, 105);
    vertex(50, 15);
    bezierVertex(50, 12, 52, 10, 55, 10);
    vertex(55, 10);
    bezierVertex(58, 10, 60, 12, 60, 15);
    vertex(60, 105);
    bezierVertex(60, 108, 58, 110, 55, 110);
    endShape();
    
    beginShape();
    vertex(60, 55);
    vertex(60, 55);
    bezierVertex(60, 58, 58, 60, 55, 60);
    vertex(15, 60);
    bezierVertex(12, 60, 10, 58, 10, 55);
    vertex(10, 55);
    bezierVertex(10, 52, 12, 50, 15, 50);
    vertex(55, 50);
    bezierVertex(58, 50, 60, 52, 60, 55);
    endShape();
    
    pop();
}

//I
function drawI(x, y) {   
    push();
    translate(x, y);
    
    beginShape();
    vertex(15, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(15, 10);
    bezierVertex(18, 10, 20, 12, 20, 15);
    vertex(20, 105);
    bezierVertex(20, 108, 18, 110, 15, 110);
    endShape();
    
    pop();
}

//J
function drawJ(x, y) {
    push();
    translate(x, y);
    
    beginShape();
    vertex(55, 110);
    vertex(55, 110);
    bezierVertex(52, 110, 50, 108, 50, 105);
    vertex(50, 15);
    bezierVertex(50, 12, 52, 10, 55, 10);
    vertex(55, 10);
    bezierVertex(58, 10, 60, 12, 60, 15);
    vertex(60, 105);
    bezierVertex(60, 108, 58, 110, 55, 110);
    endShape();

    beginShape();
    vertex(60, 105);
    vertex(60, 105);
    bezierVertex(60, 108, 58, 110, 55, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 105);
    bezierVertex(10, 102, 12, 100, 15, 100);
    vertex(55, 100);
    bezierVertex(58, 100, 60, 102, 60, 105);
    endShape();

    beginShape();
    vertex(15, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 85);
    bezierVertex(10, 82, 12, 80, 15, 80);
    vertex(15, 80);
    bezierVertex(18, 80, 20, 82, 20, 85);
    vertex(20, 105);
    bezierVertex(20, 108, 18, 110, 15, 110);
    endShape();
    
    pop();
}

//K
function drawK(x, y) {  
    push();
    translate(x, y);
    
    beginShape();
    vertex(15, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(15, 10);
    bezierVertex(18, 10, 20, 12, 20, 15);
    vertex(20, 105);
    bezierVertex(20, 108, 18, 110, 15, 110);
    endShape();
    
    beginShape();
    vertex(57, 10.5);
    vertex(57, 10.5);
    bezierVertex(59, 11.5, 60.5, 14.5, 59, 17);
    vertex(19.5, 107);                       
    bezierVertex(18.5, 109, 15.5, 110, 13, 109);
    vertex(13, 109);
    bezierVertex(10.5, 108, 9, 105, 10.5, 103);
    vertex(50, 13);
    bezierVertex(51, 10.5, 54, 9, 57, 10);
    endShape();
    
    beginShape();
    vertex(57, 109);
    vertex(57, 109);
    bezierVertex(59, 108, 60.5, 105, 59, 103);
    vertex(40, 58);
    bezierVertex(38.5, 56, 36, 55, 33, 56);
    vertex(33, 56);
    bezierVertex(30.5, 57, 29.5, 60, 30.5, 62);
    vertex(50, 106.5);
    bezierVertex(51, 109, 54, 110, 57, 109);
    endShape();
    
    pop();
}

//L
function drawL(x, y) {
    push();
    translate(x, y);
    
    beginShape();
    vertex(15, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(15, 10);
    bezierVertex(18, 10, 20, 12, 20, 15);
    vertex(20, 105);
    bezierVertex(20, 108, 18, 110, 15, 110);
    endShape();
    
    beginShape();
    vertex(60, 105);
    vertex(60, 105);
    bezierVertex(60, 108, 58, 110, 55, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 105);
    bezierVertex(10, 102, 12, 100, 15, 100);
    vertex(55, 100);
    bezierVertex(58, 100, 60, 102, 60, 105);
    endShape();
    
    pop();
}

//M
function drawM (x, y) {
    push();
    translate(x, y);
    
    beginShape();
    vertex(15, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(15, 10);
    bezierVertex(18, 10, 20, 12, 20, 15);
    vertex(20, 105);
    bezierVertex(20, 108, 18, 110, 15, 110);
    endShape();

    beginShape();
    vertex(55, 110);
    vertex(55, 110);
    bezierVertex(52, 110, 50, 108, 50, 105);
    vertex(50, 15);
    bezierVertex(50, 12, 52, 10, 55, 10);
    vertex(55, 10);
    bezierVertex(58, 10, 60, 12, 60, 15);
    vertex(60, 105);
    bezierVertex(60, 108, 58, 110, 55, 110);
    endShape();
    
    beginShape();
    vertex(57, 10);
    vertex(57, 10);
    bezierVertex(59.5, 11.5, 60.5, 14.5, 59.5, 17);
    vertex(40, 61.5);
    bezierVertex(39, 64, 36, 65, 33, 64);
    vertex(33, 64);
    bezierVertex(31, 63, 29.5, 60, 31, 57.5);
    vertex(50, 13);
    bezierVertex(51.5, 10.5, 54.5, 9, 57, 10);
    endShape();

    beginShape();
    vertex(13, 10);
    vertex(13, 10);
    bezierVertex(10.5, 11.5, 9, 14.5, 10, 17);
    vertex(30, 62);
    bezierVertex(31, 64, 34 ,65, 37, 64);
    vertex(37, 64);
    bezierVertex(39, 63, 40.5, 60, 39, 57.5);
    vertex(19.5, 13);
    bezierVertex(18.5, 10.5, 15.5, 9, 13, 10);
    endShape();
    
    pop();
}

//N
function drawN(x, y) {
    push();
    translate(x, y);
    
    beginShape();
    vertex(15, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(15, 10);
    bezierVertex(18, 10, 20, 12, 20, 15);
    vertex(20, 105);
    bezierVertex(20, 108, 18, 110, 15, 110);
    endShape();
    
    beginShape();
    vertex(55, 110);
    vertex(55, 110);
    bezierVertex(52, 110, 50, 108, 50, 105);
    vertex(50, 15);
    bezierVertex(50, 12, 52, 10, 55, 10);
    vertex(55, 10);
    bezierVertex(58, 10, 60, 12, 60, 15);
    vertex(60, 105);
    bezierVertex(60, 108, 58, 110, 55, 110);
    endShape();
    
    beginShape();
    vertex(13, 10);
    vertex(13, 10);
    bezierVertex(10.5, 11.5, 9.5, 14.5, 10.5, 17);
    vertex(50, 107);
    bezierVertex(51.5, 109,54.5, 110, 57, 109);
    vertex(57, 109);
    bezierVertex(59.5, 108, 60.5, 105, 59.5, 102);
    vertex(20, 13);
    bezierVertex(18.5, 10.5, 15.5, 9, 13, 10);
    endShape();
    
    pop();
}

//O
function drawO(x, y) {
    push();
    translate(x, y);
    
    beginShape();
    vertex(60, 15);
    vertex(60, 15);
    bezierVertex(60, 18, 58, 20, 55, 20);
    vertex(15, 20);
    bezierVertex(12, 20, 10, 18, 10, 15);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(55, 10);
    bezierVertex(58, 10, 60, 12, 60, 15);
    endShape();
    
    beginShape();
    vertex(60, 105);
    vertex(60, 105);
    bezierVertex(60, 108, 58, 110, 55, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 105);
    bezierVertex(10, 102, 12, 100, 15, 100);
    vertex(55, 100);
    bezierVertex(58, 100, 60, 102, 60, 105);
    endShape();

    beginShape();
    vertex(15, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(15, 10);
    bezierVertex(18, 10, 20, 12, 20, 15);
    vertex(20, 105);
    bezierVertex(20, 108, 18, 110, 15, 110);
    endShape();

    beginShape();
    vertex(55, 110);
    vertex(55, 110);
    bezierVertex(52, 110, 50, 108, 50, 105);
    vertex(50, 15);
    bezierVertex(50, 12, 52, 10, 55, 10);
    vertex(55, 10);
    bezierVertex(58, 10, 60, 12, 60, 15);
    vertex(60, 105);
    bezierVertex(60, 108, 58, 110, 55, 110);
    endShape();
    
    pop();
}

//P
function drawP(x, y) {
    push();
    translate(x, y);
    
    beginShape();
    vertex(15, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(15, 10);
    bezierVertex(18, 10, 20, 12, 20, 15);
    vertex(20, 105);
    bezierVertex(20, 108, 18, 110, 15, 110);
    endShape();
    
    beginShape();
    vertex(55, 60);
    vertex(55, 60);
    bezierVertex(52, 60, 50, 58, 50, 55);
    vertex(50, 15);
    bezierVertex(50, 12, 52, 10, 55, 10);
    vertex(55, 10);
    bezierVertex(58, 10, 60, 12, 60, 15);
    vertex(60, 55);
    bezierVertex(60, 58, 58, 60, 55, 60);
    endShape();
    
    beginShape();
    vertex(60, 15);
    vertex(60, 15);
    bezierVertex(60, 18, 58, 20, 55, 20);
    vertex(15, 20);
    bezierVertex(12, 20, 10, 18, 10, 15);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(55, 10);
    bezierVertex(58, 10, 60, 12, 60, 15);
    endShape();

    beginShape();
    vertex(60, 55);
    vertex(60, 55);
    bezierVertex(60, 58, 58, 60, 55, 60);
    vertex(15, 60);
    bezierVertex(12, 60, 10, 58, 10, 55);
    vertex(10, 55);
    bezierVertex(10, 52, 12, 50, 15, 50);
    vertex(55, 50);
    bezierVertex(58, 50, 60, 52, 60, 55);
    endShape();
    
    pop();
}

//Q
function drawQ(x, y) {
    push();
    translate(x, y);
    
    beginShape();
    vertex(60, 15);
    vertex(60, 15);
    bezierVertex(60, 18, 58, 20, 55, 20);
    vertex(15, 20);
    bezierVertex(12, 20, 10, 18, 10, 15);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(55, 10);
    bezierVertex(58, 10, 60, 12, 60, 15);
    endShape();
    
    beginShape();
    vertex(60, 105);
    vertex(60, 105);
    bezierVertex(60, 108, 58, 110, 55, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 105);
    bezierVertex(10, 102, 12, 100, 15, 100);
    vertex(55, 100);
    bezierVertex(58, 100, 60, 102, 60, 105);
    endShape();

    beginShape();
    vertex(15, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(15, 10);
    bezierVertex(18, 10, 20, 12, 20, 15);
    vertex(20, 105);
    bezierVertex(20, 108, 18, 110, 15, 110);
    endShape();

    beginShape();
    vertex(55, 110);
    vertex(55, 110);
    bezierVertex(52, 110, 50, 108, 50, 105);
    vertex(50, 15);
    bezierVertex(50, 12, 52, 10, 55, 10);
    vertex(55, 10);
    bezierVertex(58, 10, 60, 12, 60, 15);
    vertex(60, 105);
    bezierVertex(60, 108, 58, 110, 55, 110);
    endShape();
    
    beginShape();
    vertex(39, 68);
    vertex(39, 68);
    bezierVertex(36, 69.5, 35, 72, 36, 75);
    vertex(50, 106);
    bezierVertex(51, 109, 54, 110, 57, 109);
    vertex(57, 109);
    bezierVertex(59, 108 ,60.5, 105, 59, 102.5);
    vertex(45, 71);
    bezierVertex(44, 68, 41, 67, 39, 68);
    endShape();
    
    pop();
}

//R
function drawR(x, y) {
    push();
    translate(x, y);
    
    beginShape();
    vertex(15, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(15, 10);
    bezierVertex(18, 10, 20, 12, 20, 15);
    vertex(20, 105);
    bezierVertex(20, 108, 18, 110, 15, 110);
    endShape();
    
    beginShape();
    vertex(55, 60);
    vertex(55, 60);
    bezierVertex(52, 60, 50, 58, 50, 55);
    vertex(50, 15);
    bezierVertex(50, 12, 52, 10, 55, 10);
    vertex(55, 10);
    bezierVertex(58, 10, 60, 12, 60, 15);
    vertex(60, 55);
    bezierVertex(60, 58, 58, 60, 55, 60);
    endShape();
    
    beginShape();
    vertex(60, 15);
    vertex(60, 15);
    bezierVertex(60, 18, 58, 20, 55, 20);
    vertex(15, 20);
    bezierVertex(12, 20, 10, 18, 10, 15);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(55, 10);
    bezierVertex(58, 10, 60, 12, 60, 15);
    endShape();

    beginShape();
    vertex(60, 55);
    vertex(60, 55);
    bezierVertex(60, 58, 58, 60, 55, 60);
    vertex(15, 60);
    bezierVertex(12, 60, 10, 58, 10, 55);
    vertex(10, 55);
    bezierVertex(10, 52, 12, 50, 15, 50);
    vertex(55, 50);
    bezierVertex(58, 50, 60, 52, 60, 55);
    endShape();
    
    beginShape();
    vertex(31, 51);
    vertex(31, 51);
    bezierVertex(28, 52, 27.217, 54.5, 28, 57);
    vertex(50.5, 107);
    bezierVertex(51.5, 109.5, 54.5, 111, 57, 109.5);
    vertex(57, 109.5);
    bezierVertex(59.5, 108.5, 61, 105.5, 59.5, 103);
    vertex(37.5, 53);
    bezierVertex(36, 51, 33.5, 49.5, 31, 51);
    endShape();
    
    pop();
}

//S
function drawS(x, y) {
    push();
    translate(x, y);
    
    beginShape();
    vertex(60, 15);
    vertex(60, 15);
    bezierVertex(60, 18, 58, 20, 55, 20);
    vertex(15, 20);
    bezierVertex(12, 20, 10, 18, 10, 15);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(55, 10);
    bezierVertex(58, 10, 60, 12, 60, 15);
    endShape();

    beginShape();
    vertex(15, 60);
    vertex(15, 60);
    bezierVertex(12, 60, 10, 58, 10, 55);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(15, 10);
    bezierVertex(18, 10, 20, 12, 20, 15);
    vertex(20, 55);
    bezierVertex(20, 58, 18, 60, 15, 60);
    endShape();
    
    beginShape();
    vertex(60, 55);
    vertex(60, 55);
    bezierVertex(60, 58, 58, 60, 55, 60);
    vertex(15, 60);
    bezierVertex(12, 60, 10, 58, 10, 55);
    vertex(10, 55);
    bezierVertex(10, 52, 12, 50, 15, 50);
    vertex(55, 50);
    bezierVertex(58, 50, 60, 52, 60,55);
    endShape();

    beginShape();
    vertex(55, 110);
    vertex(55, 110);
    bezierVertex(52, 110, 50, 108, 50, 105);
    vertex(50, 55);
    bezierVertex(50, 52, 52, 50, 55, 50);
    vertex(55, 50);
    bezierVertex(58, 50, 60, 52, 60, 55);
    vertex(60, 105);
    bezierVertex(60, 108, 58, 110, 55, 110);
    endShape();

    beginShape();
    vertex(60, 105);
    vertex(60, 105);
    bezierVertex(60, 108, 58, 110, 55, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 105);
    bezierVertex(10, 102, 12, 100, 15, 100);
    vertex(55, 100);
    bezierVertex(58, 100, 60, 102, 60, 105);
    endShape();
    
    pop();
}

//T
function drawT(x, y) {
    push();
    translate(x, y);
    
    beginShape();
    vertex(35, 110);
    vertex(35, 110);
    bezierVertex(32, 110, 30, 108, 30, 105);
    vertex(30, 15);
    bezierVertex(30, 12, 32, 10, 35, 10);
    vertex(35, 10);
    bezierVertex(38, 10, 40, 12, 40, 15);
    vertex(40, 105);
    bezierVertex(40, 108, 38, 110, 35, 110);
    endShape();

    beginShape();
    vertex(60, 15);
    vertex(60, 15);
    bezierVertex(60, 18, 58, 20, 55, 20);
    vertex(15, 20);
    bezierVertex(12, 20, 10, 18, 10, 15);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(55, 10);
    bezierVertex(58, 10, 60, 12, 60, 15);
    endShape();
    
    pop();
}

//U
function drawU(x, y) {
    push();
    translate(x, y);
    
    beginShape();
    vertex(60, 105);
    vertex(60, 105);
    bezierVertex(60, 108, 58, 110, 55, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 105);
    bezierVertex(10, 102, 12, 100, 15, 100);
    vertex(55, 100);
    bezierVertex(58, 100, 60, 102, 60, 105);
    endShape();

    beginShape();
    vertex(15, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(15, 10);
    bezierVertex(18, 10, 20, 12, 20, 15);
    vertex(20, 105);
    bezierVertex(20, 108, 18, 110, 15, 110);
    endShape();

    beginShape();
    vertex(55, 110);
    vertex(55, 110);
    bezierVertex(52, 110, 50, 108, 50, 105);
    vertex(50, 15);
    bezierVertex(50, 12, 52, 10, 55, 10);
    vertex(55, 10);
    bezierVertex(58, 10, 60, 12, 60, 15);
    vertex(60, 105);
    bezierVertex(60, 108, 58, 110, 55, 110);
    endShape();
    
    pop();
}

//V
function drawV (x, y) {
    push();
    translate(x, y);
    
    beginShape();
    vertex(56, 10);
    vertex(56, 10);
    bezierVertex(59, 11, 60.5, 13, 60, 16);
    vertex(40, 106);
    bezierVertex(39.5, 109, 37, 110, 34, 110);
    vertex(34, 110);
    bezierVertex(31.5, 109, 30, 106.5, 30.5, 104);
    vertex(50, 14);
    bezierVertex(51, 11, 53, 9.5, 56, 10);
    endShape();
    
    beginShape();
    vertex(14, 10);
    vertex(14, 10);
    bezierVertex(11.5, 11, 10, 13, 10.5, 16);
    vertex(30, 106);
    bezierVertex(31, 109, 33, 110, 36, 110);
    vertex(36, 110);
    bezierVertex(39, 109, 40.5, 106.5, 40, 104);
    vertex(20, 14);
    bezierVertex(20, 11, 17, 9.5, 14, 10);
    endShape();
    
    pop();
}

//W
function drawW(x, y) {
    push();
    translate(x, y);

    beginShape();
    vertex(15, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(15, 10);
    bezierVertex(18, 10, 20, 12, 20, 15);
    vertex(20, 105);
    bezierVertex(20, 108, 18, 110, 15, 110);
    endShape();

    beginShape();
    vertex(55, 110);
    vertex(55, 110);
    bezierVertex(52, 110, 50, 108, 50, 105);
    vertex(50, 15);
    bezierVertex(50, 12, 52, 10, 55, 10);
    vertex(55, 10);
    bezierVertex(58, 10, 60, 12, 60, 15);
    vertex(60, 105);
    bezierVertex(60, 108, 58, 110, 55, 110);
    endShape();
    
    beginShape();
    vertex(13, 109.5);
    vertex(13, 109.5);
    bezierVertex(10.4, 108.4, 9, 105.5, 10.5, 103);
    vertex(30, 58);
    bezierVertex(31, 56, 34, 55, 37, 56);
    vertex(37, 56);
    bezierVertex(39, 57, 40.5, 60, 39, 62.5);
    vertex(19.5, 107);
    bezierVertex(18.5, 109.5, 15.5, 110.5, 13, 109.5);
    endShape();

    beginShape();
    vertex(57, 109.5);
    vertex(57, 109.5);
    bezierVertex(59.5, 108.5, 60.5, 105.5, 59.5, 103);
    vertex(40, 58);
    bezierVertex(38.5, 56, 35.5, 55, 33, 56);
    vertex(33, 56);
    bezierVertex(30.5, 57, 29.5, 60, 30.5, 62);
    vertex(50, 107);
    bezierVertex(51.5, 109.5, 54.5, 110.5, 57, 109.5);
    endShape();
    
    pop();
}

//X
function drawX(x, y) {
    push();
    translate(x, y);
    
    beginShape();
    vertex(57, 10.5);
    vertex(57, 10.5);
    bezierVertex(59, 11.5, 60.5, 14.5, 59, 17);
    vertex(19.5, 107);                       
    bezierVertex(18.5, 109, 15.5, 110, 13, 109);
    vertex(13, 109);
    bezierVertex(10.5, 108, 9, 105, 10.5, 103);
    vertex(50, 13);
    bezierVertex(51, 10.5, 54, 9, 57, 10);
    endShape();
    
    beginShape();
    vertex(13, 10);
    vertex(13, 10);
    bezierVertex(10.5, 11.5, 9.5, 14.5, 10.5, 17);
    vertex(50, 107);
    bezierVertex(51.5, 109,54.5, 110, 57, 109);
    vertex(57, 109);
    bezierVertex(59.5, 108, 60.5, 105, 59.5, 102);
    vertex(20, 13);
    bezierVertex(18.5, 10.5, 15.5, 9, 13, 10);
    endShape();
    
    pop();
}

//Y
function drawY(x, y) {
    push();
    translate(x, y);

    beginShape();
    vertex(35,110);
    vertex(35,110);
    bezierVertex(32.239,110,30,107.761,30,105);
    vertex(30,60);
    bezierVertex(30,57.239,32.239,55,35,55);
    vertex(35,55);
    bezierVertex(37.761,55,40,57.239,40,60);
    vertex(40,105);
    bezierVertex(40,107.761,37.761,110,35,110);
    endShape();
    
    beginShape();
    vertex(57, 10);
    vertex(57, 10);
    bezierVertex(59.5, 11.5, 60.5, 14.5, 59.5, 17);
    vertex(40, 61.5);
    bezierVertex(39, 64, 36, 65, 33, 64);
    vertex(33, 64);
    bezierVertex(31, 63, 29.5, 60, 31, 57.5);
    vertex(50, 13);
    bezierVertex(51.5, 10.5, 54.5, 9, 57, 10);
    endShape();

    beginShape();
    vertex(13, 10);
    vertex(13, 10);
    bezierVertex(10.5, 11.5, 9, 14.5, 10, 17);
    vertex(30, 62);
    bezierVertex(31, 64, 34 ,65, 37, 64);
    vertex(37, 64);
    bezierVertex(39, 63, 40.5, 60, 39, 57.5);
    vertex(19.5, 13);
    bezierVertex(18.5, 10.5, 15.5, 9, 13, 10);
    endShape();

    pop();
}

//Z
function drawZ(x, y) {
    push();
    translate(x, y);
    
    beginShape();
    vertex(60, 15);
    vertex(60, 15);
    bezierVertex(60, 18, 58, 20, 55, 20);
    vertex(15, 20);
    bezierVertex(12, 20, 10, 18, 10, 15);
    vertex(10, 15);
    bezierVertex(10, 12, 12, 10, 15, 10);
    vertex(55, 10);
    bezierVertex(58, 10, 60, 12, 60, 15);
    endShape();
    
    beginShape();
    vertex(60, 105);
    vertex(60, 105);
    bezierVertex(60, 108, 58, 110, 55, 110);
    vertex(15, 110);
    bezierVertex(12, 110, 10, 108, 10, 105);
    vertex(10, 105);
    bezierVertex(10, 102, 12, 100, 15, 100);
    vertex(55, 100);
    bezierVertex(58, 100, 60, 102, 60, 105);
    endShape();
    
    beginShape();
    vertex(57, 10.5);
    vertex(57, 10.5);
    bezierVertex(59, 11.5, 60.5, 14.5, 59, 17);
    vertex(19.5, 107);                       
    bezierVertex(18.5, 109, 15.5, 110, 13, 109);
    vertex(13, 109);
    bezierVertex(10.5, 108, 9, 105, 10.5, 103);
    vertex(50, 13);
    bezierVertex(51, 10.5, 54, 9, 57, 10);
    endShape();
}