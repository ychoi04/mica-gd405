//letter positioning
    var xpos = 0;
    var ypos = 0;
    var spacing = 0;
    var leading = 0;

//alternate rotators, s is currently primary   

    var sRotater = 0;
    var rotateSpeed=.5;
    var diam=0;
    var diamCos=0;
    var angle=1.2;

//setup for multiple stop points in later builds, incriments 1-3
    var inZone = 1;
    var sceneCount=1;


function setup() {
    
    angleMode(DEGREES); 
    createCanvas(windowWidth,windowHeight);
    stroke(255, 204, 150,100);
    colorMode(HSB, 255);
    c = color(0, 150, 255);
    fill(c); 
    value = saturation(c);
    strokeCap(ROUND);  
}

function draw() {
    
    if (sceneCount==1){
        drawScene1();
    }
    if(sceneCount==2){
        drawScene2();
    }
    if(sceneCount==3){
        drawScene3();
    }
    if (sceneCount==4){ 
        sceneCount=1; 
    }
    if (sceneCount==0){
        sceneCount=3;
    }
    /* pull objects together/mix them up */  
    if (mouseIsPressed){
        inZone=2;
    }
    /* make the rotation a usable number */
    if (sRotater >= 360){
        sRotater = 0;
    }
    
    if (inZone==1){
        diam = sin(angle*30/*speed*/)*100/*min&max value*/;
        diamCos = cos(angle*2/*speed*/)*200/*min&max value*/;
        sRotater = (sRotater+rotateSpeed);
        angle+=.03;
    }
    
    if (inZone==2){
        sRotater=sRotater-1;
        
        /* move diam value toward zero */    
        
        if (diam >= 0){
            diam=diam-.5;
        }
        if (diam < 0){
            diam=diam+.5;    
        }
        
        if (diamCos >= 0){
            diamCos=diamCos-.5;
        }
        if (diamCos<0){
            diamCos=diamCos+.5;    
        }
            /*stabalizer*/
            if (sRotater <= 0){
                sRotater = 0;
            }
            if (mouseIsPressed){ 
                inZone=1; 
            }
    }
}


function drawScene1(){
    colorMode(RGB);
    fill(0,10); 
    rect(0,0,width,height); 
    stroke(0,10,c);    
    fill(0); 
    rect(width/2.2,height/4.5,500,500); 
    drawInst();

    /* make the sentence */      
    push();
    translate(width/2+diam,height/3+diamCos); 
    rotate(sRotater); 
    strokeWeight(3);
    scale(.8);  
    drawTECH(); 
    pop();
    
    /* draw field */
    for(var y=0; y<height; y+=200) {
        for (var x=0; x < width; x+=200){ 
        fill(0,0,0,0);
        strokeWeight(.1);
        ellipse(x,y,diam*.05,diam*.05);  
        } 
    }
    for(var y=0; y<height; y+=100) {
        for (var x=0; x < width; x+=100){ 
        fill(0,0,0,0);
        strokeWeight(2);
        ellipse(x,y,diam*.1,diam*.1);  
        } 
    }
}

function drawScene2(){
    colorMode(RGB);
    fill(255); 
    rect(0,0,width,height);
    stroke(0,10,c); 
    fill(0); 
    rect(width/2.2,height/4.5,500,500); 
    drawInst();
    //diam=diam*2;

    /* make the sentence */      
    push();
    translate(width/2+diam,height/3+diamCos); 
    rotate(sRotater); 
    strokeWeight(3);
    scale(.8);  
    drawTECH(); 
    pop();
    
    /* draw field */
        for(var y=0; y<height; y+=200) {
            for (var x=0; x < width; x+=200){ 
                fill(0,0,0,0);
                strokeWeight(.5);
                rect(x,y,diam*.05,diam*.05);  
            } 
    }
        for(var y=0; y<height; y+=100) {
            for (var x=0; x < width; x+=100){ 
                fill(0,0,0,0);
                strokeWeight(3);
                rect(x,y,diam*.1,diam*.1);  
        } 
    }
}

function drawScene3(){
    colorMode(RGB);
    fill(100, 150, 255,10); 
     rect(0,0,width,height);
    stroke(0,10,c);  
    fill(10);
 //   rectMode(CENTER);
    rect(width/2.2,height/4.5,500,500); 
    drawInst();
    //diam=diam*2;

    /* make the sentence */      
    push();
    translate(width/2+diam,height/3+diamCos); 
    rotate(sRotater); 
    strokeWeight(4);
    scale(.8);  
    drawTECH(); 
    pop();
    
    /* draw field */
        for(var y=0; y<height; y+=200) {
            for (var x=0; x < width; x+=200){ 
                fill(0,0,0,0);
                strokeWeight(2);
                ellipse(x,y,diam*.05,diam*.05);  
 
            } 
        }
            for(var y=0; y<height; y+=100) {
                for (var x=0; x < width; x+=100){ 
                    fill(0,0,0,0);
                    strokeWeight(1);
                    ellipse(x,y,diam*.1,diam*.1);  
 
                } 
            }
}

function drawInst(){
    textSize(15);   
    fill(0);
    noStroke;
    text("hold mouse button", width/100, height/2);
    text("left/right arrows to change scene", width/100, height/2+20);
    
    if (inZone==2){
        fill(0,0,0,0);
    }
}

    function keyPressed() {
        if (keyCode === LEFT_ARROW) {
           sceneCount-=1;
        }
        if (keyCode === RIGHT_ARROW) {
        sceneCount+=1;
        }
}

function drawTECH(){
    push();
    translate((xpos+spacing),(ypos+leading));
    drawA();
    spacing+=25;
    pop();
    
    push();
    translate((xpos+spacing),(ypos+leading));
    drawN();
    spacing+=25;
    pop();
    
    push();
    translate((xpos+spacing),(ypos+leading));
    drawY();
    spacing+=25;
    pop();
    
    push();
    translate((xpos+spacing),(ypos+leading));
//    drawSPACE();
    spacing+=25;
    pop();
    
    push();
    translate((xpos+spacing),(ypos+leading));
    drawS();
    spacing+=25;
    pop();
    
    push();
    translate((xpos+spacing),(ypos+leading));
    drawU();
    spacing+=25;
    pop();
    
    push();
    translate((xpos+spacing),(ypos+leading));
    drawF();
    spacing+=25;
    pop();
    
    push();
    translate((xpos+spacing),(ypos+leading));
    drawF();
    spacing+=25;
    pop();
    
    push();
    translate((xpos+spacing),(ypos+leading));
    drawI();
    spacing+=25;
    pop();
    
    push();
    translate((xpos+spacing),(ypos+leading));
    drawC();
    spacing+=25;
    pop();
    
    push();
    translate((xpos+spacing),(ypos+leading));
    drawI();
    spacing+=25;
    pop();
    
    push();
    translate((xpos+spacing),(ypos+leading));
    drawE();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawN();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawT();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawL();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawY();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    //    drawSPACE();
    spacing+=25;
    pop();
    
        leading+=85;
        spacing=0;
    
    push();
    translate((xpos+spacing),(ypos+leading));
    drawA();
    spacing+=25;
    pop();
    
    push();
    translate((xpos+spacing),(ypos+leading));
    drawD();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawV();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawA();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawN();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawC();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawE();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawD();
    spacing+=25;
    pop();
    
    
        leading+=85;
        spacing=0;
    
    
    push();
    translate((xpos+spacing),(ypos+leading));
    drawT();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawE();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawC();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawH();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawN();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawO();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawL();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawO();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawG();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawY();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    //    drawSPACE();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawI();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawS();
    spacing+=25;
    pop();
    
        leading+=85;
        spacing=0;
    
    push();
    translate((xpos+spacing),(ypos+leading));
    drawI();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawN();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawD();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawI();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawS();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawT();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawI();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawN();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawG();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawU();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawI();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawS();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawH();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawA();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawB();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawL();
    spacing+=25;
    pop();

    push();
    translate((xpos+spacing),(ypos+leading));
    drawE();
    spacing+=25;
    pop();

        leading+=85;
        spacing=0;
    
    push();
    translate((xpos+spacing),(ypos+leading));
    drawF();
    spacing+=25;
    pop();    
    
    push();
    translate((xpos+spacing),(ypos+leading));
    drawR();
    spacing+=25;
    pop();    
    
    push();
    translate((xpos+spacing),(ypos+leading));
    drawO();
    spacing+=25;
    pop();    
    
    push();
    translate((xpos+spacing),(ypos+leading));
    drawM();
    spacing+=25;
    pop();   
    
    push();
    translate((xpos+spacing),(ypos+leading));
    // drawSPACE();
    spacing+=25;
    pop();   
    
    push();
    translate((xpos+spacing),(ypos+leading));
    drawM();
    spacing+=25;
    pop();     
    
    push();
    translate((xpos+spacing),(ypos+leading));
    drawA();
    spacing+=25;
    pop();      
 
    push();
    translate((xpos+spacing),(ypos+leading));
    drawG();
    spacing+=25;
    pop();      
    
    push();
    translate((xpos+spacing),(ypos+leading));
    drawI();
    spacing+=25;
    pop(); 
    
    push();
    translate((xpos+spacing),(ypos+leading));
    drawC();
    spacing+=25;
    pop();  
    
    /* reset for draw loop*/
    spacing=0;
    leading=0;
}



/*letters*/
function drawA(){
    push();
    translate(diam+0,-diamCos+20);
    rotate(-sRotater);
    drawShort();  
    pop();
    
    push();
    translate(diamCos+20,diam+0); 
    rotate(sRotater);
    drawTall();
    pop();
    
    push();
    translate(diam+0,diamCos+0);
    rotate(sRotater);
    drawAngleLeft();
    pop();
    
    push();
    translate(diam+0,diamCos+60);
    rotate(sRotater);
    drawCross(); 
    pop();
}

function drawB(){
    push();
    translate(diamCos+0,-diam+0);
    rotate(sRotater); 
    drawTall(); 
    pop();
    
    push();
    translate(diamCos+0,diam+0);
    rotate(sRotater);
    drawAngleRight();
    pop();
    
    push();
    translate(diamCos+0,diam+20);
    rotate(sRotater);
    drawAngleLeft();
    pop();
    
    push();
    translate(diamCos+0,diam+40);
    rotate(sRotater);
    drawAngleRight();
    pop();
    
    push();
    translate(diamCos+0,diam+60);
    rotate(sRotater);
    drawAngleLeft();
    pop();
}

function drawC(){
    push();
    translate(diam+0,-diamCos+0);
    rotate(-sRotater);
    drawTall(); 
    pop();
    
    push();
    translate(diam+0,diamCos+0);
    rotate(sRotater);
    drawAngleRight();
    pop();
    
    push();
    translate(diamCos+0,diam+60);
    rotate(diam-sRotater);
    drawAngleLeft();
    pop();
}

function drawD(){
    push();
    translate(diam+0,diamCos+0);
    rotate(sRotater);
    drawTall(); 
    pop();
    
    push();
    translate(diamCos+0,diam+0);
    rotate(sRotater);
    drawAngleRight();
    pop();
    
    push();
    translate(diamCos+20,diam+20);
    rotate(sRotater);
    drawExtraShort(); 
    pop();
    
    push();
    translate(diam+0,diamCos+60);
    rotate(sRotater);
    drawAngleLeft(); 
    pop();
}

function drawE(){
    push();
    translate(diam+0,diamCos+0);
    rotate(sRotater);
    drawTall(); 
    pop();
    
    push();
    translate(diamCos+0,diam+0);
    rotate(sRotater);
    drawAngleRight();
    pop();
    
    push();
    translate(diamCos+0,diam+60);
    rotate(sRotater);
    drawCross(); 
    pop();
    
    push();
    translate(diam+0,diamCos+80);
    rotate(sRotater);
    drawCross(); 
    pop();
}

function drawF(){
    push();
    translate(diamCos+0,diam+0);
    rotate(-sRotater);
    drawTall(); 
    pop();
     
    push();
    translate(diam+0,diamCos+0); 
    rotate(sRotater);
    drawAngleRight();
    pop();
     
    push();
    translate(diam+0,diamCos+40);
    rotate(sRotater);
    drawAngleRight();
    pop();
}

function drawG(){
    push();
    translate(-diam+0,-diamCos+0);
    rotate(sRotater);
    drawTall(); 
    pop();
    
    push();
    translate(diamCos+20,diam+60);
    rotate(sRotater);
    drawSuperShort(); 
    pop();
    
    push();
    translate(-diam+0,diam+0);
    rotate(sRotater);
    drawAngleRight();
    pop();
    
    push();
    translate(diamCos+0,diam+60);
    rotate(-sRotater);
    drawAngleRight();
    pop();
    
    push();
    translate(diamCos+0,-diam+80);
    drawCross();
    pop();
}

function drawH(){
    push();
    translate(diam+0,diamCos+0);
    rotate(sRotater);
    drawTall(); 
    pop();
    
    push();
    translate(-diam+20,diamCos+0);
    rotate(sRotater);
    drawTall(); 
    pop(); 
    
    push();
    translate(diamCos+0,-diam+60);
    rotate(sRotater);
    drawCross();
    pop();
}

function drawI(){
    push();
    translate(-diam+10,-diamCos+0);
    rotate(-sRotater);
    drawTall(); 
    pop();
    
    push();
    translate(diam+0,-diamCos+0);
    rotate(sRotater);
    drawCross();  
    pop(); 
    
    push();
    translate(-diam+0,-diamCos+80);
    rotate(sRotater);
    drawCross();
    pop();
}

function drawJ(){
    push();
    translate(diam+20,-diamCos+0);
    drawTall(); 
    pop();
    
    push();
    translate(0,0);
    drawCross();  
    pop(); 
    
    push();
    translate(0,60);
    drawAngleRight();
    pop();
}

function drawK(){
    push();
    translate(0,0);
    drawTall(); 
    pop();
    
    push();
    translate(0,0);
    drawAngleLeft();  
    pop(); 
    
    push();
    translate(0,60);
    drawAngleRight();
    pop();
}

function drawL(){
    push();
    translate(diamCos+0,diam+0);
    rotate(sRotater);
    drawTall(); 
    pop();
    
    push();
    translate(diam+0,-diamCos+80);
    rotate(-sRotater);
    drawCross();  
    pop(); 

}

function drawM(){
    push();
    translate(-diamCos+0,-diam+0);
    rotate(sRotater);
    drawTall(); 
    pop();
    
    push();
    translate(diam+20,diamCos+0);
    rotate(sRotater);
    drawTall(); 
    pop();
    
    push();
    translate(diam+0,diamCos+0);
    rotate(sRotater);
    drawAngleRight();  
    pop(); 
    
    push();
    translate(diamCos+0,diam+0);
    rotate(sRotater);
    drawAngleLeft();  
    pop(); 
}

function drawN(){
    push();
    translate(0,diam+0);
    rotate(sRotater);
    drawTall(); 
    pop();
    
    push();
    translate(diam+20,0);
    rotate(sRotater);
    drawTall(); 
    pop();
    
    push();
    translate(0,diam+0);
    rotate(sRotater);
    drawAngleRight();  
    pop(); 

}

function drawO(){
    push();
    translate(diamCos+0,diam+20);
    rotate(sRotater);
    drawShort(); 
    pop();
    
    push();
    translate(-diam+20,-diamCos+0);
    rotate(sRotater);
    drawShort(); 
    pop();
    
    push();
    translate(diamCos+0,diam+0);
    rotate(sRotater);
    drawAngleLeft();  
    pop(); 
    
    push();
    translate(-diam+0,-diamCos+60); 
    rotate(sRotater);
    drawAngleLeft();  
    pop();

}

function drawP(){
    push();
    translate(0,0);
    rotate(sRotater);
    drawTall(); 
    pop();
    
    push();
    translate(0,0);
    drawAngleRight();
    pop();
    
    push();
    translate(0,20);
    drawAngleLeft();
    pop();
    
}

function drawQ(){
    push();
    translate(0,20);
    drawShort(); 
    pop();
    
    push();
    translate(20,0);
    drawShort(); 
    pop();
    
    push();
    translate(0,0);
    drawAngleLeft();  
    pop(); 
    
    push();
    translate(0,60); 
    drawAngleLeft();  
    pop();
    
    push();
    translate(0,60); 
    drawAngleRight();  
    pop();
}

function drawR(){
    push();
    translate(diam+0,0);
    rotate(-sRotater);
    drawTall(); 
    pop();
    
    push();
    translate(diam+0,0);
    rotate(-sRotater);
    drawAngleRight(); 
    pop();
    
    push();
    translate(0,20);
    rotate(-sRotater);
    drawAngleLeft();
    pop();
    
    push();
    translate(0,diam+60);
    rotate(-sRotater);
    drawAngleRight();
    pop();
    
}

function drawS(){
    push();
    translate(diam+0,0);
    rotate(sRotater);
    drawExtraShort(); 
    pop();
    
    push();
    translate(0,diam+0);
    rotate(sRotater);
    drawAngleRight();
    pop();
    
    push();
    translate(diam+0,40);
    rotate(sRotater);
    drawCross(); 
    pop();
    
    push();
    translate(20,diam+40);  
    rotate(sRotater);
    drawExtraShort();  
    pop();
    
    push();
    translate(0,diam+60);
    rotate(sRotater);
    drawAngleRight();
    pop();  
}

function drawT(){
    push();
    translate(diam+10,0);
    rotate(sRotater);
    drawTall(); 
    pop();
    
    push();
    translate(0,diam+0);
    rotate(sRotater);
    drawAngleRight(); 
    pop(); 
}

function drawU(){
    push();
    translate(diam+0,0);
    rotate(-sRotater);
    drawTall(); 
    pop();
    
    push();
    translate(diam+20,0);
    rotate(-sRotater);
    drawTall(); 
    pop();
    
    push();
    translate(0,diam+80);
    rotate(-sRotater);
    drawCross(); 
    pop(); 
}

function drawV(){
    push();
    translate(0,diam+20);
    rotate(sRotater);
    drawExtraShort(); 
    pop();
    
    push();
    translate(diam+20,0);
    rotate(sRotater);
    drawTall(); 
    pop();
    
    push();
    translate(0,diam+60);
    rotate(sRotater);
    drawAngleRight(); 
    pop(); 
}

function drawW(){
    push();
    translate(0,0);
    drawTall(); 
    pop();
    
    push();
    translate(20,0);
    drawTall(); 
    pop();
    
    push();
    translate(0,60);
    drawAngleRight();  
    pop(); 
    
    push();
    translate(0,60);
    drawAngleLeft();  
    pop(); 
}

function drawX(){
    push();
    translate(0,0);
    drawExtraShort(); 
    pop();
    
    push();
    translate(20,0);
    drawExtraShort(); 
    pop();
    
    push();
    translate(0,60);
    drawSuperShort(); 
    pop();
    
    push();
    translate(20,60);
    drawSuperShort(); 
    pop();
    
    push();
    translate(0,40);
    drawAngleRight();  
    pop(); 
    
    push();
    translate(0,40);
    drawAngleLeft();  
    pop(); 
}

function drawY(){

    push();
    translate(diam+10,diam+40);
    rotate(sRotater);
    drawExtraShort();  
    pop();
    
    push();
    translate(diam+20,0); 
    rotate(sRotater);
    drawExtraShort(); 
    pop();
    
    push();
    translate(0,diam+0);
    rotate(sRotater);
    drawShort(); 
    pop();

    push();
    translate(0,diam+40);
    rotate(-sRotater);
    drawAngleLeft();  
    pop(); 
}

function drawZ(){

    push();
    translate(20,0);
    drawSuperShort();   
    pop();
    
    push();
    translate(0,60);
    drawSuperShort();   
    pop();
    
    push();
    translate(0,0);
    drawAngleLeft();   
    pop();
    
    push();
    translate(0,20);
    drawAngleLeft();   
    pop()
    
    push();
    translate(0,40);
    drawAngleLeft();   
    pop()
    
    push();
    translate(0,60);
    drawAngleLeft();   
    pop()
}




/*components*/
function drawTall(){
    push();
    translate(0,0);
    line(0,0,0,80);
    pop();
}

function drawShort(){
    push();
    translate(0,0);
    line(0,0,0,60); 
    pop();
}

function drawExtraShort(){
    push();
    translate(0,0);
    line(0,0,0,40); 
    pop();
}

function drawSuperShort(){
    push();
    translate(0,0);
    line(0,0,0,20); 
    pop();
}


function drawCross(){
    push();
    translate(0,0);
    line(0,0,20,0);  
    pop();
}

function drawAngleRight(){
    push();
    translate(0,0);
    line(0,0,20,20); 
    pop();
}

function drawAngleLeft(){
    push();
    translate(0,0);
    line(20,0,0,20); 
    pop();
}


function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}