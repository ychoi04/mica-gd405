var wdth = 2;

function setup() {

    
    
    createCanvas(windowWidth, windowHeight);
    
    
    background(255,250,250);
    
}


    


function draw() {
  //moving cursor along y axis effects character weight.
   
    
    
    
    
    
    
    
     
    

    
    
    
    
    scale(.35);
    drawT(100,100);
    
    
    drawH(280,80);
    
      
    drawE(480,80);
    
    
    //drawH(400,20);
     
    //drawE(600,20);
  
    scale(3);
    drawF(0,windowHeight/8);
    
    
    textSize(60);
    fill(0);
text("u", 100, windowHeight/2);
    
    
     drawT(150,150);
    
     textSize(60);
    fill(0);
text("ur", 250, windowHeight/2);
    
    
    drawE(330,70);
    
    
     textSize(60);
    fill(0, 102, 153, 51);
text("responds", -350, windowHeight/1.75);
    
    
    
    
    
    
    
  
    

    
}
    
    
    
    function drawF(x, y) {
  push();
    //translate(x, y+mouseY);
    
    translate(x, y);
  //f horizontal bar
    fill(0);
    noStroke();
    rect(0,25,(windowWidth/12),wdth+(mouseY/10));
    
     
    
    //f vertical bar
    fill(0);
    noStroke();
    rect(0,25,wdth+(mouseX/16),((windowHeight/4)+(mouseY/9)));
    //e vertical bar
    
    
     //f crossbar 
    fill(0);
    noStroke();
    rect(0,(windowHeight/5.5),(windowWidth/18)+(mouseY/20),wdth+(mouseY/12));
    
    
;    pop();
    
}
         function drawT(x, y) {
  push();
    //translate(x, y+mouseY);
    
    translate(x, y);
 
    
    
      //t horizontal bar
    fill(0);
    noStroke();
    rect(-20,0,(windowWidth/12)+(mouseX/18),wdth+(mouseY/12));
    
     
    
    //t vertical bar
    fill(0);
    noStroke();
    rect(20,0,wdth+(mouseX/16),((windowHeight/4)+(mouseY/9)));
    
;    pop();
    
}
  
      function drawH(x, y) {
  push();
    //translate(x, y+mouseY);
    
    translate(x, y);
 
        //h vertical bar
    fill(0);
    noStroke();
    rect(0,25,wdth+(mouseX/16),((windowHeight/4)+(mouseY/9)));
    
    //h vertical bar 2
    fill(0);
    noStroke();
    rect(90,25,wdth+(mouseX/16),((windowHeight/4)+(mouseY/9)));

    
    
     //h crossbar 
    fill(0);
    noStroke();
    rect(0,(windowHeight/5.5),(windowWidth/14)+(mouseX/30),wdth+(mouseY/12));
    
    
;    pop();
    
}
    
  
    
function drawE(x, y) {
  push();
    //translate(x, y+mouseY);
    
    translate(x, y);
     //translate(x, y);
    
     //e horizontal bar
    fill(0);
    noStroke();
    rect(0,25,(windowWidth/12),wdth+(mouseY/10));
    
     //e horizontal bar bottom
    fill(0);
    noStroke();
    rect(0,windowHeight/3.50,(windowWidth/12),wdth+(mouseY/10));
    
    //e vertical bar
    fill(0);
    noStroke();
    rect(0,25,wdth+(mouseX/16),windowHeight/4);
    
     
     //e crossbar 
    fill(0);
    noStroke();
    rect(0,(windowHeight/5.5),(windowWidth/12),wdth+(mouseY/12));
     
    
    
//    //p horizontal bar
//    fill(0);
//    noStroke();
//    rect(475,25,(windowWidth/15),wdth+(mouseY/20));
//    
//     
//    
//    //p vertical bar
//    fill(0);
//    noStroke();
//    rect(475,25,wdth+(mouseX/16),((windowHeight/4)+(mouseY/9)));
//    
//    //p vertical bar 2
//    fill(0);
//    noStroke();
//    rect(560+(mouseY/50),25,wdth+(mouseX/16),((windowHeight/8)+(mouseY/11)));
//    
//  
//    
//    //p crossbar 
//    fill(0);
//    noStroke();
//    rect(475,(windowHeight/6.25),(windowWidth/15)+(mouseY/20),wdth+(mouseY/12));
//    
//    
//    ellipse(775,25,5+(mouseX/16),5+(mouseX/16));
    
    //1st left black guide
    //fill(0);
    
    //rect(25,200,10,140);
    
    //2nd left black guide
    //fill(0);
    
    //rect(45,200,10,110);
    
    //3rd left black guide
    //fill(0);
    
    //rect(65,200,10,70);
    
    
    //4th left black guide
    //fill(0);
    
    //rect(85,200,10,40);
    
    //right black guide 
    //fill(0);
    
    //rect(105,200,10,10);
    
  
    
    
    
    
    
    
    
//    fill(135,206,250);
//    noStroke();
//    rect(25,0,1,1000);
//    
//    //red guideline
//    fill(135,206,250);
//    noStroke();
//    rect(35,0,1,1000);
//    
//    
//    fill(135,206,250);
//    noStroke();
//    rect(45,0,1,1000);
//    
//    //red guideline
//    fill(135,206,250);
//    noStroke();
//    rect(55,0,1,1000);
//    
//    //red guideline
//    fill(135,206,250);
//    noStroke();
//    rect(65,0,1,1000);
//    
//    //red guideline
//    fill(135,206,250);
//    noStroke();
//    rect(75,0,1,1000);
//    
//    //red guidline
//    fill(135,206,250);
//    noStroke();
//    rect(85,0,1,1000);
//    
//    //red guidline
//    fill(135,206,250);
//    noStroke();
//    rect(95,0,1,1000);
//
//      //red guidline
//    fill(135,206,250);
//    noStroke();
//    rect(105,0,1,1000);
//    
//      //red guidline
//    fill(135,206,250);
//    noStroke();
//    rect(115,0,1,1000);
//    
//      //red guidline
//    fill(135,206,250);
//    noStroke();
//    rect(125,0,1,1000);
//    
//      //red guidline
//    fill(135,206,250);
//    noStroke();
//    rect(135,0,1,1000);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}