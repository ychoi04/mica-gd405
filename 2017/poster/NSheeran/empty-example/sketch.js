var angle = 0;
var ypos;
var xpos;
var xpos2;
var middlesize;

var y = 0;
var y2 = 0;
var targetY = 0;
var targetY2 = 0;

var x;
var targetX;

var song;
var play;
var sound, amplitude;

var titleX = 0;
var titleWidth;

var ven;
var cal;
var lefte;
var righte;

scene = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    
    targetY = windowHeight * .2;
    targetY2 = windowHeight * .2;
    
    x = windowHeight - (windowHeight * .2);
    
    song = loadSound('assets/2Bears-MyQueen.mp3')
    amplitude = new p5.Amplitude();
    
    ven = loadImage("assets/venue.png");
    cal = loadImage("assets/calendar.jpg");
    lefte = loadImage("assets/lefteyes.png");
    righte = loadImage("assets/righteyes.png");
}

function draw() {    
    console.log(windowWidth);
    console.log(windowHeight);
    background(0, 0, 0, 10);
    fill(255);
    
    noStroke();
    rect(0, 0, windowWidth, y);
    rect(0, x, windowWidth, y2);
    
    var easing = 0.125
    
    var diffY = targetY - y;
    y += diffY * easing;  
    
    var diffY2 = targetY2 - y2;
    y2 += diffY2 * easing;
    
    fill(255);
    
//    middle type
    if (windowHeight > 422 && windowWidth < 671) {
        titleWidth = windowWidth * .66;
    } else if (windowHeight < 422 && windowWidth < 671) {
        titleWidth = windowWidth * .4;
    } else if (windowHeight > 422 && windowHeight < 560 && windowWidth > 869) {
        titleWidth = windowWidth * .4;
    } else if (windowHeight > 559 && windowWidth > 869) {
        titleWidth = windowWidth * .66;
    }
    
    middlesize = windowHeight * .2;
    
    if (windowHeight > 655) {
        middlesize = 139;
    } else if (windowHeight < 655) {
        middlesize = windowHeight * .2;
    } else middlesize = windowHeight * .2;

    strokeWeight(2);
    stroke(0);
    textAlign(CENTER);
    textLeading(middlesize);    
    
    if (scene == 0 || scene == 3) {
        if (windowHeight * .2 < mouseY && mouseY < windowHeight - windowHeight * .2 && scene == 0) {
            ypos = sin(angle * 2) * windowHeight/(middlesize/12);
            xpos = sin(angle * .5) * windowWidth/10;
            text("THE 2 BEARS", xpos + mouseX, ypos + windowHeight/2 - middlesize/12, windowWidth * .66);
        } else if (scene == 3) {
            ypos = sin(angle * .5) * windowHeight/5.7;
            xpos = sin(angle * .25) * windowWidth/2.5;
            fill(100);
            text("THE 2 BEARS", xpos + windowWidth/2, ypos + windowHeight/2 + middlesize/2.7, windowWidth * .66);
        } else {
            ypos = sin(angle * 2) * windowHeight/(middlesize/12);
            xpos = sin(angle * 1) * windowWidth*.4;
            text("THE 2 BEARS", xpos + windowWidth/5.5, ypos + windowHeight/2 - middlesize/12, titleWidth);
        }
    }
    
    var level = amplitude.getLevel();
    var amp = map(level, 0, 1, 36, 144);
    
    if (scene == 3) {
        fill(255);
        titleX = 0;
//        titleX = sin(angle * 1) * windowWidth/3;
//        if (titleX > windowWidth) {
//            titleX = 0;
//        }
        
        textSize(amp);
        text("My Queen", titleX + windowWidth/2, windowHeight/2);
        
    }
   
//    bottom and top type
    
    xpos2 = sin(angle * .5) * windowWidth/2.5;
    
    textSize(windowHeight * .2);
    fill(0);
//    textAlign(CENTER);
    
    if (scene == 0 || scene == 1) {
        if (mouseY < windowHeight * .2 || scene == 1) {
            text("PLACE", mouseX, windowHeight * .17);
        } else {
            text("PLACE", xpos2 * .8 + windowWidth/2 , windowHeight * .17);
        }
    }

    if (scene == 0 || scene == 2) {
        if (mouseY > windowHeight - windowHeight * .2 || scene == 2) {
             text("TIME", mouseX, windowHeight - windowHeight * .03); 
        } else {
             text("TIME", -xpos2 * .8 + windowWidth/2, windowHeight - windowHeight * .03);    
        }
    }
        
    angle += 0.01;
    
//    image/graphic collateral displays
    if (scene == 1) {
        ypos = sin(angle * 2) * windowHeight/5.7;
        xpos = sin(angle * 1) * windowWidth/3;
        image(ven, xpos + windowWidth/2 - width/6, ypos + windowHeight/2 - height/7, width/3, height/3 + (map(mouseY, 0, windowHeight, 0, 30)));
        
        textSize(36);
        textLeading(map(mouseY, 0, windowHeight, 36, 64))
        
        text("BASING HOUSE\n25 Kingsland Road\nLondon", windowWidth/2, windowHeight/2);
    }
    
    if (scene == 2) {
        imageMode(CENTER);
        image(cal, windowWidth/2, windowHeight/3, width/2, width/2 * .83);
        
        image(lefte, map(mouseX, 0, windowWidth, windowWidth/2 - windowWidth * .003, windowWidth/2 + windowWidth * .004), map(mouseY, 0, windowHeight, windowHeight/3 - windowHeight * .001, windowHeight/3 + windowHeight * .001), width/2, width/2 * .83);
        
        image(righte, map(mouseX, 0, windowWidth, windowWidth/2 - windowWidth * .003, windowWidth/2 + windowWidth * .004), map(mouseY, 0, windowHeight, windowHeight/3 - windowHeight * .001, windowHeight/3 + windowHeight * .001), width/2, width/2 * .83);
    }

}

function mousePressed() {
    if (mouseY < windowHeight * .2 && scene == 0) {
        scene ++;
        if (scene > 1) {
            scene = 0;
        }
        if (scene == 0) {
            targetY = windowHeight * .2;
        } else if (scene == 1) {
            targetY = windowHeight;
        }
    } else if (mouseY > windowHeight - windowHeight * .2 && scene == 0) {
        scene += 2;
        if (scene > 2) {
            scene = 0;
        }
        if (scene == 0) {
            targetY2 = windowHeight * .2;
            x = windowHeight - (windowHeight * .2);
        } else if (scene == 2) {
            targetY2 = windowHeight;
            x = 0;
        }
    } else if (scene == 1) {
        scene = 0;
        if (scene == 0) {
            targetY = windowHeight * .2;
            targetY2 = windowHeight * .2;
            x = windowHeight - (windowHeight * .2);
        }
    } else if (scene == 2) {
        scene = 0;
        if (scene == 0) {
            targetY = windowHeight * .2;
            targetY2 = windowHeight * .2;
            x = windowHeight - (windowHeight * .2);
        }
    } else if (windowHeight * .2 < mouseY && mouseY < windowHeight - windowHeight * .2 && scene == 0) {
        scene += 3;
        if (scene == 3) {
            targetY = 0;
            targetY2 = 0;
            x = windowHeight;
            song.play();
        }
    } else if (scene == 3) {
        scene = 0;
        fill(255);
        targetY = windowHeight * .2;
        targetY2 = windowHeight * .2;
        x = windowHeight - (windowHeight * .2);
        song.pause();
        }
    }

function windowResized() {
    if (scene == 0) {
        x = windowHeight - (windowHeight * .2);
        targetY = windowHeight * .2;
        targetY2 = windowHeight * .2;
    } else if (scene == 1) {
        targetY = windowHeight;
    } else if (scene == 2) {
        targetY2 = windowHeight;
    }
    resizeCanvas(windowWidth, windowHeight);
}