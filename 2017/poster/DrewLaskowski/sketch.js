/*****
W A V E F O R M
March 2017

Drew Laskowski
*****/

// Wave variables
var hwave;                          // height/length of entire wave
var amplitude = 15;                 // width of wave
var wavelength;                     // distance between peaks, wavelength
var yspacing = 8;                   // distance between each y location, number of particles
var theta = 0.0;                    // start at angle 0
var iy;                             // value for incrementing y
var xvalues;                        // using an array to store width values for the wave


function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(145, 168, 209, 40);
    
    // wave and letterspacing variables
    var btwn = width/11;
    var lineheight = height/2;
    var row = height/9;
    
    // y-axis motion variables
    var yfloat1 = sin(frameCount / 20) * 5;
    var yfloat2 = sin(frameCount / 25) * 5;
    var yfloat3 = sin(frameCount / 30) * 5;
    var yfloat4 = sin(frameCount / 35) * 5;
    var yfloat5 = sin(frameCount / 40) * 5;
    
    // calcWave variables
    hwave = (lineheight)+lineheight/4;
    wavelength = constrain(mouseY, 100, mouseY);
    
    iy = (TWO_PI / wavelength) * yspacing;
    xvalues = new Array(floor(hwave/yspacing));
    
// to draw the header text
    WaveForm();
    
// to draw Headlines
    HeadlineOne(btwn, row, yfloat1, yfloat2, yfloat3, yfloat4, yfloat5);
    
// to render the waves
    calcWave();
    renderWave(btwn, height/4);
    renderWave(btwn, 0);
    renderWave(btwn, 0);
    renderWave(btwn, 0);
    renderWave(btwn, 0);
    renderWave(btwn, 0);
    renderWave(btwn, 0);
    renderWave(btwn, 0);
    renderWave(btwn, 0);
    renderWave(btwn, 0);
}

// Waveform header text
function WaveForm() {
    textFont("Graphik-Bold");
    textAlign(LEFT);
    textSize(14);
    fill(255);
    
    text("WAVEFORM     THE FUTURE OF TYPOGRAPHY", 20, 30);
    text("2017", width - 55, 30);
}

// HeadlineOne text
function HeadlineOne(btwn, row, yfloat1, yfloat2, yfloat3, yfloat4, yfloat5) {
    textFont("Graphik-Bold"); 
    textAlign(CENTER);
    textSize((row/1.5) - 5);
    fill(247, 202, 201);
    
    text("T", btwn * 1.5, (row * 3.5) + yfloat1);
    text("H", btwn * 1.5, (row * 5.5) + yfloat2);
    text("E", btwn * 1.5, (row * 7) + yfloat1);
    text("T", btwn * 2.5, (row * 4.5) + yfloat3);
    text("F", btwn * 3.5, (row * 3) + yfloat2);
    text("U", btwn * 3.5, (row * 6) + yfloat4);
    text("E", btwn * 3.5, (row * 7.5) + yfloat2);
    text("U", btwn * 4.5, (row * 5) + yfloat5);
    text("R", btwn * 4.5, (row * 7) + yfloat3);
    text("O", btwn * 5.5, (row * 3.5) + yfloat2);
    text("F", btwn * 5.5, (row * 5.5) + yfloat1);
    text("T", btwn * 6.5, (row * 4.5) + yfloat5);
    text("P", btwn * 6.5, (row * 6.5) + yfloat2);
    text("Y", btwn * 7.5, (row * 3) + yfloat3);
    text("R", btwn * 7.5, (row * 5) + yfloat4);
    text("H", btwn * 7.5, (row * 7.5) + yfloat3);
    text("P", btwn * 8.5, (row * 4) + yfloat1);
    text("A", btwn * 8.5, (row * 6.5) + yfloat5);
    text("O", btwn * 9.5, (row * 3.5) + yfloat4);
    text("G", btwn * 9.5, (row * 5.5) + yfloat3);
    text("Y", btwn * 9.5, (row * 7.5) + yfloat1);
}

// calculates xpositions of wave particles
function calcWave() {
    theta += 0.08                   //increment theta, adjust to increase speed of wave
    var t = theta;
 
    for(var a = 0; a < xvalues.length; a++) {
        xvalues[a] = sin(t)*amplitude;
        t+=iy;
    }
}

// renders a square, determined by yspacing, that travels along xvalues[] 
function renderWave(x, y) {
    translate(x, y);
    push();
    
    for(var b = 0; b < xvalues.length; b++) {
        noStroke();
        fill(255);
        rect(xvalues[b], b*yspacing, 5, 5);
    }
    
    pop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}