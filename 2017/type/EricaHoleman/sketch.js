var weight = 1;
var c = 0; //used for beginning stroke weight

var b;
var base = b;
var heightSlider;

var rad;
var radiusSlider;

var bold;
var weightSlider;

var myColor;

function setup (){
    clear();
    createCanvas (900, 600);
    myColor = color(30, 200, 20);
    
    radiusSlider = createSlider(1, 10, 5);
    radiusSlider.position(20, 425);
    
    heightSlider = createSlider(0, 16, 8);
    heightSlider.position(20, 485);
    
    weightSlider = createSlider(1, 11, 6);
    weightSlider.position(20, 545);
}

function draw (){
background (255);
var b = heightSlider.value();
var rad = radiusSlider.value();  
var bold = weightSlider.value(); 
var x = 270 + bold;
var y = 20;    
    

//sidebar
noStroke();    
fill(myColor);    
rect (0, 0, 240, 600);
fill(255);    
textSize(35);
textFont("Work Sans");
textLeading(30);    
text("Introducing\nHemlock:", 20, 50); 
    
textFont("Work Sans");    
textSize(16);
text("an interactive typeface", 20, 110);
textSize(13);    
text("beads", 20, 420);
text("letter height", 20, 480);
text("stroke weight", 20, 540);
  
stroke(myColor);
strokeWeight(bold);    

//the quick brown    
quickBrown (x, y, b, 3.5+c, rad);
x = 270 + bold;
y = y+65;

//fox jumped over
jumpedOver (x, y+b, 25+(-2*b), 5+c, rad);
x = 270 + bold;
y = y+105+b;

//the poison
thePoison (x, y+b*-1, 35+(2*b), 6.5+c, rad);
x = 270 + bold;
y = y+140+b;

//hemlock
hemlock(x, y+b, 137+(-2*b), 12+c, rad);
}

function quickBrown (x, y, base, weight, grow){
var bold = weightSlider.value();    
  
drawT(x, y, base, weight, grow);
x = x + 38 + bold/2;
drawH(x, y, base, weight, grow);
x = x + 41 + bold/2;
drawE(x, y, base, weight, grow);
x = x + 55 + bold/2;

drawQ(x, y, base, weight, grow);
x = x +41 + bold/2;
drawU(x, y, base, weight, grow);
x = x +37 + bold/2;
drawI(x, y, base, weight, grow);
x = x +37 + bold/2;
drawC(x, y, base, weight, grow);
x = x +40 + bold/2;
drawK(x, y, base, weight, grow);
x = x +55 + bold/2;

drawB(x, y, base, weight, grow);
x = x +40 + bold/2;
drawR(x, y, base, weight, grow);
x = x +40 + bold/2;
drawO(x, y, base, weight, grow);
x = x +40 + bold/2;
drawW(x, y, base, weight, grow);
x = x +40 + bold/2;
drawN(x, y, base, weight, grow);
}

function jumpedOver (x, y, base, weight, grow){
var bold = weightSlider.value();    

drawF(x, y, base, weight, grow);
x = x +38 + bold/2;
drawO(x, y, base, weight, grow);
x = x +39 + bold/2;
drawX(x, y, base, weight, grow);
x = x +52;

drawJ(x, y, base, weight, grow);
x = x +41 + bold/2;
drawU(x, y, base, weight, grow);
x = x +40 + bold/2;
drawM(x, y, base, weight, grow);
x = x +40 + bold/2;
drawP(x, y, base, weight, grow);
x = x +37 + bold/2;
drawE(x, y, base, weight, grow);
x = x +39 + bold/2;
drawD(x, y, base, weight, grow);
x = x +58;

drawO(x, y, base, weight, grow);
x = x +38 + bold/2;
drawV(x, y, base, weight, grow);
x = x +38 + bold/2;
drawE(x, y, base, weight, grow);
x = x +39 + bold/2;
drawR(x, y, base, weight, grow);
}

function thePoison (x, y, base, weight, grow){
var bold = weightSlider.value();    

drawT(x, y, base, weight, grow);
x = x +58 + bold/2;
drawH(x, y, base, weight, grow);
x = x +63 + bold/2;
drawE(x, y, base, weight, grow);
x = x +95;

drawP(x, y, base, weight, grow);
x = x +58 + bold/2;
drawO(x, y, base, weight, grow);
x = x +53 + bold/2;
drawI(x, y, base, weight, grow);
x = x +51 + bold/2;
drawS(x, y, base, weight, grow);
x = x +62 + bold/2;
drawO(x, y, base, weight, grow);
x = x +61 + bold/2;
drawN(x, y, base, weight, grow);
}

function hemlock (x, y, base, weight, grow){
    var bold = weightSlider.value();    

    drawH(x, y, base, weight, grow);
    x = x +(81 + bold/2);
    drawE(x, y, base, weight, grow);
    x = x +(81 + bold/2);
    drawM(x, y, base, weight, grow);
    x = x +(81 + bold/2);
    drawL(x, y, base, weight, grow);
    x = x +(73 + bold/2);
    drawO(x, y, base, weight, grow);
    x = x +(81 + bold/2);
    drawC(x, y, base, weight, grow);
    x = x +(81 + bold/2);
    drawK(x, y, base, weight, grow);
    x = x +(81 + bold/2);
}


//letterforms
function drawA (x, y, base, weight, grow){
    var diam = 5*weight;

    push();
    translate(x, y);
    beginShape();

    //left side
        line (diam/2, -1*diam/2, diam, (diam*2+base)-weight);
    
    //right side
        line (diam/2, -1*diam/2, 0, (diam*2+base)-weight);

    //crossbar
        cell(diam/2, (diam-weight*3.5)+base, weight, grow);

    endShape();
    pop();
}

function drawB (x, y, base, weight, grow){
    var diam = 5*weight;
    
    push();
    translate(x, y);
    beginShape();

    //left side
        line (0, -1*diam/2, 0, (diam-weight*5)+base);
        line (0, (diam-weight*2)+base, 0, (diam*2+base)-weight);
    
    //right side
        roundCorner (diam/2, 0, 2, diam);
        roundCorner (diam/2, 0, 3, diam);
        roundCorner (diam/2, diam, 2, diam);
        roundCorner(diam/2, (diam+base)+weight*1.5, 3, diam);
        line (diam, diam, diam, diam+base);

    //crossbar dot
        cell(0, (diam-weight*3.5)+base, weight, grow);

    //top
        line (0, -1*diam/2, diam/2, -1*diam/2);

    //bottom
        line (0, (diam*2+base)-weight, diam/2, (diam*2+base)-weight);

    endShape();
    pop();
}

function drawC (x, y, base, weight, grow){
    var diam = 5*weight;
    
    push();
    translate(x, y);
    beginShape();

    //left side
        cellLine(0, weight, weight, grow);
        line (0, diam+weight*2, 0, (diam+base)+weight*2);
    
    //top
        semiCirc(diam/2, 0, 1, diam);

    //bottom
        semiCirc(diam/2, base+diam+weight*2, 2, diam);

    endShape();
    pop();
}

function drawD (x, y, base, weight, grow){
    var diam = 5*weight;
    
    push();
    translate(x, y);
    beginShape();

    //left side
        line (0, -1*diam/2, 0, (diam-weight*5)+base);
        line (0, (diam-weight*2)+base, 0, (diam*2+base)-weight);
    
    //right side
        line (diam, diam-weight*3, diam, (diam+base)-weight/2);

    //crossbar dot
        cell(0, (diam-weight*3.5)+base, weight, grow);

    //top
        line (0, -1*diam/2, diam/2, -1*diam/2);
        roundCorner (diam/2, .5, 2, diam);
    
    //bottom
        line (0, (diam*2+base)-weight, diam/2, (diam*2+base)-weight);
        roundCorner(diam/2, ((diam+base)+weight*1.5)+.5, 3, diam);

    endShape();
    pop();
}

function drawE (x, y, base, weight, grow){
    var diam = 5*weight;
    
    push();
    translate(x, y);
    beginShape();

    //left side
        cellLine(0, diam+base-(weight*1.8), weight, grow);
        line (0, -1*diam/2, 0, (diam-weight*3.5)+base);

    //crossbar
        line (0, (diam+base)-weight*3.5, diam, (diam+base)-weight*3.5);

    //top
        line (0, -1*diam/2, diam, -1*diam/2);

    //bottom
        line (0, (diam*2+base)-weight, diam, (diam*2+base)-weight);
    endShape();
    pop();
}

function drawF (x, y, base, weight, grow){
    var diam = 5*weight;

    push();
    translate(x, y);
    beginShape();

    //left side
        //cellLine(0, diam+base-(weight*1.8), weight);
        line (0, -1*diam/2, 0, (diam-weight*5)+base);
        line (0, (diam-weight*2)+base, 0, (diam*2+base)-weight);

    //crossbar
        cellBar(0, (diam-weight*3.5)+base, weight, grow);

    //top
        line (0, -1*diam/2, diam, -1*diam/2);

    endShape();
    pop();
}

function drawG (x, y, base, weight, grow){
    var diam = 5*weight;

    push();
    translate(x, y);
    beginShape();

    //left side
        cellLine(0, weight, weight, grow);
        line (0, diam+weight*2, 0, (diam+base)+weight*2);
        line (diam/2, (diam+base)+weight, diam, (diam+base)+weight);
    
    //top
        semiCirc(diam/2, 0, 1, diam);

    //bottom
        semiCirc(diam/2, diam+base+weight*2, 2, diam);
 
    endShape();
    pop();
}

function drawH (x, y, base, weight, grow){
    var diam = 5*weight;

    push();
    translate(x, y);
    beginShape();

    //left side
        line (0, -1*diam/2, 0, (diam-weight*5)+base);
        line (0, (diam-weight*2)+base, 0, (diam*2+base)-weight);
    
    //right side
        line (diam+weight/2, -1*diam/2, diam+weight/2, (diam*2+base)-weight);
        //line (diam+weight, (diam-weight*2)+base, diam+weight, (diam*2+base)-weight);


    //crossbar
       cellBar(0, (diam-weight*3.5)+base, weight, grow);

    endShape();
    pop();
}

function drawI (x, y, base, weight, grow){
    var diam = 5*weight;
    
    push();
    translate(x, y);
    beginShape();

    //left side
        line (diam/2, -1*diam/2, diam/2, (diam-weight*5)+base);
        line (diam/2, (diam-weight*2)+base, diam/2, (diam*2+base)-weight);

    //crossbar
        cell(diam/2, (diam-weight*3.5)+base, weight, grow);

    endShape();
    pop();
}

function drawJ (x, y, base, weight, grow){
    var diam = 5*weight;
    
    push();
    translate(x, y);
    beginShape();

    //right side
        cellLine(diam, (diam+base)-weight*3, weight, grow);
        line (diam, -1*diam/2, diam, (diam+base)-weight*5);

    //bottom
        semiCirc(diam/2, diam+base+weight*2, 2, diam);

    endShape();
    pop();
}

function drawK (x, y, base, weight, grow){
    var diam = 5*weight;
    
    push();
    translate(x, y);
    beginShape();

    //left side
        line (0, -1*diam/2, 0, (diam-weight*5)+base);
        line (0, (diam-weight*2)+base, 0, (diam*2+base)-weight);

    //crossbar dot
          cell(0, (diam-weight*3.5)+base, weight, grow);
    
    //diagonal lines
        line(weight*2, (diam-weight*3.5)+base, diam, -1*diam/2);
        line(weight*2, (diam-weight*3.5)+base, diam, (diam*2+base)-weight);
    endShape();
    pop();
}

function drawL (x, y, base, weight, grow){
    var diam = 5*weight;
    
    push();
    translate(x, y);
    beginShape();

    //left side
        cellLine(0, diam+base-(weight*1.8), weight, grow);
        line (0, -1*diam/2, 0, (diam-weight*3.5)+base);

    //bottom
        line (0, (diam*2+base)-weight, diam, (diam*2+base)-weight);
    endShape();
    pop();
}

function drawM (x, y, base, weight, grow){
    //var diam = 5*weight;
    var diam = 5*weight;

    push();
    translate(x, y);
    beginShape();

    //left side
        line (0, -1*diam/2, 0, (diam-weight*5)+base);
        line (0, (diam-weight*2)+base, 0, (diam*2+base)-weight);
    
    //right side
        line (diam, -1*diam/2, diam, (diam-weight*5)+base);
        line (diam, (diam-weight*2)+base, diam, (diam*2+base)-weight);

    //midpoints
        cell(0, (diam-weight*3.5)+base, weight, grow);
        //cell(diam/2, (diam-weight*3.5)+base, weight);
        cell(diam, (diam-weight*3.5)+base, weight, grow);
    
    //diagonals
        line(0, -1*diam/2, diam/2, diam);
        line(diam/2, diam, diam, -1*diam/2);

    endShape();
    pop();
}

function drawN (x, y, base, weight, grow){
    var diam = 5*weight;

    push();
    translate(x, y);
    beginShape();

    //left side
        line (0, -1*diam/2, 0, (diam-weight*5)+base);
        line (0, (diam-weight*2)+base, 0, (diam*2+base)-weight);
    
    //right side
        line (diam, -1*diam/2, diam, (diam-weight*5)+base);
        line (diam, (diam-weight*2)+base, diam, (diam*2+base)-weight);

    //midpoints
        cell(0, (diam-weight*3.5)+base, weight, grow);
        cell(diam, (diam-weight*3.5)+base, weight, grow);
    
    //diagonals
        line(0, -1*diam/2, diam, (diam*2+base)-weight);
    
    endShape();
    pop();
}

function drawO (x, y, base, weight, grow){
    var diam = 5*weight;
    
    push();
    translate(x, y);
    beginShape();

    //left side
        cellLine(0, weight, weight, grow);
        line (0, diam+weight*2, 0, (diam+base)+weight*2);
    
    //right side
        cellLine(diam, (diam+base)-weight*3, weight, grow);
        line (diam, weight, diam, (diam+base)-weight*5);

    //top
        semiCirc(diam/2, 0, 1, diam);

    //bottom
        semiCirc(diam/2, base+diam+weight*2, 2, diam);

    endShape();
    pop();
}

function drawP (x, y, base, weight, grow){
    var diam = 5*weight;
    
    push();
    translate(x, y);
    beginShape();

    //left side
        line (0, -1*diam/2, 0, (diam-weight*5)+base);
        line (0, (diam-weight*2)+base, 0, (diam*2+base)-weight);
    
    //right side
        roundCorner (diam/2, .5, 2, diam);
        roundCorner (diam/2, 0, 3, diam);

    //crossbar dot
        cell(0, (diam-weight*3.5)+base, weight, grow);

    //top
        line (0, -1*diam/2, diam/2, -1*diam/2);

    endShape();
    pop();
}

function drawQ (x, y, base, weight, grow){
    var diam = 5*weight;
    
    push();
    translate(x, y);
    beginShape();

    //left side
        cellLine(diam, weight, weight, grow);
        line (diam, diam+weight*2, diam, (diam+base)+weight);
    
    //right side
        cellLine(0, (diam+base)-weight*3, weight, grow);
        line (0, weight, 0, (diam+base)-weight*5);
        line(diam/2, (diam+base)+weight, diam+weight, diam*2+base);

    //top
        semiCirc(diam/2, 0, 1, diam);

    //bottom
        semiCirc(diam/2, diam+base+weight*2, 2, diam);
  
    endShape();
    pop();
}

function drawR (x, y, base, weight, grow){
    var diam = 5*weight;
    
    push();
    translate(x, y);
    beginShape();

    //left side
        line (0, -1*diam/2, 0, (diam-weight*5)+base);
        line (0, (diam-weight*2)+base, 0, (diam*2+base)-weight);
    
    //right side
        roundCorner (diam/2, 0, 2, diam);
        roundCorner (diam/2, 0, 3, diam);
        roundCorner (diam/2, diam, 2, diam);
        line (diam, diam, diam, (diam*2+base)-weight);

    //crossbar dot
        cell(0, (diam-weight*3.5)+base, weight, grow);

    //top
        line (0, -1*diam/2, diam/2, -1*diam/2);

    endShape();
    pop();
}

function drawS (x, y, base, weight){
    var diam = 5*weight;
    
    push();
    translate(x, y);
    beginShape();

    //left side
        line (0, weight, 0, (diam+base)-weight*5);
    
    //crossbar
        line (0, (diam+base)-weight*5, diam, (diam+base)-weight);
    
    //right side
        line (diam, (diam+base)-weight, diam, diam+base+weight);

    //top
        semiCirc(diam/2, 0, 1, diam);

    //bottom
        semiCirc(diam/2, diam+base+weight*2, 2, diam);
        
    endShape();
    pop();
}

function drawT (x, y, base, weight, grow){
    var diam = 5*weight;

    push();
    translate(x, y);
    beginShape();
    
    //top
        line(0,  -1*diam/2, diam,  -1*diam/2);

    //left side
        line (diam/2, -1*diam/2, diam/2, (diam-weight*5)+base);
        line (diam/2, (diam-weight*2)+base, diam/2, (diam*2+base)-weight);

    //crossbar
        cell(diam/2, (diam-weight*3.5)+base, weight, grow);
    
    endShape();
    pop();
}

function drawU (x, y, base, weight, grow){
    var diam = 5*weight;
    
    push();
    translate(x, y);
    beginShape();

    //left side
        cellLine(0, (diam+base)-weight*3, weight, grow);
        line (0, -1*diam/2, 0, (diam+base)-weight*5);
    
    //right side
        cellLine(diam, (diam+base)-weight*3, weight, grow);
        line (diam, -1*diam/2, diam, (diam+base)-weight*5);

    //bottom
        semiCirc(diam/2, diam+base+weight*2, 2, diam);
        
    endShape();
    pop();
}

function drawV (x, y, base, weight, grow){
    var diam = 5*weight;
    
    push();
    translate(x, y);
    beginShape();

    //left side
        line (diam/2, (diam*2+base)-weight, diam, -1*diam/2);
    
    //right side
        line (diam/2, (diam*2+base)-weight, 0,  -1*diam/2);

    //crossbar
        cell(diam/2, (diam-weight*3.5)+base, weight, grow);

    endShape();
    pop();
}

function drawW (x, y, base, weight, grow){
    var diam = 5*weight;

    push();
    translate(x, y);
    beginShape();

    //left side
        line (0, -1*diam/2, 0, (diam-weight*5)+base);
        line (0, (diam-weight*2)+base, 0, (diam*2+base)-weight);
    
    //right side
        line (diam, -1*diam/2, diam, (diam-weight*5)+base);
        line (diam, (diam-weight*2)+base, diam, (diam*2+base)-weight);

    //midpoints
        cell(0, (diam-weight*3.5)+base, weight, grow);
        //cell(diam/2, (diam-weight*3.5)+base, weight);
        cell(diam, (diam-weight*3.5)+base, weight, grow);
    
    //diagonals
        line(0, (diam*2+base)-weight, diam/2, diam/2+base);
        line(diam/2, diam/2+base, diam, (diam*2+base)-weight);

    endShape();
    pop();
}

function drawX (x, y, base, weight, grow){
    var diam = 5*weight;
    
    push();
    translate(x, y);
    beginShape();

    //right side
        line (diam, -1*diam/2, diam/2, (diam-weight*5)+base);
        line (diam/2, (diam-weight*2.5)+base, diam, (diam*2+base)-weight);
    
    //left side
        line (0, -1*diam/2, diam/2, (diam-weight*5)+base);
        line (diam/2, (diam-weight*2.5)+base, 0, (diam*2+base)-weight);
    
    //center
        cell(diam/2, (diam-weight*3.5)+base, weight, grow);

    endShape();
    pop();
}

function drawY (x, y, base, weight, grow){
    var diam = 5*weight;
    
    push();
    translate(x, y);
    beginShape();

    //right side
        line (diam, -1*diam/2, diam/2, (diam-weight*5)+base);
    
    //left side
        line (0, -1*diam/2, diam/2, (diam-weight*5)+base);
    
    //center
        cell(diam/2, (diam-weight*3.5)+base, weight, grow);
        line (diam/2, (diam-weight*2)+base, diam/2, (diam*2+base)-weight);

    endShape();
    pop();
}

function drawZ (x, y, base, weight, grow){
    var diam = 5*weight;
    
    push();
    translate(x, y);
    beginShape();    
    

    //crossbar
        line (diam, -1*diam/2, 0, (diam*2+base)-weight);

    //top
        line(0, -1*diam/2, diam, -1*diam/2);
    
    //bottom dot
        cell (0+weight*1.75, (diam*2+base)-weight, weight, grow);

    //bottom
        line(0+ weight*3, (diam*2+base)-weight, diam, (diam*2+base)-weight);
        
    endShape();
    pop();
}

//parts
function cell (x, y, weight, grow){
    var x;
    var y;
    //var g;
    //var grow;
    var weight;
    
        push();
        translate(x, y);
        beginShape();
            noStroke();
            fill(myColor);
            ellipse(0, 0, weight+grow, weight+grow);
        endShape();
        pop();
}

function cellLine (x, y, weight, grow){
        push();
        translate(x, y);
        beginShape();
            cell (0, 0, weight, grow);
            cell (0, weight*2, weight, grow);
            cell (0, weight*4, weight, grow);
        endShape();
        pop();
}

function cellBar (x, y, weight, grow){
        push();
        translate(x, y);
        beginShape();
            cell (0, 0, weight, grow);
            cell (weight*2, 0, weight, grow);
            cell (weight*4, 0, weight, grow);
        endShape();
        pop();
}

function roundCorner (x, y, turn, diam){
    var diam;
    var turn;
    noFill();
    
    push();
    translate(x, y);
    beginShape();    
        if (turn == 1){
            arc (x-diam/2, y, diam, diam, PI, 1.5*PI);
        } else if (turn == 2){
            arc (0, 0, diam, diam, 1.5*PI, 2*PI);
        } else if (turn == 3){
            arc (0, 0, diam, diam, 2*PI, .5*PI);
        } else if (turn == 4){
            arc (0, 0, diam, diam, .5*PI, PI);
        }
    endShape();
    pop();
}

function semiCirc (x, y, turn, diam){
    var diam;
    var turn;
    noFill();
    
    push();
    translate(x, y);
    beginShape();
        if (turn == 1){
            arc (x-diam/2, y, diam, diam, .25+PI, 2*PI-.25);
        } else if (turn == 2){
            arc (0, 0, diam, diam, 2*PI+.25, PI-.25);
        }
    endShape();
    pop();
}
