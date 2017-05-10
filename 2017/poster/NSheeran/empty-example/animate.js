var x = 0;
var y = 0;
var targetX = 0;
var targetY = 0;
var sizz = 1;
scene = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
//    y = windowHeight * .6;
    targetY = windowHeight * .6;
}

function draw() {
    background(255);
    rectMode(CENTER);
    noFill();
    
    rect(windowWidth/2, windowHeight/2, windowWidth, y);
    
    var easing = 0.125
    
//    var diffY = targetY - y;
    var diffY = targetY - y;
    
    y += diffY * easing;    
}

function mousePressed() {
    scene ++;
    if (scene > 1) {
        scene = 0;
    }
    if (scene == 0) {
        targetY = windowHeight * .6;
    } else if (scene == 1) {
        targetY = windowHeight;
    }
}

console.log(y);