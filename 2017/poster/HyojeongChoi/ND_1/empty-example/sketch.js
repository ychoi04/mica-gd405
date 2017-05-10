var x = 0;
var y= 0;
var a= 0;
var b= 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    
}

function draw(){
    background(255);
    
    scale(1);
    drawN1(x+20, y+20, mouseX/100);
    drawD1(x+120, y+20, mouseX/100);
    drawI1(x+220, y+20, mouseX/100);
    drawM1(x+270, y+20, mouseX/100);
    drawE1(x+380, y+20, mouseX/100);
    drawN1(x+470, y+20, mouseX/100);
    drawS1(x+570, y+20, mouseX/100);
    drawI1(x+670, y+20, mouseX/100);
    drawO1(x+710, y+20, mouseX/100);
    drawN1(x+810, y+20, mouseX/100);
    
    drawN1(x+20, y+140, mouseX/80);
    drawD1(x+120, y+140, mouseX/80);
    drawI1(x+220, y+140, mouseX/80);
    drawM1(x+270, y+140, mouseX/80);
    drawE1(x+380, y+140, mouseX/80);
    drawN1(x+470, y+140, mouseX/80);
    drawS1(x+570, y+140, mouseX/80);
    drawI1(x+670, y+140, mouseX/80);
    drawO1(x+710, y+140, mouseX/80);
    drawN1(x+810, y+140, mouseX/80);
    
    drawN1(x+20, y+260, mouseX/60);
    drawD1(x+120, y+260, mouseX/60);
    drawI1(x+220, y+260, mouseX/60);
    drawM1(x+270, y+260, mouseX/60);
    drawE1(x+380, y+260, mouseX/60);
    drawN1(x+470, y+260, mouseX/60);
    drawS1(x+570, y+260, mouseX/60);
    drawI1(x+670, y+260, mouseX/60);
    drawO1(x+710, y+260, mouseX/60);
    drawN1(x+810, y+260, mouseX/60);
    
    drawN1(x+20, y+380, mouseX/40);
    drawD1(x+120, y+380, mouseX/40);
    drawI1(x+220, y+380, mouseX/40);
    drawM1(x+270, y+380, mouseX/40);
    drawE1(x+380, y+380, mouseX/40);
    drawN1(x+470, y+380, mouseX/40);
    drawS1(x+570, y+380, mouseX/40);
    drawI1(x+670, y+380, mouseX/40);
    drawO1(x+710, y+380, mouseX/40);
    drawN1(x+810, y+380, mouseX/40);
    
    drawN1(x+20, y+500, mouseX/20);
    drawD1(x+120, y+500, mouseX/20);
    drawI1(x+220, y+500, mouseX/20);
    drawM1(x+270, y+500, mouseX/20);
    drawE1(x+380, y+500, mouseX/20);
    drawN1(x+470, y+500, mouseX/20);
    drawS1(x+570, y+500, mouseX/20);
    drawI1(x+670, y+500, mouseX/20);
    drawO1(x+710, y+500, mouseX/20);
    drawN1(x+810, y+500, mouseX/20);
   
}

function drawN1(x,y,stk) {
push();
translate(x,y);
    
    
    strokeWeight(20);
    stroke(255);
    strokeCap(ROUND);
    noFill();
    
    
    line(20, 20, 20, 80);
    line(80, 20, 80, 80);
    line(20, 20, 80, 80);
    
    strokeWeight(1+stk);
    stroke(0);
    fill(0);
   
    //point
    point(20, 9.5);
    point(12.5, 13);
    point(12.5, 86);
    
    point(20, 89);
    point(25.5, 86);
    
   //left
    point(10, 80);
    point(10, 72.5);
    point(10, 65);
    point(10, 57.5);
    point(10, 50);
    point(10, 42.5);
    point(10, 35);
    point(10, 27.5);
    point(10, 20);
    
    
    point(29, 80);
    point(29, 72.5);
    point(29, 65);
    point(29, 57.5);
    point(29, 50);
    point(29.4, 44);
    
    
    point(29, 15);
    point(34, 20);
    point(39, 25);
    point(44, 30);
    point(49, 35);
    point(54, 40);
    point(59, 45);
    point(64, 50);
    point(70, 55);
    point(70, 50);
    point(70, 42.5);
    point(70, 35);
    point(70, 27.5);
    point(70, 20);
    point(72.5, 13);
    point(80, 9.5);
    point(85.5, 13);
    point(89, 20);
    point(89, 27.5);
    point(89, 35);
    point(89, 42.5);
    point(89, 50);
    point(89, 57.5);
    point(89, 65);
    point(89, 72.5);
    point(89, 80);
    point(85.5, 86);
    point(80, 89);
    
    
    point(71, 85);
    point(66, 80);
    point(61, 75);
    point(56, 70);
    point(51, 65);
    point(46, 60);
    point(41, 55);
    point(36, 50);
    
    //
    point(20, 80);
    point(20, 72.5);
    point(20, 65);
    point(20, 57.5);
    point(20, 50);
    point(20, 42.5);
    point(20, 35);
    point(20, 27.5);
    point(20, 20);
    point(25, 25);
    point(30, 30);
    point(35, 35);
    point(40, 40);
    point(45, 45);
    point(50, 50);
    point(55, 55);
    point(60, 60);
    point(65, 65);
    point(70, 70);
    point(75, 75);
    point(80, 80);
    point(80, 72.5);
    point(80, 65);
    point(80, 57.5);
    point(80, 50);
    point(80, 42.5);
    point(80, 35);
    point(80, 27.5);
    point(80, 20);
pop();
}


function drawD1(x,y,skt) {
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
    
    strokeWeight(1+skt);
    stroke(0);
    fill(0);
    
    //left
    point(10, 80);
    point(10, 72.5);
    point(10, 65);
    point(10, 57.5);
    point(10, 50);
    point(10, 42.5);
    point(10, 35);
    point(10, 27.5);
    point(10, 20);
    point(12.5, 86);
    
    point(12.5, 13);
    point(20, 9.5);
    
    point(27.5, 9.5);
    point(35, 9.5);
    point(42.5, 9.5);
    point(50, 9.5);
    
    
    point(56, 10.3);
   
    point(63, 12);
    point(70, 15);
    
    point(75.5, 19.5);
    
    point(81, 25);
    
    point(84, 30);
    point(87, 36);
    point(88.5, 43);
    
    point(89, 50);
    
    
    point(88.5, 56);
    point(87.5, 62);
    point(85, 68);
    point(81, 74);
    point(75.5, 79.5);
    point(70, 84);
    point(63, 87);
    
    point(56, 88.5);
    
    //
    point(20, 89);
    point(27.5, 89);
    point(35, 89);
    point(42.5, 89);
    point(50, 89);
    
    
    //in
    
    point(35, 29);
    point(42.5, 29);
    point(50, 29);
    
    point(29, 29);
    point(29, 35);
    point(29, 42.5);
    point(29, 50);
    point(29, 57.5);
    point(29, 65);
    point(29, 70);
    

    point(35, 70);
    point(42.5, 70);
    point(50, 70);
    
    
    //
    
    
    point(59, 32);
    point(65, 37);
    point(68, 43);
    
    point(70, 50);
    
    point(68, 57);
    point(65, 63);
    point(59, 68);
    
    pop();
    
}


    
function drawI1(x,y,skt) {
    push();
    translate(x,y);

    strokeWeight(20);
    stroke(255);
    strokeCap(ROUND);
    noFill();
    
    line(20, 20, 20, 80);
    
    strokeWeight(1+skt);
    stroke(0);
    fill(0);
    
    
     //left-1
    point(12.5, 13);
    point(10, 20);
    point(10, 27.5);
    point(10, 35);
    point(10, 42.5);
    point(10, 50);
    point(10, 57.5);
    point(10, 65);
    point(10, 72.5);
    point(10, 80);
    point(12.5, 87);
    
    
    //middle-2
    point(20, 10);
    
    point(20, 20);
    point(20, 27.5);
    point(20, 35);
    point(20, 42.5);
    point(20, 50);
    point(20, 57.5);
    point(20, 65);
    point(20, 72.5);
    point(20, 80);
    
    point(20, 90);
    
    
    //right-3
    point(26.5, 13);
    point(30, 20);
    point(30, 27.5);
    point(30, 35);
    point(30, 42.5);
    point(30, 50);
    point(30, 57.5);
    point(30, 65);
    point(30, 72.5);
    point(30, 80);
    point(26.5, 87);
    
    pop();
}
    function drawM1(x,y,skt){
    
        
    push();
    translate(x,y);

    strokeWeight(20);
    stroke(255);
    strokeCap(ROUND);
    
        
    line(20, 20, 20, 80);
    line(20, 20, 50, 50);
    line(50, 50, 80, 20);
    line(80, 20, 80, 80);
    
    strokeWeight(1+skt);
    stroke(0);
    fill(0);
    
     //left -1
    point(12.5, 13);
    point(10, 20);
    point(10, 27.5);
    point(10, 35);
    point(10, 42.5);
    point(10, 50);
    point(10, 57.5);
    point(10, 65);
    point(10, 72.5);
    point(10, 80);
    point(12.5, 87);
        
    //middle -2
    point(20, 10);
    
    point(20, 20);
    point(20, 27.5);
    point(20, 35);
    point(20, 42.5);
    point(20, 50);
    point(20, 57.5);
    point(20, 65);
    point(20, 72.5);
    point(20, 80);
    
    point(20, 90);
        
    //right-3
    point(26.5, 13);
    
    point(30, 42.5);
    point(30, 50);
    point(30, 57.5);
    point(30, 65);
    point(30, 72.5);
    point(30, 80);
    point(26.5, 87);
        
    //middle-4
        
    point(34, 20);
    point(42, 27.5);
    
    point(26, 26);
    point(32, 32);
    point(38, 38);
    point(44, 44);
   
    point(36, 50);
    point(42, 56);
    
    //middle-5
    point(50, 35);
    point(50, 47.5);
    point(50, 60);
        
    
    //middle-6    
    
    point(58, 27.5);
    point(66, 20);
    
    point(74, 26);
    point(68, 32);
    point(62, 38);
    point(56, 44);
    
    point(58, 56);
    point(64, 50);
        
    //middle-7
    point(72.5, 13);
    
    point(70, 42.5);
    point(70, 50);
    point(70, 57.5);
    point(70, 65);
    point(70, 72.5);
    point(70, 80);
    point(72.5, 87);
    
    //middle-8
    point(80, 10);
    
    point(80, 20);
    point(80, 27.5);
    point(80, 35);
    point(80, 42.5);
    point(80, 50);
    point(80, 57.5);
    point(80, 65);
    point(80, 72.5);
    point(80, 80);
    
    point(80, 90);
        
    //right-9
    point(86.5, 13);
    point(90, 20);
    point(90, 27.5);
    point(90, 35);
    point(90, 42.5);
    point(90, 50);
    point(90, 57.5);
    point(90, 65);
    point(90, 72.5);
    point(90, 80);
    point(86.5, 87);
    
    pop();
        
    }

    
function drawE1(x,y,skt){
    
    push();
    translate(x,y);

    strokeWeight(20);
    stroke(255);
    strokeCap(20);   
        
    line(20, 20, 20, 80);
    point(50, 50);
    line(20, 20, 70, 20);
    line(20, 80, 70, 80);
    
    strokeWeight(1+skt);
    stroke(0);
    fill(0);
    
     //left -1
    point(12.5, 13);
    point(10, 20);
    point(10, 27.5);
    point(10, 35);
    point(10, 42.5);
    point(10, 50);
    point(10, 57.5);
    point(10, 65);
    point(10, 72.5);
    point(10, 80);
    point(12.5, 87);
    
    //middle -2
    point(20, 10);
    
    point(20, 20);
    point(20, 27.5);
    point(20, 35);
    point(20, 42.5);
    point(20, 50);
    point(20, 57.5);
    point(20, 65);
    point(20, 72.5);
    point(20, 80);
    
    point(20, 90);
    
   //right-3
    point(30, 10);
    point(30, 20);
    point(30, 30);
    point(30, 38);
    point(30, 46);
    point(30, 54);
    point(30, 62);
   
    point(30, 70);
    point(30, 80);
    point(30, 90);
    
    //up-4
    point(40, 10);
    point(40, 20);
    point(40, 30);
    
    point(50, 10);
    point(50, 20);
    point(50, 30);
    
    point(60, 10);
    point(60, 20);
    point(60, 30);
    
    point(70, 10);
    point(70, 20);
    point(70, 30);
    
    point(77, 13);
    point(80, 20);
    point(77, 27);
    
        
    
    //down
    point(40, 70);
    point(40, 80);
    point(40, 90);
        
    point(50, 70);
    point(50, 80);
    point(50, 90);
    
    point(60, 70);
    point(60, 80);
    point(60, 90);
    
    point(70, 70);
    point(70, 80);
    point(70, 90);
    
    point(77, 73);
    point(80, 80);
    point(77, 87);
        
    //point
    
    point(50, 50);
    pop();
    }
  
function drawS1(x,y,skt){
    
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
    
    strokeWeight(1+skt);
    stroke(0);
    fill(0);
    
    
    //up
    point(30, 10.3);
    point(31, 21);
    
    point(33, 30);
    point(30, 35);
    point(33, 39);
    
    point(30, 59);
    
    
    
    //
    point(40, 10);
    point(40, 20);
    point(40, 30);
    
    point(50, 10);
    point(50, 20);
    point(50, 30);
    
    point(60, 10);
    point(60, 20);
    point(60, 30);
    
    point(70, 10);
    point(70, 20);
    point(70, 30);
    
   
    point(78, 20);
    
    //
    point(78, 11);
    point(83, 14);
    point(85, 20);
    point(83, 26)
    point(78, 29);
    
    //in
    point(23, 26);
    point(20, 34);
    point(23, 42);
    
    
    //in
    point(67, 61);
    point(70, 65);
    point(67, 69);
    
    
    //
    point(22, 14);
    point(15, 20);
    point(11, 27);
    point(10, 34);
    point(11, 41);
    point(15, 49);
    point(22, 55);
    
    //middle
    
    point(30, 48);
    
    point(40, 40);
    point(40, 50);
    point(40, 60);
    
    point(50, 40);
    point(50, 50);
    point(50, 60);
    
    point(60, 40);
    point(60, 50);
    point(60, 60);
    
    //
 
    point(12, 73);
    point(10, 80);
    point(13, 87);
    
    point(20, 70);
    point(20, 80);
    point(20, 90);
    
    point(30, 70);
    point(30, 80);
    point(30, 90);
    
    point(40, 70);
    point(40, 80);
    point(40, 90);
    
    point(50, 70);
    point(50, 80);
    point(50, 90);
    
    point(60, 70);
    point(60, 80);
    point(60, 90);
    
    
    
    //right
    point(68, 40);
    point(75, 42);
    point(80, 45);
    point(85, 51);
    point(89, 58);
    point(90, 65);
    point(89, 72);
    point(85, 79);
    point(80, 85);
    point(75, 88);
    point(68, 89);
    
    //in
    point(70, 51);
    point(77, 57);
    point(80, 65);
    point(77, 73);
    point(70, 79);
  
    pop();
  }



    
function drawO1(x,y,skt){
    
    push();
    translate(x,y);

    strokeWeight(80);
    stroke(255);
    strokeCap(20);       
    point(50, 50);
    
    stroke(255);
    strokeWeight(20);
    point(50, 50);
  
   
    strokeWeight(1+skt);
    stroke(0);
    fill(0);
    
    //->
    point(50, 10);
    
    point(59, 11);
    point(67, 14);
    point(74, 18);
    point(80, 23);
    point(84, 29);
    point(87, 36);
    point(89, 43);
    
    point(90, 50);
    
    point(89, 57);
    point(87, 64);
    point(84, 71);
    point(80, 77);
    point(74, 82);
    point(67, 86);
    point(59, 89);
    
    point(50, 90);
    
    point(41, 89);
    point(33, 86);
    point(26, 82);
    point(20, 77);
    point(16, 71);
    point(13, 64);
    point(11, 57);
    
    point(10, 50);
    
    point(11, 43);
    point(13, 36);
    point(16, 29);
    point(20, 23);
    point(26, 18);
    point(33, 14);
    point(41, 11);
    
    //
    
    
    //inner ->
    point(50, 40);
    
    point(57, 43);
    point(60, 50);
    point(57, 57);
    
    point(50, 60);
    
    point(43, 57);
    point(40, 50);
    point(42, 43);
    
    
    //in->
    point(50, 25);
    point(40, 27);
    point(32, 32);
    point(27, 40);
    point(25, 50);
    point(27, 60);
    point(32, 68);
    point(40, 73);
    point(50, 75);
    
    point(60, 27);
    point(68, 32);
    point(73, 40);
    point(75, 50);
    point(73, 60);
    point(67, 68);
    point(60, 73);
    
    pop();
    
}




