var t = "";
var x = 50;
var y = 50;
var cSlider, sSlider;
var f = frameCount;


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 255);
  textFont("GiddyupStd");
  textSize(50);
  background(100);
    
  cSlider = createSlider(0, 250, 0);
  cSlider.position(30, 20);
    
  sSlider = createSlider(0, 250, 70);
  sSlider.position(30, 50);
    
    
  textSize(20);
  fill(255);
  text("Color", cSlider.x * 1.3 + cSlider.width, 35);
  text("Type Size", sSlider.x * 1.3 + sSlider.width, 65);
    type();
    future();
    
    textSize(20);
    var t ="People are keep creating new design of typography since 1469. Most typefaces can be classified into one of four basic groups. Such as Serif, Sans Serif, Script and Decorative. I think future type will be more decorative. Press 'ENTER' to save your future type"
    text(t, 10,50, 170);
}



function draw(){
    var c = cSlider.value();
    var s = sSlider.value();

}

function type(x,y){
    translate(30, 150);
    textSize(60);
 for(var i =0; i<6; i =i+1){
      fill(255);
      text("FUTURE", 0, 0);
      pop();
  }    
}

function future(x,y){
    translate(0, 60);
    textSize(60);
 for(var i =0; i<6; i =i+1){
      fill(255);
      text("TYPE", 0, 0);
      pop();
  }    
}

function keyTyped() {
   
    translate(x,y);
    x= width/8+x
    textSize(sSlider.value());
 for(var i =0; i<6; i =i+1){
     
     fill(cSlider.value(), 255, 255, 127);
      textAlign(RIGHT);
      push();
      rotate(PI*i/sin(frameCount));
      text(key, 0, 0);
      pop();
  } 

     if ( x > width) {
        y = y + 100;
        x = 50;
    }
}


    
    
function keyPressed() {
  if (keyCode === ENTER) {
    save();
  }
    
    
}

