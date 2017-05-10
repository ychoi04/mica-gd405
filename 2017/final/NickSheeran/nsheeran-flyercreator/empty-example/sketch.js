//radio to select color or text editing
var radio;
var val;

//text composer variables
var inputTop;
var inputMid;
var inputBottom;
var canvas;
var xCon;
var yCon = 0;

var x;
var y;
var tx = 50;
var ty = 200;
var tx2 = 100;
var ty2 = 300;
var xpos;
var ypos;
var easing;
var flip = true;
var end = 0;

var tbcolor;

var typeRadio;
var fontRadio;

//background composer variables
var Y_AXIS = 1;
var X_AXIS = 2;
var c1, c2;
var rots;
var rotsRec;
var trans;
var transRec;
var trans2;
var trans2Rec;
var gradSwitch = 0;
var canvas;

//output variables
var savitR;
var savitR2;

var counter;
var counter2;
var counterM;

var windowF;

var UI;




function setup() {
    canvas = createCanvas(456, 588);
    colorMode(RGB);
    
//    text/color editing radio    
    radio = createRadio();
    radio.option("Edit text              ", 1);
    radio.option("Edit background", 2);
    radio.parent(radioTain);
        
//    text composers
    //    top type input
    enterTop = createP('Enter top text:');
    enterTop.parent(textSlide);
    enterTop.position(0, 0);
    inputTop = createInput();
    inputTop.position(0, enterTop.y + enterTop.height + 20);
    inputTop.parent(textSlide);
    
    //    bottom type input
    enterBottom = createP('Enter bottom text');
    enterBottom.parent(textSlide);
    enterBottom.position(0, inputTop.y + inputTop.height);
    inputBottom = createInput();
    inputBottom.position(0, enterBottom.y + enterBottom.height + 20);
    inputBottom.parent(textSlide);
    
    //    size and color sliders for top/bottom type
    sizit = createP('Size:');
    sizit.position(0, inputBottom.y + inputBottom.height);
    sizit.parent(textSlide);
    
    ts = createSlider(12, 72, 14);
    ts.position(0, sizit.y + sizit.height + 15);
    ts.parent(textSlide);
    
    colorit = createP('Color:');
    colorit.position(0, ts.y + ts.height - 1);
    colorit.parent(textSlide);
    tc = createSlider(1, 3, 1);
    tc.position(0, colorit.y + colorit.height + 20);
    tc.parent(textSlide);
    
    //    main type input
    enterMid = createP('Enter main text:');
    enterMid.position(170, 0);
    enterMid.parent(textSlide);
    inputMid = createInput();
    inputMid.position(170, enterMid.y + enterMid.height + 20);
    inputMid.parent(textSlide);
    
    //    sliders and radios for main type
    sizit2 = createP('Size:');
    sizit2.position(170, inputTop.y + inputTop.height);
    sizit2.parent(textSlide);
    
    ts2 = createSlider(12, 72, 14);
    ts2.position(170, sizit2.y + sizit2.height + 20);
    ts2.parent(textSlide);
    
    widit = createP('Line length:');
    widit.position(170, ts2.y + ts2.height + 4);
    widit.parent(textSlide);
    
    tw = createSlider(10, width, width/2);
    tw.position(170, widit.y + widit.height + 15);
    tw.parent(textSlide);
    
    bouncit = createP('Bounce speed:')
    bouncit.position(170, tw.y + tw.height + 4);
    bouncit.parent(textSlide);
    
    bs = createSlider(1, 20, 5);
    bs.position(170, bouncit.y + bouncit.height + 15);
    bs.parent(textSlide);
    
    mtp = createP("Text color:");
    mtp.position(170, bs.y + bs.height + 4);
    mtp.parent('textSlide');
    mtl = createP("R<br>G<br>B");
    mtl.position(170, mtp.y + mtp.height);
    mtl.parent('textSlide');
    mtR = createSlider(0, 255, 255);
    mtR.position(185, mtl.y + mtl.height - 40);
    mtR.parent('textSlide');
    mtG = createSlider(0, 255, 255);
    mtG.position(185, mtl.y + mtl.height - 22);
    mtG.parent('textSlide');
    mtB = createSlider(0, 255, 255);
    mtB.position(185, mtl.y + mtl.height - 3);
    mtB.parent('textSlide');
        
    //    typeface selection
    typit = createP('Select typeface:');
    typit.position(0, 0);
    typit.parent(fontTain);
    
    tf = createRadio();
    tf.option("Sans-serif     ", 1);
    tf.option("Serif     ", 2);
    tf.option("Ugly     ", 3);
    tf.option("Ugly2     ", 4);
    tf.option("Ugly3     ", 5);
    tf.parent(fontTain);
    tf.position(0, typit.y + typit.height + 20);
    
    bouncX = createP("Change bounce targets by clicking the canvas");
    bouncX.position(0, tf.y + tf.height + 20);
    bouncX.parent(fontTain);
        
    //    setting up main type default positions
    x = 50;
    y = 200;
    xpos = tx;
    ypos = ty;
    
//    background composers
    bg2p = createP("Top Gradient Color:");
    bg2p.parent('colTain');
    bg2p.position(0, 0);
    bg2l = createP("R<br>G<br>B");
    bg2l.position(0, bg2p.y + bg2p.height);
    bg2l.parent('colTain');
    bg2R = createSlider(0, 255, 172);
    bg2R.position(15, bg2l.y + bg2l.height - 40);
    bg2R.parent('colSlide2');
    bg2B = createSlider(0, 255, 0);
    bg2B.position(15, bg2l.y + bg2l.height - 22);
    bg2B.parent('colSlide2');
    bg2G = createSlider(0, 255, 239);
    bg2G.position(15, bg2l.y + bg2l.height - 3);
    bg2G.parent('colSlide2');
    
    bg1p = createP("Bottom Gradient Color:");
    bg1p.parent('colTain');
    bg1p.position(0, bg2G.y + bg2G.height + 4);
    bg1l = createP("R<br>G<br>B");
    bg1l.position(0, bg1p.y + bg1p.height);
    bg1l.parent('colTain');
    bg1R = createSlider(0, 255, 255);
    bg1R.position(15, bg1l.y + bg1l.height - 40);
    bg1R.parent('colSlide');
    bg1B = createSlider(0, 255, 170);
    bg1B.position(15, bg1l.y + bg1l.height - 22);
    bg1B.parent('colSlide');
    bg1G = createSlider(0, 255, 200);
    bg1G.position(15, bg1l.y + bg1l.height - 3);
    bg1G.parent('colSlide');
    
    bgXp = createP("Fix gradient position by clicking the canvas.");
    bgXp.style("width", "200");
    bgXp.parent(colTain);
    bgXp.position(0, bg1G.y + bg1G.height + 4);
    
//    output options
    savit = createButton("Save image");
    savit.style("width", "100");
    savit.position(0, 0);
    savit.parent(saver);
    
    savit2 = createButton("Save frames");
    savit2.style("width", "100");
    savit2.position(savit.width + 20, 0);
    savit2.parent(saver);
    
    //    variables to control number of frames saved based on bounce speed and distance between bounce targets
    counter = 0;
    counter2 = 0;
    counterM = 0;
    
    //    controls to remove UI
    buttonUI = createButton("Hide interface");
    buttonUI.style("width", "100");
    buttonUI.position(0, savit2.y +savit2.height + 20);
    buttonUI.parent(saver);
    
    UI = true;
}





function draw() {
//    text/color editing radio    
    val = radio.value();
    
    if (val == 1) {
        document.getElementById("textSlide").style.display = "inline-block";
        document.getElementById("fontTain").style.display = "inherit";
        document.getElementById("colTain").style.display = "none";
        document.getElementById("colSlide").style.display = "none";
    } else if (val == 2) {
        document.getElementById("textSlide").style.display = "none";
        document.getElementById("fontTain").style.display = "none";
        document.getElementById("colTain").style.display = "inherit";
        document.getElementById("colSlide").style.display = "block";
        
    } else {
        document.getElementById("textSlide").style.display = "none";
        document.getElementById("fontTain").style.display = "none";
        document.getElementById("colTain").style.display = "none";
        document.getElementById("colSlide").style.display = "none";
    }
    
//    background color draw
    c1 = color(bg1R.value(), bg1B.value(), bg1G.value(), 100);
    c2 = color(bg2R.value(), bg2B.value(), bg2G.value(), 100);
    
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        if (gradSwitch == 0) {
        rots = map(radians(mouseX), radians(0), radians(width), radians(-90), radians(90));

        trans = map(mouseX, 0, width, 0, width);

        trans2 = map(mouseY, 0, height, -height, height);
        } else if (gradSwitch == 1) {
            rots = rotsRec;
            trans = transRec;
            trans2 = trans2Rec;
        }
    }
    push();
    translate(trans, trans2);
    rotate(rots);
    setGradient(width/2, height/2, width, height, c2, c1);
    pop();
    
//    text draws    
    //    top text draw
    var ptop = inputTop.value();
    var pbottom = inputBottom.value();
    var pts = ts.value();
    
    if (tc.value() == 1) {
        tbcolor = 'white';
    } else if (tc.value() == 2) {
        tbcolor = 'gray';
    } else if (tc.value() == 3) {
        tbcolor = 'black';
    }
    
    //    conditions for setting type in various font combinations
    if (tf.value() == 1) {
        textFont("Merriweather");
    } else if (tf.value() == 2) {
        textFont("Montserrat")
    } else if (tf.value() == 3) {
        textFont("Montserrat");
    } else if (tf.value() == 4) {
        textFont("Montserrat");
    } else if (tf.value() == 5) {
        textFont("Montserrat");
    } else {
        textFont("Sans-serif");
    }
    
    fill(tbcolor);
    noStroke();
    
    textSize(pts);
    textAlign(CENTER, TOP);
    
    text(ptop, 0, 0, width, 200);
    
    textAlign(CENTER, BOTTOM);
    text(pbottom, 0, height - 200, width, 200);
            
    //    main text draw   
    stroke(0);
    strokeWeight(2);
    fill(mtR.value(), mtG.value(), mtB.value());
    
    textAlign(CENTER, TOP);
    var p1 = inputMid.value();
    var pSize = ts2.value();
    var lineLength = tw.value();
    easing = bs.value() * .01;
    
    textSize(pSize);
        
    //    floor and ceil were the most important things I learned with this project
    if (floor(x) == tx || floor(y) == ty || ceil(x) == tx || ceil(y) == ty) {
        flip = false;
    } else if (ceil(x) == tx2 || ceil(y) == ty2 || floor(x) == tx2 || floor(y) == ty2) {
        flip = true;
    }
    
    if (flip == false) {
        xpos = tx2;
        ypos = ty2;
    } else {
        xpos = tx;
        ypos = ty;
    }
    
    x = lerp(x, xpos, easing);
    y = lerp(y, ypos, easing);
    
    if (tf.value() == 1) {
        textFont("Montserrat");
    } else if (tf.value() == 2) {
        textFont("Merriweather")
    } else if (tf.value() == 3) {
        textFont("Creepster");
    } else if (tf.value() == 4) {
        textFont("Shojumaru");
    } else if (tf.value() == 5) {
        textFont("Slackey");
    } else {
        textFont("Sans-serif");
    }

    text(p1, x, y, lineLength, windowHeight);
    
//    saving output
    //    single frame jpg
    savit.mouseClicked(saveJPG);
    if (savitR == true) {
        saveCanvas('myFlyer', 'jpg');
        savitR = false;
    }
    
    //    multiple frame png's -- counters used to measure time it takes for main type to bounce from target1 to target2 and back to target1, limiting downloaded frames to exact amount needed to create seamlessly looping gif
    if (floor(x) == tx2 || floor(y) == ty2 || ceil(x) == tx2 || ceil(y) == ty2) {
            counterM ++;
    }
    
    if (floor(x) == tx || floor(y) == ty || ceil(x) == tx || ceil(y) == ty) {
        if (counterM == 0 || counterM == 2) {
            counter = millis();
        } else if (counterM == 1) {
            counter2 = millis();
        }
    }

    if (counter > counter2) {
        windowF = counter - counter2;
    } else if (counter2 > counter) {
        windowF = counter2 - counter;
    }
    
    savit2.mouseClicked(saveFs);
    if (savitR2 == true) {
        saveFrames('myFlyer', 'png', windowF/1000, 30);
        savitR2 = false;
    }
    
    bs.mouseClicked(counterReset);
    
    //    conditions for removing UI upon clicking hide interface button -- priming webpage for display on digital kiosk
    buttonUI.mouseClicked(UIset);
    if (UI == false) {
        document.getElementById("textSlide").style.display = "none";
        document.getElementById("fontTain").style.display = "none";
        document.getElementById("colTain").style.display = "none";
        document.getElementById("colSlide").style.display = "none";
        document.getElementById("radioTain").style.display = "none";
        document.getElementById("saver").style.display = "none";
//        document.getElementById("holder").style.right = "40%";
        canvas.parent('holder2');
    } else {
        document.getElementById("radioTain").style.display = "block";
        document.getElementById("saver").style.display = "block";
        
        canvas.parent('holder');
    }
}





function mousePressed() {
//    for bringing UI back after hiding
    if (UI == false) {
        UI = true;
    }
    
//for setting target locations of text
    if (mouseX < width && mouseX > 0 && 0 < mouseY && mouseY < height && val == 1) {
        //    sets switch to designate first and second x/y target positions
            end += 1;
            if (end > 1) {
                end = 0;
            }

        //    designates first and second target positions based on "end" switch
            if (end == 0) {
                tx = floor(mouseX);
                ty = floor(mouseY);
            } else if (end == 1) {
                tx2 = floor(mouseX);
                ty2 = floor(mouseY);
            }
        
        counterReset();
    }
}




//creates dynamic positioning of gradient based on mouse location
function setGradient(x, y, w, h, c1, c2) {
    noFill();

    for (var i = y - h/2*10; i <= y + h/2*10; i++) {
        var inter = map(i, y, y+h, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x-width/2*10, i, x+width/2*10, i);
    }
}




//toggles gradient between dynamic and static positions when edit background is selected
function mouseClicked() {    
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height && val == 2) {
        gradSwitch += 1;

        if (gradSwitch > 1) {
            gradSwitch = 0;
        }

        rots = map(radians(mouseX), radians(0), radians(width), radians(-90), radians(90));
        trans = map(mouseX, 0, width, 0, width+100);
        trans2 = map(mouseY, 0, height, -height, height);

        transRec = trans;
        trans2Rec = trans2;
        rotsRec = rots;
        
        counterReset();
    }
}




//brings back UI after it is hidden
function keyPressed() {
    if (UI == false) {
        UI = true;
    }
}




//used with button commands to create events for saving, preventing continous downloads
function saveJPG() {
        savitR = true;
}

function saveFs() {
        savitR2 = true;
}




//resets counters when bounce targets or bounce speed change
function counterReset() {
    counter = 0;
    counter2 = 0;
    counterM = 0;
}

//toggles UI display
function UIset() {
    UI = !UI;
}