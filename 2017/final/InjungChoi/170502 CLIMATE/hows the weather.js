var mon = ['CITYNAME','JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];

var valIndex = 5;
var hwave = 1000;
var amplitude = 25;
var wavelength = 300;
var yspacing = 1;
var theta = 0.0;
var iy;
var xvalues;
var button;

var glyphs = [
    
    [//c
		0,1,1,1,1,
        1,0,0,0,0,
        1,0,0,0,0,
        1,0,0,0,0,
        1,0,0,0,0,
        1,0,0,0,0,
        1,0,0,0,0,
        1,0,0,0,0,
        0,1,1,1,1,
	],
    [//l
        1,0,0,0,0,
        1,0,0,0,0,
        1,0,0,0,0,
        1,0,0,0,0,
        1,0,0,0,0,
        1,0,0,0,0,
        1,0,0,0,0,
        1,0,0,0,0,
        1,1,1,1,1,
    ],
        
    [//i
        1,1,1,1,1,
        0,0,1,0,0,
        0,0,1,0,0,
        0,0,1,0,0,
        0,0,1,0,0,
        0,0,1,0,0,
        0,0,1,0,0,
        0,0,1,0,0,
        1,1,1,1,1,
    ],
    
    [//m
        0,1,0,1,0,
        1,0,1,0,1,
        1,0,1,0,1,
        1,0,1,0,1,
        1,0,1,0,1,
        1,0,1,0,1,
        1,0,1,0,1,
        1,0,1,0,1,
        1,0,1,0,1,
    ],
    
    [//a
        0,1,1,1,0,
        1,0,0,0,1,
        1,0,0,0,1,
        1,0,0,0,1,
        1,1,1,1,1,
        1,0,0,0,1,
        1,0,0,0,1,
        1,0,0,0,1,
        1,0,0,0,1,
    ],
    
    [//t
        1,1,1,1,1,
        0,0,1,0,0,
        0,0,1,0,0,
        0,0,1,0,0,
        0,0,1,0,0,
        0,0,1,0,0,
        0,0,1,0,0,
        0,0,1,0,0,
        0,0,1,0,0,
    ],
    
    [//i
        1,1,1,1,1,
        1,0,0,0,0,
        1,0,0,0,0,
        1,0,0,0,0,
        1,1,1,1,1,
        1,0,0,0,0,
        1,0,0,0,0,
        1,0,0,0,0,
        1,1,1,1,1,
    ],
    
  
];

function setup () { 
    button = createButton("?");
}

function draw() {
    createCanvas (windowWidth,windowHeight);
    background(0,120,178);
    
    for (var y=0; y <=windowHeight/2; y+=67){
        for (var x=0; x<=width+50; x+=67){
            noFill();
            stroke(255);
            strokeWeight(3);
            ellipse(x,y,15,15);
        }
    }
    
    stroke(255);
    strokeWeight (1);
    textSize(50);
    text(mon[valIndex],windowWidth/1.8,windowHeight/1.5);
    
    drawGlyph('a',windowWidth/5-50,windowHeight/8); 
    drawGlyph('b',windowWidth/5+50,windowHeight/8);
    drawGlyph('c',windowWidth/5+150,windowHeight/8);
    drawGlyph('d',windowWidth/5+250,windowHeight/8); 
    drawGlyph('e',windowWidth/5+350,windowHeight/8); 
    drawGlyph('f',windowWidth/5+450,windowHeight/8); 
    drawGlyph('g',windowWidth/5+550,windowHeight/8); 
    
    noStroke();
    strokeWeight (1);
    stroke(255,0,0);
    fill(255,0,102);
    ellipse(windowWidth/6.3,windowHeight/1.55,50,50);
    
    noFill();
    stroke(255,0,102);
    textSize(50);
    text('81F',windowWidth/5.5,windowHeight/1.5);
    
    if (mouseIsPressed)
    info();
    
    hwave = windowWidth;
    iy = (TWO_PI / wavelength) * yspacing;
    xvalues = new Array(floor(hwave/yspacing));
    calcWave();
    renderWave(0, windowHeight/2);
    
    
}

function drawGlyph(gly,x,y) {
    var code = gly.charCodeAt(0)-97;
    push();
    translate(x,y);
    stroke(0);
    strokeWeight(2);
    
    var xpos = 0;
    var ypos = 2;
    
        for (var i = 0; i<glyphs[code].length; i++){
            var g = glyphs[code][i];
            if (g==1){
                line ( xpos,ypos,xpos+10,ypos+10);
            }
            
            xpos+=15;
            if(i%5==4){
                xpos = 0;
                ypos +=15;
            }
        }    
    pop();
}

function info(x,y){
    translate(x,y);
    fill(0);
    noStroke();
    textSize(5);
    textFont("Roboto");
    text ('PRECIPITATION / WIND SPEED',100,windowHeight/1.8);
    text ('TEMPERATURE',windowWidth/5.5,windowHeight/1.4);
    text ('MONTH',windowWidth/1.8,windowHeight/1.4);
    text ('HUMIDITY',100,windowHeight/3.14);
    text ('WIND SPEED',windowWidth/5,windowHeight/3.14);
}

function calcWave() {
    theta += 0.03;
    var t = theta;

    for(var a = 0; a < xvalues.length; a++) {
          xvalues[a] = sin(t)*amplitude;
          t+=iy;
    }
}

function renderWave(x, y) {
     translate(x, y);
     push();

     for(var b = 0; b < xvalues.length; b++) {
          noStroke();
          fill(255);
          rect(b*yspacing,xvalues[b], 10, 10);
     }

     pop();
}