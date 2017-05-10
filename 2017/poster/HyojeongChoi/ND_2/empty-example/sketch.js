var x = 0;
var y= 0;
var a= 0;
var b= 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    noSmooth();
}

function draw(){
    background(255);
    
    scale(1);
    
    drawN2(x+20, y+20, mouseX/10, mouseY/10);
    drawD2(x+120, y+20, mouseX/10, mouseY/10);
    drawI2(x+220, y+20, mouseX/10, mouseY/10);
    drawM2(x+270, y+20, mouseX/10, mouseY/10);
    drawE2(x+380, y+20, mouseX/10, mouseY/10);
    drawN2(x+470, y+20, mouseX/10, mouseY/10);
    drawS2(x+570, y+20, mouseX/10, mouseY/10);
    drawI2(x+670, y+20, mouseX/10, mouseY/10);
    drawO2(x+710, y+20, mouseX/10, mouseY/10);
    drawN2(x+810, y+20, mouseX/10, mouseY/10);
    
    drawN2(x+20, y+140, mouseX/10, mouseY/10);
    drawD2(x+120, y+140, mouseX/10, mouseY/10);
    drawI2(x+220, y+140, mouseX/10, mouseY/10);
    drawM2(x+270, y+140, mouseX/10, mouseY/10);
    drawE2(x+380, y+140, mouseX/10, mouseY/10);
    drawN2(x+470, y+140, mouseX/10, mouseY/10);
    drawS2(x+570, y+140, mouseX/10, mouseY/10);
    drawI2(x+670, y+140, mouseX/10, mouseY/10);
    drawO2(x+710, y+140, mouseX/10, mouseY/10);
    drawN2(x+810, y+140, mouseX/10, mouseY/10);
    
    drawN2(x+20, y+260, mouseX/10, mouseY/10);
    drawD2(x+120, y+260, mouseX/10, mouseY/10);
    drawI2(x+220, y+260, mouseX/10, mouseY/10);
    drawM2(x+270, y+260, mouseX/10, mouseY/10);
    drawE2(x+380, y+260, mouseX/10, mouseY/10);
    drawN2(x+470, y+260, mouseX/10, mouseY/10);
    drawS2(x+570, y+260, mouseX/10, mouseY/10);
    drawI2(x+670, y+260, mouseX/10, mouseY/10);
    drawO2(x+710, y+260, mouseX/10, mouseY/10);
    drawN2(x+810, y+260, mouseX/10, mouseY/10);
    
    drawN2(x+20, y+380, mouseX/10, mouseY/10);
    drawD2(x+120, y+380, mouseX/10, mouseY/10);
    drawI2(x+220, y+380, mouseX/10, mouseY/10);
    drawM2(x+270, y+380, mouseX/10, mouseY/10);
    drawE2(x+380, y+380, mouseX/10, mouseY/10);
    drawN2(x+470, y+380, mouseX/10, mouseY/10);
    drawS2(x+570, y+380, mouseX/10, mouseY/10);
    drawI2(x+670, y+380, mouseX/10, mouseY/10);
    drawO2(x+710, y+380, mouseX/10, mouseY/10);
    drawN2(x+810, y+380, mouseX/10, mouseY/10);
    
    drawN2(x+20, y+500, mouseX/10, mouseY/10);
    drawD2(x+120, y+500, mouseX/10, mouseY/10);
    drawI2(x+220, y+500, mouseX/10, mouseY/10);
    drawM2(x+270, y+500, mouseX/10, mouseY/10);
    drawE2(x+380, y+500, mouseX/10, mouseY/10);
    drawN2(x+470, y+500, mouseX/10, mouseY/10);
    drawS2(x+570, y+500, mouseX/10, mouseY/10);
    drawI2(x+670, y+500, mouseX/10, mouseY/10);
    drawO2(x+710, y+500, mouseX/10, mouseY/10);
    drawN2(x+810, y+500, mouseX/10, mouseY/10);
   
}

function drawN2(x,y,a,b) {
push();
translate(x,y);
    
    
    strokeWeight(20);
    stroke(255);
    strokeCap(ROUND);
    noFill();
    
    
    line(20, 20, 20, 80);
    line(80, 20, 80, 80);
    line(20, 20, 80, 80);
    
    strokeWeight(1);
    stroke(0);
    fill(0);
   
    //point ->
    line(20, 9.5, 20+a, 9.5+b);
    line(29, 15, 29+a, 15+b);
    
    line(34, 20, 34+a, 20+b);
    line(39, 25, 39+a, 25+b);
    line(44, 30, 44+a, 30+b);
    line(49, 35, 49+a, 35+b);
    line(54, 40, 54+a, 40+b);
    line(59, 45, 59+a, 45+b);
    line(64, 50, 64+a, 50+b);
    line(70, 55, 70+a, 55+b);
    line(70, 50, 70+a, 50+b);
    line(70, 42.5, 70+a, 42.5+b);
    line(70, 35, 70+a, 35+b);
    line(70, 27.5, 70+a, 27.5+b);
    line(70, 20, 70+a, 20+b);
    line(72.5, 13, 72.5+a, 13+b);
    line(80, 9.5, 80+a, 9.5+b);
    line(85.5, 13, 85.5+a, 13+b);
    line(89, 20, 89+a, 20+b);
    line(89, 27.5, 89+a, 27.5+b);
    line(89, 35, 89+a, 35+b);
    line(89, 42.5, 89+a, 42.5+b);
    line(89, 50, 89+a, 50+b);
    line(89, 57.5, 89+a, 57.5+b);
    line(89, 65, 89+a, 65+b);
    line(89, 72.5, 89+a, 72.5+b);
    line(89, 80, 89+a, 80+b);
    line(85.5, 86, 85.5+a, 86+b);
    line(80, 89, 80+a, 89+b);
    line(71, 85, 71+a, 85+b);
    line(66, 80, 66+a, 80+b);
    line(61, 75, 61+a, 75+b);
    line(56, 70, 56+a, 70+b);
    line(51, 65, 51+a, 65+b);
    line(46, 60, 46+a, 60+b);
    line(41, 55, 41+a, 55+b);
    line(36, 50, 36+a, 50+b);
    
    
    line(29, 57.5, 29+a, 57.5+b);
    line(29, 65, 29+a, 65+b);
    line(29, 72.5, 29+a, 72.5+b);
    line(29, 80, 29+a, 80+b);
    
    line(29.4, 44, 29.4+a, 44+b);
    line(29, 50, 29+a, 50+b);
    line(25.5, 86, 25.5+a, 86+b);
    line(20, 89, 20+a, 89+b);
    line(12.5, 86, 12.5+a, 86+b);
    
    
    //left
    line(10, 80, 10+a, 80+b);
    line(10, 72.5, 10+a, 72.5+b);
    line(10, 65, 10+a, 65+b);
    line(10, 57.5, 10+a, 57.5+b);
    line(10, 50, 10+a, 50+b);
    line(10, 42.5, 10+a, 42.5+b);
    line(10, 35, 10+a, 35+b);
    line(10, 27.5, 10+a, 27.5+b);
    line(10, 20, 10+a, 20+b);
    line(12.5, 13, 12.5+a, 13+b);
    
    
    
//    //
//    point(20, 80);
//    point(20, 72.5);
//    point(20, 65);
//    point(20, 57.5);
//    point(20, 50);
//    point(20, 42.5);
//    point(20, 35);
//    point(20, 27.5);
//    point(20, 20);
//    point(25, 25);
//    point(30, 30);
//    point(35, 35);
//    point(40, 40);
//    point(45, 45);
//    point(50, 50);
//    point(55, 55);
//    point(60, 60);
//    point(65, 65);
//    point(70, 70);
//    point(75, 75);
//    point(80, 80);
//    point(80, 72.5);
//    point(80, 65);
//    point(80, 57.5);
//    point(80, 50);
//    point(80, 42.5);
//    point(80, 35);
//    point(80, 27.5);
//    point(80, 20);
pop();
}


function drawD2(x,y,a,b) {
    push();
    translate(x,y);
    
     //D
    
    strokeWeight(20);
    stroke(255);
    strokeCap(ROUND);
    noFill();
    
    line(20, 20, 20, 80);
    line(20, 20, 50, 20);
    line(20, 80, 50, 80);
    arc(50, 50, 60, 60, PI*3/2, PI/2);
    point(48, 50);
    
    strokeWeight(1);
    stroke(0);
    fill(0);
    
    //left
    line(10, 80, 10+a, 80+b);
    line(10, 72.5, 10+a, 72.5+b);
    line(10, 65, 10+a, 65+b);
    line(10, 57.5, 10+a, 57.5+b);
    line(10, 50, 10+a, 50+b);
    line(10, 42.5, 10+a, 42.5+b);
    line(10, 35, 10+a, 35+b);
    line(10, 27.5, 10+a, 27.5+b);
    line(10, 20, 10+a, 20+b);
    line(12.5, 86, 12.5+a, 86+b);
    
    line(12.5, 13, 12.5+a, 13+b);
    line(20, 9.5, 20+a, 9.5+b);
    
    line(27.5, 9.5, 27.5+a, 9.5+b);
    line(35, 9.5, 35+a, 9.5+b);
    line(42.5, 9.5, 42.5+a, 9.5+b);
    line(50, 9.5, 50+a, 9.5+b);
    
    
    line(56, 10.3, 56+a, 10.3+b);
   
    line(63, 12, 63+a, 12+b);
    line(70, 15, 70+a, 15+b);
    
    line(75.5, 19.5, 75.5+a, 19.5+b);
    
    line(81, 25, 81+a, 25+b);
    
    line(84, 30, 84+a, 30+b);
    line(87, 36, 87+a, 36+b);
    line(88.5, 43, 88.5+a, 43+b);
    
    line(89, 50, 89+a, 50+b);
    
    
    line(88.5, 56, 88.5+a, 56+b);
    line(87.5, 62, 87.5+a, 62+b);
    line(85, 68, 85+a, 68+b);
    line(81, 74, 81+a, 74+b);
    line(75.5, 79.5, 75.5+a, 79.5+b);
    line(70, 84, 70+a, 84+b);
    line(63, 87, 63+a, 87+b);
    
    line(56, 88.5, 56+a, 88.5+b);
    
    //
    line(20, 89, 20+a, 89+b);
    line(27.5, 89, 27.5+a, 89+b);
    line(35, 89, 35+a, 89+b);
    line(42.5, 89, 42.5+a, 89+b);
    line(50, 89, 50+a, 89+b);
    
    
    //in
    
    line(35, 29, 35+a, 29+b);
    line(42.5, 29, 42.5+a, 29+b);
    line(50, 29, 50+a, 29+b);
    
    line(29, 29, 29+a, 29+b);
    line(29, 35, 29+a, 35+b);
    line(29, 42.5, 29+a, 42.5+b);
    line(29, 50, 29+a, 50+b);
    line(29, 57.5, 29+a, 57.5+b);
    line(29, 65, 29+a, 65+b);
    line(29, 70, 29+a, 70+b);
    

    line(35, 70, 35+a, 70+b);
    line(42.5, 70, 42.5+a, 70+b);
    line(50, 70, 50+a, 70+b);
    
    
    line(59, 32, 59+a, 32+b);
    line(65, 37, 65+a, 37+b);
    line(68, 43, 68+a, 43+b);
    
    line(70, 50, 70+a, 50+b);
    
    line(68, 57, 68+a, 57+b);
    line(65, 63, 65+a, 63+b);
    line(59, 68, 59+a, 68+b);
    
    pop();
    
}


    
function drawI2(x,y,a,b) {
    push();
    translate(x,y);

    strokeWeight(20);
    stroke(255);
    strokeCap(ROUND);
    noFill();
    
    line(20, 20, 20, 80);
    
    strokeWeight(1);
    stroke(0);
    fill(0);
    
    
     //left-1
    line(12.5, 13, 12.5+a, 13+b);
    line(10, 20, 10+a, 20+b);
    line(10, 27.5, 10+a, 27.5+b);
    line(10, 35, 10+a, 35+b);
    line(10, 42.5, 10+a, 42.5+b);
    line(10, 50, 10+a, 50+b);
    line(10, 57.5, 10+a, 57.5+b);
    line(10, 65, 10+a, 65+b);
    line(10, 72.5, 10+a, 72.5+b);
    line(10, 80, 10+a, 80+b);
    line(12.5, 87, 12.5+a, 87+b);
    
    
    
//    
//    line(20, 20, 20+a, 20+b);
//    line(20, 27.5, 20+a, 27.5+b);
//    line(20, 35, 20+a, 35+b);
//    line(20, 42.5, 20+a, 42.5+b);
//    line(20, 50, 20+a, 50+b);
//    line(20, 57.5);
//    line(20, 65);
//    line(20, 72.5);
//    line(20, 80);
    line(20, 10, 20+a, 10+b);  
    line(20, 90, 20+a, 90+b);
    
    
    //right-3
    line(26.5, 13, 26.5+a, 13+b);
    line(30, 20, 30+a, 20+b);
    line(30, 27.5, 30+a, 27.5+b);
    line(30, 35, 30+a, 35+b);
    line(30, 42.5, 30+a, 42.5+b);
    line(30, 50, 30+a, 50+b);
    line(30, 57.5, 30+a, 57.5+b);
    line(30, 65, 30+a, 65+b);
    line(30, 72.5, 30+a, 72.5+b);
    line(30, 80, 30+a, 80+b);
    line(26.5, 87, 26.5+a, 87+b);
    
    pop();
}
    function drawM2(x,y,a,b){
    
        
    push();
    translate(x,y);

    strokeWeight(20);
    stroke(255);
    strokeCap(ROUND);
    
        
    line(20, 20, 20, 80);
    line(20, 20, 50, 50);
    line(50, 50, 80, 20);
    line(80, 20, 80, 80);
    
    strokeWeight(1);
    stroke(0);
    fill(0);
    
     //left -1
    line(12.5, 13, 12.5+a, 13+b);
    line(10, 20, 10+a, 20+b);
    line(10, 27.5, 10+a, 27.5+b);
    line(10, 35, 10+a, 35+b);
    line(10, 42.5, 10+a, 42.5+b);
    line(10, 50, 10+a, 50+b);
    line(10, 57.5, 10+a, 57.5+b);
    line(10, 65, 10+a, 65+b);
    line(10, 72.5, 10+a, 72.5+b);
    line(10, 80, 10+a, 80+b);
    line(12.5, 87, 12.5+a, 87+b);
        
    //middle -2
    line(20, 10, 20+a, 10+b);  
    line(20, 90, 20+a, 90+b);
    
//    point(20, 20);
//    point(20, 27.5);
//    point(20, 35);
//    point(20, 42.5);
//    point(20, 50);
//    point(20, 57.5);
//    point(20, 65);
//    point(20, 72.5);
//    point(20, 80);
    
  
        
    //right-3
    line(26.5, 13, 26.5+a, 13+b);
    
    line(30, 42.5, 30+a, 42.5+b);
    line(30, 50, 30+a, 50+b);
    line(30, 57.5, 30+a, 57.5+b);
    line(30, 65, 30+a, 65+b);
    line(30, 72.5, 30+a, 72.5+b);
    line(30, 80, 30+a, 80+b);
    line(26.5, 87, 26.5+a, 87+b);
        
    //middle-4
        
    line(34, 20, 34+a, 20+b);
    line(42, 27.5, 42+a, 27.5+b);
    
//    line(26, 26, 26+a, 26+b);
//    line(32, 32, 32+a, 32+a);
//    line(38, 38, 38+a, 38+b);
//    line(44, 44, 44+a, 44+b);
   
    line(36, 50, 36+a, 50+b);
    line(42, 56, 42+a, 56+b);
    
    //middle-5
    line(50, 35, 50+a, 35+b);
    //point(50, 47.5);
    line(50, 60, 50+a, 60+b);
        
    
    //middle-6    
    
    line(58, 27.5, 58+a, 27.5+b);
    line(66, 20, 66+a, 20+b);
    
//    point(74, 26);
//    point(68, 32);
//    point(62, 38);
//    point(56, 44);
    
    line(58, 56, 58+a, 56+b);
    line(64, 50, 64+a, 50+b);
        
    //middle-7
    line(72.5, 13, 72.5+a, 13+b);
    
    line(70, 42.5, 70+a, 42.5+b);
    line(70, 50, 70+a, 50+b);
    line(70, 57.5, 70+a, 57.5+b);
    line(70, 65, 70+a, 65+b);
    line(70, 72.5, 70+a, 72.5+b);
    line(70, 80, 70+a, 80+b);
    line(72.5, 87, 72.5+a, 87+b);
    
    //middle-8
    line(80, 10, 80+a, 10+b);
    
    //line(80, 20, 80+a, 20+b);
//    point(80, 27.5);
//    point(80, 35);
//    point(80, 42.5);
//    point(80, 50);
//    point(80, 57.5);
//    point(80, 65);
//    point(80, 72.5);
//    point(80, 80);
    
    line(80, 90, 80+a, 90+b);
        
    //right-9
    line(86.5, 13, 86.5+a, 13+b);
    line(90, 20, 90+a, 20+b);
    line(90, 27.5, 90+a, 27.5+b);
    line(90, 35, 90+a, 35+b);
    line(90, 42.5, 90+a, 42.5+b);
    line(90, 50, 90+a, 50+b);
    line(90, 57.5, 90+a, 57.5+b);
    line(90, 65, 90+a, 65+b);
    line(90, 72.5, 90+a, 72.5+b);
    line(90, 80, 90+a, 80+b);
    line(86.5, 87, 86.5+a, 87+b);
    
    pop();
        
    }

    
function drawE2(x,y,a,b){
    
    push();
    translate(x,y);

    strokeWeight(20);
    stroke(255);
    strokeCap(20);   
        
    line(20, 20, 20, 80);
    point(50, 50);
    line(20, 20, 70, 20);
    line(20, 80, 70, 80);
    
    strokeWeight(1);
    stroke(0);
    fill(0);
    
     //left -1
   line(12.5, 13, 12.5+a, 13+b);
    line(10, 20, 10+a, 20+b);
    line(10, 27.5, 10+a, 27.5+b);
    line(10, 35, 10+a, 35+b);
    line(10, 42.5, 10+a, 42.5+b);
    line(10, 50, 10+a, 50+b);
    line(10, 57.5, 10+a, 57.5+b);
    line(10, 65, 10+a, 65+b);
    line(10, 72.5, 10+a, 72.5+b);
    line(10, 80, 10+a, 80+b);
    line(12.5, 87, 12.5+a, 87+b);
    
    //middle -2
    
    
//    point(20, 20);
//    point(20, 27.5);
//    point(20, 35);
//    point(20, 42.5);
//    point(20, 50);
//    point(20, 57.5);
//    point(20, 65);
//    point(20, 72.5);
//    point(20, 80);
    
    line(20, 10, 20+a, 10+b);  
    line(20, 90, 20+a, 90+b);
    
   //right-3
    line(30, 10, 30+a, 10+b);
    //line(30, 20, 30+a, 20+b);
    line(30, 30, 30+a, 30+b);
    line(30, 38, 30+a, 38+b);
    line(30, 46, 30+a, 46+b);
    line(30, 54, 30+a, 54+b);
    line(30, 62, 30+a, 62+b);
   
    line(30, 70, 30+a, 70+b);
    //point(30, 80);
    line(30, 90, 30+a, 90+b);
    
    //up-4
    line(40, 10, 40+a, 10+b);
    //point(40, 20);
    line(40, 30, 40+a, 30+b);
    
    line(50, 10, 50+a, 10+b);
    //point(50, 20);
    line(50, 30, 50+a, 30+b);
    
    line(60, 10, 60+a, 10+b);
    //point(60, 20);
    line(60, 30, 60+a, 30+b);
    
    line(70, 10, 70+a, 10+b);
    //point(70, 20);
    line(70, 30, 70+a, 30+b);
    
    line(77, 13, 77+a, 13+b);
    line(80, 20, 80+a, 20+b);
    line(77, 27, 77+a, 27+b);
    
        
    
    //down
    line(40, 70, 40+a, 70+b);
    //point(40, 80);
    line(40, 90, 40+a, 90+b);
        
    line(50, 70, 50+a, 70+b);
    //point(50, 80);
    line(50, 90, 50+a, 90+b);
    
    line(60, 70, 60+a, 70+b);
    //point(60, 80);
    line(60, 90, 60+a, 90+b);
    
    line(70, 70, 70+a, 70+b);
    //point(70, 80);
    line(70, 90, 70+a, 90+b);
    
    line(77, 73, 77+a, 73+b);
    line(80, 80, 80+a, 80+b);
    line(77, 87, 77+a, 87+b);
    
    
    
    //inner ->
    line(50, 40, 50+a, 40+b);
    
    line(57, 43, 57+a, 43+b);
    line(60, 50, 60+a, 50+b);
    line(57, 57, 57+a, 57+b);
    
    line(50, 60, 50+a, 60+b);
    
    line(43, 57, 43+a, 57+b);
    line(40, 50, 40+a, 50+b);
    line(42, 43, 42+a, 43+b);
        
    //point
    
    //point(50, 50);
    pop();
    }
  
function drawS2(x,y,a,b){
    
    push();
    translate(x,y);
    
    strokeWeight(20);
    stroke(255);
    strokeCap(ROUND);
    noFill(); 
    
    
    line(35, 20, 75, 20);
    arc(35, 35, 30, 30, PI/2, PI*3/2);
    line(35, 50, 65, 50);
    arc(65, 65, 30, 30, PI*3/2, PI/2);
    line(20, 80, 65, 80);
    
    strokeWeight(1);
    stroke(0);
    fill(0);
    
    
    //up
    line(30, 10.3, 30+a, 10.3+b);
    line(40, 10, 40+a, 10+b);
    line(50, 10, 50+a, 10+b);
    line(60, 10, 60+a, 10+b);
    line(70, 10, 70+a, 10+b);
    
    line(78, 11, 78+a, 11+b);
    line(83, 14, 83+a, 14+b);
    line(85, 20, 85+a, 20+b);
    line(83, 26, 83+a, 26+b);
    line(78, 29, 78+a, 29+b);
    
    line(70, 30, 70+a, 30+b);
    line(60, 30, 60+a, 30+b);
    line(50, 30, 50+a, 30+b);
    line(40, 30, 40+a, 30+b);
    
    line(33, 30, 33+a, 30+b);
    line(30, 35, 30+a, 35+b);
    line(33, 39, 33+a, 39+b);
    
    line(40, 40, 40+a, 40+b);
    line(50, 40, 50+a, 40+b);
    line(60, 40, 60+a, 40+b);
    
    line(68, 40, 68+a, 40+b);
    line(75, 42, 75+a, 42+b);
    line(80, 45, 80+a, 45+b);
    line(85, 51, 85+a, 51+b);
    line(89, 58, 89+a, 58+b);
    line(90, 65, 90+a, 65+b);
    line(89, 72, 89+a, 72+b);
    line(85, 79, 85+a, 79+b);
    line(80, 85, 80+a, 85+b);
    line(75, 88, 75+a, 88+b);
    line(68, 89, 68+a, 89+b);
    
    
    line(60, 90, 60+a, 90+b);
    line(50, 90, 50+a, 90+b);
    line(40, 90, 40+a, 90+b);
    line(30, 90, 30+a, 90+b);
    line(20, 90, 20+a, 90+b);
    
    
    line(13, 87, 13+a, 87+b);
    line(10, 80, 10+a, 80+b);
    line(12, 73, 12+a, 73+b);
    
    line(20, 70, 20+a, 70+b);
    line(30, 70, 30+a, 70+b);
    line(40, 70, 40+a, 70+b);
    line(50, 70, 50+a, 70+b);
    line(60, 70, 60+a, 70+b);
    
    
    
    line(67, 69, 67+a, 69+b);
    line(70, 65, 70+a, 65+b);
    line(67, 61, 67+a, 61+b);
    
    line(60, 60, 60+a, 60+b);
    line(50, 60, 50+a, 60+b);
    
    
    line(40, 60, 40+a, 60+b);
    line(30, 59, 30+a, 59+b);
    line(22, 55, 22+a, 55+b);
    line(15, 49, 15+a, 49+b);
    line(11, 41, 11+a, 41+b);
    line(10, 34, 10+a, 34+b);
    line(11, 27, 11+a, 27+b);
    line(15, 20, 15+a, 20+b);
    line(22, 14, 22+a, 14+b);
    
    
    
    
    
    
    //point(70, 20);
    //point(60, 20);
    //point(50, 20);
    //point(40, 20);
    //point(31, 21);
    //point(23, 26);
    //point(20, 34);
    //point(23, 42);
    
    //point(30, 48);
    //point(40, 50);
    
    
//    point(50, 50);
//    point(60, 50);
//    point(20, 80);
//    point(30, 80);
//    point(40, 80);
//    point(50, 80);
//    point(60, 80);
//    
//    //in
//    point(70, 51);
//    point(77, 57);
//    point(80, 65);
//    point(77, 73);
//    point(70, 79);
  
    pop();
  }



    
function drawO2(x,y,a,b){
    
    push();
    translate(x,y);

    strokeWeight(80);
    stroke(255);
    strokeCap(20);       
    point(50, 50);
    
    stroke(255);
    strokeWeight(20);
    point(50, 50);
  
   
    strokeWeight(1);
    stroke(0);
    fill(0);
    
    //->
    line(50, 10, 50+a, 10+b);
    
    line(59, 11, 59+a, 11+b);
    line(67, 14, 67+a, 14+b);
    line(74, 18, 74+a, 18+b);
    line(80, 23, 80+a, 23+b);
    line(84, 29, 84+a, 29+b);
    line(87, 36, 87+a, 36+b);
    line(89, 43, 89+a, 43+b);
    
    line(90, 50, 90+a, 50+b);
    
    line(89, 57, 89+a, 57+b);
    line(87, 64, 87+a, 64+b);
    line(84, 71, 84+a, 71+b);
    line(80, 77, 80+a, 77+b);
    line(74, 82, 74+a, 82+b);
    line(67, 86, 67+a, 86+b);
    line(59, 89, 59+a, 89+b);
    
    line(50, 90, 50+a, 90+b);
    
    line(41, 89, 41+a, 89+b);
    line(33, 86, 33+a, 86+b);
    line(26, 82, 26+a, 82+b);
    line(20, 77, 20+a, 77+b);
    line(16, 71, 16+a, 71+b);
    line(13, 64, 13+a, 64+b);
    line(11, 57, 11+a, 57+b);
    
    line(10, 50, 10+a, 50+b);
    
    line(11, 43, 11+a, 43+b);
    line(13, 36, 13+a, 36+b);
    line(16, 29, 16+a, 29+b);
    line(20, 23, 20+a, 23+b);
    line(26, 18, 26+a, 18+b);
    line(33, 14, 33+a, 14+b);
    line(41, 11, 41+a, 11+b);
    
    //
    
    
    //inner ->
    line(50, 40, 50+a, 40+b);
    
    line(57, 43, 57+a, 43+b);
    line(60, 50, 60+a, 50+b);
    line(57, 57, 57+a, 57+b);
    
    line(50, 60, 50+a, 60+b);
    
    line(43, 57, 43+a, 57+b);
    line(40, 50, 40+a, 50+b);
    line(42, 43, 42+a, 43+b);
    
    
//    //in->
//    point(50, 25);
//    point(40, 27);
//    point(32, 32);
//    point(27, 40);
//    point(25, 50);
//    point(27, 60);
//    point(32, 68);
//    point(40, 73);
//    point(50, 75);
//    
//    point(60, 27);
//    point(68, 32);
//    point(73, 40);
//    point(75, 50);
//    point(73, 60);
//    point(67, 68);
//    point(60, 73);
    
    pop();
    
}