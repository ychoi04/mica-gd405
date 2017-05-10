

//var delayTimer = 500;
//var drawNext;
var nextLetter = 1;


var crazyTranslate=(-10);

var xStart=0; 
var yStart=150; 
var xPos;
var yPos;
var xLeading=30; 
var giveLeading=15;


//(rotator)
var cubeRotation =(45);
var counter = 0;
var play=true;

var colorStroke;
var blackStroke;

var colorFill;       
var blackFill;
var endFill;
 
var sceneCount = 0;


function setup() { 
    createCanvas(900, 700);

    angleMode(DEGREES);





    }




function draw() { 

  
    

    if (nextLetter==27){
        nextLetter=1;
    }
    
    
    if (play){
        cubeRotation +=1;
        }    



    if (counter>=45){
        play=!play;
        counter=0;
        }
        counter += 1;


    if (sceneCount == 0) {
        drawABC();
    
    } else if (sceneCount == 1){
        drawPATH();

  } 
    else if (sceneCount == 2) {
    drawABCdelay();
  }
    
  if (sceneCount <= 0) {
    sceneCount = 0;
      play=false;
  }
  if (sceneCount > 2) {
    sceneCount = 2;
  }    
    
}



function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    sceneCount--;
  } else if (keyCode == RIGHT_ARROW) {
    sceneCount++;
  }else if (keyCode == DOWN_ARROW) {
    
  }else if (keyCode == UP_ARROW) {
    
  }
}



function drawPATH() { 
   
    background(255,50,50);
    colorFill= color(255);   
    blackFill= color(0,255,255,0);
    endFill=color(255);
    colorStroke=0;
    blackStroke=0;
    
     
    
        xStart = 100;
        yStart =200;
    
        drawT();
        xStart += 60;
        drawH();
        xStart += 60;
        drawE();
        xStart += 60;
        drawSPACE();
        xStart += 60;
        drawP();
        xStart += 60;
        drawA();
        xStart += 60;
        drawT();
        xStart += 60;
        drawH();
    
        xStart = 200;
        yStart += 150;
 
        drawO();
        xStart += 60;
        drawF();
    
        xStart = 100;
        yStart += 150;
    
        drawN();
        xStart += 60;
        drawE();
        xStart += 60;
        drawE();
        xStart += 60;
        drawD();
        xStart += 60;
        drawL();
        xStart += 60;
        drawE();
        xStart += 60;
        drawS();

        xStart = 200;
        yStart =150;

}
    
    
    


    
function drawABC(){
    background(255);
    colorFill= color(150,0,100,0);   
    blackFill= color(0,255,255,0);
    endFill=color(255,50,50);
    colorStroke=1;
    blackStroke=0;
    cubeRotation =(45);
    
    
    drawA();
    xStart += 60;
    drawB(); 
    xStart += 60;
    drawC();
    xStart += 60;
    drawD();
    xStart += 60;
    drawE();
    xStart += 60;
    drawF();
    xStart += 60;
    drawG();
    xStart += 60;
    drawH(); 
    xStart += 60;
    drawI();
    xStart += 60;
    drawJ();
    xStart += 60;
    drawK(); 
    xStart += 60;
    drawL();
    xStart =0;
    yStart += 200;
    drawM();
    xStart += 90;
    drawN();
    xStart += 60;
    drawO();
    xStart += 60;
    drawP();
    xStart += 60;
    drawQ();
    xStart += 60;
    drawR();
    xStart += 60;
    drawS();
    xStart += 60;
    drawT();
    xStart += 60;
    drawU();
    xStart += 60;
    drawV();
    xStart += 60;
    drawW();
    xStart += 90;
    xStart =0;
    yStart += 200;
    drawX();
    xStart += 60;
    drawY();
    xStart += 60;
    drawZ();
    xStart += 60;

    xStart=0; 
    yStart=150; 
    
}

function drawABCdelay(){
    background(255);
    colorFill= color(150,0,100,0);   
    blackFill= color(0,255,255,0);
    endFill=color(255,50,50);
    colorStroke=1;
    blackStroke=0;
    
    xStart=400;
    yStart=400;


    drawNext(0,0);

    
    }
     

    


function drawNext(){
    
    if (nextLetter == 1){
        drawA();
        nextLetter+=1;
    } else if (nextLetter == 2){
        drawB();
        nextLetter+=1;
    } else if (nextLetter == 3){
        drawC();
        nextLetter+=1;
    } else if (nextLetter == 4){
        drawD();
        nextLetter+=1;
    } else if (nextLetter == 5){
        drawE();
        nextLetter+=1;
    } else if (nextLetter == 6){
        drawF();
        nextLetter+=1;
    } else if (nextLetter == 7){
        drawG();
        nextLetter+=1;
    } else if (nextLetter == 8){
        drawH();
        nextLetter+=1;
    } else if (nextLetter == 9){
        drawI();
        nextLetter+=1;
    } else if (nextLetter == 10){
        drawJ();
        nextLetter+=1;
    } else if (nextLetter == 11){
        drawK();
        nextLetter+=1;
    } else if (nextLetter == 12){
        drawL();
        nextLetter+=1;
    } else if (nextLetter == 13){
        drawM();
        nextLetter+=1;
    } else if (nextLetter == 14){
        drawN();
        nextLetter+=1;
    } else if (nextLetter == 15){
        drawO();
        nextLetter+=1;
    } else if (nextLetter == 16){
        drawP();
        nextLetter+=1;
    } else if (nextLetter == 17){
        drawQ();
        nextLetter+=1;
    } else if (nextLetter == 18){
        drawR();
        nextLetter+=1;
    } else if (nextLetter == 19){
        drawS();
        nextLetter+=1;
    } else if (nextLetter == 20){
        drawT();
        nextLetter+=1;
    } else if (nextLetter == 21){
        drawU();
        nextLetter+=1;
    } else if (nextLetter == 22){
        drawV();
        nextLetter+=1;
    } else if (nextLetter == 23){
        drawW();
        nextLetter+=1;
    } else if (nextLetter == 24){
        drawX();
        nextLetter+=1;
    } else if (nextLetter == 25){
        drawY();
        nextLetter+=1;
    } else if (nextLetter == 26){
        drawZ();
        nextLetter+=1;
    }

}


//function keyTyped(){
//
//    if (key=='a'){
//    drawA();  
//    xStart += 60;
//    }else if (key=='b'){
//    drawB();  
//    xStart += 60;
//    }else if (key=='c'){
//    drawC();  
//    xStart += 60;
//    }else if (key=='d'){
//    drawD();  
//    xStart += 60;
//    }else if (key=='e'){
//    drawE();  
//    xStart += 60;
//    }else if (key=='f'){
//    drawF();  
//    xStart += 60;
//    }else if (key=='g'){
//    drawG();  
//    xStart += 60;
//    }else if (key=='h'){
//    drawH();  
//    xStart += 60;
//    }else if (key=='i'){
//    drawI();  
//    xStart += 60;
//    }else if (key=='j'){
//    drawJ();  
//    xStart += 60;
//    }else if (key=='k'){
//    drawK();  
//    xStart += 60;
//    }else if (key=='l'){
//    drawL();  
//    xStart += 60;
//    }else if (key=='m'){
//    drawM();  
//    xStart += 90;
//    }else if (key=='n'){
//    drawN();  
//    xStart += 60;
//    }else if (key=='o'){
//    drawO();  
//    xStart += 60; 
//    }else if (key=='p'){
//    drawP();  
//    xStart += 60;
//    }else if (key=='q'){
//    drawQ();  
//    xStart += 60;   
//    }else if (key=='r'){
//    drawR();  
//    xStart += 60;
//    }else if (key=='s'){
//    drawS();  
//    xStart += 60;
//    }else if (key=='t'){
//    drawT();  
//    xStart += 60;
//    }else if (key=='u'){
//    drawU();  
//    xStart += 60;
//    }else if (key=='v'){
//    drawV();  
//    xStart += 60;
//    }else if (key=='w'){
//    drawW();  
//    xStart += 90;
//    }else if (key=='x'){
//    drawX();  
//    xStart += 60;   
//    }else if (key=='y'){
//    drawY();  
//    xStart += 60;
//    }else if (key=='z'){
//    drawZ();  
//    xStart += 60;
//    }else if (key==' '){
//    drawSPACE();  
//    xStart += 60;
//
//
//    } 
//
//
//
//
//    if (xStart > width - 60) {
//    xStart = 0;
//    yStart += 150;
//    }
//
//
//
//}




///////////////LETTERS!




function drawA() {
    //first row SHIFT RIGHT  
    xPos=xStart;
    yPos=yStart; 
    yPos=yStart; 

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullColor();
    pop();


    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawSliverTL_BLACK();
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawRightColor();
    pop();

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();      

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawSliverBL_BLACK();
    pop(); 

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;   


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();      



    //RESET FOR NEXT LETTER    
    xPos=xStart;
    yPos=yStart;    
    giveLeading=15;
}




/////////////////////



function drawB() {
    //first row SHIFT RIGHT  
    xPos=xStart;
    yPos=yStart;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullBlack();
    pop();


    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawRightColor();
    pop();

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();      

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop(); 

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;   


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();     

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();      



    //RESET FOR NEXT LETTER    
    xPos=xStart;
    yPos=yStart;    
    giveLeading=15;
}


////////////////////






function drawC() {
    
    
    //first row SHIFT RIGHT  
    xPos=xStart;
    yPos=yStart;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullBlack();
    pop();


    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawSliverTL_BLACK();
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawBottomColor(); 
    pop();

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullBlack();
    pop();

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();      

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawSliverBL_BLACK();
    pop(); 

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;   


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();      



    //RESET FOR NEXT LETTER    
    xPos=xStart;
    yPos=yStart;    
    giveLeading=15;
    }




    /////////////////////////



function drawD() {
        
    //first row SHIFT RIGHT  
    xPos=xStart;
    yPos=yStart;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullColor();
    pop();


    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawRightColor();
    pop();

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();      

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawSliverBL_BLACK();
    pop(); 

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;   


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();      



    //RESET FOR NEXT LETTER    
    xPos=xStart;
    yPos=yStart;    
    giveLeading=15;
    }






function drawE() {
        
        
    //first row SHIFT RIGHT  
    xPos=xStart;
    yPos=yStart;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullBlack();
    pop();


    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawSliverTL_BLACK();
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawBottomColor(); 
    pop();

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawTopColor();
    pop();

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();      

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawSliverBL_BLACK();
    pop(); 

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;   


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();      



    //RESET FOR NEXT LETTER    
    xPos=xStart;
    yPos=yStart;    
    giveLeading=15;
    }







function drawF() {
        
        
    //first row SHIFT RIGHT  
    xPos=xStart;
    yPos=yStart;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullBlack();
    pop();


    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullBlack();
    pop();

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();      

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop(); 

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;   


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();     

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawSliverBR_BLACK();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();      



    //RESET FOR NEXT LETTER    
    xPos=xStart;
    yPos=yStart;    
    giveLeading=15;
    }



    /////////////////////



function drawG() { 
        
    //first row SHIFT RIGHT  
    xPos=xStart;
    yPos=(yStart+60);   

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullBlack();
    pop();


    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60; 
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawRightColor();
    pop();

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();      

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;   


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();     

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawSliverBL_BLACK();
    pop();      


    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawBottomColor();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();    




    //RESET FOR NEXT LETTER    
    xPos=xStart;
    yPos=yStart;    
    giveLeading=15;
    }
    //////////////////////////////////







    /////////////////////

function drawH() {
        
        
    //first row SHIFT RIGHT  
    xPos=xStart;
    yPos=yStart;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullColor();
    pop();


    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawRightColor();
    pop();

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();      

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop(); 

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;   


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();     

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();      



    //RESET FOR NEXT LETTER    
    xPos=xStart;
    yPos=yStart;    
    giveLeading=15;
    }


    ////////////////////





function drawI() {
        
    //first row SHIFT RIGHT  
    xPos=xStart;
    yPos=yStart;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullBlack();
    pop();


    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawSliverTL_BLACK();
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawBottomColor();  
    pop();

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullBlack();
    pop();

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawSliverBR();
    pop();      

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop(); 

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;   


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();      



    //RESET FOR NEXT LETTER    
    xPos=xStart;
    yPos=yStart;    
    giveLeading=15;
    }

    /////////////////////




function drawJ() { 
        
    //first row SHIFT RIGHT  
    xPos=xStart;
    yPos=(yStart+60);   

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullBlack();
    pop();


    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60; 
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawRightColor();
    pop();

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();      

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;   


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawSliverBL_BLACK();
    pop();      


    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawSliverBL();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();    




    //RESET FOR NEXT LETTER    
    xPos=xStart;
    yPos=yStart;    
    giveLeading=15;
        
    }


    //////////////////////////////////


function drawK() {
        
    //first row SHIFT RIGHT  
    xPos=xStart;
    yPos=yStart;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullColor();
    pop();


    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawRightColor();
    pop();

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();      

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop(); 

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;   


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();     

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  
    //
    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();      



    //RESET FOR NEXT LETTER    
    xPos=xStart;
    yPos=yStart;    
    giveLeading=15;
    }


    ////////////////////





    //////////////////////////////////////



function drawL() {
        
    //first row SHIFT RIGHT  
    xPos=xStart;
    yPos=yStart;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullBlack();
    pop();


    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawSliverTL_BLACK();
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawBottomColor();
    pop();

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullBlack();
    pop();

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();      

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop(); 

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;   


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();     

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();      



    //RESET FOR NEXT LETTER    
    xPos=xStart;
    yPos=yStart;    
    giveLeading=15;
    }



function drawM() {
        
    //first row SHIFT RIGHT  
    xPos=xStart;
    yPos=yStart;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullColor();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullColor();
    pop();


    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop(); 

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawRightColor();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawRightColor();
    pop();

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();   

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();      

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawSliverBL_BLACK();
    pop(); 

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawSliverBL_BLACK();
    pop(); 

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;   


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop(); 

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();      

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //RESET FOR NEXT LETTER    
    xPos=xStart;
    yPos=yStart;    
    giveLeading=15;
    }


    ///////////////////////






    //////////////////////////////////////


function drawN() {
        
    //first row SHIFT RIGHT  
    xPos=xStart;
    yPos=yStart;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullColor();
    pop();


    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawRightColor();
    pop();

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();      

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawSliverBL_BLACK();
    pop(); 

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;   


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();      



    //RESET FOR NEXT LETTER    
    xPos=xStart;
    yPos=yStart;    
    giveLeading=15;
    }


    ///////////////////////








function drawO() {

    //first row SHIFT RIGHT  
    xPos=xStart;
    yPos=yStart;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullBlack();
    pop();


    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawSliverTL_BLACK();
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawRightColor();
    pop();

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();      

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawSliverBL_BLACK();
    pop(); 

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;   


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();      



    //RESET FOR NEXT LETTER    
    xPos=xStart;
    yPos=yStart;    
    giveLeading=15;
    }









    /////////////////////

function drawP() { 
        
    //first row SHIFT RIGHT  
    xPos=xStart;
    yPos=(yStart+60);   

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullBlack();
    pop();


    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60; 
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullBlack();
    pop();

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();      

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;   


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();     

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawSliverBL_BLACK();
    pop();      


    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();    




    //RESET FOR NEXT LETTER    
    xPos=xStart;
    yPos=yStart;    
    giveLeading=15;
    }
    //////////////////////////////////



function drawQ() { 
        
    //first row SHIFT RIGHT  
    xPos=xStart;
    yPos=(yStart+60);   

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullColor();
    pop();


    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60; 
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawRightColor();
    pop();

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();      

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;   


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();     

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawSliverBL_BLACK();
    pop();      


    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawBottomColor();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();    




    //RESET FOR NEXT LETTER    
    xPos=xStart;
    yPos=yStart;    
    giveLeading=15;
    }
    //////////////////////////////////



function drawR() {
        
    //first row SHIFT RIGHT  
    xPos=xStart;
    yPos=yStart;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullBlack();
    pop();


    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack(); 
    pop();

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullBlack();
    pop();

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor(); 
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawTopColor();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();      

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop(); 

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;   


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();      



    //RESET FOR NEXT LETTER    
    xPos=xStart;
    yPos=yStart;    
    giveLeading=15;
    }




    /////////////////////////




function drawS() {
        
    //first row SHIFT RIGHT  
    xPos=xStart;
    yPos=yStart;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullBlack();
    pop();


    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullColor();
    pop();

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();      

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop(); 

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;   


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();  

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();      



    //RESET FOR NEXT LETTER    
    xPos=xStart;
    yPos=yStart;    
    giveLeading=15;
    }





    /////////////////////


function drawT() {
        
    //first row SHIFT RIGHT  
    xPos=xStart;
    yPos=yStart;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullBlack();
    pop();


    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawSliverTL_BLACK();
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawBottomColor();
    pop();

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullBlack();
    pop();

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawSliverBR_BLACK();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();      

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawBottomColor();
    pop(); 

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;   


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();     

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();      



    //RESET FOR NEXT LETTER    
    xPos=xStart;
    yPos=yStart;    
    giveLeading=15;
    }

    //////////////////////////////////////


function drawU() {
    
    //first row SHIFT RIGHT  
    xPos=xStart;
    yPos=yStart;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullColor();
    pop();


    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawSliverTL_BLACK();
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawRightColor();
    pop();

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();      

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop(); 

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;   


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();      



    //RESET FOR NEXT LETTER    
    xPos=xStart;
    yPos=yStart;    
    giveLeading=15;
        
    }



    //////////////////////////////////////



function drawV() {
    
    //first row SHIFT RIGHT  
    xPos=xStart;
    yPos=yStart;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullBlack();
    pop();


    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawSliverTL_BLACK();
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawRightColor();
    pop();

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();      

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop(); 

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;   


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();      



    //RESET FOR NEXT LETTER    
    xPos=xStart;
    yPos=yStart;    
    giveLeading=15;
    }

    //////////////////////////////




function drawW() {
    
    //first row SHIFT RIGHT  
    xPos=xStart;
    yPos=yStart;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullColor();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();


    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawSliverTL_BLACK();
    pop();   

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawSliverTL_BLACK();
    pop();

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawRightColor();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawRightColor();
    pop();

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop(); 

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();      

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop(); 

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;   


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop(); 

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop(); 

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop(); 

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop(); 

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop(); 

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();      



    //RESET FOR NEXT LETTER    
    xPos=xStart;
    yPos=yStart;    
    giveLeading=15;
    }

    //////////////////////////////




function drawX() {
        
    //first row SHIFT RIGHT  
    xPos=xStart;
    yPos=yStart;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawLeftColor();
    pop();


    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor(); 
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullColor();
    pop();

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();      

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop(); 

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;   


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();      



    //RESET FOR NEXT LETTER    
    xPos=xStart;
    yPos=yStart;    
    giveLeading=15;
    }

    //////////////////////////////

function drawY() { 
        
    //first row SHIFT RIGHT  
    xPos=xStart;
    yPos=(yStart+60);   

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullBlack();
    pop();


    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60; 
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawBottomColor();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawRightColor();
    pop();

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();      

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;   


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();     

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();      


    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading+60;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();    




    //RESET FOR NEXT LETTER    
    xPos=xStart;
    yPos=yStart;    
    giveLeading=15;
    }
    //////////////////////////////////






function drawZ() {
    
    //first row SHIFT RIGHT  
    xPos=xStart;
    yPos=yStart;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawTopColor();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawLeftColor();
    pop();


    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor(); 
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullColor();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullColor();
    pop();

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawLeftColor();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawRightColor();
    pop();      

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawBottomColor();
    pop(); 

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;   


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();      



    //RESET FOR NEXT LETTER    
    xPos=xStart;
    yPos=yStart;    
    giveLeading=15;
        
    }

    //////////////////////////////






function drawSPACE() {
    
    //first row SHIFT RIGHT  
    xPos=xStart;
    yPos=yStart;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();
    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullBlack();
    pop();


    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();    

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullBlack();
    pop();

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();   

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();      

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop(); 

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;   


    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    //NEW ROW SHIFT RIGHT
    xPos=xStart;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();     

    //NEW ROW SHIFT LEFT
    xPos=xStart-15;
    yPos=yStart-giveLeading;
    giveLeading=giveLeading+15;    

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos); 
    drawFullBlack();
    pop();      



    //RESET FOR NEXT LETTER    
    xPos=xStart;
    yPos=yStart;    
    giveLeading=15;
        
    }


    ////////////////////////////////////



function drawPal() {

    xPos=xStart;
    yPos=yStart;

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullBlack();
    pop();

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawFullColor();
    pop(); 

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawRightColor();
    pop();  

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawLeftColor();
    pop(); 

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawTopColor();
    pop(); 

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawBottomColor();
    pop(); 

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawSliverTR();
    pop(); 

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawSliverBR();
    pop(); 

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawSliverBL();
    pop(); 

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawSliverTL();
    pop(); 


    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawSliverTR_BLACK();
    pop(); 

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawSliverBR_BLACK();
    pop(); 

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawSliverBL_BLACK();
    pop(); 

    push();
    translate(xPos=(xPos+xLeading), yPos);
    drawSliverTL_BLACK();
    pop();
    }




















    ////////////////PIXELS (set Parameters here)


function drawFullBlack() {

    push();

    rotate(cubeRotation);

    translate(crazyTranslate, crazyTranslate);
    fill(blackFill); 
    strokeWeight(blackStroke);
    strokeJoin(BEVEL);
    beginShape();
    vertex(0, 0);
    vertex(0, 20);
    vertex(20, 20);
    vertex(20, 0);
    vertex(0, 0);
    endShape();

    pop();
    }



function drawFullColor() {

    push();

    rotate(cubeRotation);    
    translate(crazyTranslate, crazyTranslate);
    fill(endFill);
    strokeWeight(colorStroke);
    strokeJoin(BEVEL);
    beginShape();
    vertex(0, 0);
    vertex(0, 20);
    vertex(20, 20);
    vertex(20, 0);
    vertex(0, 0);
    endShape();

    pop();
    }

function drawRightColor() {

    push();

    rotate(cubeRotation);    
    translate(crazyTranslate, crazyTranslate);
    fill(blackFill); 
    strokeWeight(blackStroke);
    strokeJoin(BEVEL);
    beginShape();
    vertex(0, 0);
    vertex(20, 20);
    vertex(0, 20);
    vertex(0, 0);
    endShape();

    pop();

    push();

    rotate(cubeRotation);    
    translate(crazyTranslate, crazyTranslate);
    fill(colorFill); 
    strokeWeight(colorStroke);
    strokeJoin(BEVEL);
    beginShape();
    vertex(0, 0);
    vertex(20, 0);
    vertex(20, 20);
    vertex(0, 0);
    endShape();

    pop();
    }



function drawLeftColor() {

    push();

    rotate(cubeRotation);    
    translate(crazyTranslate, crazyTranslate);    
    fill(colorFill); 
    strokeWeight(colorStroke);
    strokeJoin(BEVEL);
    beginShape();
    vertex(0, 0);
    vertex(20, 20);
    vertex(0, 20);
    vertex(0, 0);
    endShape();

    pop();

    push();

    rotate(cubeRotation);    
    translate(crazyTranslate, crazyTranslate);    
    fill(blackFill); 
    strokeWeight(blackStroke);
    strokeJoin(BEVEL);
    beginShape();
    vertex(0, 0);
    vertex(20, 0);
    vertex(20, 20);
    vertex(0, 0);
    endShape();

    pop();
    }


function drawTopColor() {

    push();

    rotate(cubeRotation);    
    translate(crazyTranslate, crazyTranslate);
    fill(colorFill); 
    strokeWeight(colorStroke);
    strokeJoin(BEVEL);
    beginShape();
    vertex(0, 0);
    vertex(0, 20);
    vertex(20, 0);
    vertex(0, 0);
    endShape();

    pop();

    push();

    rotate(cubeRotation);    
    translate(crazyTranslate, crazyTranslate);
    fill(blackFill); 
    strokeWeight(blackStroke);
    strokeJoin(BEVEL);
    beginShape();
    vertex(0, 20);
    vertex(20, 20);
    vertex(20, 0);
    vertex(0, 20);
    endShape();

    pop();
    }


function drawBottomColor() {

    push();

    rotate(cubeRotation);    
    translate(crazyTranslate, crazyTranslate);
    fill(blackFill); 
    strokeWeight(blackStroke);
    strokeJoin(BEVEL);
    beginShape();
    vertex(0, 0);
    vertex(0, 20);
    vertex(20, 0);
    vertex(0, 0);
    endShape();

    pop();

    push();

    rotate(cubeRotation);    
    translate(crazyTranslate, crazyTranslate);
    fill(colorFill); 
    strokeWeight(colorStroke);
    strokeJoin(BEVEL);
    beginShape();
    vertex(0, 20);
    vertex(20, 20);
    vertex(20, 0);
    vertex(0, 20);
    endShape();

    pop();
    }


function drawSliverTR() {

    push();

    rotate(cubeRotation);    
    translate(crazyTranslate, crazyTranslate);
    fill(blackFill); 
    strokeWeight(blackStroke);
    beginShape();
    vertex(0, 0);
    vertex(10, 10);
    vertex(20, 0);
    vertex(20, 20);
    vertex(0, 20);
    vertex(0, 0);
    endShape();

    pop();

    push();

    rotate(cubeRotation);    
    translate(crazyTranslate, crazyTranslate);
    fill(colorFill); 
    strokeWeight(colorStroke);
    strokeJoin(BEVEL);
    beginShape();
    vertex(0, 0);
    vertex(10, 10);
    vertex(20, 0);
    vertex(0, 0);
    endShape();

    pop();
    }

function drawSliverBR() {

    push();

    rotate(cubeRotation);    
    translate(crazyTranslate, crazyTranslate);
    fill(blackFill); 
    strokeWeight(blackStroke);
    beginShape();
    vertex(0, 0);
    vertex(20, 0);
    vertex(10, 10);
    vertex(20, 20);
    vertex(0, 20);
    vertex(0, 0);
    endShape();

    pop();

    push();

    rotate(cubeRotation);    
    translate(crazyTranslate, crazyTranslate);
    fill(colorFill); 
    strokeWeight(colorStroke);
    beginShape();
    vertex(20, 0);
    vertex(10, 10);
    vertex(20, 20);
    vertex(20, 0);
    endShape();

    pop();
    }


function drawSliverBL() {

    push();

    rotate(cubeRotation);    
    translate(crazyTranslate, crazyTranslate);
    fill(blackFill); 
    strokeWeight(blackStroke);
    strokeJoin(BEVEL);
    beginShape();
    vertex(0, 0);
    vertex(20, 0);
    vertex(20, 20);
    vertex(10, 10);
    vertex(0, 20);
    vertex(0, 0);
    endShape();

    pop();

    push();

    rotate(cubeRotation);    
    translate(crazyTranslate, crazyTranslate);
    fill(colorFill); 
    strokeWeight(colorStroke);
    strokeJoin(BEVEL);
    beginShape();
    vertex(20, 20);
    vertex(10, 10);
    vertex(0, 20);
    vertex(20, 20);
    endShape();

    pop();
    }


function drawSliverTL() {

    push();

    rotate(cubeRotation);    
    translate(crazyTranslate, crazyTranslate);
    fill(blackFill); 
    strokeWeight(blackStroke);
    strokeJoin(BEVEL);
    beginShape();
    vertex(0, 0);
    vertex(20, 0);
    vertex(20, 20);
    vertex(0, 20);
    vertex(10, 10);
    vertex(0, 0);
    endShape();

    pop();

    push();

    rotate(cubeRotation);    
    translate(crazyTranslate, crazyTranslate);
    fill(colorFill); 
    strokeWeight(colorStroke);
    beginShape();
    vertex(0, 0);
    vertex(10, 10);
    vertex(0, 20);
    vertex(0, 0);
    endShape();

    pop();
    }



function drawSliverTR_BLACK() {

    push();

    rotate(cubeRotation);    
    translate(crazyTranslate, crazyTranslate);
    fill(colorFill); 
    strokeWeight(colorStroke);
    beginShape();
    vertex(0, 0);
    vertex(10, 10);
    vertex(20, 0);
    vertex(20, 20);
    vertex(0, 20);
    vertex(0, 0);
    endShape();

    pop();

    push();

    rotate(cubeRotation);    
    translate(crazyTranslate, crazyTranslate);
    fill(blackFill); 
    strokeWeight(blackStroke);
    strokeJoin(BEVEL);
    beginShape();
    vertex(0, 0);
    vertex(10, 10);
    vertex(20, 0);
    vertex(0, 0);
    endShape();

    pop();
    }

function drawSliverBR_BLACK() {

    push();

    rotate(cubeRotation);    
    translate(crazyTranslate, crazyTranslate);
    fill(colorFill); 
    strokeWeight(colorStroke);
    strokeJoin(BEVEL);
    beginShape();
    vertex(0, 0);
    vertex(20, 0);
    vertex(10, 10);
    vertex(20, 20);
    vertex(0, 20);
    vertex(0, 0);
    endShape();

    pop();

    push();

    rotate(cubeRotation);    
    translate(crazyTranslate, crazyTranslate);
    fill(blackFill); 
    strokeWeight(blackStroke);
    strokeJoin(BEVEL);
    beginShape();
    vertex(20, 0);
    vertex(10, 10);
    vertex(20, 20);
    vertex(20, 0);
    endShape();

    pop();
    }


function drawSliverBL_BLACK() {

    push();

    rotate(cubeRotation);    
    translate(crazyTranslate, crazyTranslate);
    fill(colorFill); 
    strokeWeight(colorStroke);
    strokeJoin(BEVEL);
    beginShape();
    vertex(0, 0);
    vertex(20, 0);
    vertex(20, 20);
    vertex(10, 10);
    vertex(0, 20);
    vertex(0, 0);
    endShape();

    pop();

    push();

    rotate(cubeRotation);    
    translate(crazyTranslate, crazyTranslate);
    fill(blackFill); 
    strokeWeight(blackStroke);
    strokeJoin(BEVEL);
    beginShape();
    vertex(20, 20);
    vertex(10, 10);
    vertex(0, 20);
    vertex(20, 20);
    endShape();

    pop();
    }


function drawSliverTL_BLACK() {

    push();

    rotate(cubeRotation);    
    translate(crazyTranslate, crazyTranslate);
    fill(colorFill); 
    strokeJoin(BEVEL);
    strokeWeight(colorStroke);
    beginShape();
    vertex(0, 0);
    vertex(20, 0);
    vertex(20, 20);
    vertex(0, 20);
    vertex(10, 10);
    vertex(0, 0);
    endShape();

    pop();

    push();

    rotate(cubeRotation);    
    translate(crazyTranslate, crazyTranslate);

    fill(blackFill); 
    strokeJoin(BEVEL);
    strokeWeight(blackStroke);
    beginShape();
    vertex(0, 0);
    vertex(10, 10);
    vertex(0, 20);
    vertex(0, 0);
    endShape();

    pop();
    }

