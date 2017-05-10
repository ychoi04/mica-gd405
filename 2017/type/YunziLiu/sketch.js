var sceneNum=0;
var scaleFactor=0.8;
var x=50; //x position
var y=50; //y position
var trans1=0; //transparency for Module1
var trans2=0; //transparency for Module2
var col=0; //color for the Modules
var buttonWeight;
var buttonColor;

function setup(){
    createCanvas(900, 600);
    background(240);
}

function draw(){
//    background (240);    
    scale(scaleFactor);
    if (sceneNum == 0) {
		sceneIntro();
	}else if (sceneNum == 1){
        fontSpecimen1();
    }else if (sceneNum == 2) {
        fontSpecimen2();
        
	}else if (sceneNum == 3) {
        iloveurthesis();
        
    }else if (sceneNum == 4) {
        sceneType();
            

    }
}

function sceneType() {
	
        push();
        scale(0.8);
        textSize(25);
        fill(0);
        text("Type your text here. You can move the mouse to get various patterns.",100,900);
        pop();
            
        if(mouseIsPressed)
        background(240);
}

function keyPressed() {
	if (keyCode == RIGHT_ARROW) {
		sceneNum++;
        background(240);
	}else if(keyCode==LEFT_ARROW){
        sceneNum--;
        background(240);
    }
}

function sceneIntro(){
        background(240);
        //headline
        textFont("Bitter");
        push();
        textSize(100);
	    text("Cipher", 100, 200);
        pop();
        //content
        push();
        textSize(20);
        textAlign(LEFT);
        lines = "Cipher is a typeface based on the idea of substitution\ncipher. There are two fonts in this family: one can \nchange patterns when you move the mouse from one \nedge of the screen to other edges; the second can \nsubstitude the letter with another letter when you click \nthe mouse."
        text(lines, 100, 280);
        pop();
        //instruction
        push();
        textSize(20);
        fill(150);
        text("Press the right arrow to continue",100,450);
   
        stroke(150);
        strokeWeight(2);
        line(430,442,450,442);
        line(438,435,450,442);
        line(438,449,450,442);
        pop();
        //pattern 
        var opacity=0;
        
        for(var x=820; x<=width/0.8;x+=40){
        for(var y=0; y<=height/0.8;y+=40){
        push();
        noStroke();
        fill(180,opacity);
        opacity=x-900;
        rect(x,y,20,20);
        pop();
        }
    }
}

function fontSpecimen1(){
        background(240);
        scale(scaleFactor);
        //subtitle1
        textFont("Bitter");
        push();
        textSize(70);
	    text("Font 1",100, 200);
        pop();
        //specimen
        drawA(80,250);
        drawB(160,250);
        drawC(250,250);
        drawD(330,250);
        drawE(420,250);
        drawF(500,250);
        drawG(560,250);
        drawH(640,250);
        drawI(730,250);
        drawJ(780,250);
        drawK(850,250);
        drawL(950,250);
        drawM(1000,250);
        drawN(80,410);
        drawO(160,410);
        drawP(240,410);
        drawQ(330,410);
        drawR(420,410);
        drawS(490,410);
        drawT(570,410);
        drawU(630,410);
        drawV(710,410);
        drawW(790,410);
        drawX(910,410);
        drawY(1000,410);
        drawZ(1070,410);   
        //instruction
        push();
        textSize(25);
        fill(150);
        text("Press the right arrow to continue",700,850);
        
        stroke(150);
        strokeWeight(2.5);
        line(1115,842,1140,842);
        line(1126,832,1140,842);
        line(1126,852,1140,842);
        pop();
        
}

function fontSpecimen2(){
        background(240);
        scale(scaleFactor);
        //subtitle
        textFont("Bitter");
        push();
        textSize(70);
	    text("Font 2",100, 200);
        pop();
        //specimen
        drawAtoN(100,250);
        drawBtoO(170,250);
        drawCtoP(250,250);
        drawDtoQ(330,250);
        drawEtoR(410,250);
        drawFtoT(480,250);
        drawGtoS(530,250);
        drawHtoU(600,250);
        drawItoL(690,250);
        drawJtoV(730,250);
        drawKtoX(810,250);
        drawLtoI(910,250);
        drawMtoW(960,250);
        drawNtoA(100,420);
        drawOtoB(170,420);
        drawPtoC(250,420);
        drawQtoD(330,420);
        drawRtoE(410,420);
        drawStoG(480,420);
        drawTtoF(550,420);
        drawUtoH(610,420);
        drawVtoJ(690,420);
        drawWtoM(770,420);
        drawXtoK(890,420);
        drawYtoZ(980,420);
        drawZtoY(1070,420);
        //cipher instruction
        push();
        textSize(25);
        fill(0);
        text("Click mouse to see the ciphertext.",100,850);

        textSize(25);
        fill(0);
        text("Cipher key:",100,700);

        textAlign(LEFT);
        lines = "a-n; b-o; c-p; d-q; e-r; f-t; g-s;\nh-u; i-l; j-v; k-x; m-w; y-z"
        textSize(25);
        fill(0);
        text(lines,100,740);
        pop();
        //instruction
        push();
        textSize(25);
        fill(150);
        text("Press the right arrow to continue",700,850);
        pop();
        
        push(); 
        stroke(150);
        strokeWeight(2.5);
        line(1115,842,1140,842);
        line(1126,832,1140,842);
        line(1126,852,1140,842);
        pop();
}

function iloveurthesis(){
        background(240);
        //I love ur thesis
        push();
        scale(1.8);
        drawLtoI(50,5);
        
        drawItoL(150,5);
        drawBtoO(200,5);
        drawJtoV(270,5);
        drawRtoE(350,5);
        
        drawHtoU(20,130);
        drawEtoR(110,130);
        
        drawFtoT(200,210);
        drawUtoH(250,210);
        drawRtoE(330,210);
        drawGtoS(400,210);
        drawLtoI(470,210);
        drawGtoS(510,210);
        pop();
        //instruction
        push();
        textSize(25);
        fill(150);
        text("Press the right arrow to continue",700,850);
        pop();
        
        push(); 
        stroke(150);
        strokeWeight(2.5);
        line(1115,842,1140,842);
        line(1126,832,1140,842);
        line(1126,852,1140,842);
        pop();
        //cipher instruction
        push();
        scale(0.8);
        textSize(25);
        fill(0);
        text("Click mouse to see the original text.",100,900);
        pop();
}

function keyTyped(){
    if(key=='a'){
        drawA(x,y);
        x=x+80; 
        
    }else if(key=='b'){
        drawB(x,y);
        x=x+90;
        
    }else if(key=='c'){
        drawC(x,y);
        x=x+80;
        
    }else if(key=='d'){
        drawD(x,y);
        x=x+90;
        
    }else if(key=='e'){
        drawE(x,y);
        x=x+70;
        
    }else if(key=='f'){
        drawF(x,y);
        x=x+70;
        
    }else if(key=='g'){
        drawG(x,y);
        x=x+80;
        
    }else if(key=='h'){
        drawH(x,y);
        x=x+80;
        
    }else if(key=='i'){
        drawI(x,y);
        x=x+50;
        
    }else if(key=='j'){
        drawJ(x,y);
        x=x+80;
        
    }else if(key=='k'){
        drawK(x,y);
        x=x+90;
        
    }else if(key=='l'){
        drawL(x,y);
        x=x+50;
        
    }else if(key=='m'){
        drawM(x,y);
        x=x+130;
        
    }else if(key=='n'){
        drawN(x,y);
        x=x+130;
        
    }else if(key=='o'){
        drawO(x,y);
        x=x+80;
        
    }else if(key=='p'){
        drawP(x,y);
        x=x+80;
        
    }else if(key=='q'){
        drawQ(x,y);
        x=x+80;
        
    }else if(key=='r'){
        drawR(x,y);
        x=x+80;
        
    }else if(key=='s'){
        drawS(x,y);
        x=x+80;
        
    }else if(key=='t'){
        drawT(x,y);
        x=x+70;
        
    }else if(key=='u'){
        drawU(x,y);
        x=x+80;
        
    }else if(key=='v'){
        drawV(x,y);
        x=x+90;
        
    }else if(key=='w'){
        drawW(x,y);
        x=x+130;
        
    }else if(key=='x'){
        drawX(x,y);
        x=x+90;
        
    }else if(key=='y'){
        drawY(x,y);
        x=x+90;
        
    }else if(key=='z'){
        drawZ(x,y);
        x=x+70;
        
    }else if(key==' '){
        x=x+90;
    }
    
    if(x>width){
        y=y+160;
        x=50;
    }
//    if(key== '='){
//    save('my_image.png');
//}
}

//font2
function drawAtoN(x,y){
    push();
    translate(x,y);
    new Module1(10,70);
    new Module1(10,80);
    new Module1(10,90);
    new Module1(10,100);
    new Module1(20,110);
    new Module1(30,120);
    new Module1(40,120);
    new Module1(50,110);
    new Module1(70,120);
    new Module1(60,110);
    new Module1(60,100);
    new Module1(60,90);
    new Module1(60,80);
    new Module1(60,70);
    new Module1(50,60);
    new Module1(40,50);
    new Module1(30,50);
    new Module1(20,60);

    new Module2(10,50);
    new Module2(20,50);
    new Module2(20,60);
    new Module2(20,70);
    new Module2(20,80);
    new Module2(20,90);
    new Module2(20,100);
    new Module2(20,110);
    new Module2(20,120);
    new Module2(10,120);
    new Module2(30,120);
    new Module2(30,60);
    new Module2(40,50);
    new Module2(50,50);
    new Module2(60,60);
    new Module2(60,70);
    new Module2(60,80);
    new Module2(60,90);
    new Module2(60,100);
    new Module2(60,110);
    new Module2(60,120);
    new Module2(50,120);
    new Module2(70,120);
    pop();
    
}

function drawBtoO(x,y){
    push();
    translate(x,y);
    new Module1(10,10);
    new Module1(20,10);
    new Module1(20,20);
    new Module1(20,30);
    new Module1(20,40);
    new Module1(20,50);
    new Module1(20,60);
    new Module1(20,70);
    new Module1(20,80);
    new Module1(20,90);
    new Module1(20,100);
    new Module1(20,110);
    new Module1(30,120);
    new Module1(40,120);
    new Module1(50,120);
    new Module1(60,110);
    new Module1(70,100);
    new Module1(70,90);
    new Module1(70,80);
    new Module1(70,70);
    new Module1(60,60);
    new Module1(50,50);
    new Module1(40,50);
    new Module1(30,60);
    
    new Module2(20,70);
    new Module2(20,80);
    new Module2(20,90);
    new Module2(20,100);
    new Module2(30,110);
    new Module2(40,120);
    new Module2(40,120);
    new Module2(50,120);
    new Module2(60,110);
    new Module2(70,100);
    new Module2(70,90);
    new Module2(70,80);
    new Module2(70,70);
    new Module2(60,60);
    new Module2(50,50);
    new Module2(40,50);
    new Module2(30,60);
    pop();
}

function drawCtoP(x,y){
    push();
    translate(x,y);
    new Module1(60,60);
    new Module1(50,50);
    new Module1(40,50);
    new Module1(30,50);
    new Module1(20,60);
    new Module1(10,70);
    new Module1(10,80);
    new Module1(10,90);
    new Module1(10,100);
    new Module1(20,110);
    new Module1(30,120);
    new Module1(40,120);
    new Module1(50,120);
    new Module1(60,110);
    
    new Module2(10,60);
    new Module2(20,50);
    new Module2(20,60);
    new Module2(20,70);
    new Module2(20,80);
    new Module2(20,90);
    new Module2(20,100);
    new Module2(20,110);
    new Module2(20,120);
    new Module2(20,130);
    new Module2(20,140);
    new Module2(20,150);
    new Module2(20,160);
    new Module2(10,160);
    new Module2(30,160);
    new Module2(30,60);
    new Module2(40,50);
    new Module2(50,50);
    new Module2(60,60);
    new Module2(70,70);
    new Module2(70,80);
    new Module2(70,90);
    new Module2(70,100);
    new Module2(60,110);
    new Module2(50,120);
    new Module2(40,120);
    new Module2(30,110);
    pop();
}

function drawDtoQ(x,y){
    push();
    translate(x,y);
    new Module1(10,70);
    new Module1(10,80);
    new Module1(10,90);
    new Module1(10,100);
    new Module1(20,110);
    new Module1(30,120);
    new Module1(40,120);
    new Module1(50,110);
    new Module1(60,10);
    new Module1(70,10);
    new Module1(60,20);
    new Module1(60,30);
    new Module1(60,40);
    new Module1(60,50);
    new Module1(60,60);
    new Module1(60,70);
    new Module1(60,80);
    new Module1(60,90);
    new Module1(60,100);
    new Module1(60,110);
    new Module1(60,120);
    new Module1(70,120);
    new Module1(20,60);
    new Module1(30,50);
    new Module1(40,50);
    new Module1(50,60);
    
    new Module2(10,70);
    new Module2(10,80);
    new Module2(10,90);
    new Module2(10,100);
    new Module2(20,110);
    new Module2(30,120);
    new Module2(40,120);
    new Module2(50,110);
    new Module2(60,70);
    new Module2(60,80);
    new Module2(60,90);
    new Module2(60,100);
    new Module2(60,110);
    new Module2(60,120);
    new Module2(60,130);
    new Module2(60,140);
    new Module2(60,150);
    new Module2(60,160);
    new Module2(50,160);
    new Module2(70,160);
    new Module2(20,60);
    new Module2(30,50);
    new Module2(40,50);
    new Module2(50,60);
    pop();
}

function drawEtoR(x,y){
    push();
    translate(x,y);
    new Module1(60,60);
    new Module1(50,50);
    new Module1(40,50);
    new Module1(30,50);
    new Module1(20,60);
    new Module1(10,70);
    new Module1(10,80);
    new Module1(10,90);
    new Module1(10,100);
    new Module1(20,110);
    new Module1(30,120);
    new Module1(40,120);
    new Module1(50,120);
    new Module1(60,110);
    new Module1(20,100);
    new Module1(30,90);
    new Module1(40,80);
    new Module1(50,70);
    
    new Module2(10,60);
    new Module2(20,50);
    new Module2(20,60);
    new Module2(20,70);
    new Module2(20,80);
    new Module2(20,90);
    new Module2(20,100);
    new Module2(20,110);
    new Module2(20,120);
    new Module2(10,120);
    new Module2(30,120);
    new Module2(30,70);
    new Module2(40,60);
    new Module2(50,50);
    new Module2(60,60);
    pop();
}

function drawFtoT(x,y){
    push();
    translate(x,y);
    new Module1(10,50);
    new Module1(20,50);
    new Module1(30,50);
    new Module1(20,20);
    new Module1(20,30);
    new Module1(20,40);
    new Module1(20,50);
    new Module1(20,60);
    new Module1(20,70);
    new Module1(20,80);
    new Module1(20,90);
    new Module1(20,100);
    new Module1(20,110);
    new Module1(20,120);
    new Module1(10,120);
    new Module1(30,120);
    new Module1(20,120);
    new Module1(30,10);
    new Module1(40,10);
    new Module1(50,20);
    new Module1(40,50);
    
    new Module2(10,50);
    new Module2(20,50);
    new Module2(30,50);
    new Module2(40,50);
    new Module2(20,60);
    new Module2(20,70);
    new Module2(20,80);
    new Module2(20,90);
    new Module2(20,100);
    new Module2(20,110);
    new Module2(30,120);
    new Module2(40,110);
    new Module2(20,40);
    new Module2(20,30);
    pop();
}

function drawGtoS(x,y){
    push();
    translate(x,y);
    new Module1(10,70);
    new Module1(10,80);
    new Module1(10,90);
    new Module1(10,100);
    new Module1(20,110);
    new Module1(30,120);
    new Module1(40,120);
    new Module1(50,110);
    new Module1(60,60);
    new Module1(60,70);
    new Module1(60,80);
    new Module1(60,90);
    new Module1(60,100);
    new Module1(60,110);
    new Module1(60,120);
    new Module1(60,130);
    new Module1(60,140);
    new Module1(50,150);
    new Module1(40,160);
    new Module1(30,160);
    new Module1(20,150);
    new Module1(10,140);
    new Module1(20,60);
    new Module1(30,50);
    new Module1(40,50);
    new Module1(50,60);
    
    new Module2(10,70);
    new Module2(20,80);
    new Module2(30,80);
    new Module2(40,80);
    new Module2(50,90);
    new Module2(60,100);
    new Module2(50,110);
    new Module2(40,120);
    new Module2(30,120);
    new Module2(20,110);
    new Module2(10,100);
    new Module2(20,60);
    new Module2(30,50);
    new Module2(40,50);
    new Module2(50,60);
    new Module2(60,70);
    pop();
}

function drawHtoU(x,y){
    push();
    translate(x,y);
    new Module1(10,10);
    new Module1(20,10);
    new Module1(20,20);
    new Module1(20,30);
    new Module1(20,40);
    new Module1(20,50);
    new Module1(20,60);
    new Module1(20,70);
    new Module1(20,80);
    new Module1(20,90);
    new Module1(20,100);
    new Module1(20,110);
    new Module1(20,120);
    new Module1(10,120);
    new Module1(30,120);
    new Module1(30,70);
    new Module1(40,60);
    new Module1(50,50);
    new Module1(60,50);
    new Module1(70,60);
    new Module1(70,70);
    new Module1(70,80);
    new Module1(70,90);
    new Module1(70,100);
    new Module1(70,110);
    new Module1(70,120);
    new Module1(60,120);
    new Module1(80,120);
    
    new Module2(20,50);
    new Module2(30,50);
    new Module2(30,60);
    new Module2(30,70);
    new Module2(30,80);
    new Module2(30,90);
    new Module2(30,100);
    new Module2(30,110);
    new Module2(40,120);
    new Module2(50,120);
    new Module2(60,120);
    new Module2(70,110);
    new Module2(70,100);
    new Module2(70,90);
    new Module2(70,80);
    new Module2(70,70);
    new Module2(70,60);
    new Module2(70,50);
    new Module2(60,50);
    new Module2(80,120);
    pop();
}

function drawItoL(x,y){
    push();
    translate(x,y);
    new Module1(20,30);
    new Module1(10,50);
    new Module1(20,50);
    new Module1(20,60);
    new Module1(20,70);
    new Module1(20,80);
    new Module1(20,90);
    new Module1(20,100);
    new Module1(20,110);
    new Module1(20,120);
    new Module1(10,120);
    new Module1(30,120);
    
    new Module2(10,10);
    new Module2(20,10);
    new Module2(20,20);
    new Module2(20,30);
    new Module2(20,40);
    new Module2(20,50);
    new Module2(20,60);
    new Module2(20,70);
    new Module2(20,80);
    new Module2(20,90);
    new Module2(20,100);
    new Module2(20,110);
    new Module2(20,120);
    new Module2(10,120);
    new Module2(30,120);
    pop();
}

function drawJtoV(x,y){
    push();
    translate(x,y);
    new Module1(40,30);
    new Module1(30,50);
    new Module1(40,50);
    new Module1(20,50);
    new Module1(40,60);
    new Module1(40,70);
    new Module1(40,80);
    new Module1(40,90);
    new Module1(40,100);
    new Module1(40,110);
    new Module1(40,120);
    new Module1(40,130);
    new Module1(40,140);
    new Module1(40,150);
    new Module1(30,160);
    new Module1(20,160);
    new Module1(10,150);
    
    new Module2(10,50);
    new Module2(20,50);
    new Module2(30,50);
    new Module2(20,60);
    new Module2(20,70);
    new Module2(20,80);
    new Module2(30,90);
    new Module2(30,100);
    new Module2(40,110);
    new Module2(40,110);
    new Module2(40,120);
    new Module2(50,100);
    new Module2(50,90);
    new Module2(60,80);
    new Module2(60,70);
    new Module2(60,60);
    new Module2(60,50);
    new Module2(70,50);
    new Module2(50,50);
    pop();
}

function drawKtoX(x,y){
    push();
    translate(x,y);
    new Module1(10,10);
    new Module1(20,10);
    new Module1(20,20);
    new Module1(20,30);
    new Module1(20,40);
    new Module1(20,50);
    new Module1(20,60);
    new Module1(20,70);
    new Module1(20,80);
    new Module1(20,90);
    new Module1(20,100);
    new Module1(20,110);
    new Module1(20,120);
    new Module1(10,120);
    new Module1(30,120);
    new Module1(40,80);
    new Module1(50,70);
    new Module1(60,60);
    new Module1(70,50);
    new Module1(60,50);
    new Module1(50,50);
    new Module1(80,50);
    new Module1(30,90);
    new Module1(40,90);
    new Module1(50,100);
    new Module1(60,110);
    new Module1(70,120);
    new Module1(60,120);
    new Module1(80,120);
    
    new Module2(10,50);
    new Module2(20,50);
    new Module2(30,50);
    new Module2(20,60);
    new Module2(30,70);
    new Module2(40,80);
    new Module2(50,90);
    new Module2(60,100);
    new Module2(70,110);
    new Module2(80,120);
    new Module2(70,120);
    new Module2(60,120);
    new Module2(10,120);
    new Module2(20,120);
    new Module2(30,120);
    new Module2(20,110);
    new Module2(30,100);
    new Module2(40,90);
    new Module2(50,80);
    new Module2(60,70);
    new Module2(70,60);
    new Module2(80,50);
    new Module2(70,50);
    new Module2(60,50);
    pop();
}

function drawLtoI(x,y){
    push();
    translate(x,y);
    new Module1(10,10);
    new Module1(20,10);
    new Module1(20,20);
    new Module1(20,30);
    new Module1(20,40);
    new Module1(20,50);
    new Module1(20,60);
    new Module1(20,70);
    new Module1(20,80);
    new Module1(20,90);
    new Module1(20,100);
    new Module1(20,110);
    new Module1(20,120);
    new Module1(10,120);
    new Module1(30,120);
    
    new Module2(20,30);
    new Module2(10,50);
    new Module2(20,50);
    new Module2(20,60);
    new Module2(20,70);
    new Module2(20,80);
    new Module2(20,90);
    new Module2(20,100);
    new Module2(20,110);
    new Module2(20,120);
    new Module2(10,120);
    new Module2(30,120);
    pop();
}

function drawMtoW(x,y){
    push();
    translate(x,y);
    new Module1(10,50);
    new Module1(20,50);
    new Module1(20,60);
    new Module1(20,70);
    new Module1(20,80);
    new Module1(20,90);
    new Module1(20,100);
    new Module1(20,110);
    new Module1(20,120);
    new Module1(10,120);
    new Module1(30,120);
    new Module1(30,60);
    new Module1(40,50);
    new Module1(50,50);
    new Module1(60,60);
    new Module1(60,70);
    new Module1(60,80);
    new Module1(60,90);
    new Module1(60,100);
    new Module1(60,110);
    new Module1(60,120);
    new Module1(50,120);
    new Module1(70,120);
    new Module1(70,60);
    new Module1(80,50);
    new Module1(90,50);
    new Module1(100,60);
    new Module1(100,70);
    new Module1(100,80);
    new Module1(100,90);
    new Module1(100,100);
    new Module1(100,110);
    new Module1(100,120);
    new Module1(90,120);
    new Module1(110,120);
    
    new Module2(10,50);
    new Module2(20,50);
    new Module2(30,50);
    new Module2(20,60);
    new Module2(20,70);
    new Module2(20,80);
    new Module2(30,90);
    new Module2(30,100);
    new Module2(40,110);
    new Module2(40,110);
    new Module2(40,120);
    new Module2(50,100);
    new Module2(50,90);
    new Module2(60,80);
    new Module2(60,70);
    new Module2(60,60);
    new Module2(60,50);
    new Module2(70,50);
    new Module2(50,50);
    new Module2(70,90);
    new Module2(70,100);
    new Module2(80,110);
    new Module2(80,120);
    new Module2(90,100);
    new Module2(90,90);
    new Module2(100,80);
    new Module2(100,70);
    new Module2(100,60);
    new Module2(100,50);
    new Module2(110,50);
    new Module2(90,50);
    pop();
}

function drawYtoZ(x,y){
    push();
    translate(x,y);
    new Module1(20,50);
    new Module1(30,50);
    new Module1(40,50);
    new Module1(30,60);
    new Module1(30,70);
    new Module1(30,80);
    new Module1(30,90);
    new Module1(30,100);
    new Module1(30,110);
    new Module1(40,120);
    new Module1(50,120);
    new Module1(60,110);
    new Module1(70,110);
    new Module1(70,100);
    new Module1(70,90);
    new Module1(70,80);
    new Module1(70,70);
    new Module1(70,60);
    new Module1(70,50);
    new Module1(80,50);
    new Module1(60,50);
    new Module1(70,120);
    new Module1(70,130);
    new Module1(60,140);
    new Module1(60,150);
    new Module1(50,160);
    new Module1(40,160);
    new Module1(30,150);
    
    new Module2(20,50);
    new Module2(30,50);
    new Module2(40,50);
    new Module2(50,50);
    new Module2(60,50);
    new Module2(70,50);
    new Module2(80,50);
    new Module2(20,120);
    new Module2(30,120);
    new Module2(40,120);
    new Module2(50,120);
    new Module2(60,120);
    new Module2(70,120);
    new Module2(80,120);
    new Module2(20,110);
    new Module2(30,100);
    new Module2(40,90);
    new Module2(50,80);
    new Module2(60,70);
    new Module2(70,60);
    pop();
}

function drawNtoA(x,y){
    push();
    translate(x,y);
    new Module1(10,50);
    new Module1(20,50);
    new Module1(20,60);
    new Module1(20,70);
    new Module1(20,80);
    new Module1(20,90);
    new Module1(20,100);
    new Module1(20,110);
    new Module1(20,120);
    new Module1(10,120);
    new Module1(30,120);
    new Module1(30,60);
    new Module1(40,50);
    new Module1(50,50);
    new Module1(60,60);
    new Module1(60,70);
    new Module1(60,80);
    new Module1(60,90);
    new Module1(60,100);
    new Module1(60,110);
    new Module1(60,120);
    new Module1(50,120);
    new Module1(70,120);
    
    new Module2(10,70);
    new Module2(10,80);
    new Module2(10,90);
    new Module2(10,100);
    new Module2(20,110);
    new Module2(30,120);
    new Module2(40,120);
    new Module2(50,110);
    new Module2(70,120);
    new Module2(60,110);
    new Module2(60,100);
    new Module2(60,90);
    new Module2(60,80);
    new Module2(60,70);
    new Module2(50,60);
    new Module2(40,50);
    new Module2(30,50);
    new Module2(20,60);
    pop();
    
}

function drawOtoB(x,y){
    push();
    translate(x,y);
    new Module1(20,70);
    new Module1(20,80);
    new Module1(20,90);
    new Module1(20,100);
    new Module1(30,110);
    new Module1(40,120);
    new Module1(40,120);
    new Module1(50,120);
    new Module1(60,110);
    new Module1(70,100);
    new Module1(70,90);
    new Module1(70,80);
    new Module1(70,70);
    new Module1(60,60);
    new Module1(50,50);
    new Module1(40,50);
    new Module1(30,60);
    
    new Module2(10,10);
    new Module2(20,10);
    new Module2(20,20);
    new Module2(20,30);
    new Module2(20,40);
    new Module2(20,50);
    new Module2(20,60);
    new Module2(20,70);
    new Module2(20,80);
    new Module2(20,90);
    new Module2(20,100);
    new Module2(20,110);
    new Module2(30,120);
    new Module2(40,120);
    new Module2(50,120);
    new Module2(60,110);
    new Module2(70,100);
    new Module2(70,90);
    new Module2(70,80);
    new Module2(70,70);
    new Module2(60,60);
    new Module2(50,50);
    new Module2(40,50);
    new Module2(30,60);
    pop();
}

function drawPtoC(x,y){
    push();
    translate(x,y);
    new Module1(10,60);
    new Module1(20,50);
    new Module1(20,60);
    new Module1(20,70);
    new Module1(20,80);
    new Module1(20,90);
    new Module1(20,100);
    new Module1(20,110);
    new Module1(20,120);
    new Module1(20,130);
    new Module1(20,140);
    new Module1(20,150);
    new Module1(20,160);
    new Module1(10,160);
    new Module1(30,160);
    new Module1(30,60);
    new Module1(40,50);
    new Module1(50,50);
    new Module1(60,60);
    new Module1(70,70);
    new Module1(70,80);
    new Module1(70,90);
    new Module1(70,100);
    new Module1(60,110);
    new Module1(50,120);
    new Module1(40,120);
    new Module1(30,110);
    
    new Module2(60,60);
    new Module2(50,50);
    new Module2(40,50);
    new Module2(30,50);
    new Module2(20,60);
    new Module2(10,70);
    new Module2(10,80);
    new Module2(10,90);
    new Module2(10,100);
    new Module2(20,110);
    new Module2(30,120);
    new Module2(40,120);
    new Module2(50,120);
    new Module2(60,110);
    pop();
}

function drawQtoD(x,y){
    push();
    translate(x,y);
    new Module1(10,70);
    new Module1(10,80);
    new Module1(10,90);
    new Module1(10,100);
    new Module1(20,110);
    new Module1(30,120);
    new Module1(40,120);
    new Module1(50,110);
    new Module1(60,70);
    new Module1(60,80);
    new Module1(60,90);
    new Module1(60,100);
    new Module1(60,110);
    new Module1(60,120);
    new Module1(60,130);
    new Module1(60,140);
    new Module1(60,150);
    new Module1(60,160);
    new Module1(50,160);
    new Module1(70,160);
    new Module1(20,60);
    new Module1(30,50);
    new Module1(40,50);
    new Module1(50,60);
    
    new Module2(10,70);
    new Module2(10,80);
    new Module2(10,90);
    new Module2(10,100);
    new Module2(20,110);
    new Module2(30,120);
    new Module2(40,120);
    new Module2(50,110);
    new Module2(60,10);
    new Module2(70,10);
    new Module2(60,20);
    new Module2(60,30);
    new Module2(60,40);
    new Module2(60,50);
    new Module2(60,60);
    new Module2(60,70);
    new Module2(60,80);
    new Module2(60,90);
    new Module2(60,100);
    new Module2(60,110);
    new Module2(60,120);
    new Module2(70,120);
    new Module2(20,60);
    new Module2(30,50);
    new Module2(40,50);
    new Module2(50,60);
    pop();
}

function drawRtoE(x,y){
    push();
    translate(x,y);  
    new Module1(10,60);
    new Module1(20,50);
    new Module1(20,60);
    new Module1(20,70);
    new Module1(20,80);
    new Module1(20,90);
    new Module1(20,100);
    new Module1(20,110);
    new Module1(20,120);
    new Module1(10,120);
    new Module1(30,120);
    new Module1(30,70);
    new Module1(40,60);
    new Module1(50,50);
    new Module1(60,60);
    
    new Module2(60,60);
    new Module2(50,50);
    new Module2(40,50);
    new Module2(30,50);
    new Module2(20,60);
    new Module2(10,70);
    new Module2(10,80);
    new Module2(10,90);
    new Module2(10,100);
    new Module2(20,110);
    new Module2(30,120);
    new Module2(40,120);
    new Module2(50,120);
    new Module2(60,110);
    new Module2(20,100);
    new Module2(30,90);
    new Module2(40,80);
    new Module2(50,70);
    pop();
}

function drawStoG(x,y){
    push();
    translate(x,y);
    new Module1(10,70);
    new Module1(20,80);
    new Module1(30,80);
    new Module1(40,80);
    new Module1(50,90);
    new Module1(60,100);
    new Module1(50,110);
    new Module1(40,120);
    new Module1(30,120);
    new Module1(20,110);
    new Module1(10,100);
    new Module1(20,60);
    new Module1(30,50);
    new Module1(40,50);
    new Module1(50,60);
    new Module1(60,70);
    
    new Module2(10,70);
    new Module2(10,80);
    new Module2(10,90);
    new Module2(10,100);
    new Module2(20,110);
    new Module2(30,120);
    new Module2(40,120);
    new Module2(50,110);
    new Module2(60,60);
    new Module2(60,70);
    new Module2(60,80);
    new Module2(60,90);
    new Module2(60,100);
    new Module2(60,110);
    new Module2(60,120);
    new Module2(60,130);
    new Module2(60,140);
    new Module2(50,150);
    new Module2(40,160);
    new Module2(30,160);
    new Module2(20,150);
    new Module2(10,140);
    new Module2(20,60);
    new Module2(30,50);
    new Module2(40,50);
    new Module2(50,60);
    pop();
}

function drawTtoF(x,y){
    push();
    translate(x,y);
    new Module1(10,50);
    new Module1(20,50);
    new Module1(30,50);
    new Module1(40,50);
    new Module1(20,60);
    new Module1(20,70);
    new Module1(20,80);
    new Module1(20,90);
    new Module1(20,100);
    new Module1(20,110);
    new Module1(30,120);
    new Module1(40,110);
    new Module1(20,40);
    new Module1(20,30);
    
    new Module2(10,50);
    new Module2(20,50);
    new Module2(30,50);
    new Module2(20,20);
    new Module2(20,30);
    new Module2(20,40);
    new Module2(20,50);
    new Module2(20,60);
    new Module2(20,70);
    new Module2(20,80);
    new Module2(20,90);
    new Module2(20,100);
    new Module2(20,110);
    new Module2(20,120);
    new Module2(10,120);
    new Module2(30,120);
    new Module2(20,120);
    new Module2(30,10);
    new Module2(40,10);
    new Module2(50,20);
    new Module2(40,50);
    pop();
}

function drawUtoH(x,y){
    push();
    translate(x,y);
    new Module1(10,50);
    new Module1(20,50);
    new Module1(20,60);
    new Module1(20,70);
    new Module1(20,80);
    new Module1(20,90);
    new Module1(20,100);
    new Module1(20,110);
    new Module1(30,120);
    new Module1(40,120);
    new Module1(50,120);
    new Module1(60,110);
    new Module1(60,100);
    new Module1(60,90);
    new Module1(60,80);
    new Module1(60,70);
    new Module1(60,60);
    new Module1(60,50);
    new Module1(50,50);
    new Module1(70,120);
    
    new Module2(10,10);
    new Module2(20,10);
    new Module2(20,20);
    new Module2(20,30);
    new Module2(20,40);
    new Module2(20,50);
    new Module2(20,60);
    new Module2(20,70);
    new Module2(20,80);
    new Module2(20,90);
    new Module2(20,100);
    new Module2(20,110);
    new Module2(20,120);
    new Module2(10,120);
    new Module2(30,120);
    new Module2(30,70);
    new Module2(40,60);
    new Module2(50,50);
    new Module2(60,50);
    new Module2(70,60);
    new Module2(70,70);
    new Module2(70,80);
    new Module2(70,90);
    new Module2(70,100);
    new Module2(70,110);
    new Module2(70,120);
    new Module2(60,120);
    new Module2(80,120);
    pop();
}

function drawVtoJ(x,y){
    push();
    translate(x,y);
    new Module1(10,50);
    new Module1(20,50);
    new Module1(30,50);
    new Module1(20,60);
    new Module1(20,70);
    new Module1(20,80);
    new Module1(30,90);
    new Module1(30,100);
    new Module1(40,110);
    new Module1(40,110);
    new Module1(40,120);
    new Module1(50,100);
    new Module1(50,90);
    new Module1(60,80);
    new Module1(60,70);
    new Module1(60,60);
    new Module1(60,50);
    new Module1(70,50);
    new Module1(50,50);
    
    new Module2(40,30);
    new Module2(30,50);
    new Module2(40,50);
    new Module2(20,50);
    new Module2(40,60);
    new Module2(40,70);
    new Module2(40,80);
    new Module2(40,90);
    new Module2(40,100);
    new Module2(40,110);
    new Module2(40,120);
    new Module2(40,130);
    new Module2(40,140);
    new Module2(40,150);
    new Module2(30,160);
    new Module2(20,160);
    new Module2(10,150);
    pop();
}

function drawWtoM(x,y){
    push();
    translate(x,y);
    new Module1(10,50);
    new Module1(20,50);
    new Module1(30,50);
    new Module1(20,60);
    new Module1(20,70);
    new Module1(20,80);
    new Module1(30,90);
    new Module1(30,100);
    new Module1(40,110);
    new Module1(40,110);
    new Module1(40,120);
    new Module1(50,100);
    new Module1(50,90);
    new Module1(60,80);
    new Module1(60,70);
    new Module1(60,60);
    new Module1(60,50);
    new Module1(70,50);
    new Module1(50,50);
    new Module1(70,90);
    new Module1(70,100);
    new Module1(80,110);
    new Module1(80,120);
    new Module1(90,100);
    new Module1(90,90);
    new Module1(100,80);
    new Module1(100,70);
    new Module1(100,60);
    new Module1(100,50);
    new Module1(110,50);
    new Module1(90,50);
    
    new Module2(10,50);
    new Module2(20,50);
    new Module2(20,60);
    new Module2(20,70);
    new Module2(20,80);
    new Module2(20,90);
    new Module2(20,100);
    new Module2(20,110);
    new Module2(20,120);
    new Module2(10,120);
    new Module2(30,120);
    new Module2(30,60);
    new Module2(40,50);
    new Module2(50,50);
    new Module2(60,60);
    new Module2(60,70);
    new Module2(60,80);
    new Module2(60,90);
    new Module2(60,100);
    new Module2(60,110);
    new Module2(60,120);
    new Module2(50,120);
    new Module2(70,120);
    new Module2(70,60);
    new Module2(80,50);
    new Module2(90,50);
    new Module2(100,60);
    new Module2(100,70);
    new Module2(100,80);
    new Module2(100,90);
    new Module2(100,100);
    new Module2(100,110);
    new Module2(100,120);
    new Module2(90,120);
    new Module2(110,120);
    pop();
}

function drawXtoK(x,y){
    push();
    translate(x,y);
    new Module1(10,50);
    new Module1(20,50);
    new Module1(30,50);
    new Module1(20,60);
    new Module1(30,70);
    new Module1(40,80);
    new Module1(50,90);
    new Module1(60,100);
    new Module1(70,110);
    new Module1(80,120);
    new Module1(70,120);
    new Module1(60,120);
    new Module1(10,120);
    new Module1(20,120);
    new Module1(30,120);
    new Module1(20,110);
    new Module1(30,100);
    new Module1(40,90);
    new Module1(50,80);
    new Module1(60,70);
    new Module1(70,60);
    new Module1(80,50);
    new Module1(70,50);
    new Module1(60,50);
    
    new Module2(10,10);
    new Module2(20,10);
    new Module2(20,20);
    new Module2(20,30);
    new Module2(20,40);
    new Module2(20,50);
    new Module2(20,60);
    new Module2(20,70);
    new Module2(20,80);
    new Module2(20,90);
    new Module2(20,100);
    new Module2(20,110);
    new Module2(20,120);
    new Module2(10,120);
    new Module2(30,120);
    new Module2(40,80);
    new Module2(50,70);
    new Module2(60,60);
    new Module2(70,50);
    new Module2(60,50);
    new Module2(50,50);
    new Module2(80,50);
    new Module2(30,90);
    new Module2(40,90);
    new Module2(50,100);
    new Module2(60,110);
    new Module2(70,120);
    new Module2(60,120);
    new Module2(80,120);
    pop();
}

function drawZtoY(x,y){
    push();
    translate(x,y);
    new Module1(20,50);
    new Module1(30,50);
    new Module1(40,50);
    new Module1(50,50);
    new Module1(60,50);
    new Module1(70,50);
    new Module1(80,50);
    new Module1(20,120);
    new Module1(30,120);
    new Module1(40,120);
    new Module1(50,120);
    new Module1(60,120);
    new Module1(70,120);
    new Module1(80,120);
    new Module1(20,110);
    new Module1(30,100);
    new Module1(40,90);
    new Module1(50,80);
    new Module1(60,70);
    new Module1(70,60);
    
    new Module2(20,50);
    new Module2(30,50);
    new Module2(40,50);
    new Module2(30,60);
    new Module2(30,70);
    new Module2(30,80);
    new Module2(30,90);
    new Module2(30,100);
    new Module2(30,110);
    new Module2(40,120);
    new Module2(50,120);
    new Module2(60,110);
    new Module2(70,110);
    new Module2(70,100);
    new Module2(70,90);
    new Module2(70,80);
    new Module2(70,70);
    new Module2(70,60);
    new Module2(70,50);
    new Module2(80,50);
    new Module2(60,50);
    new Module2(70,120);
    new Module2(70,130);
    new Module2(60,140);
    new Module2(60,150);
    new Module2(50,160);
    new Module2(40,160);
    new Module2(30,150);
    pop();
}

// font 1
function drawA(x,y){
    push();
    translate(x,y);
    Module(10,70);
    new Module(10,80);
    new Module(10,90);
    new Module(10,100);
    new Module(20,110);
    new Module(30,120);
    new Module(40,120);
    new Module(50,110);
    new Module(70,120);
    new Module(60,110);
    new Module(60,100);
    new Module(60,90);
    new Module(60,80);
    new Module(60,70);
    new Module(50,60);
    new Module(40,50);
    new Module(30,50);
    new Module(20,60);
    pop();
}

function drawB(x,y){
    push();
    translate(x,y);
    Module(10,10);
    new Module(20,10);
    new Module(20,20)
    new Module(20,30);
    new Module(20,40);
    new Module(20,50);
    new Module(20,60);
    new Module(20,70);
    new Module(20,80);
    new Module(20,90);
    new Module(20,100);
    new Module(20,110);
    new Module(30,120);
    new Module(40,120);
    new Module(50,120);
    new Module(60,110);
    new Module(70,100);
    new Module(70,90);
    new Module(70,80);
    new Module(70,70);
    new Module(60,60);
    new Module(50,50);
    new Module(40,50);
    new Module(30,60);
    pop();
}

function drawC(x,y){
    push();
    translate(x,y);
    Module(60,60);
    new Module(50,50);
    new Module(40,50);
    new Module(30,50);
    new Module(20,60);
    new Module(10,70);
    new Module(10,80);
    new Module(10,90);
    new Module(10,100);
    new Module(20,110);
    new Module(30,120);
    new Module(40,120);
    new Module(50,120);
    new Module(60,110);
    pop();
}

function drawD(x,y){
    push();
    translate(x,y);
    Module(10,70);
    new Module(10,80);
    new Module(10,90)
    new Module(10,100);
    new Module(20,110);
    new Module(30,120);
    new Module(40,120);
    new Module(50,110);
    new Module(60,10);
    new Module(70,10);
    new Module(60,20);
    new Module(60,30);
    new Module(60,40);
    new Module(60,50);
    new Module(60,60);
    new Module(60,70);
    new Module(60,80);
    new Module(60,90);
    new Module(60,100);
    new Module(60,110);
    new Module(60,120);
    new Module(70,120);
    new Module(20,60);
    new Module(30,50);
    new Module(40,50);
    new Module(50,60);
    pop();
}

function drawE(x,y){
    push();
    translate(x,y);
    Module(60,60);
    new Module(50,50);
    new Module(40,50);
    new Module(30,50);
    new Module(20,60);
    new Module(10,70);
    new Module(10,80);
    new Module(10,90);
    new Module(10,100);
    new Module(20,110);
    new Module(30,120);
    new Module(40,120);
    new Module(50,120);
    new Module(60,110);
    new Module(20,100);
    new Module(30,90);
    new Module(40,80);
    new Module(50,70);
    pop();
}

function drawF(x,y){
    push();
    translate(x,y);
    Module(10,50);
    new Module(20,50);
    new Module(30,50);
    new Module(20,20);
    new Module(20,30);
    new Module(20,40);
    new Module(20,60);
    new Module(20,70);
    new Module(20,80);
    new Module(20,90);
    new Module(20,100);
    new Module(20,110);
    new Module(20,120);
    new Module(10,120);
    new Module(30,120);
    new Module(30,10);
    new Module(40,10);
    new Module(50,20);
    new Module(40,50);
    pop();
}

function drawG(x,y){
    push();
    translate(x,y);
    Module(10,70);
    new Module(10,80);
    new Module(10,90)
    new Module(10,100);
    new Module(20,110);
    new Module(30,120);
    new Module(40,120);
    new Module(50,110);
    new Module(60,60);
    new Module(60,70);
    new Module(60,80);
    new Module(60,90);
    new Module(60,100);
    new Module(60,110);
    new Module(60,120);
    new Module(60,130);
    new Module(60,140);
    new Module(50,150);
    new Module(40,160);
    new Module(30,160);
    new Module(20,150);
    new Module(10,140);
    new Module(20,60);
    new Module(30,50);
    new Module(40,50);
    new Module(50,60);
    pop();
}

function drawH(x,y){
    push();
    translate(x,y);
    Module(10,10);
    new Module(20,10);
    new Module(20,20);
    new Module(20,30);
    new Module(20,40);
    new Module(20,50);
    new Module(20,60);
    new Module(20,70);
    new Module(20,80);
    new Module(20,90);
    new Module(20,100);
    new Module(20,110);
    new Module(20,120);
    new Module(10,120);
    new Module(30,120);
    new Module(30,70);
    new Module(40,60);
    new Module(50,50);
    new Module(60,50);
    new Module(70,60);
    new Module(70,70);
    new Module(70,80);
    new Module(70,90);
    new Module(70,100);
    new Module(70,110);
    new Module(70,120);
    new Module(60,120);
    new Module(80,120);
    pop();
}

function drawI(x,y){
    push();
    translate(x,y);
    Module(30,30);
    new Module(20,50);
    new Module(30,50);
    new Module(30,60);
    new Module(30,70);
    new Module(30,80);
    new Module(30,90);
    new Module(30,100);
    new Module(30,110);
    new Module(30,120);
    new Module(20,120);
    new Module(40,120);
    pop();
}

function drawJ(x,y){
    push();
    translate(x,y);
    Module(40,30);
    new Module(30,50);
    new Module(40,50);
    new Module(20,50);
    new Module(40,60);
    new Module(40,70);
    new Module(40,80);
    new Module(40,90);
    new Module(40,100);
    new Module(40,110);
    new Module(40,120);
    new Module(40,130);
    new Module(40,140);
    new Module(40,150);
    new Module(30,160);
    new Module(20,160);
    new Module(10,150);
    pop();
}

function drawK(x,y){
    push();
    translate(x,y);
    Module(10,10);
    new Module(20,10);
    new Module(20,20);
    new Module(20,30);
    new Module(20,40);
    new Module(20,50);
    new Module(20,60);
    new Module(20,70);
    new Module(20,80);
    new Module(20,90);
    new Module(20,100);
    new Module(20,110);
    new Module(20,120);
    new Module(10,120);
    new Module(30,120);
    new Module(40,80);
    new Module(50,70);
    new Module(60,60);
    new Module(70,50);
    new Module(60,50);
    new Module(50,50);
    new Module(80,50);
    new Module(30,90);
    new Module(40,90);
    new Module(50,100);
    new Module(60,110);
    new Module(70,120);
    new Module(60,120);
    new Module(80,120);
    pop();
}

function drawL(x,y){
    push();
    translate(x,y);
    Module(10,10);
    new Module(20,10);
    new Module(20,20);
    new Module(20,30);
    new Module(20,40);
    new Module(20,50);
    new Module(20,60);
    new Module(20,70);
    new Module(20,80);
    new Module(20,90);
    new Module(20,100);
    new Module(20,110);
    new Module(20,120);
    new Module(10,120);
    new Module(30,120);
    pop();
}

function drawM(x,y){
    push();
    translate(x,y);
    Module(10,50);
    new Module(20,50);
    new Module(20,60);
    new Module(20,70);
    new Module(20,80);
    new Module(20,90);
    new Module(20,100);
    new Module(20,110);
    new Module(20,120);
    new Module(10,120);
    new Module(30,120);
    new Module(30,60);
    new Module(40,50);
    new Module(50,50);
    new Module(60,60);
    new Module(60,70);
    new Module(60,80);
    new Module(60,90);
    new Module(60,100);
    new Module(60,110);
    new Module(60,120);
    new Module(50,120);
    new Module(70,120);
    new Module(70,60);
    new Module(80,50);
    new Module(90,50);
    new Module(100,60);
    new Module(100,70);
    new Module(100,80);
    new Module(100,90);
    new Module(100,100);
    new Module(100,110);
    new Module(100,120);
    new Module(90,120);
    new Module(110,120);
    pop();
}

function drawN(x,y){
    push();
    translate(x,y);
    Module(10,50);
    new Module(20,50);
    new Module(20,60);
    new Module(20,70);
    new Module(20,80);
    new Module(20,90);
    new Module(20,100);
    new Module(20,110);
    new Module(20,120);
    new Module(10,120);
    new Module(30,120);
    new Module(30,60);
    new Module(40,50);
    new Module(50,50);
    new Module(60,60);
    new Module(60,70);
    new Module(60,80);
    new Module(60,90);
    new Module(60,100);
    new Module(60,110);
    new Module(60,120);
    new Module(50,120);
    new Module(70,120);
    pop();
}

function drawO(x,y){
    push();
    translate(x,y);
    Module(20,70);
    new Module(20,80);
    new Module(20,90);
    new Module(20,100);
    new Module(30,110);
    new Module(40,120);
    new Module(50,120);
    new Module(60,110);
    new Module(70,100);
    new Module(70,90);
    new Module(70,80);
    new Module(70,70);
    new Module(60,60);
    new Module(50,50);
    new Module(40,50);
    new Module(30,60);
    pop();
}

function drawP(x,y){
    push();
    translate(x,y);
    Module(10,60);
    new Module(20,50);
    new Module(20,60);
    new Module(20,70);
    new Module(20,80);
    new Module(20,90);
    new Module(20,100);
    new Module(20,110);
    new Module(20,120);
    new Module(20,130);
    new Module(20,140);
    new Module(20,150);
    new Module(20,160);
    new Module(10,160);
    new Module(30,160);
    new Module(30,60);
    new Module(40,50);
    new Module(50,50);
    new Module(60,60);
    new Module(70,70);
    new Module(70,80);
    new Module(70,90);
    new Module(70,100);
    new Module(60,110);
    new Module(50,120);
    new Module(40,120);
    new Module(30,110);
    pop();
}

function drawQ(x,y){
    push();
    translate(x,y);
    Module(10,70);
    new Module(10,80);
    new Module(10,90)
    new Module(10,100);
    new Module(20,110);
    new Module(30,120);
    new Module(40,120);
    new Module(50,110);
    new Module(60,70);
    new Module(60,80);
    new Module(60,90);
    new Module(60,100);
    new Module(60,110);
    new Module(60,120);
    new Module(60,130);
    new Module(60,140);
    new Module(60,150);
    new Module(60,160);
    new Module(50,160);
    new Module(70,160);
    new Module(20,60);
    new Module(30,50);
    new Module(40,50);
    new Module(50,60);
    pop();
}

function drawR(x,y){
    push();
    translate(x,y);
    Module(10,60);
    new Module(20,50);
    new Module(20,60);
    new Module(20,70);
    new Module(20,80);
    new Module(20,90);
    new Module(20,100);
    new Module(20,110);
    new Module(20,120);
    new Module(10,120);
    new Module(30,120);
    new Module(30,70);
    new Module(40,60);
    new Module(50,50);
    new Module(60,60);
    pop();
}

function drawS(x,y){
    push();
    translate(x,y);
    Module(10,70);
    new Module(20,80);
    new Module(30,80);
    new Module(40,80);
    new Module(50,90);
    new Module(60,100);
    new Module(50,110);
    new Module(40,120);
    new Module(30,120);
    new Module(20,110);
    new Module(10,100);
    new Module(20,60);
    new Module(30,50);
    new Module(40,50);
    new Module(50,60);
    new Module(60,70);
    pop();
}

function drawT(x,y){
    push();
    translate(x,y);
    Module(10,50);
    new Module(20,50);
    new Module(30,50);
    new Module(40,50);
    new Module(20,60);
    new Module(20,70);
    new Module(20,80);
    new Module(20,90);
    new Module(20,100);
    new Module(20,110);
    new Module(30,120);
    new Module(40,110);
    new Module(20,40);
    new Module(20,30);
    pop();
}

function drawU(x,y){
    push();
    translate(x,y);
    Module(10,50);
    new Module(20,50);
    new Module(20,60);
    new Module(20,70);
    new Module(20,80);
    new Module(20,90);
    new Module(20,100);
    new Module(20,110);
    new Module(30,120);
    new Module(40,120);
    new Module(50,120);
    new Module(60,110);
    new Module(60,100);
    new Module(60,90);
    new Module(60,80);
    new Module(60,70);
    new Module(60,60);
    new Module(60,50);
    new Module(50,50);
    new Module(70,120);
    pop();
}

function drawV(x,y){
    push();
    translate(x,y);
    Module(10,50);
    new Module(20,50);
    new Module(30,50);
    new Module(20,60);
    new Module(20,70);
    new Module(20,80);
    new Module(30,90);
    new Module(30,100);
    new Module(40,110);
    new Module(40,120);
    new Module(50,100);
    new Module(50,90);
    new Module(60,80);
    new Module(60,70);
    new Module(60,60);
    new Module(60,50);
    new Module(70,50);
    new Module(50,50);
    pop();
}

function drawW(x,y){
    push();
    translate(x,y);
    Module(10,50);
    new Module(20,50);
    new Module(30,50);
    new Module(20,60);
    new Module(20,70);
    new Module(20,80);
    new Module(30,90);
    new Module(30,100);
    new Module(40,110);
    new Module(40,120);
    new Module(50,100);
    new Module(50,90);
    new Module(60,80);
    new Module(60,70);
    new Module(60,60);
    new Module(60,50);
    new Module(70,50);
    new Module(50,50);
    new Module(70,90);
    new Module(70,100);
    new Module(80,110);
    new Module(80,120);
    new Module(90,100);
    new Module(90,90);
    new Module(100,80);
    new Module(100,70);
    new Module(100,60);
    new Module(100,50);
    new Module(110,50);
    new Module(90,50);
    pop();
}

function drawX(x,y){
    push();
    translate(x,y);
    Module(10,50);
    new Module(20,50);
    new Module(30,50);
    new Module(20,60);
    new Module(30,70);
    new Module(40,80);
    new Module(50,90);
    new Module(60,100);
    new Module(70,110);
    new Module(80,120);
    new Module(70,120);
    new Module(60,120);
    new Module(10,120);
    new Module(20,120);
    new Module(30,120);
    new Module(20,110);
    new Module(30,100);
    new Module(40,90);
    new Module(50,80);
    new Module(60,70);
    new Module(70,60);
    new Module(80,50);
    new Module(70,50);
    new Module(60,50);
    pop();
}

function drawY(x,y){
    push();
    translate(x,y);
    Module(10,50);
    new Module(20,50);
    new Module(30,50);
    new Module(20,60);
    new Module(20,70);
    new Module(20,80);
    new Module(20,90);
    new Module(20,100);
    new Module(20,110);
    new Module(30,120);
    new Module(40,120);
    new Module(50,110);
    new Module(60,110);
    new Module(60,100);
    new Module(60,90);
    new Module(60,80);
    new Module(60,70);
    new Module(60,60);
    new Module(60,50);
    new Module(70,50);
    new Module(50,50);
    new Module(60,120);
    new Module(60,130);
    new Module(50,140);
    new Module(50,150);
    new Module(40,160);
    new Module(30,160);
    new Module(20,150);
    pop();
}

function drawZ(x,y){
    push();
    translate(x,y);
    Module(20,50);
    new Module(30,50);
    new Module(40,50);
    new Module(50,50);
    new Module(60,50);
    new Module(70,50);
    new Module(80,50);
    new Module(20,120);
    new Module(30,120);
    new Module(40,120);
    new Module(50,120);
    new Module(60,120);
    new Module(70,120);
    new Module(80,120);
    new Module(20,110);
    new Module(30,100);
    new Module(40,90);
    new Module(50,80);
    new Module(60,70);
    new Module(70,60);
    pop();
  }