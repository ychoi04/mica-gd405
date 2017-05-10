var dat = [
    //London [ temp,preci,length,humidity,wind];
    [50.5,1.96,12.9,77,6.7],
    [47,2.08,9.2,80,10],
    [48,1.89,10.6,77,9],
    [53,1.17,12.5,70,10],
    [60,1.21,14.5,65,9],
    [64,2.05,16.3,67,9],
    [70,1.38,17.3,65,9],
    [75,2.01,16.7,65,9],
    [72,2.26,15.1,69,8],
    [68,1.62,13.2,73,8],
    [61,2.42,11.2,78,8],
    [53,2.83,9.5,81,9],
    [48,2.56,8.6,81,10],
];
var mon = ['LONDON','JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];
var valIndex = 0;
var X_AXIS = 2;
var c1, c2;
var hwave = 1000;
var amplitude = 25;
var wavelength = 300;
var yspacing = 1;
var theta = 0.0;
var iy;
var xvalues;
var button0; 
var button1; 

var glyphs = [
    
    [//w
		1,0,1,0,1,
        1,0,1,0,1,
        1,0,1,0,1,
        1,0,1,0,1,
        1,0,1,0,1,
        1,0,1,0,1,
        1,0,1,0,1,
        1,0,1,0,1,
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
        
    [//n
        1,1,1,1,1,
        1,0,0,0,1,
        1,0,0,0,1,
        1,0,0,0,1,
        1,0,0,0,1,
        1,0,0,0,1,
        1,0,0,0,1,
        1,0,0,0,1,
        1,0,0,0,1,
    ],
    
    [//d
        1,1,1,1,0,
        1,0,0,0,1,
        1,0,0,0,1,
        1,0,0,0,1,
        1,0,0,0,1,
        1,0,0,0,1,
        1,0,0,0,1,
        1,0,0,0,1,
        1,1,1,1,0,
    ]

];


function setup () {
    createCanvas (1000,620); 
    
    button0 = createButton("Prev");
    button0.mousePressed(prev);
    
    button1 = createButton("Next");
    button1.mousePressed(next);
    
    button0.position(1150,550);
    button1.position(1150,650);
    
    
}

function draw() {
     background(0,100/dat[valIndex][1],178);

    for (var y=0; y <=600/dat[valIndex][1]; y+=dat[valIndex][3]){
        for (var x=0; x<=width+50; x+=dat[valIndex][3]){
        noFill();
        stroke(255);
        strokeWeight(dat[valIndex][3]/20);
        ellipse(x,y,dat[valIndex][3]/5,dat[valIndex][3]/5);
        }
    }
    stroke(255);
    strokeWeight (2);
    textSize(100);
    text(mon[valIndex],450,600);
    
    drawGlyph('a',140,100); 
    drawGlyph('b',340,100);
    drawGlyph('c',540,100);
    drawGlyph('d',740,100); 
    
    noFill();
    stroke(dat[valIndex][0]*4,0,0);
    
    strokeWeight (4);
    fill(dat[valIndex][0]*4,0,102);
    noStroke();
    ellipse(60,550,dat[valIndex][0],dat[valIndex][0]);
    
    noFill();
    stroke(dat[valIndex][0]*4,0,102);
    textSize(dat[valIndex][0]*2);
    text(dat[valIndex][0]+'F',100,600);
 
    iy = (TWO_PI / wavelength) * yspacing;
    xvalues = new Array(floor(hwave/yspacing));
    
    calcWave();
    amplitude = dat[valIndex][4]*3;
    renderWave(0, 600/dat[valIndex][1]);
    
    

}
function drawGlyph(gly,x,y) {
    var code = gly.charCodeAt(0)-97;
    push();
    translate(x,y);
    stroke(0);
    strokeWeight(dat[valIndex][4]/1.5);
    
    var xpos = 0;
    var ypos = dat[valIndex][4];
    
        for (var i = 0; i<glyphs[code].length; i++){
            var g = glyphs[code][i];
            if (g==1){
                line ( xpos,ypos,xpos+dat[valIndex][4]*3.5,ypos+dat[valIndex][4]*3.5);
            }
            
            xpos+=dat[valIndex][4]*3;
            if(i%5==4){
                xpos = 0;
                ypos += dat[valIndex][4]*3;
            }
        }    
    pop();
}

function calcWave() {
//     theta += 0.03;
     theta += dat[valIndex][3]/400;

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
function next () {
    valIndex++;
    if (valIndex > 12) {
    valIndex = 12;
    }
}
function prev () {
    valIndex--;
    if (valIndex < 0) {
    valIndex = 0;
  }
}
