var question = "DID YOU KNOW WE CAN UNDERSTAND MISPELLED WORDS?"
var intro= "As long as the first & last letter stay are correct, we\ncan understand because we read words as a whole!\n So let's see how smart you are ; )"
var right = "RIGHT ARROW"
var left = "LEFT ARROW"
var reveal= "CLICK CIRCLE TO REVEAL >"


var pp = "PEETR PIEPR PCICKD A PCEK OF\nPKICKED PPPERS. A PCEK OF\nPCIKELD PEPEPRS PEETR PPIER\nPCIKED. IF PTEER PEIPR PKICED\nA PCEK OF PKCILED PPEPERS,\nWEHRE’S THE PCEK OF PLICKED\nPPPEERS PTEER PPIER PCKIED?";
var correctpp = "PETER PIPER PICKED A PECK OF \nPICKLED PEPPERS. A PECK OF\nPICKLED PEPPERS PETER PIPER\nPICKED. IF PETER PIPER PICKED\nA PECK OF PICKLED PEPPERS,\nWHERE'S THE PECK OF PICKLED\nPEPPERS PETER PIPER PICKED?"


var pp2 = "Ingimae an iginamary\nmagneiere maagenr mggaaning\nan iinraamgy meenrgaie."
var correctpp2 = "Imagine an imaginary\nmanagerie manager managing\nan imaginary menagerie."


var pp3 = "BTETY BGUOHT A\nBAR OF BTUETR BUT,\nTHE BEUTTR BTTEY\nBUGHOT WAS BIETTR,\nSO BTTEY BAET A BIT\nOF BTUETR TO MKAE THE\nBTITER BUTETR BTETER\n"
var correctpp3 = "BETTY BOUGHT A\nBAR OF BUTTER BUT,\nTHE BUTTER BETTY\nBOUGHT WAS BITTER,\nSO BETTY BEAT A BIT\nOF BUTTER TO MAKE THE\nBITTER BUTTER BETTER\n"


var luke1 = "eveeln boelnnveet ehaepntls"
var luke2= "eleven benevolent elephants"


var celebrate1 = "Trughoh trehe chesee\nteers there fere\nfleas felw. Wilhe\nthsee fleas felw,\nfzeery bezere blew.\nFeerzy berzee mdae\nthsee terhe teres\nfezere. Ferzey teres\nmdae these teers'\ncsehee feerze. That's\nwhat mdae teshe\ntrehe free feals senzee."
var celebrate2 = "Through three cheese\ntrees three free\nfleas flew. While\nthese fleas flew,\nfreezy breeze blew.\nFreezy breeze made\nthese three trees\nfreeze. Freezy trees\nmade these trees'\ncheese freeze. That's\nwhat made these\nthree free fleas sneeze."
    
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
    scenePeter();
  } else if (sceneCount == 2) {
    sceneImagine();
  } else if (sceneCount == 3) {
    sceneBetty();
  } else if (sceneCount == 4) {
    sceneEleven();
  } else if (sceneCount == 5) {
    sceneCelebrate();
  }
    
    
    if (sceneCount > 5) {
    sceneCount = 0;
  } else if (sceneCount < 0) {
    sceneCount = 5;
  }
     
}

function sceneOne(){
    background(50);
    fill(255);
    textFont("Archivo Narrow");
    textAlign (CENTER, CENTER);
    textSize(25);
    textLeading(25);
    text(question, width/2, height/2.7);
    
    textFont("Genome");
    textAlign (CENTER, CENTER);
    textSize(18);
    textLeading(25);
    text(intro, width/2, height/2);
    
    textFont("Marvel");
    textAlign (CENTER, CENTER);
    textSize(16);
    text(right,width/1.1,height/1.07);
    
    textFont("Marvel");
    textAlign (CENTER, CENTER);
    textSize(16);
    text(left,width/12,height/1.07);
    
}

function scenePeter(){
    
    if (mouseIsPressed) {
    background(194, 135, 242);
    fill(255);
    textFont("OCR A Std");
    textAlign (CENTER,CENTER);
    textSize(30);
    text(correctpp, width/2, height/2);  
    
    noStroke();
    fill(50);
    ellipse(width/1.03,height/1.07,20,20);
        
  } else {
    background(194, 135, 242);

    fill(random(255));
    textFont("OCR A Std");
    textAlign (CENTER,CENTER);
    textSize(30);
    textLeading((mouseY / height) * 64);

    var middle = pp.length / 2;
    var left = middle - ((mouseX / width) * middle);
    var right = middle + ((mouseX / width) * middle);
    text(pp.substring(left, right+1),width/2, height/2);
    //
    fill(210,210,210,100);
    textFont("OCR A Std");
    textAlign (CENTER,CENTER);
    textSize(30);
    textLeading((mouseY / height) * 64);
    
    var middle = pp.length / 2;
    var left = middle - ((mouseX / width) * middle);
    var right = middle + ((mouseX / width) * middle);
    text(pp.substring(left, right+1),width/1.97, height/1.97);
      
    noStroke();
    fill(255);
    ellipse(width/1.03,height/1.07,20,20);
    
    textFont("Marvel");
    textAlign (CENTER, CENTER);
    textSize(16);
    text(reveal,width/1.13,height/1.07);
    
  }

}

function sceneImagine(){
    
    if (mouseIsPressed){
        background(102,102,255,100);
        fill(255);
        textFont("GOGOIA");
        textAlign (CENTER,CENTER);
        textSize(60);
        text(correctpp2,width/2,height/2);

        noStroke();
        fill(255, 48, 162);
        ellipse(width/1.03,height/1.07,20,20);
        
    } else {
        background(102,102,255,100);
        fill(255,10,0,mouseX/3);
        textFont("GOGOIA");
        textAlign (CENTER,CENTER);
        textSize(60);
        stroke(255, 48, 162);
        strokeWeight(mouseY/200);
        text(pp2,width/2+sin(frameCount/2)*20,height/2);
        
        noStroke();
        fill(255);
        ellipse(width/1.03,height/1.07,20,20);
    }

}
    
function sceneBetty(){
    
    if (mouseIsPressed) {
        background(225,125,0);
        fill(255);
        textFont("Monoton");
        textAlign(CENTER,CENTER);
        textSize(40);
        noStroke();
        text(correctpp3,width/2,height/2);
        
        noStroke();
        fill(0,100,225);
        ellipse(width/1.03,height/1.07,20,20);
        
    } else {
        background(225,125,0);
        fill(0,100,225 + sin(frameCount*2) * 128);
        textFont("Monoton");
        textAlign(CENTER,CENTER);
        textSize(42);
        stroke(0,200,100);
        strokeWeight(mouseY/100);
        fill(0,100,255);
        text(pp3, width/2+sin(frameCount*40)+10, height/2);
        
        
        fill(0,100,255 + sin(frameCount*2) * 128);
        textFont("Monoton");
        textAlign(CENTER,CENTER);
        textSize(43+sin(frameCount*10));
        noStroke();
    
        fill(255,150);
        text(pp3, width/2, height/2);
        
        noStroke();
        fill(255);
        ellipse(width/1.03,height/1.07,20,20);
    }
    

}

function sceneEleven(){
    
    if (mouseIsPressed) {
    background(198,27,71,100);
    fill(255);
    textFont("Tungsten Compressed");
    textAlign (CENTER,CENTER);
    textSize(100);
    text(luke2, width/2, height/2);  
    
    noStroke();
    fill(255, 191, 0);
    ellipse(width/1.03,height/1.07,20,20);
        
  } else {
    background(198,27,71,100);

    fill(0,random(110,255),random(100,255));
    textFont("Tungsten Compressed");
    textAlign (CENTER,CENTER);
    textSize(100);
    textLeading(45);

    var middle = luke1.length ;
    var left = middle - ((mouseX / width) * middle);
    var right = middle + ((mouseX / width) * middle);
    text(luke1.substring(left, right+1),width/2,height/2+cos(frameCount/2)*20);
    //
    

    noStroke();
    fill(255);
    ellipse(width/1.03,height/1.07,20,20);

    
  }


}

function sceneCelebrate(){
    
    if (mouseIsPressed) {
        background(233,242,14,100);
        fill(0);
        textFont("Codystar");
        textAlign(CENTER,CENTER);
        textSize(30);
        stroke(0);
        strokeWeight(0.5);
        text(celebrate2,width/2,height/2);
        
        noStroke();
        fill(39,250,255);
        ellipse(width/1.03,height/1.07,20,20);
        
    } else {
        
        background(233,242,14,100);
        fill(39,239,255,100);
        textFont("Codystar");
        textAlign(CENTER,CENTER);
        textSize(30+sin(frameCount*0.2)*8);
        stroke(0);
        strokeWeight(0.5);
//        stroke(249, 74, 74,random(0,255));
//        strokeWeight(mouseY/200);
        text(celebrate1,width/2+sin(frameCount/2)*20,height/2);

        
        noStroke();
        fill(255);
        ellipse(width/1.03,height/1.07,20,20);
    }
}

function keyPressed() {

 if (keyCode == LEFT_ARROW) {
    sceneCount--;
  } else if (keyCode == RIGHT_ARROW) {
    sceneCount++;
  }
    
}
    