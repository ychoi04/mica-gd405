var mic;
var micOn;
var sceneCount = 0;
var volhistory = [];
var button1; // Hey
var button2; // Shut up
var button3; // Come on

var button5; // Clear


function setup() {
background (241);
mic = new p5.AudioIn();
mic. start();
micOn = true;
createCanvas(windowWidth,windowHeight);
}

function title() {
background(241);
var volume = mic.getLevel();
stroke(0);
fill(219,68,55);
textFont("Roboto Condensed")
textSize(50);
strokeWeight(3)
//text (' Read Aloud ', windowWidth/5,windowHeight/2);
text (' say "START" to start !', windowWidth/5,windowHeight/2);
textSize(30);
strokeWeight(3)
//text (' say "START" to start', windowWidth/5+5,windowHeight/2+80);
text ('Put on earphones and', windowWidth/5+10,windowHeight/2-60);
text ('(hit spacebar to on/off mic)', windowWidth/5+10,windowHeight/2+110);
if (volume > 0.35){
count();
}
}

function sceneHey() {
fill(241);
rect (50,20,100,121);
button1 = createButton("  HEY ");
button1.position(80,55);
button1.mousePressed(count1);
button2 = createButton("SHUT UP");
button2.position(80,75);
button2.mousePressed(count2);
button3 = createButton("COME ON");
button3.position(80,95);
button3.mousePressed(count3);
button5 = createButton("CLEAR");
button5.position(50,30);
button5.mousePressed(back);
stroke(0);
strokeWeight(2);
fill(15,157,88);
ellipse (70,70,12,12);
noFill();
ellipse (70,90,12,12);
noFill();
ellipse (70,110,12,12);
var volume = mic.getLevel();
var threshold = 0.03;
if (volume > threshold) {
stroke(0);
fill(15,157,88);
text ('HEY',random(170, windowWidth-300), random(120, windowHeight-120));
textSize(volume*200, volume*200);
}
if (volume <0.3){
textFont("Quicksand")
strokeWeight(2)
} else if (volume >0.3 && volume <0.44) {
textFont("Roboto Condensed")
strokeWeight(3)
} else if (volume >0.44) {
textFont("Ultra")
strokeWeight(4)
} 
}

function sceneShutup() {
fill(241);
rect (50,20,100,121);
fill(241);
rect (50,20,100,121);
button1 = createButton("  HEY ");
button1.position(80,55);
button1.mousePressed(count1);
button2 = createButton("SHUT UP");
button2.position(80,75);
button2.mousePressed(count2);
button3 = createButton("COME ON");
button3.position(80,95);
button3.mousePressed(count3);
button5 = createButton("CLEAR");
button5.position(50,30);
button5.mousePressed(back);
stroke(0);
strokeWeight(2);
noFill();
ellipse (70,70,12,12);
fill(244,188,0);
ellipse (70,90,12,12);
noFill();
ellipse (70,110,12,12);
var volume = mic.getLevel();
var threshold = 0.03;
if (volume > threshold) {
stroke(0);
fill(244,188,0);
text ('SHUT UP',random(170, windowWidth-300), random(120, windowHeight-120));
textSize(volume*200, volume*200);
}  
if (volume <0.4){
textFont("Quicksand")
strokeWeight(2)
} else if (volume >0.4 && volume <0.5) {
textFont("Roboto Condensed")
strokeWeight(3)
} else if (volume >0.5) {
textFont("Ultra")
strokeWeight(4)
} 
}

function sceneComeon() {
fill(241);
rect (50,20,100,121);
fill(241);
rect (50,20,100,121);
button1 = createButton("  HEY ");
button1.position(80,55);
button1.mousePressed(count1);
button2 = createButton("SHUT UP");
button2.position(80,75);
button2.mousePressed(count2);
button3 = createButton("COME ON");
button3.position(80,95);
button3.mousePressed(count3);
button5 = createButton("CLEAR");
button5.position(50,30);
button5.mousePressed(back);
stroke(0);
strokeWeight(2);
noFill();
ellipse (70,70,12,12);
noFill();
ellipse (70,90,12,12);
fill(66,133,244);
ellipse (70,110,12,12);
var volume = mic.getLevel();
var threshold = 0.03;
if (volume > threshold) {
stroke(0);
fill(66,133,244);
text ('COME ON',random(170, windowWidth-300), random(120, windowHeight-120));
textSize(volume*200, volume*200);
} 
if (volume <0.4){
textFont("Quicksand")
strokeWeight(2)
} else if (volume >0.4 && volume <0.5) {
textFont("Roboto Condensed")
strokeWeight(3)
} else if (volume >0.5) {
textFont("Ultra")
strokeWeight(4)
} 
}

function draw () {
var volume = mic.getLevel();
var threshold = 0.03;  
if (sceneCount == 1) {
    sceneHey();
  } else if (sceneCount == 2) {
    sceneShutup();
  } else if (sceneCount == 3) {
    sceneComeon();
  } else if (sceneCount == 0) {
    title();
  }
if (sceneCount > 3) {
    sceneCount = 1;
  }

var y = map(volume, 0, 1, windowHeight, 0);
var ythreshold = map(threshold, 0, 0.3, windowHeight, 0);
    noStroke();
    fill (volume*3300,100,80,50);
    rect(0, 0, 20, windowHeight);

    fill(244,180,0);
    rect(0, y, 20, y);

}
function count1(){
    sceneCount = 1;
    background (241);
}
function count2(){
    sceneCount = 2;
    background (241);
}
function count3(){
    sceneCount = 3;
    background (241);
}
function count() {
    sceneCount++;
    background (241);
}

function back() {
    background (241);
}

function keyPressed() {
    micOn = !micOn;
    if (micOn) {
        mic.start();
    }
    else {
        mic.stop();
    }
}