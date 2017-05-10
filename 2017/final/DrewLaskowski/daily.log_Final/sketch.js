/*****
daily.log

Drew Laskowski
MICA Spring 2017

daily.log is a program designed to create an abstract, visual representation of a given day. The program uses a simpleWeather Yahoo API to pull current weather data, date, and time. The user can manually input data to control the parameters, or use a series of sliders to rate qualitative properties of their day. The individual components of the "poster" will change according to the information given by the user, resulting in a unique composition that serves asa log of the day. The user may save each composition as a .gif file to preserve their log, and over time they may compile the compositions to see trends and progressions in their daily life. 
*****/

//weatherSetup
function weatherSetup() {
    $.simpleWeather({
    location: '03102',
    unit: 'f',
    success: function(weather) {
        drawCurrentValues(weather);
    },
    error: function(weather) {
        console.log('error calling weather');
    }
  });
}

//drawCurrentValues / calls and draws weather data
function drawCurrentValues(w) {
    
//initial styling of weather data
    textFont('HelveticaNeueLTStd-Bd');
    noStroke();
    fill(0);
    
// calls and draws weather data
    
    textAlign(LEFT);
    textSize(50);
    text(w.city, 100, 75);

    textAlign(CENTER);
    textSize(17);
    text(w.sunrise, 150, 145);
    text(w.sunset, 270, 145);
    
    textSize(17);
    text(w.temp + w.units.temp, 390, 125);
    
    textAlign(CENTER);
    textSize(12);
    text(w.text, 390, 145);
}

// gradient variables
var yaxis = 1;
var xaxis = 2;
var c1, c2;
var rInt;
var bInt;

//slider variables
var rSlider, bSlider;

//stress wave variables
var xpos;
var ypos;
var angle = 0;

function setup() {
    createCanvas(825, 1275);
    weatherSetup();
    background(240);
    
    var rInt = 4; //SCALE 1 - 10, WHAT IS YOUR OVERALL MOOD TODAY?
    var bInt = 4; //SCALE 1 - 10, HOW WOULD YOU RATE THE OVERALL QUALITY OF TODAY?
    
    var r = ((255 / 10) * rInt);
    var b = ((255 / 10) * bInt);
    
    c1 = color(0, 255, b);
    c2 = color(r, 0, 255);
    
    drawGradient(100, 150, width/2+74.5, 625, c1, c2, xaxis);
}

function draw() {

// bars on the bottom of page
    fill(0);
    noStroke();
    rect(0, 950, 825, 3);
    rect(0, 1022, 825, 3);
    rect(0, 1245, 825, 30);
    
// weather data ellipses
    strokeWeight(4);
    noFill();
    
    stroke(255);
    ellipse(150, 140, 100, 100);
    
    stroke(0);
    ellipse(270, 140, 100, 100);
    
    stroke(0);
    ellipse(390, 140, 100, 100);

// big square
    noStroke();
    fill(240);
    rect(497, 185, 200, 200);
    
// number of hours asleep (must manually edit)
    textFont('HelveticaNeueLTStd-BdOu');
    textAlign(CENTER);
    textSize(125);
    fill(0);
    noStroke();
    text("4", 595, 327); //HOW MANY HOURS DID YOU SLEEP LAST NIGHT?
    
    textFont('HelveticaNeueLTStd-Bd');
    textSize(17);
    text("4:00 am", 595, 210); //WHAT TIME DID YOU GO TO BED?
    text("8:00 am", 595, 370); //WHAT TIME DID YOU WAKE UP TODAY?
//    text("");
    
    
//today's date (must manually edit)
    textAlign(RIGHT);
    textFont('HelveticaNeueLTStd-Bd');
    textSize(50);
    noStroke();
    fill(0);
    text("Monday, May 1 2017", 810, 1005); //PLEASE INPUT TODAY'S DATE
    
//slider text
    textAlign(LEFT);
    textFont('HelveticaNeueLTStd-Roman');
    textSize(10);
    text("How would you rate the quality of your day?", 180, 1065);
    text("How would you rate your mood today?", 180, 1095);
    text("How would you rate your stress level today?", 180, 1125);
    text("How busy were you today?", 180, 1155);
    text("How would you rate your activity level today?", 180, 1185);
    text("Would you repeat today?", 180, 1215);
    text("Were you happy today?");
    
//slider replacements
    noStroke();
    fill(0);
    
    rect(30, 1060, 120, 5);
    rect(30, 1090, 120, 5);
    rect(30, 1120, 120, 5);
    rect(30, 1150, 120, 5);
    rect(30, 1180, 120, 5);
    rect(30, 1210, 120, 5);
    
//stress wave
    xpos =  595 + cos(angle * 9) * 100; //HOW WOULD YOU RATE YOUR STRESS LEVEL?
    ypos = 668 + sin(angle * 10) * 250 //HOW BUSY WERE YOU TODAY?
  
    ellipse(xpos, ypos, 5, 5);
    fill(240);
    noStroke();
  
    angle += 0.01;

//activity loop
    var szInt = 3;
    var btwnInt = 10;
    var sz = szInt * 7; //SCALE 1 - 10, HOW ACTIVE WERE YOU TODAY?
    var btwn = (btwnInt * 3); //SCALE 1 - 10, HOW DID YOU FEEL TODAY?
    
    for(var b = 0; b <=300; b += btwn) {
        for(var c = 0; c <= 300; c += btwn) {
            fill(0);
            ellipse(b+105, c+490, sz, sz);
        }
    }    
    
}

// sets the gradient field
function drawGradient(x, y, w, h, c1, c2, axis) {
    noFill();
    
    if (axis == xaxis) {
        for (var a = x; a <= w; a++) {
            var inter = map(a, x, w, 0, 1);
            var color = lerpColor(c1, c2, inter);
            noStroke();
            fill(color);
            rect(a, y, w/2, h);
        }
    }
}

/***
TO DO: ADD SLIDERS
***/