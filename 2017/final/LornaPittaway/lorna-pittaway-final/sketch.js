 

//MOUSE TRACE 
var mouseTrace;
var clickText;
var clickBox = [];

//VIDEO SNAPS 
var video;
var snapshots = []; 
var vidImg; 
var vidImg2;


//INPUT TO 3D LETTERS
var inputTexture;
var inputCollect = ["holder"];
var words = [];

//3D LETTERS
var letterScale = 0.5;
var letterSpacing = 120 * letterScale;
var letterW = 90;
var strokeW = 30;
var strokeD = 50;
var letterH = 150;

//DOM ELEMENTS
var input, button, button2;

//GIPHY API
var api = "http://api.giphy.com/v1/stickers/search?";
var apiKey = "&api_key=dc6zaTOxFJmzC&q=";

//WORDNIK API
var wordnikUrl1 = "http://api.wordnik.com/v4/word.json/";
var word = "hey";
var wordnikUrl2 =  "/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=91c78cea1d7f3cab490090b3a5f072dc34a27d2853e30950d";

//METADATA 
var definitions = [];
var metaData = [];
var metaText; //text texture
var metaGrad; //gradient texture
var rotations = [0, 1.57079632679, 3.14159265359, 4.7123889803, 6.2831853071];
var rotations2 = [0, 1.57079632679];


//CAMERA
var rotatz = 0;
var rotaty = 0;
var zoom = 0;
var camx = 0;
var boxSize = 2402;

//GIPHY TEXTURE VARIABLES
var giphImg1;
var giphImg2;
var giphImg3;
var giphImg4;
var giphImg5;
var giphImg6;
var giphImg7;
var giphyTextureVid;
var giphyGrad;
var giphGrad;
var gifss = [];


//floating gif objects
var c1;
var c2;
var c3;
var c4;
var c5;
var c6;
var t1;
var b1;
var b2;

//other textures
var marbleTexture;
var marbleTextureB;
var imgGrad1;
var marbleWImg;
var marbleBImg;
var imgSky;

var angle = 0;
var displayHelp = false;
var pg;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  inputTexture = createGraphics(900, 200);
  inputTexture.textSize(30);
  input = createInput();
  
  imgGrad1 = loadImage("images/metaGradient2.png");
  marbleWImg = loadImage("images/marble2.png");
  marbleBImg = loadImage("images/marble4 copy.png");
  imgSky = loadImage("images/sky.png");
  
  vidImg = createGraphics(100, 100);
  vidImg2 = createGraphics(100, 100);
  input.size(200, 22);
  
  input.style("outline-style", "none");
  input.style("background-color", "rgb(253,253,253)");
  input.style("border", "2px solid rgb(253,253,253)");
  input.style("box-shadow", "0px 0px 5px rgb(200, 200, 210)");
  input.style("font-size", "10px");
  input.style("text-align", "left");
  input.style("font-family", "Arial");
  input.style("text-transform", "uppercase");
  
  button = createButton("&#x2192");
  button.mousePressed(insert);
  button.style("border", "2px solid #222426");
  button.style("padding-top", "-10px");
  button.style("font-size", "10px");
  button.style("color", "rgb(250,250,250)");
  button.style("background-color", "#222426");
  button.style("box-shadow", "0px 0px 5px rgb(200, 200, 210)");
  button.size(30, 22);
  button.style("cursor", "pointer");
  words.push(new InputsData(0, 0, -200000, "hey", 0));
  
  button2 = createButton("?");
  button2.mousePressed(openHelp);
  button2.style("border", "2px solid #222426");
  button2.style("font-size", "10px");
  button2.style("color", "rgb(200,200,200)");
  button2.style("background-color", "#222426");
  button2.style("font-family", "Lucida Blackletter");
  button2.style("box-shadow", "0px 0px 5px rgb(120, 120, 120)");
  button2.style("cursor", "pointer");
  button2.size(32, 20);
  video = createCapture(VIDEO);
  video.size(100, 100);
  video.hide();
  
  mouseTrace = new Trace(0, 0, 0, 140, 140, 160, 20);
  clickText = createGraphics(30, 22);
  
  metaText = createGraphics(120, 30);
  metaGrad = createGraphics(100, 30);
  
  
//GIPHY TEXTURE THINGS 
  
  giphGrad = createImage(100, 100);
  giphGrad.loadPixels();
  for (i = 0; i < giphGrad.width; i++) {
    for (j = 0; j < giphGrad.height; j++) {
      giphGrad.set(i, j, color(214, 223, 252, i % giphGrad.width * 2));
    }
  } 
  giphGrad.updatePixels();

  giphyGrad = createGraphics(100, 100);
  giphyTexture1 = createGraphics(100, 100);
  giphyTexture2 = createGraphics(100, 100);
  giphyTexture3 = createGraphics(100, 100);
  giphyTexture4 = createGraphics(100, 100);
  giphyTexture5 = createGraphics(100, 100);
  giphyTexture6 = createGraphics(100, 100);
  giphyTexture7 = createGraphics(100, 100);
  giphyTextureVid = createGraphics(100, 100);
  pg = createGraphics(800, 320);
  
  //giphy shapes
  c1 = new CircleSin(80, 0.04, 30, 0, 0.004, 0);
  c2 = new CircleCos(60, 0.01, 50, -0.008, 0.006, 0);
  c3 = new CircleSin(40, 0.02, 40, 0, -0.003, 0.008);
  c4 = new CircleCos(30, 0.01, 60, 0, 0.003, 0.002);
  c5 = new CircleSin(50, 0.03, 30, 0, 0.003, 0.005);
  c6 = new CircleZ(50, 0.03, 30, 0.008, 20, 0, 0.003, 0.001);
  t1 = new Torus(120, 50, -0.009);
  b1 = new Box(270, 80, 40);
  b2 = new Box2(400, 100, 10, 0.004);
  
  marbleTexture = createGraphics(900, 200);
  marbleTextureB = createGraphics(100, 100);
  
  
}

function openHelp() {
  displayHelp = !displayHelp;  
}

function draw() {
  
  background(10, 10, 14);
  
  //--DOM ELEMENT POSITIONS--//
  input.position(width/2 - input.width/2 - button.width/2, height - 65);
  button.position(width/2 + input.width/2 - button.width/2 + 5, height - 65);
  button2.position(20, 20);
  cursor(MOVE);
  
  //lighting + camera
  ambientLight(245, 245, 245);
  directionalLight(25, 18, 15, -1, 0, 0);
  directionalLight(25, 20, 18, 0, -1, 0);
  camera(0, -70, boxSize/1.8);
  
  //--NAVIGATION--//
  if (zoom > 0){
   var rotatz2 = map(mouseY, 0, height, -PI/100, PI/50); 
  } else {
    var rotatz2 = map(mouseY, 0, height, -PI/100 + zoom/800000, PI/50 - zoom/100000);
  }
  var rotaty2 = map(mouseX, 0, height, -PI/70, PI/70 + zoom/5000);
  translate(camx, 0, zoom + boxSize/2 + 140);
  rotateX(-PI/80 + rotatz + rotatz2);
  rotateY(-PI/5 + rotaty + rotaty2);
  if (keyIsPressed === true && keyCode == LEFT_ARROW && displayHelp == false) {
    rotaty += 0.03;
  }
  if (keyIsPressed === true && keyCode == RIGHT_ARROW && displayHelp == false) {
    rotaty -= 0.03;
  }
  if (keyIsPressed === true && keyCode == UP_ARROW && displayHelp == false) {
    rotatz -= 0.01;
  }
  if (keyIsPressed === true && keyCode == DOWN_ARROW && displayHelp == false) {
    rotatz += 0.01;
  }

  push();
  push();
  translate(0, 50, 0);
  rotateX(PI/2);
  fill(120, 120, 130);
  //--GRID--//
  for (var j = -1200 ; j < 1200 + 0.6; j += 200) {
    push();
    translate(j, 0, 0);
    box(0.6, boxSize, 0.6);
    pop();
    push();
    translate(0, j, 0);
    box(boxSize, 0.6, 0.6);
    pop();
  }
  ambientMaterial(226, 229, 229);
  plane(boxSize, boxSize);
  pop();
  pop();
  push();
  translate(0, 27, 0);
  rotateY(PI);
  ambientMaterial(240);
  marbleTexture.image(marbleWImg, 0, 0, 1600, 1000);
  texture(marbleTexture);
  box(320, 65, 230);
  pop();
  push();
  push();
  translate(50, -180, 0);
  rotateY(PI/10);
  scale(0.65);
  push();
  
   if (gifss.length <= 0) {

    giphyTexture1.background(230);
    giphyTexture1.imageMode(CORNER);
    giphyTexture1.image(giphGrad, 0, 0);
    
    giphyTexture2.background(230);
    giphyTexture2.imageMode(CORNER);
    giphyTexture2.image(giphGrad, 0, 0);
    
    giphyTexture3.background(230);
    giphyTexture3.imageMode(CORNER);
    giphyTexture3.image(giphGrad, 0, 0);
    
    giphyTexture4.background(230);
    giphyTexture4.imageMode(CORNER);
    giphyTexture4.image(giphGrad, 0, 0);
    
    giphyTexture5.background(230);
    giphyTexture5.imageMode(CORNER);
    giphyTexture5.image(giphGrad, 0, 0);
    
    giphyTexture6.background(230);
    giphyTexture6.imageMode(CORNER);
    giphyTexture6.image(giphGrad, 0, 0);
    
    giphyTexture7.background(230);
    giphyTexture7.imageMode(CORNER);
    giphyTexture7.image(giphGrad, 0, 0);
    
    giphyTextureVid.background(230);
    giphyTextureVid.image(video, 0, 0, 100, 100);
    giphyTextureVid.filter(GRAY);
    giphyTextureVid.filter(INVERT);
    giphyTextureVid.image(giphGrad, 0, 0);
  pop();
  } 
  else if (gifss.length > 0) {
    giphyTexture1.background(230);
    giphyTexture1.imageMode(CENTER);
    giphyTexture1.image(giphImg1, 0, 0, 1600, 1600);
    giphyTexture1.imageMode(CORNER);
    giphyTexture1.image(giphGrad, 0, 0);
    
    giphyTexture2.background(230);
    giphyTexture2.imageMode(CENTER);
    giphyTexture2.image(giphImg2, 0, 0, 1600, 1600);
    giphyTexture2.imageMode(CORNER);
    giphyTexture2.image(giphGrad, 0, 0);
    
    giphyTexture3.background(230);
    giphyTexture3.imageMode(CENTER);
    giphyTexture3.image(giphImg3, 0, 0, 1600, 1600);
    giphyTexture3.imageMode(CORNER);
    giphyTexture3.image(giphGrad, 0, 0);
    
    giphyTexture4.background(230);
    giphyTexture4.imageMode(CENTER);
    giphyTexture4.image(giphImg4, 0, 0, 1600, 1600);
    giphyTexture4.imageMode(CORNER);
    giphyTexture4.image(giphGrad, 0, 0);
    
    giphyTexture5.background(230);
    giphyTexture5.imageMode(CENTER);
    giphyTexture5.image(giphImg5, 0, 0, 1600, 1600);
    giphyTexture5.imageMode(CORNER);
    giphyTexture5.image(giphGrad, 0, 0);
    
    giphyTexture6.background(230);
    giphyTexture6.imageMode(CENTER);
    giphyTexture6.image(giphImg6, 0, 0, 1600, 1600);
    giphyTexture6.imageMode(CORNER);
    giphyTexture6.image(giphGrad, 0, 0);
    
    giphyTexture7.background(230);
    giphyTexture7.imageMode(CENTER);
    giphyTexture7.image(giphImg7, 0, 0, 1600, 1600);
    giphyTexture7.imageMode(CORNER);
    giphyTexture7.image(imgSky, 0, 0);
    
    giphyTextureVid.background(230);
    giphyTextureVid.image(video, 0, 0, 100, 100);
    giphyTextureVid.filter(GRAY);
    giphyTextureVid.filter(INVERT);
    giphyTextureVid.image(giphGrad, 0, 0);
  }
  //gipy shapes
  push();
  translate(-180, -30, 0);
  rotateZ(PI/10);
  texture(giphyTexture3);
  c1.update();
  c1.display();
  pop();
  push();
  translate(-300, 130, -100);
  texture(giphyTexture2);
  c2.update();
  c2.display();
  pop();
  push();
  translate(-210, 120, 60);
  texture(giphyTexture3);
  c3.update();
  c3.display();
  pop();
  push();
  translate(100, -30, 100);
  texture(giphyTexture1);
  c6.update();
  c6.display();
  pop();
  push();
  translate(10, -30, 20);
  texture(giphyTexture2);
  c4.update();
  c4.display();
  pop();
  push();
  translate(100, -70, -100);
  texture(giphyTexture2);
  c5.update();
  c5.display();
  pop();
  push();
  translate(-50, 0, -40);
  specularMaterial(255);
  texture(giphyTexture4);
  t1.update();
  t1.display();
  pop();
  push();
  translate(20, 170, -20);
  texture(giphyTexture1);
  b1.update();
  b1.display();
  pop();
  push();
  translate(-220, 0, -60);
  texture(giphyTexture1);
  b2.update();
  b2.display();
  pop();
  pop();
  pop();

  
  
  //--DRAW MOUSE TRACE--//
  push();
    rotateX(PI/2);
    rotateZ(frameCount*0.0001);
    push();
    fill(80);
    mouseTrace.show();
    mouseTrace.update();
    pop();
    //--CLICK FACE--//
    push();
    specularMaterial(200);
    for (var k = 0; k < clickBox.length; k ++) {
    vidImg2.background(255);
    vidImg2.imageMode(CENTER);
    vidImg2.image(snapshots[k], 0, 0, 200, 200);
    vidImg2.filter('gray');
    vidImg2.filter('invert');
    vidImg2.imageMode(CORNER);
    vidImg2.tint(255, 230);
    texture(vidImg2);
    clickBox[k].display2(); 
  }
  if (clickBox.length > 26) { //how many image of clicks are shown 
    clickBox.splice(0, 1);
  }
    pop();
  pop();
  
  
  //--DRAW OUT METADATA / WORDNIK BOXES--//
  push();
  for (var k = 0; k < definitions.length; k++) {
    push();
    definitions[k].update();
    definitions[k].display();
    pop();
  }
  if (definitions.length > 70) { //how many metatda (wordnik) objects are shown 
    definitions.splice(0, 1);
  }
  pop(); 
  push();
  rotateY(PI/5);
  if (displayHelp == true) {
    sceneHelp();
  }
  pop();
  
  //--WRITE OUT 3D LETTERS--//
  translate(0, -265, 0);
  //specularMaterial(40, 40, 48);
  for (var j = 0; j < words.length; j++) {
    
    var char = words[j].wording.split("");
    for (var i = 0; i < char.length; i++) { //split all arrays into array of individual letters
      if (words[j].x > -300 && words[j].x < 300 && words[j].z > -300 && words[j].z < 300) {
        var wordX = words[j].x + 500; 
        var wordZ = words[j].z + 500;
      } else {
        var wordX = words[j].x;
        var wordZ = words[j].z;
      }
      
      var stretch = 0.4;
      heightoffset = 90;
      
      marbleTextureB.background(20, 20, 22);
      marbleTextureB.image(marbleBImg, -60, -60);
      marbleTextureB.imageMode(CORNER);
      texture(marbleTextureB); 
      
      switch(char[i].toLowerCase()) { //change all letters to lowercase
      //switching text for designed 3D letters   
       case 'a':
        for (var lA = 0; lA < 40; lA ++) {
          if (words[j].wording.charAt(lA) == 'a') {
            var xa = letterSpacing * lA;
            drawA(wordX + xa, 0 + words[j].y + height/2 - heightoffset, 0 + wordZ, stretch, words[j].ystretch, letterScale, words[j].letterRotate, marbleTextureB);
          } 
        }
        break;
      case 'b':
        for (var lB = 0; lB < 40; lB ++) {
          if (words[j].wording.charAt(lB) == 'b') {
            var xb = letterSpacing * lB;
            drawB(wordX + xb, 0 + words[j].y + height/2 - heightoffset, 0 + wordZ, stretch, words[j].ystretch, letterScale, words[j].letterRotate, marbleTextureB);
          } 
        }
        break;   
      case 'c':
        for (var lC = 0; lC < 40; lC ++) {
          if (words[j].wording.charAt(lC) == 'c') {
            var xc = letterSpacing * lC;
            drawC(wordX + xc, 0 + words[j].y + height/2 - heightoffset, 0 + wordZ, stretch, words[j].ystretch, letterScale, words[j].letterRotate, marbleTextureB);
          } 
        }
        break;
      case 'd':
        for (var lD = 0; lD < 40; lD ++) {
          if (words[j].wording.charAt(lD) == 'd') {
            var xd = letterSpacing * lD;
            drawD(wordX + xd, 0 + words[j].y + height/2 - heightoffset, 0 + wordZ, stretch, words[j].ystretch, letterScale, words[j].letterRotate, marbleTextureB);
          } 
        }
        break;  
      case 'e':
        for (var lE = 0; lE < 40; lE ++) {
          if (words[j].wording.charAt(lE) == 'e') {
            var xe = letterSpacing * lE;
            drawE(wordX + xe, 0 + words[j].y + height/2 - heightoffset, 0 + wordZ, stretch, words[j].ystretch, letterScale, words[j].letterRotate, marbleTextureB);
          } 
        }
        break;   
      case 'f':
        for (var lF = 0; lF < 40; lF ++) {
          if (words[j].wording.charAt(lF) == 'f') {
            var xf = letterSpacing * lF;
            drawF(wordX + xf, 0 + words[j].y + height/2 - heightoffset, 0 + wordZ, stretch, words[j].ystretch, letterScale, words[j].letterRotate, marbleTextureB);
          } 
        }
        break; 
      case 'g':
        for (var lG = 0; lG < 40; lG ++) {
          if (words[j].wording.charAt(lG) == 'g') {
            var xg = letterSpacing * lG;
            drawG(wordX + xg, 0 + words[j].y + height/2 - heightoffset, 0 + wordZ, stretch, words[j].ystretch, letterScale, words[j].letterRotate, marbleTextureB);
          } 
        }
        break;
      case 'h':
        for (var lH = 0; lH < 40; lH ++) {
          if (words[j].wording.charAt(lH) == 'h') {
            var xh = letterSpacing * lH;
            drawH(wordX + xh, 0 + words[j].y + height/2 - heightoffset, 0 + wordZ, stretch, words[j].ystretch, letterScale, words[j].letterRotate, marbleTextureB);
          } 
        }
        break;   
      case 'i':
        for (var lI = 0; lI < 40; lI ++) {
          if (words[j].wording.charAt(lI) == 'i') {
            var xi = letterSpacing * lI;
            drawI(wordX + xi, 0 + words[j].y + height/2 - heightoffset, 0 + wordZ, stretch, words[j].ystretch, letterScale, words[j].letterRotate, marbleTextureB);
          } 
        }
        break;
      case 'j':
        for (var lJ = 0; lJ < 40; lJ ++) {
          if (words[j].wording.charAt(lJ) == 'j') {
            var xj = letterSpacing * lJ;
            drawJ(wordX + xj, 0 + words[j].y + height/2 - heightoffset, 0 + wordZ, stretch, words[j].ystretch, letterScale, words[j].letterRotate, marbleTextureB);
          } 
        }
        break;
      case 'k':
        for (var lK = 0; lK < 40; lK ++) {
          if (words[j].wording.charAt(lK) == 'k') {
            var xk = letterSpacing * lK;
            drawK(wordX + xk, 0 + words[j].y + height/2 - heightoffset, 0 + wordZ, stretch, words[j].ystretch, letterScale, words[j].letterRotate, marbleTextureB);
          } 
        }
        break;   
      case 'l':
        for (var lL = 0; lL < 40; lL ++) {
          if (words[j].wording.charAt(lL) == 'l') {
            var xl = letterSpacing * lL;
            drawL(wordX + xl, 0 + words[j].y + height/2 - heightoffset, 0 + wordZ, stretch, words[j].ystretch, letterScale, words[j].letterRotate, marbleTextureB);
          } 
        }
        break;
      case 'm':
        for (var lM = 0; lM < 40; lM ++) {
          if (words[j].wording.charAt(lM) == 'm') {
            var xm = letterSpacing * lM;
            drawM(wordX + xm, 0 + words[j].y + height/2 - heightoffset, 0 + wordZ, stretch, words[j].ystretch, letterScale, words[j].letterRotate, marbleTextureB);
          } 
        }
        break;
      case 'n':
        for (var lN = 0; lN < 40; lN ++) {
          if (words[j].wording.charAt(lN) == 'n') {
            var xn = letterSpacing * lN;
            drawN(wordX + xn, 0 + words[j].y + height/2 - heightoffset, 0 + wordZ, stretch, words[j].ystretch, letterScale, words[j].letterRotate, marbleTextureB);
          } 
        }
        break;   
      case 'o':
        for (var lO = 0; lO < 40; lO ++) {
          if (words[j].wording.charAt(lO) == 'o') {
            var xo = letterSpacing * lO;
            drawO(wordX + xo, 0 + words[j].y + height/2 - heightoffset, 0 + wordZ, stretch, words[j].ystretch, letterScale, words[j].letterRotate, marbleTextureB);
          } 
        }
        break;
      case 'p':
        for (var lP = 0; lP < 40; lP ++) {
          if (words[j].wording.charAt(lP) == 'p') {
            var xp = letterSpacing * lP;
            drawP(wordX + xp, 0 + words[j].y + height/2 - heightoffset, 0 + wordZ, stretch, words[j].ystretch, letterScale, words[j].letterRotate, marbleTextureB);
          } 
        }
        break;
      case 'q':
        for (var lQ = 0; lQ < 40; lQ ++) {
          if (words[j].wording.charAt(lQ) == 'q') {
            var xq = letterSpacing * lQ;
            drawQ(wordX + xq, 0 + words[j].y + height/2 - heightoffset, 0 + wordZ, stretch, words[j].ystretch, letterScale, words[j].letterRotate, marbleTextureB);
          } 
        }
        break;   
      case 'r':
        for (var lR = 0; lR < 40; lR ++) {
          if (words[j].wording.charAt(lR) == 'r') {
            var xr = letterSpacing * lR;
            drawR(wordX + xr, 0 + words[j].y + height/2 - heightoffset, 0 + wordZ, stretch, words[j].ystretch, letterScale, words[j].letterRotate, marbleTextureB);
          } 
        }
        break;
      case 's':
        for (var lS = 0; lS < 40; lS ++) {
          if (words[j].wording.charAt(lS) == 's') {
            var xs = letterSpacing * lS;
            drawS(wordX + xs, 0 + words[j].y + height/2 - heightoffset, 0 + wordZ, stretch, words[j].ystretch, letterScale, words[j].letterRotate, marbleTextureB);
          } 
        }
        break;
      case 't':
        for (var lT = 0; lT < 40; lT ++) {
          if (words[j].wording.charAt(lT) == 't') {
            var xt = letterSpacing * lT;
            drawT(wordX + xt, 0 + words[j].y + height/2 - heightoffset, 0 + wordZ, stretch, words[j].ystretch, letterScale, words[j].letterRotate, marbleTextureB);
          } 
        }
        break;
      case 'u':
        for (var lU = 0; lU < 40; lU ++) {
          if (words[j].wording.charAt(lU) == 'u') {
            var xu = letterSpacing * lU;
            drawU(wordX + xu, 0 + words[j].y + height/2 - heightoffset, 0 + wordZ, stretch, words[j].ystretch, letterScale, words[j].letterRotate, marbleTextureB);
          } 
        }
        break;   
      case 'v':
        for (var lV = 0; lV < 40; lV ++) {
          if (words[j].wording.charAt(lV) == 'v') {
            var xv = letterSpacing * lV;
            drawV(wordX + xv, 0 + words[j].y + height/2 - heightoffset, 0 + wordZ, stretch, words[j].ystretch, letterScale, words[j].letterRotate, marbleTextureB);
          } 
        }
        break;
      case 'w':
        for (var lW = 0; lW < 40; lW ++) {
          if (words[j].wording.charAt(lW) == 'w') {
            var xw = letterSpacing * lW;
            drawW(wordX + xw, 0 + words[j].y + height/2 - heightoffset, 0 + wordZ, stretch, words[j].ystretch, letterScale, words[j].letterRotate, marbleTextureB);
          } 
        }
        break;
      case 'x':
        for (var lX = 0; lX < 40; lX ++) {
          if (words[j].wording.charAt(lX) == 'x') {
            var xx = letterSpacing * lX;
            drawX(wordX + xx, 0 + words[j].y + height/2 - heightoffset, 0 + wordZ, stretch, words[j].ystretch, letterScale, words[j].letterRotate, marbleTextureB);
          } 
        }
        break;   
      case 'y':
        for (var lY = 0; lY < 40; lY ++) {
          if (words[j].wording.charAt(lY) == 'y') {
            var xy = letterSpacing * lY;
            drawY(wordX + xy, 0 + words[j].y + height/2 - heightoffset, 0 + wordZ, stretch, words[j].ystretch, letterScale, words[j].letterRotate, marbleTextureB);
          } 
        }
        break;
      case 'z':
        for (var lZ = 0; lZ < 40; lZ ++) {
          if (words[j].wording.charAt(lZ) == 'z') {
            var xz = letterSpacing * lZ;
            drawZ(wordX + xz, 0 + words[j].y + height/2 - heightoffset, 0 + wordZ, stretch, words[j].ystretch, letterScale, words[j].letterRotate, marbleTextureB);
          } 
        }
        break;
      case ' ':
        translate(letterSpacing, 0, 0);
        break;
    }
  }
  }
}


//--API RELATED THINGS --//
//fucntion called on press of search button
function insert() {
  inputCollect.push(input.value()); //add imputs to an array for 3D text
  
  words.push(new InputsData(random(-boxSize/2.3, boxSize/2.3 - 400), random(0, 0), random(-boxSize/2.3, boxSize/2.3), inputCollect[inputCollect.length - 1], rotations[floor(random(0, rotations.length))]));
  
  //call giphy API and functions responses
  var url = api + apiKey + input.value() + "+vaporwave";
  loadJSON(url, giphyData);
  
  //call wordnik API and functions responses
  word = input.value();
  var wordnikUrl = wordnikUrl1 + word + wordnikUrl2;
  loadJSON(wordnikUrl, wordnikData);
} 
function sceneHelp(){
  background(13, 13, 15);
  translate(0, -70, 0);
  camx = 0;
  zoom = 0;
  var rx = map(mouseX, 0, width, -PI/26, PI/26);
  var ry = map(mouseY, 0, width, -PI/26, PI/26);
  translate(0, 0, zoom);
  rotateX(ry);
  rotateZ(-rx);
  rotateY(rx);
  pg.background(235, 235, 240);
  pg.fill(0);
  pg.image(imgGrad1, 0, 0, 800, 320);
  pg.textFont("Lucida Blackletter");
  pg.textSize(24);
  pg.text('ABOUT', 26, 60);
  pg.textFont("Arial");
  pg.textSize(15);
  pg.text('SURFACE TRACE IS AN EXPERIMENTAL SEARCH INTERFACE WHICH SIMULATES AND VISUALIZES ', 26, 90);
  pg.text('THE PROCESSES INHERENT IN INTERFACIAL INTERACTIONS WITH ALGORITHMIC SYSTEMS', 26, 120);
  pg.textFont("Lucida Blackletter");
  pg.textSize(24);
  pg.text('HOW TO USE', 26, 190);
   pg.textFont("Arial");
  pg.textSize(15);
  pg.text('+ ENETER SEARCHES INTO THE SEARCH BAR AND PRESS ENTER OR SEARCH BUTTON TO BROWSE', 26, 220);
  pg.text('+ CLICK AND DRAG THE MOUSE TO MOVE THROUGH THE ENVIRONMENT', 26, 250);
  pg.text('+ USE THE ARROW KEYS TO ROTATE THE WORLD AND SCROLL TO ZOOM IN AND OUT', 26, 280);
  
  
  //pass image as texture
  texture(pg);
  
  plane(800, 320);
  box(800, 320, 20);
  
}
function giphyData(giphy) {
  gifss.push(giphy.data[floor(random(0, giphy.data.length))].images.original.url);
  
  giphImg1 = loadImage(giphy.data[floor(random(0, giphy.data.length))].images.original.url);
  giphImg2 = loadImage(giphy.data[floor(random(0, giphy.data.length))].images.original.url);
  giphImg3 = loadImage(giphy.data[floor(random(0, giphy.data.length))].images.original.url);
  giphImg4 = loadImage(giphy.data[floor(random(0, giphy.data.length))].images.original.url);
  giphImg5 = loadImage(giphy.data[floor(random(0, giphy.data.length))].images.original.url);
  giphImg6 = loadImage(giphy.data[floor(random(0, giphy.data.length))].images.original.url);
  giphImg7 = loadImage(giphy.data[floor(random(0, giphy.data.length))].images.original.url);
}
function wordnikData(data) {
  var index1 = floor(random(0, data.length));
  var index2 = floor(random(0, data[index1].words.length));
  for (var i = 0; i < data.length; i++){
    for(var j = 0; j < data[i].words.length; j++){
      metaData.push(data[i].words[j]);
      var xm = random(-1040, 1040);
      var ym = random(-700, -280);
      var zm = random(-1040, 1040);
      var str = data[i].words[j]; //making into capitals
  var res = str.toUpperCase();
      var metatTextures = [imgGrad1, imgGrad1];
      definitions.push(new metaDataObj(xm, ym, zm, res, rotations[floor(random(0, rotations.length))], rotations2[floor(random(0, rotations2.length))], random(16, 42), random(0.0008, 0.005), metatTextures[floor(random(0, metatTextures.length))]));
    }
  }
}
//--3D LETTERS--//
function drawA(x, y, z, scl, sclChange, sclAll, twist, texture1){
  push();
  rotateY(twist);
  translate(x, y, z);
  
  push();
  texture(texture1);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  boxy(strokeW/2, 0, 30, 150, strokeD);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD);
  boxy(letterW/2, 0, 80, 30, strokeD);
  boxy(letterW/2, strokeW/2-letterH/2 , 80, 30, strokeD);
  pop();
  
  push();
  translate(0, 0, strokeD/6 + strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, 0, 90, 30, strokeD/6);
  boxy(letterW/2, strokeW/2-letterH/2 , 90, 30, strokeD/6);
  pop();
  
  push();
  translate(0, 0, - strokeD/6 - strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, 0, 90, 30, strokeD/6);
  boxy(letterW/2, strokeW/2-letterH/2 , 90, 30, strokeD/6);
  pop();
  
  pop();
}
function drawB(x, y, z, scl, sclChange, sclAll, twist, texture1){
  push();
  rotateY(twist);
  translate(x, y, z);
  
  push();
  texture(texture1);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  boxy(strokeW/2, 0, 30, 150, strokeD);
  boxy(letterW - strokeW/2, 15, 30, 120, strokeD);
  boxy(letterW/2, -30, 80, 30, strokeD);
  boxy(letterW/2, -strokeW/2+letterH/2 , 80, 30, strokeD);
  pop();
  
  push();
  translate(0, 0, strokeD/6 + strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW - strokeW/2, 15, 30, 120, strokeD/6);
  boxy(letterW/2, -30, 90, 30, strokeD/6);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD/6);
  pop();
  
  push();
  translate(0, 0, -strokeD/6 - strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW - strokeW/2, 15, 30, 120, strokeD/6);
  boxy(letterW/2, -30, 90, 30, strokeD/6);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD/6);
  pop();
  
  pop();
}
function drawC(x, y, z, scl, sclChange, sclAll, twist, texture1){
  push();
  rotateY(twist);
  translate(x, y, z);
  
  push();
  texture(texture1)
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  boxy(strokeW/2, 0, 30, 150, strokeD);
  boxy(letterW/2, strokeW/2-letterH/2 , 80, 30, strokeD);
  boxy(letterW/2, -strokeW/2+letterH/2 , 80, 30, strokeD);
  pop();
  
  push();
  translate(0, 0, strokeD/6 + strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, strokeW/2-letterH/2 , 90, 30, strokeD/6);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD/6);
  pop();
  
  push();
  translate(0, 0, - strokeD/6 - strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, strokeW/2-letterH/2 , 90, 30, strokeD/6);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD/6);
  pop();
  
  pop();
}
function drawD(x, y, z, scl, sclChange, sclAll, twist, texture1){
  push();
  rotateY(twist);
  translate(x, y, z);
  
  push();
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  texture(texture1);
  boxy(strokeW/2, 0, 30, 150, strokeD);
  boxy(strokeW, strokeW/2-letterH/2 , 60, 30, strokeD);
  boxy(strokeW, -strokeW/2+letterH/2 , 60, 30, strokeD);
  boxy(letterW - strokeW/2, 0, 30, 90, strokeD);
  pop();
  
  push();
  translate(0, 0, strokeD/6 + strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(strokeW, strokeW/2-letterH/2 , 60, 30, strokeD/6);
  boxy(strokeW, -strokeW/2+letterH/2 , 60, 30, strokeD/6);
  boxy(letterW - strokeW/2, 0, 30, 90, strokeD/6);
  pop();
  
  push();
  translate(0, 0, - strokeD/6 - strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(strokeW, strokeW/2-letterH/2 , 60, 30, strokeD/6);
  boxy(strokeW, -strokeW/2+letterH/2 , 60, 30, strokeD/6);
  boxy(letterW - strokeW/2, 0, 30, 90, strokeD/6);
  pop();
  
  pop();
}
function drawE(x, y, z, scl, sclChange, sclAll, twist, texture1){
  push();
  rotateY(twist);
  translate(x, y, z);
  
  push();
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  texture(texture1);
  boxy(strokeW/2, 0, 30, 150, strokeD);
  boxy(letterW/2, 0, 90, 30, strokeD);
  boxy(letterW/2, strokeW/2-letterH/2 , 90, 30, strokeD);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD);
  pop();
  
  push();
  translate(0, 0, strokeD/6 + strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, 0, 90, 30, strokeD/6);
  boxy(letterW/2, strokeW/2-letterH/2 , 90, 30, strokeD/6);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD/6);
  pop();
  
   push();
  translate(0, 0, -strokeD/6 - strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, 0, 90, 30, strokeD/6);
  boxy(letterW/2, strokeW/2-letterH/2 , 90, 30, strokeD/6);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD/6);
  pop();
  
  
  pop();
}
function drawF(x, y, z, scl, sclChange, sclAll, twist, texture1){
  push();
  rotateY(twist);
  translate(x, y, z);
  
  push();
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  texture(texture1);
  boxy(strokeW/2, 0, 30, 150, strokeD);
  boxy(letterW/2, 0, 90, 30, strokeD);
  boxy(letterW/2, strokeW/2-letterH/2 , 90, 30, strokeD);
  pop();
  
  push();
  translate(0, 0, strokeD/6 + strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, 0, 90, 30, strokeD/6);
  boxy(letterW/2, strokeW/2-letterH/2 , 90, 30, strokeD/6);
  pop();
  
  push();
  translate(0, 0, - strokeD/6 - strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, 0, 90, 30, strokeD/6);
  boxy(letterW/2, strokeW/2-letterH/2 , 90, 30, strokeD/6);
  pop();
  
  
  pop();
}
function drawG(x, y, z, scl, sclChange, sclAll, twist, texture1){
  push();
  rotateY(twist);
  translate(x, y, z);
  
  push();
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  texture(texture1);
  boxy(strokeW/2, 0, 30, 150, strokeD);
  boxy(letterW/2, strokeW/2-letterH/2 , 90, 30, strokeD);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD);
  boxy(letterW - strokeW/2, 30, 30, 90, strokeD);
  pop();
  
  push();
  translate(0, 0, strokeD/6 + strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, strokeW/2-letterH/2 , 90, 30, strokeD/6);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD/6);
  boxy(letterW - strokeW/2, 30, 30, 90, strokeD/6);
  pop();
  
  push();
  translate(0, 0, - strokeD/6 - strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, strokeW/2-letterH/2 , 90, 30, strokeD/6);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD/6);
  boxy(letterW - strokeW/2, 30, 30, 90, strokeD/6);
  pop();
  
  
  pop();
}
function drawH(x, y, z, scl, sclChange, sclAll, twist, texture1){
  push();
  rotateY(twist);
  translate(x, y, z);
  
  push();
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  texture(texture1);
  boxy(strokeW/2, 0, 30, 150, strokeD);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD);
  boxy(letterW/2, 0, 80, 30, strokeD);
  pop();
  
  push();
  translate(0, 0, strokeD/6 + strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, 0, 90, 30, strokeD/6);
  pop();
  
  push();
  translate(0, 0, - strokeD/6 - strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, 0, 90, 30, strokeD/6);
  pop();
  
  
  
  pop();
}
function drawI(x, y, z, scl, sclChange, sclAll, twist, texture1){
  push();
  rotateY(twist);
  translate(x, y, z);
  
  push();
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  texture(texture1);
  boxy(letterW/2, 0, 30, 140, strokeD);
  boxy(letterW/2, strokeW/2-letterH/2 , 90, 30, strokeD);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD);
  pop();
  
  push();
  translate(0, 0, strokeD/6 + strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(letterW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, strokeW/2-letterH/2 , 90, 30, strokeD/6);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD/6);
  pop();
  
  push();
  translate(0, 0, - strokeD/6 - strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(letterW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, strokeW/2-letterH/2 , 90, 30, strokeD/6);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD/6);
  pop();
  
  pop();
}
function drawJ(x, y, z, scl, sclChange, sclAll, twist, texture1){
  push();
  rotateY(twist);
  translate(x, y, z);
  
  push();
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  texture(texture1);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD);
  boxy(letterW/2 + strokeW/2 , strokeW/2-letterH/2 , 60, 30, strokeD);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD);
  boxy(strokeW/2, 60-strokeW/2, 30, 60, strokeD);
  pop();
  
  push();
  translate(0, 0, strokeD/6 + strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2 + strokeW/2 , strokeW/2-letterH/2 , 60, 30, strokeD/6);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD/6);
  boxy(strokeW/2, 60-strokeW/2, 30, 60, strokeD/6);
  pop();
  
  push();
  translate(0, 0, -strokeD/6 - strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2 + strokeW/2 , strokeW/2-letterH/2 , 60, 30, strokeD/6);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD/6);
  boxy(strokeW/2, 60-strokeW/2, 30, 60, strokeD/6);
  pop();
  
  
  
  pop();
}
function drawK(x, y, z, scl, sclChange, sclAll, twist, texture1){
  push();
  rotateY(twist);
  translate(x, y, z);
  
  push();
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  texture(texture1);
  boxy(strokeW/2, 0, 30, 150, strokeD);
  boxy(60 - strokeW/2, - strokeW, 30, 30, strokeD);
  boxy(letterW - strokeW/2 , strokeW/2-letterH/2 , 30, 30, strokeD);
  boxy(letterW - strokeW/2, 30, 30, 90, strokeD);
  pop();
  
  push();
  translate(0, 0, strokeD/6 + strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(60 - strokeW/2, - strokeW, 30, 30, strokeD/6);
  boxy(letterW - strokeW/2 , strokeW/2-letterH/2 , 30, 30, strokeD/6);
  boxy(letterW - strokeW/2, 30, 30, 90, strokeD/6);
  pop();
  
  push();
  translate(0, 0, -strokeD/6 - strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(60 - strokeW/2, - strokeW, 30, 30, strokeD/6);
  boxy(letterW - strokeW/2 , strokeW/2-letterH/2 , 30, 30, strokeD/6);
  boxy(letterW - strokeW/2, 30, 30, 90, strokeD/6);
  pop();
  
  pop();
}
function drawL(x, y, z, scl, sclChange, sclAll, twist, texture1){
  push();
  rotateY(twist);
  translate(x, y, z);
  
  push();
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  texture(texture1);
  boxy(strokeW/2, 0, 30, 150, strokeD);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD);
  pop();
  
  push();
  translate(0, 0, strokeD/6 + strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD/6);
  pop();
  
  push();
  translate(0, 0, - strokeD/6 - strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD/6);
  pop();
  
  pop();
}
function drawM(x, y, z, scl, sclChange, sclAll, twist, texture1){
  push();
  rotateY(twist);
  translate(x, y, z);
  
  push();
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  texture(texture1);
  boxy(strokeW/2, 0, 30, 150, strokeD);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD);
  boxy(letterW/2, -30, 30, 30, strokeD);
  pop();
  
  push();
  translate(0, 0, strokeD/6 + strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, -30, 30, 30, strokeD/6);
  pop();
  
  push();
  translate(0, 0, - strokeD/6 - strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, -30, 30, 30, strokeD/6);
  pop();
  
  pop();
}
function drawN(x, y, z, scl, sclChange, sclAll, twist, texture1){
  push();
  rotateY(twist);
  translate(x, y, z);
  
  push();
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  texture(texture1);
  boxy(strokeW/2, 0, 30, 150, strokeD);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD);
  boxy(letterW/2, strokeW/2-letterH/2 , 90, 30, strokeD);
  pop();
  
  push();
  translate(0, 0, strokeD/6 + strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, strokeW/2-letterH/2 , 90, 30, strokeD/6);
  pop();
  
  push();
  translate(0, 0, - strokeD/6 - strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, strokeW/2-letterH/2 , 90, 30, strokeD/6);
  pop();
  
  pop();
}
function drawO(x, y, z, scl, sclChange, sclAll, twist, texture1){
  push();
  rotateY(twist);
  translate(x, y, z);
  
  push();
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  texture(texture1);
  boxy(strokeW/2, 0, 30, 150, strokeD);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD);
  boxy(letterW/2, strokeW/2-letterH/2 , 90, 30, strokeD);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD);
  pop();
  
  push();
  translate(0, 0, strokeD/6 + strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, strokeW/2-letterH/2 , 90, 30, strokeD/6);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD/6);
  pop();
  
  push();
  translate(0, 0, - strokeD/6 - strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, strokeW/2-letterH/2 , 90, 30, strokeD/6);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD/6);
  pop();
  
  pop();
}
function drawP(x, y, z, scl, sclChange, sclAll, twist, texture1){
  push();
  rotateY(twist);
  translate(x, y, z);
  
  push();
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  texture(texture1);
  boxy(strokeW/2, 0, 30, 150, strokeD);
  boxy(letterW - strokeW/2, -15, 30, 120, strokeD);
  boxy(letterW/2, -60, 90, 30, strokeD);
  boxy(letterW/2, strokeW, 90, 30, strokeD);
  pop();
  
  push();
  translate(0, 0, strokeD/6 + strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW - strokeW/2, -15, 30, 120, strokeD/6);
  boxy(letterW/2, -60, 90, 30, strokeD/6);
  boxy(letterW/2, strokeW, 90, 30, strokeD/6);
  pop();
  
  push();
  translate(0, 0, - strokeD/6 - strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW - strokeW/2, -15, 30, 120, strokeD/6);
  boxy(letterW/2, -60, 90, 30, strokeD/6);
  boxy(letterW/2, strokeW, 90, 30, strokeD/6);
  pop();
  
  pop();
}
function drawQ(x, y, z, scl, sclChange, sclAll, twist, texture1){
  push();
  rotateY(twist);
  translate(x, y, z);
  
  push();
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  texture(texture1);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD);
  boxy(strokeW/2, -15, 30, 120, strokeD);
  boxy(letterW/2, -60, 90, 30, strokeD);
  boxy(letterW/2, strokeW, 90, 30, strokeD);
  pop();
  
  push();
  translate(0, 0, strokeD/6 + strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD/6);
  boxy(strokeW/2, -15, 30, 120, strokeD/6);
  boxy(letterW/2, -60, 90, 30, strokeD/6);
  boxy(letterW/2, strokeW, 90, 30, strokeD/6);
  pop();
  
  push();
  translate(0, 0, - strokeD/6 - strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD/6);
  boxy(strokeW/2, -15, 30, 120, strokeD/6);
  boxy(letterW/2, -60, 90, 30, strokeD/6);
  boxy(letterW/2, strokeW, 90, 30, strokeD/6);
  pop();
  
  
  pop();
}
function drawR(x, y, z, scl, sclChange, sclAll, twist, texture1){
  push();
  rotateY(twist);
  translate(x, y, z);
  
  push();
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  texture(texture1);
  boxy(strokeW/2, 0, 30, 150, strokeD);
  boxy(letterW - strokeW/2, -45, 30, 60, strokeD);
  boxy(letterW/2, -60, 90, 30, strokeD);
  boxy(letterW/2, 0, 30, 30, strokeD);
  boxy(letterW - strokeW/2, 45, 30, 60, strokeD);
  pop();
  
  push();
  translate(0, 0, strokeD/6 + strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW - strokeW/2, -45, 30, 60, strokeD/6);
  boxy(letterW/2, -60, 90, 30, strokeD/6);
  boxy(letterW/2, 0, 30, 30, strokeD/6);
  boxy(letterW - strokeW/2, 45, 30, 60, strokeD/6);
  pop();
  
  push();
  translate(0, 0, - strokeD/6 - strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW - strokeW/2, -45, 30, 60, strokeD/6);
  boxy(letterW/2, -60, 90, 30, strokeD/6);
  boxy(letterW/2, 0, 30, 30, strokeD/6);
  boxy(letterW - strokeW/2, 45, 30, 60, strokeD/6);
  pop();
  
  pop();
}
function drawS(x, y, z, scl, sclChange, sclAll, twist, texture1){
  push();
  rotateY(twist);
  translate(x, y, z);
  
  push();
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  texture(texture1);
  boxy(strokeW/2, -45, 30, 60, strokeD);
  boxy(letterW/2, -60, 90, 30, strokeD);
  boxy(letterW/2, 0, 90, 30, strokeD);
  boxy(letterW - strokeW/2, 45, 30, 60, strokeD);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD);
  pop();
  
  push();
  translate(0, 0, strokeD/6 + strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, -45, 30, 60, strokeD/6);
  boxy(letterW/2, -60, 90, 30, strokeD/6);
  boxy(letterW/2, 0, 90, 30, strokeD/6);
  boxy(letterW - strokeW/2, 45, 30, 60, strokeD/6);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD/6);
  pop();
  
  push();
  translate(0, 0, - strokeD/6 - strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, -45, 30, 60, strokeD/6);
  boxy(letterW/2, -60, 90, 30, strokeD/6);
  boxy(letterW/2, 0, 90, 30, strokeD/6);
  boxy(letterW - strokeW/2, 45, 30, 60, strokeD/6);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD/6);
  pop();
  
  pop();
}
function drawT(x, y, z, scl, sclChange, sclAll, twist, texture1){
  push();
  rotateY(twist);
  translate(x, y, z);
  
  push();
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  texture(texture1);
  boxy(letterW/2, 0, 30, 150, strokeD);
  boxy(letterW/2, strokeW/2-letterH/2 , 90, 30, strokeD);
  pop();
  
  push();
  translate(0, 0, strokeD/6 + strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(letterW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, strokeW/2-letterH/2 , 90, 30, strokeD/6);
  pop();
  
  push();
  translate(0, 0, - strokeD/6 - strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(letterW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, strokeW/2-letterH/2 , 90, 30, strokeD/6);
  pop();
  
  pop();
}
function drawU(x, y, z, scl, sclChange, sclAll, twist, texture1){
  push();
  rotateY(twist);
  translate(x, y, z);
  
  push();
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  texture(texture1);
  boxy(strokeW/2, 0, 30, 150, strokeD);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD);
  pop();
  
  push();
  translate(0, 0, strokeD/6 + strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD/6);
  pop();
  
  push();
  translate(0, 0, - strokeD/6 - strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD/6);
  pop();
  
  pop();
}
function drawV(x, y, z, scl, sclChange, sclAll, twist, texture1){
  push();
  rotateY(twist);
  translate(x, y, z);
  
  push();
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  texture(texture1);
  boxy(strokeW/2, -15, 30, 120, strokeD);
  boxy(letterW - strokeW/2, -15, 30, 120, strokeD);
  boxy(letterW/2, -strokeW/2+letterH/2 , 30, 30, strokeD);
  pop();
  
  push();
  translate(0, 0, strokeD/6 + strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, -15, 30, 120, strokeD/6);
  boxy(letterW - strokeW/2, -15, 30, 120, strokeD/6);
  boxy(letterW/2, -strokeW/2+letterH/2 , 30, 30, strokeD/6);
  pop();
  
  push();
  translate(0, 0, - strokeD/6 - strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, -15, 30, 120, strokeD/6);
  boxy(letterW - strokeW/2, -15, 30, 120, strokeD/6);
  boxy(letterW/2, -strokeW/2+letterH/2 , 30, 30, strokeD/6);
  pop();
  
  pop();
}
function drawW(x, y, z, scl, sclChange, sclAll, twist, texture1){
  push();
  rotateY(twist);
  translate(x, y, z);
  
  push();
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  texture(texture1);
  boxy(strokeW/2, 0, 30, 150, strokeD);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD);
  boxy(letterW/2, 30, 30, 30, strokeD);
  pop();
  
  push();
  translate(0, 0, strokeD/6 + strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, 30, 30, 30, strokeD/6);
  pop();
  
  push();
  translate(0, 0, - strokeD/6 - strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, 30, 30, 30, strokeD/6);
  pop();
  
  pop();
}
function drawX(x, y, z, scl, sclChange, sclAll, twist, texture1){
  push();
  rotateY(twist);
  translate(x, y, z);
  
  push();
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  texture(texture1);
  boxy(strokeW/2, -45, 30, 60, strokeD);
  boxy(letterW - strokeW/2, -45, 30, 60, strokeD);
  boxy(strokeW/2, 45, 30, 60, strokeD);
  boxy(letterW - strokeW/2, 45, 30, 60, strokeD)
  boxy(letterW/2, 0, 30, 30, strokeD);
  pop();
  
  push();
  translate(0, 0, strokeD/6 + strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, -45, 30, 60, strokeD/6);
  boxy(letterW - strokeW/2, -45, 30, 60, strokeD/6);
  boxy(strokeW/2, 45, 30, 60, strokeD/6);
  boxy(letterW - strokeW/2, 45, 30, 60, strokeD/6)
  boxy(letterW/2, 0, 30, 30, strokeD/6);
  pop();
  
  push();
  translate(0, 0, - strokeD/6 - strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, -45, 30, 60, strokeD/6);
  boxy(letterW - strokeW/2, -45, 30, 60, strokeD/6);
  boxy(strokeW/2, 45, 30, 60, strokeD/6);
  boxy(letterW - strokeW/2, 45, 30, 60, strokeD/6)
  boxy(letterW/2, 0, 30, 30, strokeD/6);
  pop();
  
  pop();
}
function drawY(x, y, z, scl, sclChange, sclAll, twist, texture1){
  push();
  rotateY(twist);
  translate(x, y, z);
  
  push();
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  texture(texture1);
  boxy(strokeW/2, -45, 30, 60, strokeD);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD);
  boxy(letterW/2, 0, 30, 30, strokeD);
  pop();
  
  push();
  translate(0, 0, strokeD/6 + strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, -45, 30, 60, strokeD/6);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, 0, 30, 30, strokeD/6);
  pop();
  
  push();
  translate(0, 0, - strokeD/6 - strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(strokeW/2, -45, 30, 60, strokeD/6);
  boxy(letterW - strokeW/2, 0, 30, 150, strokeD/6);
  boxy(letterW/2, 0, 30, 30, strokeD/6);
  pop();
  
  pop();
}
function drawZ(x, y, z, scl, sclChange, sclAll, twist, texture1){
  push();
  rotateY(twist);
  translate(x, y, z);
  
  push();
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  texture(texture1);
  boxy(letterW - strokeW/2, -45, 30, 60, strokeD);
  boxy(letterW/2, -60, 90, 30, strokeD);
  boxy(letterW/2, 0, 30, 30, strokeD);
  boxy(strokeW/2, 45, 30, 60, strokeD);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD);
  pop();
  
  push();
  translate(0, 0, strokeD/6 + strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(letterW - strokeW/2, -45, 30, 60, strokeD/6);
  boxy(letterW/2, -60, 90, 30, strokeD/6);
  boxy(letterW/2, 0, 30, 30, strokeD/6);
  boxy(strokeW/2, 45, 30, 60, strokeD/6);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD/6);
  pop();
  
  push();
  translate(0, 0, - strokeD/6 - strokeD/8);
  scale(1*sclAll, (scl + sclChange)*sclAll, 1*sclAll);
  fill(25, 25, 26);
  boxy(letterW - strokeW/2, -45, 30, 60, strokeD/6);
  boxy(letterW/2, -60, 90, 30, strokeD/6);
  boxy(letterW/2, 0, 30, 30, strokeD/6);
  boxy(strokeW/2, 45, 30, 60, strokeD/6);
  boxy(letterW/2, -strokeW/2+letterH/2 , 90, 30, strokeD/6);
  pop();
  
  pop();
}
//--OBJECTS--//
function InputsData (x, y, z, wording, letterRotate) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.wording = wording;
  this.ystretch = 1.7;
  this.letterRotate = letterRotate;
  
  
  this.display = function() {
    
    translate(this.x, this.y, this.z);
    scale(1, this.ystretch, 1)
    inputTexture.text(this.wording, this.x, this.y);
    texture(inputTexture);
  } 
  
  this.update = function() {
    this.ystretch = this.ystretch + 0.0005;
  }
  
  
}
function metaDataObj(x, y, z, definition, rotate, rotate2, floatLength, speed, gradient) {
  
  this.x = x;
  this.y = y;
  this.z = z;
  this.definition = definition;
  this.rotate = rotate;
  this.rotate2 = rotate2;
  this.floatLength = floatLength;
  this.speed = speed;
  this.gradient = gradient;
  
  this.display = function() {
    //set up surface textures for metadata display
    metaText.background(245);
    metaText.image(this.gradient, 0, 0);
    metaText.fill(0);
    metaText.text(this.definition, 58, 19);
    metaText.textFont("Lucida Blackletter");
    metaText.textSize(12);
    metaText.textAlign(CENTER);
    metaText.textStyle(BOLD);
    metaGrad.image(this.gradient, 0, 0);

    texture(metaText);
    
    push();
      translate(this.x, this.y, this.z);
      rotateY(this.rotate);
      rotateZ(this.rotate2);
      plane(145, 35); //front text panel
      translate(0, 0, -12); //moved so it glitches therough box
      texture(metaGrad);
      box(145, 35, 24);
      translate(0, 0, -12);
      rotateY(PI);
      texture(metaText);
      plane(145, 35);//back text panel
    pop();

  }
  this.update = function() {
    angle += 0.3;
    var metaFloat = sin(angle*this.speed)*this.floatLength;
    translate(0, metaFloat, 0);
  }
  this.network = function() {
    vertex(this.x, this.y, this.z); //connection shape verteces
  }
}
function ClickThat(x, y, z, rotatey) {
  
  this.x = x;
  this.y = y;
  this.z = z;
  this.rotatey = rotatey;
  
  
  this.display2 = function() {
    
  push(); 
  translate(this.x  + 100, this.y, this.z);  
  
  push();
  rotateY(PI/2);
  rotateZ(PI/2);
  rotateY(this.rotatey);
    push();
    box(33, 22, 3);
    pop(); 
  beginShape();
  fill(120, 120, 130);  
  var boxyW = 36;
  var boxyH = 25;
  translate(-boxyW/2, - boxyH/2, 0);
  vertex(0, 0, 0);
  vertex(0, boxyH, 0);
  vertex(boxyW, boxyH, 0);
  vertex(boxyW, 0, 0);
  vertex(0, 0, 0); 
  endShape();
    
  pop();  
  pop();   
} 
}
function Trace(x, y, z, r, g, b, offset) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.r = r;
  this.g = g;
  this.b = b;
  this.offset = offset;
  this.history = [];

this.update = function() {
  
  this.y = (mouseY - windowHeight/2)*3.4;
  this.x = (mouseX - windowWidth/2)*2.7;
  angle += 0.3;
  this.z = -this.offset + cos(frameCount*0.035)*40;
  
  var v = createVector(this.x, this.y, this.z);
  this.history.push(v);
  
  if (this.history.length > 1900) {
    this.history.splice(0, 1);
  }
}  
this.show = function() {

  noStroke();
  strokeWeight(10);
  
  beginShape();
  fill(r, g, b);
  stroke(0);
  for (var j = 0; j < 10; j++ ) {
    for (var i = 0; i < this.history.length; i++) {
      var pos = this.history[i];
      translate(0, 0, 0);
      vertex(pos.x, pos.y, pos.z);
    }
  endShape();    
  }  
  
  translate(this.x, this.y, this.z);
}
}
function BigBox(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
  
   this.display = function() {
     
     box(2080, 900, 1700);
   }
}
//box shape for constructing letters
function boxy(x, y, w, h, d){
  push();
  translate(x, y, 0);
  box(w, h, d);
  pop();
}
//--MOUSE + KEY COMMANDS--//
function mouseDragged() {
  
  if (mouseX > pmouseX + 3 ) { //move left and right
    camx += 40;
  } else if (mouseX < pmouseX - 3 ) {
    camx -= 40;
  } 
  
  if (mouseY > pmouseY + 3 ) { //move up and down
    zoom += 40;
  } else if (mouseY < pmouseY - 3) {
    zoom -= 40;
  }
}
function mousePressed() {
  snapshots.push(video.get()); //add image of uder to an arry of images with each click
  rotateX(PI/2);
  clickBox.push(new ClickThat((mouseX - windowWidth/2)*2, (mouseY - windowHeight/2)*2.8, -20 + cos(frameCount*0.035)*30, rotations[floor(random(0, rotations.length))])); 
}
function mouseWheel(event) {
	if (zoom < 6000){
    zoom -= event.delta;
  } else if (zoom > 6000){
    zoom = 0;
	} 
	if (zoom > -6000){
    zoom -= event.delta;
  } else if (zoom < -6000){
    zoom = 0;
	}
}
function keyPressed() {
  if (keyCode === ENTER) {
    insert(); //call wordnik and giphy API with enter press
  }
}
//--RESIZE--//
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
//--GIPHY OBJECTS--//
function CircleSin(diam, floatSpeed, floatAmount, rXspeed, rYspeed, rZspeed) {
  this.floatSpeed = floatSpeed;
  this.floatAmount = floatAmount;
  this.rXspeed = rXspeed;
  this.rZspeed = rZspeed;
  this.rYspeed = rYspeed;
  
  
  this.display = function() {
     sphere(diam);
   }
  
  this.update = function() {
    translate(0, sin(frameCount*this.floatSpeed)*this.floatAmount, 0);
    rotateY(frameCount*this.rYspeed);
    rotateX(frameCount*this.rXspeed);
    rotateZ(frameCount*this.rZspeed);
    
  }
  
}
function CircleCos(diam, floatSpeed, floatAmount, rXspeed, rYspeed, rZspeed) {
  this.floatSpeed = floatSpeed;
  this.floatAmount = floatAmount;
  this.rXspeed = rXspeed;
  this.rZspeed = rZspeed;
  this.rYspeed = rYspeed;
  
  
  this.display = function() {
     sphere(diam);
   }
  
  this.update = function() {
    translate(0, cos(frameCount*this.floatSpeed)*this.floatAmount, 0);
    rotateY(frameCount*this.rYspeed);
    rotateX(frameCount*this.rXspeed);
    rotateZ(frameCount*this.rZspeed);
    
  }
  
}
function CircleZ(diam, floatSpeed, floatAmount, floatSpeed2, floatAmount2, rXspeed, rYspeed, rZspeed) {
  this.floatSpeed = floatSpeed;
  this.floatAmount = floatAmount;
  this.floatSpeed2 = floatSpeed2;
  this.floatAmount2 = floatAmount2;
  this.rXspeed = rXspeed;
  this.rZspeed = rZspeed;
  this.rYspeed = rYspeed;
  
  
  this.display = function() {
     sphere(diam);
   }
  
  this.update = function() {
    translate(0, sin(frameCount*this.floatSpeed)*this.floatAmount, cos(frameCount*this.floatSpeed2)*this.floatAmount2);
    rotateY(frameCount*this.rYspeed);
    rotateX(frameCount*this.rXspeed);
    rotateZ(frameCount*this.rZspeed);
    
  }
  
}
function Torus(diam, hole, rYspeed) {
  this.diam = diam;
  this.hole = hole;
  this.rYspeed = rYspeed;
  
  this.display = function() {
     scale(0.8, 1);
     torus(this.diam, this.hole);
  }
  
  this.update = function() {
    rotateY(frameCount * this.rYspeed);
    translate(-60, 0, 0);
    rotateY(PI/4);
    rotateX(-PI/4);
  }
  
}
function Box(h, w, d) {
  this.w = w;
  this.h = h;
  this.d = d;
  
  this.display = function() {
    box(this.w, this.h, this.d);
  }
  
  this.update = function() {
    rotateY(-PI/2 -frameCount * 0.002);
    rotateX(-PI/2 -frameCount * 0.002);
   rotateZ(-PI/2 + sin(frameCount*0.02)*PI/20 );
   
    
  }
  
}
function Box2(h, w, d, speed) {
  this.w = w;
  this.h = h;
  this.d = d;
  this.speed = speed;
  
  this.display = function() {
    box(this.w, this.h, this.d);
  }
  
  this.update = function() {
    rotateY(frameCount * 0.002);
  }
  
}