//add color mode, pixel fonts with letters that move according to mouse
//l laserMode is complete (proof of motion, no data yet)
var rotateLines = 90;
var centerTranslate = -10;

var glyphs = [
    
    [ //A
        0,2,2,2,0,
        2,0,0,0,2,
        2,0,0,0,2,
        2,3,3,3,2,
        2,0,0,0,2,
        2,0,0,0,2
    ],
    [ //B
        3,1,1,1,0,
        3,0,0,0,1,
        3,1,1,1,0,
        3,0,0,0,1,
        3,0,0,0,1,
        3,1,1,1,0
    ],    
    [ //C
        3,1,1,1,0,
        3,0,0,0,1,
        3,0,0,0,1,
        3,0,0,0,1,
        3,0,0,0,1,
        3,1,1,1,0
    ],
    [ //D
        3,1,1,1,0,
        3,0,0,0,1,
        3,0,0,0,1,
        3,0,0,0,1,
        3,0,0,0,1,
        3,1,1,1,0
    ],
    [ //E
        1,1,1,1,1,
        1,0,0,0,0,
        1,1,1,1,0,
        1,0,0,0,0,
        1,0,0,0,0,
        1,1,1,1,1
    ],
    [ //F
        2,3,3,3,3,
        2,0,0,0,0,
        2,0,0,0,0,
        2,3,3,3,0,
        2,0,0,0,0,
        2,0,0,0,0
    ],
    [ //G
        0,1,1,1,1,
        1,0,0,0,0,
        1,0,0,0,0,
        1,0,1,1,1,
        1,0,0,0,1,
        0,1,1,1,0
    ],    
    [ //H
        1,0,0,0,1,
        1,0,0,0,1,
        1,1,1,1,1,
        1,0,0,0,1,
        1,0,0,0,1,
        1,0,0,0,1
    ],    
    [ //I
        1,1,1,1,1,
        0,0,1,0,0,
        0,0,1,0,0,
        0,0,1,0,0,
        0,0,1,0,0,
        1,1,1,1,1
    ],    
    [ //J
        1,1,1,1,1,
        0,0,0,0,1,
        0,0,0,0,1,
        0,0,0,0,1,
        1,0,0,0,1,
        0,1,1,1,0
    ],    
    [ //K
        1,0,0,1,0,
        1,0,1,0,0,
        1,1,0,0,0,
        1,0,1,0,0,
        1,0,0,1,0,
        1,0,0,0,1
    ],
    [ //L
        1,3,1,0,0,
        1,3,1,0,0,
        1,3,1,0,0,
        1,3,1,1,1,
        1,3,3,3,3,
        1,1,1,1,1
    ]
];

var laserNum;
var laserSlider;

var cncNum;
var cncSlider;

var printerNum;
var printerSlider;

var ppl;
var speed = 0;
//var diameter;
var h;

//colors
var seafoam;
var darkteal;
var fabblue;
var darkgreen;
var fabred;

var sceneCount = 0;


function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    h = hour();
//    h = 15;
    //main colors
    seafoam = color(101, 193, 151);
    darkteal = color(0, 117, 124);
    fabblue = color(27, 117, 187);
    fabbrown = color(177, 135, 108);
    mustard = color(241, 188, 57);
    mauve = color(123, 102, 131);
    fabred = color(241, 101, 65);
}

function draw() {
  
// set up scenes
    if (sceneCount == 0) {
    introScene();
  } else if (sceneCount == 1){
    demoScene();
  } 
}

//trigger scene changes
function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    sceneCount--;
  } else if (keyCode == RIGHT_ARROW) {
    sceneCount++;
  }
  
  // keep scene number within limits
  if (sceneCount < 0) {
    sceneCount = 0;
  }
  if (sceneCount > 1) {
    sceneCount = 1;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//scene one
//welcome screen with instructions
function introScene(){
    //background(27, 200, 187);
    setGradient(0, 0, width, height, seafoam, fabblue);
    
    fill(255); 
    // introduction text    
        textSize(30);
        textFont("Work Sans");
        text("A logo with a lesson.", (width/2)-240, 80);
    
    //abstracted pieces
    fill(255);
    rect (0, 400, 200, 400);
    rect (200, 600, 200, 200);
    rect (width-450, 150, 450, 450);
    
    push();
    translate(200, 400);
    rotate(speed);
    stroke(0);
    strokeWeight(2);
    line (-100, -100, 100, 100);
    line(0, -100, 100, 0);
    line (-100, 0, 0, 100);
    pop();
    noStroke();
    
    //smaller text    
    fill(0);
    textSize(16);
    text("Get live information \nabout the MICA DFAB (digital \nfabrication) lab with just  \na quick glance at the logo.", (width/2)-240, 163);

    text("use your keyboard's left and \nright arrow keys to learn more.", width-410, height-150);
    speed += .1;
}

//scene two
//this scene teaches viewers how the mark works
function demoScene(){
    background(255);
    
    //mouseX controls
    var unitGrowth = map(mouseX, 0, width-10, 3, 20);
    var trackNum = map(mouseX, 0, width-10, 0, 10);
    var smallNum = map(mouseX, 0, width-10, 0, 3);
    
    //number readouts
        textSize(50);
        fill(230);
        text((floor(smallNum)), (width/2)-250, height/2+120);
        text((floor(trackNum)), (width/2)-130, height/2+120);
        text((floor(smallNum)), width/2-10, height/2+120);    
        text((floor(trackNum)), width/2+110, height/2+120); 
    
    //base the fill color on dfab's lab tech schedule
        if (h == 9 || h == 10){
            fill(fabblue); 
        } else if (h >= 10 && h < 15 || h == 16){
            fill(darkteal);
        } else if (h == 15){
            fill(seafoam);
        } else if (h ==17 || h == 18 || h == 19){
            fill (mustard);
        } else if (h > 19 && h < 22){
            fill(darkteal);
        } else {
            fill(0);
        }
    
    //spin speed
        var spin = map(mouseX, 0, width-10, 0, 80);
    
    // introduction text    
        textSize(25);
        textFont("Work Sans");
        text("Introducing the new DFAB Identity.", (width/2)-240, 80);
        textSize(13);
        text("move your cursor side to side to view possible logo iterations.", (width/2)-240, 105);

     // labels
        textSize(10);
        text("lasercutters in use", (width/2)-240, height/2+110);
        text("CNC wait time (mins)", (width/2)-120, height/2+110);
        text("3D printers in use", width/2, height/2+110);    
        text("computers in use", width/2+120, height/2+110);    

    //draw actual mark
    push();
    translate();
        drawGlyph('d', (width/2)-240, height/2-50, unitGrowth, speed*spin);
        drawGlyph('f', (width/2)-120, height/2-50, unitGrowth, speed*spin); 
        drawGlyph('a', (width/2), height/2-50, unitGrowth, speed*spin); 
        drawGlyph('b', (width/2)+120, height/2-50, unitGrowth, speed*spin);

    //striped cube rotation    
    speed += .1;
    pop();
    
    //color legend
    stroke(230);
    line((width/2)-240, height-160, (width/2)+220, height-160);
    noStroke();
    textSize(10);
    
    fill(seafoam);
    text("OPEN HOURS", (width/2)-215, height-145);
    
    fill(fabbrown);
    text("OPEN + LASER TECH", (width/2)+5, height-145);
    
    fill(darkteal);
    text("OPEN WITH CLASS PRIORITIES", (width/2)-215, height-115);
    
    fill(mustard);
    text("WORKSHOP", (width/2)+5, height-115);
    
    fill(fabblue);
    text("SCHEDULED CLASS", (width/2)-215, height-85);
    
    fill(mauve);
    text("RESTRICTED", (width/2)+5, height-85);
    
    fill(0);
    text("CLOSED", (width/2)-215, height-55);
    
    fill(fabred);
    text("LASER TECH", (width/2)+5, height-55);
    
    //highlight based on current lab schedule
    noFill();
    strokeWeight(2);
        if (h == 9 || h == 10){
            // fabblue, scheduled class
                stroke(fabblue);
                translate((width/2)-235, height-85);
                line (0, -10, 10, 0);
                line(-10, -10, 10, 10);
                line (-10, 0, 0, 10);  
        } else if (h >= 10 && h < 15 || h == 16){
            // darkteal, xxx
                stroke(darkteal);
                translate((width/2)-235, height-115);
                line (0, -10, 10, 0);
                line(-10, -10, 10, 10);
                line (-10, 0, 0, 10);  
        } else if (h == 15){
            //seafoam, open hours
                stroke(seafoam);
                translate((width/2)-235, height-145);
                line (0, -10, 10, 0);
                line(-10, -10, 10, 10);
                line (-10, 0, 0, 10); 
        } else if (h ==17 || h == 18 || h == 19){
            //mustard, workshop
                stroke(mustard);
                translate((width/2)-15, height-115);
                line (0, -10, 10, 0);
                line(-10, -10, 10, 10);
                line (-10, 0, 0, 10); 
        } else if (h > 19 && h < 22){
            // darkteal, priorities
                stroke(darkteal);
                translate((width/2)-235, height-115);
                line (0, -10, 10, 0);
                line(-10, -10, 10, 10);
                line (-10, 0, 0, 10);  
        } else {
            //black, closed
                stroke(0);
                translate((width/2)-235, height-55);
                line (0, -10, 10, 0);
                line(-10, -10, 10, 10);
                line (-10, 0, 0, 10);  
        }
    noStroke();
}


function drawGlyph(letter, x, y, ppl, rot){
    noStroke();
    var code = letter.charCodeAt(0) - 97; //result will be the number in our array

    push();
    translate(x, y);
    var uw = 20;
    var uh = 20;
    var xpos = 0;
    var ypos = 0;
    var ppl;
    var rot;

    for (var i = 0; i < glyphs[code].length; i++){
        var g = glyphs[code][i]; 
        if (g == 1){
                rect(xpos, ypos, ppl, uh);
                uh = 20;
        }
        else if (g == 2){
                rect(xpos, ypos, uw, ppl);
                uh = 20;
        } 
        else if (g == 3){
            gridUnit(xpos+9, ypos+10, rot); //stripes
        }
        xpos += uw;
        
        if (i%5 == 4){
            xpos = 0;
            ypos += uh;
        }
    }  
    pop();
}

function gridUnit (x, y, rot){
        push();
        translate(x, y);
           if (h == 9 || h == 10){
                stroke(fabblue); 
            } else if (h >= 10 && h < 15 || h == 16){
                stroke(darkteal);
            } else if (h == 15){
                stroke(seafoam);
            } else if (h ==17 || h == 18 || h == 19){
                stroke (mustard);
            } else if (h > 19 && h < 22){
                stroke(darkteal);
            } else {
                stroke(0);
            }
    
            rotate(rot);
            strokeWeight(2);
            line (0, -10, 10, 0);
            line(-10, -10, 10, 10);
            line (-10, 0, 0, 10);
        pop();  
    noStroke();
}

function setGradient(x, y, w, h, c1, c2) {

  noFill();
    for (var i = y; i <= width; i++) {
      var inter = map(i, y, height, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, width, i);
    }
    noStroke();
}
