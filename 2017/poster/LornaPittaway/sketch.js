//help 
var displayHelp = false;
var pg;

//camera movement variables
var camx = 0;
var camy = 0;
var zoom = -100;

//gradient variables
var gFrom;
var bFrom;
var rTo;
var gTo;
var bTo;


//sound variables 
var song1;
var song2;
var song3;
var amplitude;
var button;
var buttonNext;
var buttonPrev;
var buttonInstruct;
var buttonReturn;

//sound analysis variables
var amplitude;
var fftStretch;
var fftCircles;
var fftWall;
var fftBig;


//room variables 
var room;

//counts for things
var sceneCount = 0;
var colSchemeCountR;
var gradCount;
var songCount = 0;

//rotations
var angle = 0;
var angle2 = 0;

//in gradient variables
var gradSpeed = 1.4;
var gradMinNum = 0;
var gradMaxNum = 255;
var col = gradMinNum + 1;

//textplacement variables
var textSpeed = 0.4;
var textMinNum = 0;
var textMaxNum = 780;
var textPos = 0;

var thingSpeed = 200;
var thingMinNum = 0;
var thingMaxNum = 400;
var thingPos = thingMinNum;

var spectrumWall;
var depthWall;
var wallMap;
var letterssMap;
var wallMap;
var dp;

var spectrumCircles;
var rotateCircles;
var circlesMap;
var rt;


function setup(){
  var myCanvas = createCanvas(windowWidth, windowHeight, WEBGL);
  myCanvas.position(0, 0);
  
  pg = createGraphics(200, 200);
  pg.textSize(10);
  pg.textFont("Arial Narrow");
  
  
  //sound loadings 
  song1 =  loadSound("assets/waterMe.mp3");
  song2 =  loadSound("assets/ultraviolet.mp3");
  song3 =  loadSound("assets/pendulum.mp3");
  
  
  //music buttons
  button = createButton("PLAY | PAUSE");
  buttonNext = createButton(">>");
  buttonPrev = createButton("<<");

  button.mousePressed(playSong);
  buttonNext.mousePressed(nextSong);
  buttonPrev.mousePressed(prevSong);
  
  //other buttons
  buttonInstruct = createButton(" ? ");
  buttonInstruct.mousePressed(openHelp);
  buttonReturn = createButton(" ↵ ");
  buttonReturn.mousePressed(returnPos);
  
  //sound analysis
  amplitude = new p5.Amplitude();
  fftStretch = new p5.FFT(0.84, 1024);
  fftRot = new p5.FFT(0.99, 1024);
  fftDepth = new p5.FFT(0.99, 1024);
  fft = new p5.FFT(0.97, 1024);
  fftCircles = new p5.FFT(0.94, 1024);
  fftWall = new p5.FFT(0.94, 1024);
  fftBig = new p5.FFT(0.99, 1024);
  
  
  //room variables 
  //Small Wall Left Variables
  slPosY = random(-220, 60);
  slPosZ = random(-220, 60);
  slSzx = random(400, 680);
  slSzy = random(100, 280);
  
  //textPos = thingMinNum + textSpeed;
  
  //small wall center 1 variables
  sc1Posx = random(0, 0);
  sc1Posy = random(-200, 100);
  sc1Szx = random(400, 900);
  sc1Szy = random(100, 500);
  
  colSchemeCountR = random(0, 4);
  gradCount = ceil(colSchemeCountR);
  
  
  
  
}

function draw(){
  
  spectrumCircles = fftCircles.analyze();
  rotateCircles = fftCircles.getEnergy("mid");
  circlesMap = map(rotateCircles, 0, 256, -0.0003, 0.0018);
  rt = circlesMap;
  
  
  
  
  
  //spectral centroid data
  var centroidplot = 0.0;
  var spectralCentroid = 0;
  var spectrum = fft.analyze(); 
  var nyquist = 22050;
  spectralCentroid = fft.getCentroid();
  var mean_freq_index = spectralCentroid/(nyquist/spectrum.length);
  centroidplot = map(log(mean_freq_index), 0, log(spectrum.length), 0, width);
  
  //mapping spectral centoid to light variables
  lightcons = constrain(centroidplot, 700, width);  
  light1 = map(lightcons, 700, width, 20, 255);	
  light2 = map(lightcons, 700, width, 0, 40);	
  
  //camera
  camZoom(0.55); //zoom out speed of camera free movement
  camera(camx, camy, zoom);

  // lighting - light1 and light2 are increased with spectral centroid
  
  
  
  
  
  cursor(MOVE);

  
  
  if(displayHelp == true) {
    ambientLight(190 ,190 ,190 );
  } else {
    orbitControl();
    ambientLight(light1 ,light1 ,190 + light2);
    pointLight(120, 120, 120, 0, 1200, 0);
	  directionalLight(100, 100, 100, 0.5, 0, 0);
    moveCam();
  }
  
  
  
  
  
  
  
  //scene matching to song
  if (songCount == 0) {
    scenePendulum();
  } else if (songCount == 1) {
    scenePreface();
  } else if (songCount == 2) {
    sceneWaterMe();
  }  
  
  if (displayHelp == true) {
    sceneHelp();
  }
  
	if (songCount > 2) {
    songCount = 0;
  } else if (songCount < 0) {
    songCount = 2;
  }
  
  
  fill(240, 240, 240);
  
  push();
  translate(-1900, -100, -1400);
  scale(20);
  //ambientMaterial(218 - rTo, 218 - gTo, 218 + bTo);
  //ambientMaterial(10);
  //circleShapes1(-letterssMap);
  pop();
  
  push();
  translate(1900, -100, -1400);
  scale(20);
  pop();
  translate(-440, -240, 0);
  
  
  
  ambientMaterial(244, 159, 97 + bTo);
  push();
  translate(520, 250, 0);
  scale(5);
  rotateY(PI);
  rotateZ(PI);
  pop();
  
  commandBar(0, 0);
  translate(-60, 0, 0);
  drawBigShapes(0, 0, 0);
  translate(3190, 530, 200);
  rotateX(PI);
  drawBigShapes(0, 0, 0);
  
  
}
/* BUTTONS */
function openHelp(){
  
  displayHelp = !displayHelp;  
}
function nextSong() {
  
  angle = 0;
  angle2 = 0;
  
  slPosY = random(-220, 60);
  slPosZ = random(-220, 60);
  slSzx = random(400, 680);
  slSzy = random(100, 280);
  
  //small wall center 1 variables
  ssc1Posx = random(0, 0);
  sc1Posy = random(-200, 100);
  sc1Szx = random(400, 900);
  sc1Szy = random(100, 500);
  
  zoom = -100;
  textPos = 0;
  
  songCount++;
  
  colSchemeCountR = random(0, 4); 
  gradCount = ceil(colSchemeCountR);
  
 if (song1.isPlaying()) {
    song1.stop();
    song2.play();
  } else if (song2.isPlaying()) {
    song2.stop();
    song3.play();
  } else if (song3.isPlaying()) {
    song3.stop();
    song1.play();
  } 
  
}
function prevSong() {
  
  angle = 0;
  angle2 = 0;
  
  slPosY = random(-220, 60);
  slPosZ = random(-220, 60);
  slSzx = random(400, 680);
  slSzy = random(100, 280);
  
  //small wall center 1 variables
  ssc1Posx = random(0, 0);
  sc1Posy = random(-200, 100);
  sc1Szx = random(400, 900);
  sc1Szy = random(100, 500);
  
  zoom = -100;
  textPos = 0;
  
  songCount--;
  colSchemeCountR = random(0, 4);
  gradCount = ceil(colSchemeCountR);
  
  if (song1.isPlaying()) {
    song1.stop();
    song3.play();
  } else if (song2.isPlaying()) {
    song2.stop();
    song1.play();
  } else if (song3.isPlaying()) {
    song3.stop();
    song2.play();
  } 
  
}
function playSong() {
  
  angle = 0;
  angle2 = 0;
  
  if (songCount == 0 && !song1.isPlaying()) {
    song1.play();
    button.html("PLAY | PAUSE");
  } else {
    song1.pause();
    button.html("PLAY | PAUSE");
  }
  
  if (songCount == 1 && !song2.isPlaying()) {
  song2.play();
  button.html("PLAY | PAUSE");
  } else {
    song2.pause();
    button.html("PLAY | PAUSE");
  }
  
  if (songCount == 2 && !song3.isPlaying()) {
  song3.play();
  button.html("PLAY | PAUSE");
  } else {
    song3.pause();
    button.html("PLAY | PAUSE");
  }
  
  
}


/* SCENES */
function scenePendulum() {

  background(240, 240, 240);
  
  // circles of letterforms 
  letterCircles(0, 0, 400, 900, 1, 1, 1);
  letterCircles(0, 0, 0, 900, -1, 1, 0.8);
  
  // rotation angles
  angle += 0.6; 
  angle2 += 0.3;
  
  
  //select color scheme at random
  if (gradCount == 1) {
    colScheme1();
  } else if (gradCount == 2) {
    colScheme2();
  } else if (gradCount == 3) {
    colScheme3();
  } else if (gradCount == 4) {
    colScheme4();
  }
  
  // movement of display elements inside cube
  if (song1.isPlaying() && textPos < textMaxNum && song1.currentTime() > 5){
    //doesn't move until song is playing & at 5 seconds
    textPos = textPos + textSpeed; 
    textWall(0, 0, -100, textPos);
    WaterMeText(200, 0, 0 + textPos, 0.48, 0);
  } else if  (textPos >= textMaxNum && song1.isPlaying()) { 
    //stops moving once reached destination point
    textWall(0, 0, -100, 780);
    WaterMeText(200, 0, 780, 0.48, 0);
  } else {
    //resets when song called again
    textWall(0, 0, -100, 0);
    WaterMeText(200, 0, 0, 0.48, 0);
  }
  
  
  //room construction
  room = new Room(0, 0, 150);
  room.drawBIWallL();
  room.drawBIWallC();
  room.drawBIWallR();
  room.drawBIWallT();
  room.drawBIWallB();
  
  
  
}
function sceneWaterMe() {

  background(240, 240, 240);
  
  // circles of letterforms 
  letterCircles(0, 0, 400, 900, 1, 1, 1);
  letterCircles(0, 0, 0, 900, -1, 1, 0.8);
  
  // rotation angles
  angle += 0.7; 
  angle2 += 0.3;
  
  // movement of display elements inside cube
  if (song2.isPlaying() && textPos < textMaxNum && song2.currentTime() > 5){
    //doesn't move until song is playing & at 5 seconds
    textPos = textPos + textSpeed; 
    textWall(0, 0, -100, textPos);
    PendulumText(170, 0, 0 + textPos, 0.48, 0);
  } else if  (textPos >= textMaxNum && song2.isPlaying()) { 
    //stops moving once reached destination point
    textWall(0, 0, -100, 780);
    PendulumText(170, 0, 780, 0.48, 0);
  } else {
    //resets when song called again
    textWall(0, 0, -100, 0);
    PendulumText(170, 0, 0, 0.48, 0);
  }
  
  //select color scheme at random
  if (gradCount == 1) {
    colScheme1();
  } else if (gradCount == 2) {
    colScheme2();
  } else if (gradCount == 3) {
    colScheme3();
  } else if (gradCount == 4) {
    colScheme4();
  }
  
  //room construction
  room = new Room(0, 0, 150);
  room.drawBIWallL();
  room.drawBIWallC();
  room.drawBIWallR();
  room.drawBIWallT();
  room.drawBIWallB();
  
}
function sceneAche() {

  background(240, 240, 240);
  
  // circles of letterforms 
  letterCircles(0, 0, 400, 900, 1, 1, 1);
  letterCircles(0, 0, 0, 900, -1, 1, 0.8);
  
  // rotation angles
  angle += 0.7; 
  angle2 += 0.3;
  
  // movement of display elements inside cube
  if (song3.isPlaying() && textPos < textMaxNum && song3.currentTime() > 5){
    //doesn't move until song is playing & at 5 seconds
    textPos = textPos + textSpeed; 
    textWall(0, 0, -100, textPos);
    WaterMeText(200, 0, 0 + textPos, 0.48, 0);
  } else if  (textPos >= textMaxNum && song3.isPlaying()) { 
    //stops moving once reached destination point
    textWall(0, 0, -100, 780);
    WaterMeText(200, 0, 780, 0.48, 0);
  } else {
    //resets when song called again
    textWall(0, 0, -100, 0);
    WaterMeText(200, 0, 0, 0.48, 0);
  }
  
  //select color scheme at random
  if (gradCount == 1) {
    colScheme1();
  } else if (gradCount == 2) {
    colScheme2();
  } else if (gradCount == 3) {
    colScheme3();
  } else if (gradCount == 4) {
    colScheme4();
  }
  
  //room construction
  room = new Room(0, 0, 150);
  room.drawBIWallL();
  room.drawBIWallC();
  room.drawBIWallR();
  room.drawBIWallT();
  room.drawBIWallB();
  
}
function scenePreface() {

  background(240, 240, 240);
  
  // circles of letterforms 
  letterCircles(0, 0, 400, 900, 1, 1, 1);
  letterCircles(0, 0, 0, 900, -1, 1, 0.8);
  
  // rotation angles
  angle += 0.7; 
  angle2 += 0.3;
  
  // movement of display elements inside cube
  if (song3.isPlaying() && textPos < textMaxNum && song3.currentTime() > 5){
    //doesn't move until song is playing & at 5 seconds
    textPos = textPos + textSpeed; 
    textWall(0, 0, -100, textPos);
    PrefaceText(150, 0, 0 + textPos, 0.48, 0);
  } else if  (textPos >= textMaxNum && song3.isPlaying()) { 
    //stops moving once reached destination point
    textWall(0, 0, -100, 780);
    PrefaceText(150, 0, 780, 0.48, 0);
  } else {
    //resets when song called again
    textWall(0, 0, -100, 0);
    PrefaceText(150, 0, 0, 0.48, 0);
  }
  
  //select color scheme at random
  if (gradCount == 1) {
    colScheme1();
  } else if (gradCount == 2) {
    colScheme2();
  } else if (gradCount == 3) {
    colScheme3();
  } else if (gradCount == 4) {
    colScheme4();
  }
  
  //room construction
  room = new Room(0, 0, 150);
  room.drawBIWallL();
  room.drawBIWallC();
  room.drawBIWallR();
  room.drawBIWallT();
  room.drawBIWallB();
  
}
function sceneHelp(){
  background(10, 10, 10);
  
  camx = 0;
  camy = 0;
  var rx = map(mouseX, 0, width, -PI/18, PI/18);
  var ry = map(mouseY, 0, width, -PI/18, PI/18);
  translate(0, 0, zoom);
  rotateX(ry);
  rotateZ(-rx);
  rotateY(rx);
  pg.background(235, 235, 240);
  pg.fill(0);
  pg.text('+ CLICK AND DRAG MOUSE TO ROTATE', 16, 45);
  pg.text('   VIEW', 17, 65);
  pg.text('+ SCROLL TO ZOOM IN AND OUT', 16, 100);
  pg.text('+ MOVE MOUSE TO THE EDGES OF THE', 16, 135);
  pg.text('   SCREEN TO PAN CAMERA', 16, 155);
  
  
  //pass image as texture
  texture(pg);
  plane(800, 320);
  box(800, 320, 20);
  
}

/* RESIZINGS AND SCENE NAVIGATION */
function camZoom(speed) {
   if (song1.isPlaying() && song1.currentTime() > 5) {
    zoom += speed;
  }  
  if (song2.isPlaying() && song2.currentTime() > 4) {
    zoom += speed;
  } 
  if (song3.isPlaying() && song3.currentTime() > 5) {
    zoom += speed;
  } 
}
function mouseWheel(event) {
	print(event.delta);
	if (zoom < 2800){
    zoom -= event.delta;
  } else if (zoom > 2800){
    zoom = -400;
	} 
	print(event.delta);
	if (zoom > -900){
    zoom -= event.delta;
  } else if (zoom < -900){
    zoom = 2800;
	}
  
  if (displayHelp == true) {
    zoom = event.delta*0;
  } 
}
function windowResized() {

	resizeCanvas(windowWidth, windowHeight);

}

//room
function Room(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;

  this.drawBIWallL = function() {
    push();
    ambientMaterial(245, 245, 235);
    translate(-650 + this.x, 0 + this.y, 0 + this.z);
    rotateY(PI/2);
    box(1200, 700, 20);
    pop();
  };
  
   this.drawBIWallR = function() {
    push();
    ambientMaterial(245, 245, 235);
    translate(650 + this.x, 0 + this.y, 0 + this.z);
    rotateY(PI/2);
    box(1200, 700, 20);
    pop();
  };
  
   this.drawBIWallT = function() {
    push();
    ambientMaterial(245, 245, 235);
    translate(0 + this.x, -350 + this.y, 0 + this.z);
    rotateX(PI/2);
    rotateZ(PI/2);
    box(1200, 1320, 20);
    pop();
  };
  
  this.drawBIWallB = function() {
    push();
    ambientMaterial(245, 245, 235);
    translate(0 + this.x, 350 + this.y, 0 + this.z);
    rotateX(PI/2);
    rotateZ(PI/2);
    box(1200, 1320, 20);
    pop();
  };
  

  this.drawBIWallC = function() {
    push();
    ambientMaterial(245, 245, 235);
    translate(0 + this.x, 0 + this.y, -550 + this.z);  
    box(1320, 700, 10);
    pop();

  };
  this.drawWallB = function(BSzx, BSzy) {
    push();
    ambientMaterial(128, 128, 128);
    translate(500 + this.x, 100 + this.y, 500 + this.z);
    box(/*400*/ Bszx, /*300*/ Bszy, 40);
    pop();
  };
  this.drawWallR = function(RSzx, RSzy) {
    push();
    ambientMaterial(128, 128, 177);
    translate(600 + this.x, 100 + this.y, 300 + this.z);
    rotateY(PI/2);
    box(/*200*/ RSzx, /*700*/ RSzy, 40);
    pop();
  };

}

/* LETTERS */
//letter combos
function WaterMeText (x, y, z, scl, sp) {
  
  var spectrumStretch = fftStretch.analyze();
  var letterStretch = fftStretch.getEnergy("bass");
  var stretchMap = map(letterStretch, 0, 256, 0, 840);
  var st = stretchMap;
  
  var spectrumRot = fftRot.analyze();
  var letterRot = fftRot.getEnergy("lowMid");
  var rotMap = map(letterRot, 0, 256, 0, 0.06);
  
  var spectrumDepth = fftDepth.analyze();
  var letterDepth = fftDepth.getEnergy("bass");
  var depthMap = map(letterDepth, 0, 256, 0, 15);
  var depthMap2 = map(letterDepth, 0, 256, 0, 2);
  
  var dpt = depthMap;
  push();
  translate(x + stretchMap/4, y, z);
	scale(scl);
  
	var depthChange1 = sin(angle2*(0.097 + sp)) * (8 + depthMap2);
  var depthChange2 = cos(angle2*(0.02771 + sp)) * (5.65685 + depthMap2);
  
  var depth = depthChange1*depthChange1;
  
  translate(-400 - st/2, -140, -200 - (depthChange2*depthChange2));
  
  
  var turnY = map(mouseX, 0, width, -PI/8, PI/10);
  var turnX = map(mouseY, 0, width, -PI/10, PI/3);
  var turnZ = map(mouseY, 0, width, -PI/14, PI/14);
  
  ambientMaterial(5);
  
  var roty = sin(angle*(0.005+rotMap));
  var rotyc = cos(angle*(0.005+rotMap));
  var roty2 = map(roty, -1, 1, -PI/13, PI/13);
  var roty2c = map(rotyc, -1, 1, -PI/13, PI/13);
  var roty22 = map(roty, -1, 1, -PI/7, 0);
  
  if (song1.isPlaying() || song2.isPlaying() || song3.isPlaying()) {
    rotateY(roty22);
    rotateX(roty2c);
    rotateZ(-roty2);
  }
  
  rotateY(PI/7 + turnY);
  rotateX(-PI/8 + turnX);
  rotateZ(PI/20 + turnZ);
  
  translate(-100, 0, 0);
  //fill(255, 0, 0);
	drawW(0, 0, 0, 30 + st, depth + dpt);
	translate(240, 0, 0);
	drawA(0, 0, 0, 80 + st, depth + dpt);
	translate(280, 0);
	drawT(0, 0, 0, -40 + st, depth + dpt);
	translate(-520, 220, 0);
	drawE(5, 0, 0, 120 + st, depth + dpt);
	translate(320, 0);
	drawR(0, 0, 0, 0 + st, depth + dpt);
	translate(-120, 220, 0);
	drawM(0, 0, 0, 10 + st, depth + dpt);
	translate(190, 0, 0);
	drawE(0, 0, 0, 40 + st, depth + dpt);
  translate(0, 0, 300);
  pop();
}
function PendulumText (x, y, z, scl, sp) {
  
  var spectrumStretch = fftStretch.analyze();
  var letterStretch = fftStretch.getEnergy("bass");
  var stretchMap = map(letterStretch, 0, 256, 0, 840);
  var st = stretchMap;
  
  var spectrumRot = fftRot.analyze();
  var letterRot = fftRot.getEnergy("lowMid");
  var rotMap = map(letterRot, 0, 256, 0, 0.06);
  
  var spectrumDepth = fftDepth.analyze();
  var letterDepth = fftDepth.getEnergy("bass");
  var depthMap = map(letterDepth, 0, 256, 0, 15);
  var depthMap2 = map(letterDepth, 0, 256, 0, 2);
  
  var dpt = depthMap;
  push();
  translate(x + stretchMap/4, y, z);
	scale(scl);
  
	var depthChange1 = sin(angle2*(0.097 + sp)) * (8 + depthMap2);
  var depthChange2 = cos(angle2*(0.02771 + sp)) * (5.65685 + depthMap2);
  
  var depth = depthChange1*depthChange1;
  
  translate(-400 - st/2, -140, -200 - (depthChange2*depthChange2));
  
  
  var turnY = map(mouseX, 0, width, -PI/8, PI/10);
  var turnX = map(mouseY, 0, width, -PI/10, PI/3);
  var turnZ = map(mouseY, 0, width, -PI/14, PI/14);
  
  ambientMaterial(5);
  
  var roty = sin(angle*(0.005+rotMap));
  var rotyc = cos(angle*(0.005+rotMap));
  var roty2 = map(roty, -1, 1, -PI/13, PI/13);
  var roty2c = map(rotyc, -1, 1, -PI/13, PI/13);
  var roty22 = map(roty, -1, 1, -PI/7, 0);
  
  if (song1.isPlaying() || song2.isPlaying() || song3.isPlaying()) {
    rotateY(roty22);
    rotateX(roty2c);
    rotateZ(-roty2);
  }
  
  rotateY(PI/7 + turnY);
  rotateX(-PI/8 + turnX);
  rotateZ(PI/20 + turnZ);
  
  translate(-100, 0, 0);
  drawP(0, 0, 0, 20 + st, depth + dpt);
  drawE(200, 0, 0, 115 + st, depth + dpt);
  drawN(510, 0, 0, 20 + st, depth + dpt);
  drawD(-50, 220, 0, 100 + st, depth + dpt);
  drawU(210, 220, 0, 60 + st, depth + dpt);
  drawL(440, 220, 0, -20 + st, depth + dpt);
  drawU(165, 440, 0, 0 + st, depth + dpt);
  drawM(400, 440, 0, 50 + st, depth + dpt);
  pop();
}
function PrefaceText (x, y, z, scl, sp) {
  
  var spectrumStretch = fftStretch.analyze();
  var spectrumRot = fftRot.analyze();
  var letterStretch = fftStretch.getEnergy("bass");
  var letterRot = fftRot.getEnergy("lowMid");
  var stretchMap = map(letterStretch, 0, 256, 0, 780);
  var st = stretchMap;
  var rotMap = map(letterRot, 0, 256, -0.003, 0.07);
  
  var spectrumDepth = fftDepth.analyze();
  var letterDepth = fftDepth.getEnergy("bass");
  var depthMap = map(letterDepth, 0, 256, 0, 15);
  var depthMap2 = map(letterDepth, 0, 256, 0, 2);
  var dpt = depthMap;
  push();
  translate(x + stretchMap/4, y, z);
	scale(scl);
  
	var depthChange1 = sin(angle2*(0.097 + sp)) * (8 + depthMap2);
  var depthChange2 = cos(angle2*(0.02771 + sp)) * (5.65685 + depthMap2);
  
  var depth = depthChange1*depthChange1;
  
  translate(-400 - st/2, -140, -200 - (depthChange2*depthChange2));
  
  
  var turnY = map(mouseX, 0, width, -PI/8, PI/10);
  var turnX = map(mouseY, 0, width, -PI/10, PI/3);
  var turnZ = map(mouseY, 0, width, -PI/14, PI/14);
  
  ambientMaterial(5);
  
  var roty = sin(angle*(0.005+rotMap));
  var rotyc = cos(angle*(0.005+rotMap));
  var roty2 = map(roty, -1, 1, -PI/13, PI/13);
  var roty2c = map(rotyc, -1, 1, -PI/13, PI/13);
  var roty22 = map(roty, -1, 1, -PI/7, 0);
  
  if (song1.isPlaying() || song2.isPlaying() || song3.isPlaying()) {
    rotateY(roty22);
    rotateX(roty2c);
    rotateZ(-roty2);
  }
  
  rotateY(PI/7 + turnY);
  rotateX(-PI/8 + turnX);
  rotateZ(PI/20 + turnZ);
  
  translate(-100, 0, 0);
  drawP(0, 0, 0, 40 + st, depth + dpt);
  drawR(270, 0, 0, 110 + st, depth + dpt);
  drawE(540, 0, 0, 110 + st, depth + dpt);
  translate(0, 220, 0);
  drawF(165, 0, 0, 20 + st, depth + dpt, 0);
  drawA(460, 0, 0, 120 + st, depth + dpt, 0);
  translate(0, 220, 0);
  drawC(40, 0, 0, 150 + st, depth + dpt, 0);
  drawE(390, 0, 0, 220 + st, depth + dpt, 0)
  pop();
}


//individual letters
function drawW (x, y, z, stretch, depth) {
  push();
  translate(-90 -stretch/2 + x, 0 + y, 0 + z);
	push();
	translate(stretch/2, 0, 0);
	box(180 + stretch, 36, 36 + depth);
	pop();
	push();
	translate(-72, -82, 0);
	box(36, 200, 36 + depth);
	pop();
	push();
	translate(stretch/2, -82, 0);
	box(36, 200, 36 + depth);
	pop();
	push();
	translate(72 + stretch, -82, 0);
	box(36, 200, 36 + depth);
	pop();
  pop();
}
function drawA (x, y, z, stretch, depth) {
  push();
  translate(-75 -stretch/2 + x, 0 + y, 0 + z);
	push();
	translate(stretch/2, -164, 0);
	box(180 + stretch, 36, 36 + depth);
	pop();
	push();
	translate(-72, -82, 0);
	box(36, 200, 36 + depth);
	pop();
	push();
	translate(stretch/2, -82, 0);
	box(180 + stretch, 36, 36 + depth);
	pop();
	push();
	translate(72 + stretch, -82, 0);
	box(36, 200, 36 + depth);
	pop();
  pop();
}
function drawT (x, y, z, stretch, depth) {
  push();
  translate(-140 -stretch/2 + x, 0 + y, 0 + z);
	push();
	translate(stretch/2, -164, 0);
	box(180 + stretch, 36, 36 + depth);
	pop();
	push();
	translate(stretch/2, -82, 0);
	box(36, 200 , 36 + depth);
	pop();
  pop();
}
function drawE (x, y, z, stretch, depth) {
  push();
  translate(-50 -stretch/2 + x, 0 + y, 0 + z);
	push();
	translate(stretch/2, -164, 0);
	box(180 + stretch, 36, 36 + depth);
	pop();
	push();
	translate(stretch/2, -82, 0);
	box(180 + stretch, 36, 36 + depth);
	pop();
	push();
	translate(stretch/2, 0, 0);
	box(180 + stretch, 36, 36 + depth);
	pop();
	push();
	translate(-72, -82, 0);
	box(36, 200, 36 + depth);
	pop();
  pop();
}
function drawR (x, y, z, stretch, depth) {
  push();
  translate(-110 -stretch/2 + x, 0 + y, 0 + z);
	push();
	translate(stretch/2, -164, 0);
	box(180 + stretch, 36, 36 + depth);
	pop();
	push();
	translate(-16 + stretch/2, -82, 0);
	box(136 + stretch, 36, 36 + depth);
	pop();
	push();
	translate(72 + stretch, -142, 0);
	box(36, 80, 36 + depth);
	pop();
	push();
	translate(-72, -82, 0);
	box(36, 200, 36 + depth);
	pop();
	push();
	translate(59 + stretch, -96, 0);
	rotateZ(-PI/4);
	box(36, 54, 36 + depth);
	pop();
	push();
	translate(59 + stretch, -66, 0);
	rotateZ(PI/4);
	box(36, 54, 36 + depth);
	pop();
	push();
	translate(72 + stretch, -20, 0);
	box(36, 80, 36 + depth);
	pop();
  pop();
}
function drawM (x, y, z, stretch, depth) {
  push();
  translate(-90 -stretch/2 + x, 0 + y, 0 + z);
	push();
	translate(stretch/2, -164, 0);
	box(180 + stretch, 36, 36 + depth);
	pop();
	push();
	translate(-72, -82, 0);
	box(36, 200, 36 + depth);
	pop();
	push();
	translate(stretch/2, -82, 0);
	box(36, 200, 36 + depth);
	pop();
	push();
	translate(72 + stretch, -82, 0);
	box(36, 200, 36 + depth);
	pop();
  pop();
}
function drawP (x, y, z, stretch, depth) {
  push();
  translate(-110 -stretch/2 + x, y, z);
	push();
	translate(stretch/2, -164, 0);
	box(180 + stretch, 36, 36 + depth);
	pop();
	push();
	translate(-16 + stretch/2, -82, 0);
	box(136 + stretch, 36, 36 + depth);
	pop();
	push();
	translate(72 + stretch, -142, 0);
	box(36, 80, 36 + depth);
	pop();
	push();
	translate(-72, -82, 0);
	box(36, 200, 36 + depth);
	pop();
	push();
	translate(59 + stretch, -96, 0);
	rotateZ(-PI/4);
	box(36, 54, 36 + depth);
	pop();
  pop();
}
function drawD (x, y, z, stretch, depth) {
  push();
  translate(-110 -stretch/2 + x, y, z);
	push();
	translate(-16 + stretch/2, -164, 0);
	box(136 + stretch, 36, 36 + depth);
	pop();
	push();
	translate(-16 + stretch/2, 0, 0);
	box(136 + stretch, 36, 36 + depth);
	pop();
	push();
	translate(72 + stretch, -142, 0);
	pop();
	push();
	translate(-72, -82, 0);
	box(36, 200, 36 + depth);
	pop();
  push();
	translate(73 + stretch, -82, 0);
	box(36, 124, 36 + depth);
	pop();
	push();
	translate(59 + stretch, -14, 0);
	rotateZ(-PI/4);
	box(36, 54, 36 + depth);
	pop();
  push();
	translate(59 + stretch, -150, 0);
	rotateZ(PI/4);
	box(36, 54, 36 + depth);
	pop();
  pop();
}
function drawN (x, y, z, stretch, depth) {
  push();
  translate(-90 -stretch/2 + x, y, z);
	push();
	translate(stretch/2, -164, 0);
	box(180 + stretch, 36, 36 + depth);
	pop();
	push();
	translate(-72, -82, 0);
	box(36, 200, 36 + depth);
	pop();
	push();
	translate(72 + stretch, -82, 0);
	box(36, 200, 36 + depth);
	pop();
  pop();
}
function drawU (x, y, z, stretch, depth) {
  push();
  translate(x - 90 - stretch/2, y, z);
	push();
	translate(stretch/2, 0, 0);
	box(180 + stretch, 36, 36 + depth);
	pop();
	push();
	translate(-72, -82, 0);
	box(36, 200, 36 + depth);
	pop();
	push();
	translate(72 + stretch, -82, 0);
	box(36, 200, 36 + depth);
	pop();
  pop();
}
function drawL (x, y, z, stretch, depth) {
  push();
  translate(x - 90 - stretch/2, y, z);
	push();
	translate(stretch/2, 0, 0);
	box(180 + stretch, 36, 36 + depth);
	pop();
	push();
	translate(-72, -82, 0);
	box(36, 200, 36 + depth);
	pop();
  pop();
}
function drawV (x, y, z, stretch, depth) {
  push();
  translate(x - 90 - stretch/2, y, z);
	push();
	translate(stretch/2, 0, 0);
	box(104 + stretch, 36, 36 + depth);
	pop();
	push();
	translate(-72, -101, 0);
	box(36, 162, 36 + depth);
	pop();
	push();
	translate(72 + stretch, -101, 0);
	box(36, 162, 36 + depth);
	pop();
  push();
	translate(59 + stretch, -14, 0);
	rotateZ(-PI/4);
	box(36, 54, 36 + depth);
	pop();
  push();
	translate(-59, -14, 0);
	rotateZ(PI/4);
	box(36, 54, 36 + depth);
	pop();
  pop();
}
function drawI (x, y, z, stretch, depth) {
  push();
  translate(x, y, z);
	push();
	translate(0, -82, 0);
	box(36, 200, 36 + depth);
	pop();
  pop();
}
function drawO (x, y, z, stretch, depth) {
  push();
  translate(x - 90 - stretch/2, y, z);
	push();
	translate(stretch/2, 0, 0);
	box(180 + stretch, 36, 36 + depth);
	pop();
  push();
	translate(stretch/2, -164, 0);
	box(180 + stretch, 36, 36 + depth);
	pop();
	push();
	translate(-72, -82, 0);
	box(36, 200, 36 + depth);
	pop();
	push();
	translate(72 + stretch, -82, 0);
	box(36, 200, 36 + depth);
	pop();
  pop();
}
function drawC (x, y, z, stretch, depth) {
  push();
  translate(x - 90 - stretch/2, y, z);
	push();
	translate(stretch/2, 0, 0);
	box(180 + stretch, 36, 36 + depth);
	pop();
  push();
	translate(stretch/2, -164, 0);
	box(180 + stretch, 36, 36 + depth);
	pop();
	push();
	translate(-72, -82, 0);
	box(36, 200, 36 + depth);
	pop();
  pop();
}
function drawF (x, y, z, stretch, depth) {
  push();
  translate(-50 -stretch/2 + x, y, z);
	push();
	translate(stretch/2, -164, 0);
	box(180 + stretch, 36, 36 + depth);
	pop();
	push();
	translate(stretch/2, -82, 0);
	box(180 + stretch, 36, 36 + depth);
	pop();
	push();
	translate(-72, -82, 0);
	box(36, 200, 36 + depth);
	pop();
  pop();
}

/* CAMERA MOVE WITH MOUSE PLACEMENT */
function moveCam () {
  

  var camPan = 7.5;

	
	if (mouseX > width-width/60 && mouseX < width-2 ){
    camx = camx + camPan;
  } else if (mouseX < width-width/60 && mouseX > 2){
    camx = camx + 0;
  }
  if (mouseX < 0+width/60){
    camx = camx - camPan;
  } else if (mouseX < width-width/60){
    camx = camx + 0;
  }
  if (mouseY > height-height/35 && mouseY < height-2){
    camy = camy + camPan
  } else if (mouseY < height-height/35){
    camy = camy + 0;
  }
  if (mouseY< 0+height/35 && mouseY > 2){
    camy = camy - camPan;
  } else if (mouseY < height-height/35){
    camy = camy + 0;
  }
}

/* LETTER CIRCLES */
function letterCircles(x, y, z, radius, dirRot, dirRt, scl){
  
  
  push();
  translate(x, y, z);
  if (song1.isPlaying()) {
    rotateZ(angle * (0.003 * dirRot + rt*dirRt));
  } else if (song2.isPlaying()) {
    rotateZ(angle * (0.003 * dirRot + rt*dirRt));
  } else if (song3.isPlaying()) {
    rotateZ(angle * (0.003 * dirRot + rt*dirRt));
  } 

  
  rotateX(PI/2);
  for (var i = PI/12; i <= PI/0.5 + PI/12; i += PI/6){
    for(var j = 0; j <= PI/0.5; j += PI/6){
      push();
			rotateY(j);
			translate(-radius, 0, 0);
			fill(0);
      scale(scl);
      circleShapes1(1);
      pop();
      push();
			rotateY(i);
			translate(-radius, 0, 0);
			fill(0);
      scale(scl);
      circleShapes1(-1);
      pop();
    }
	}
  pop();
  
  
}

function bigShapes(x, y, z) {
  
  ambientMaterial(to);
  push();
  translate(x, y, z);
  spectrumBig = fftBig.analyze();
  var rotBig = fftBig.getEnergy("mid");
  var rot2Big = fftBig.getEnergy("highMid");
  var bigMap = map(rotBig, 0, 256, 0, 0.03);
  var bigMap2 = map(rot2Big, 0, 256, 1, 5);
  var rtttt = bigMap;
  var scl = bigMap2;
  
  
  push();
  translate(-500, 200, 800);
  rotateY(angle*(0.01+rtttt));
  rotateZ(angle*(0.01+rtttt));
  push();
  scale(1.3);
  rotateX(angle*(-0.01+rtttt));
  rotateY(angle*(0.01+rtttt));
  circleShapes2(0, 0, 0);
  pop();
  push();
  scale(1.3);
  //rotateY(PI);
  rotateZ(PI);
  rotateX(angle*(0.01+rtttt));
  //rotateY(angle*(0.015+rtttt));
  circleShapes2(0, 0, 0);
  pop();
  push();
  scale(1.3);
  rotateX(PI);
  rotateY(angle*(0.01+rtttt));
  //circleShapes2(0, 0, 0, 1);
  pop();
  pop();
  pop();
}

function drawBigShapes (x, y, z) {
  
  translate(x, y, z);
  push();
  scale(1.3);
  bigShapes(-320, 50, -700);
  bigShapes(-320, -50, -700);
  pop();
}
function circleShapes1 (a) {
  
  //translate(-50, -50, 0);
	scale(0.3);
	rotateY(angle*0.01*a);
	rotateZ(angle*0.01*a);
	push();
	translate(0, 0, 0);
	box(36, 200, 36);
	translate(-90, 0, 0);
	box(180, 36, 36);
	pop();
	push();
	translate(-164, 0, 0);
	rotateX(angle*-0.01*a);
	box(36, 200, 36);
	translate(82, -82, 0);
	box(180, 36, 36);
	pop();
	

}
function circleShapes2 (x, y, z) {
  translate(x, y, z);
  //translate(-50, -50, 0);
  
  spectrumBig = fftBig.analyze();
  var rot2Big = fftBig.getEnergy("highMid");
  var bigMap2 = map(rot2Big, 0, 256, 1, 1.3);
  var scl = bigMap2;
  
	scale(scl);
	//rotateY(angle*0.01*a);
	push();
	translate(90, 0, 0);
	box(36, 200, 36);
	translate(-90, 0, 0);
	box(180, 36, 36);
	pop();
	push();
	translate(-74, 0, 0);
	rotateX(angle*(-0.01));
	box(36, 200, 36);
	translate(82, -82, 0);
	box(180, 36, 36);
	pop();
	

}

/* GRADIENTS */
function gradient1(x, y, z, length, width, div) {
  
  translate(x, y, z);
  col = col + gradSpeed;
  if ( col > gradMaxNum ) { 
    gradSpeed = gradSpeed * -1; //reversing speed
  } else if ( col < gradMinNum) {
    gradSpeed = gradSpeed * -1; //reversing speed
  }
  
  
  //mapings of animation
  
  gFrom = map(col, 0, 255, 20, 20);
  bFrom = map(col, 0, 255, 40, 40);
  rTo = map(col, 0, 255, 0, 21);
  gTo = map(col, 0, 255, 0, 21);
  bTo = map(col, 0, 255, 0, 21);
  
  //drawing gradient
 
  push();
  translate(0, 0, 0);
  for (var f = 0; f < length; f += div) {
    
    
    to = color(244, 159, 97 + bTo);
    from = color(190, 205 - gFrom, 190 - gFrom);
    interA = lerpColor(from, to, f/(length));
    //fill(interA);
    
    push();
    push();
    translate(0, 0, -1000);
    ambientMaterial(to);
    rotateY(PI/2);
    plane(400, width);
    pop();
    ambientMaterial(interA);
    rotateY(PI/2);
    translate(f, 0);
    plane(div, width);
    pop();
  }
  pop();
  
}
function gradient2(x, y, z, length, width, div) {
  
  translate(x, y, z);
  col = col + gradSpeed;
  if ( col > gradMaxNum ) { 
    gradSpeed = gradSpeed * -1; //reversing speed
  } else if ( col < gradMinNum) {
    gradSpeed = gradSpeed * -1; //reversing speed
  }
  
  
  //mapings of animation
  gFrom = map(col, 0, 255, 20, 40);
  bFrom = map(col, 0, 255, 40, 40);
  rTo = map(col, 0, 255, 0, 28);
  gTo = map(col, 0, 255, 0, 21);
  bTo = map(col, 0, 255, 0, 20);
  
  //drawing gradient
 
  push();
  translate(0, 0, 0);
  for (var f = 0; f < length; f += div) {
    
    to = color(228 + rTo, 174 + gTo, 192 + bTo);
    from = color(245, 187, 135);
    interA = lerpColor(from, to, f/(length));
    
    push();
    push();
    translate(0, 0, -1000);
    ambientMaterial(to);
    rotateY(PI/2);
    plane(400, width);
    pop();
    ambientMaterial(interA);
    rotateY(PI/2);
    translate(f, 0);
    plane(div, width);
    pop();
  }
  pop();
  
}
function gradient3(x, y, z, length, width, div) {
  
  translate(x, y, z);
  col = col + gradSpeed;
  if ( col > gradMaxNum ) { 
    gradSpeed = gradSpeed * -1; //reversing speed
  } else if ( col < gradMinNum) {
    gradSpeed = gradSpeed * -1; //reversing speed
  }
  
  
  //mapings of animation
  gFrom = map(col, 0, 255, 0, 24);
  bFrom = map(col, 0, 255, 0, 24);
  rTo = map(col, 0, 255, 0, 22);
  gTo = map(col, 0, 255, 0, 21);
  bTo = map(col, 0, 255, 0, 30);
  
  //drawing gradient
 
  push();
  translate(0, 0, 0);
  for (var f = 0; f < length; f += div) {
    
    from = color(231 - bFrom, 241  - gFrom, 225);
    to = color(191 - rTo, 221 - gTo, 245 + bTo);
    interA = lerpColor(from, to, f/(length));
    
    push();
    push();
    translate(0, 0, -1000);
    ambientMaterial(to);
    rotateY(PI/2);
    plane(400, width);
    pop();
    ambientMaterial(interA);
    rotateY(PI/2);
    translate(f, 0);
    plane(div, width);
    pop();
  }
  pop();
  
}
function gradient4(x, y, z, length, width, div) {
  
  translate(x, y, z);
  col = col + gradSpeed;
  if ( col > gradMaxNum ) { 
    gradSpeed = gradSpeed * -1; //reversing speed
  } else if ( col < gradMinNum) {
    gradSpeed = gradSpeed * -1; //reversing speed
  }
  
  
  //mapings of animation
  gFrom = map(col, 0, 255, 0, 51);
  bFrom = map(col, 0, 255, 0, 43);
  rTo = map(col, 0, 255, 0, 22);
  gTo = map(col, 0, 255, 0, 21);
  bTo = map(col, 0, 255, 0, 30);
  
  //drawing gradient
 
  push();
  translate(0, 0, 0);
  for (var f = 0; f < length; f += div) {
    
    from = color(255, 145  + gFrom, 110 + bFrom);
    to = color(238 - rTo, 238 - gTo, 238 + bTo);
    interA = lerpColor(from, to, f/(length));
    
    push();
    push();
    translate(0, 0, -1000);
    ambientMaterial(to);
    rotateY(PI/2);
    plane(400, width);
    pop();
    ambientMaterial(interA);
    rotateY(PI/2);
    translate(f, 0);
    plane(div, width);
    pop();
  }
  pop();
  
}

/* COLOR SCHEMES */
function colScheme1() {
  
  var l = zoom/60;
  ambientLight(l ,l ,l);
  
  
  push();
  gradient1(-639.5, 0, 743, 815, 700, 15);
  pop();
  push();
  gradient1(639, 0, 743, 815, 700, 15);
  pop();
  push();
  rotateZ(PI/2);
  gradient1(339.5, 0, 743, 815, 1300, 15);
  pop();
  push();
  rotateZ(PI/2);
  gradient1(-339.5, 0, 743, 815, 1300, 15);
  pop();
  push();
  translate(0, 0, -370);
  ambientMaterial(244, 159, 97 + bTo);
  plane(1320, 700);
  pop();
  
  
}
function colScheme2() {
  
  var l = zoom/100;
  ambientLight(l ,l ,l);
  
  
  push();
  gradient2(-639.5, 0, 743, 815, 700, 15);
  pop();
  push();
  gradient2(639, 0, 743, 815, 700, 15);
  pop();
  push();
  rotateZ(PI/2);
  gradient2(339.5, 0, 743, 815, 1300, 15);
  pop();
  push();
  rotateZ(PI/2);
  gradient2(-339.5, 0, 743, 815, 1300, 15);
  pop();
  push();
  translate(0, 0, -370);
  ambientMaterial(to);
  plane(1320, 700);
  pop();
  
  
}
function colScheme3() {
  
  
  
  
  push();
  gradient3(-639.5, 0, 743, 815, 700, 15);
  pop();
  push();
  gradient3(639, 0, 743, 815, 700, 15);
  pop();
  push();
  rotateZ(PI/2);
  gradient3(339.5, 0, 743, 815, 1300, 15);
  pop();
  push();
  rotateZ(PI/2);
  gradient3(-339.5, 0, 743, 815, 1300, 15);
  pop();
  push();
  translate(0, 0, -370);
  ambientMaterial(to);
  plane(1320, 700);
  pop();
  
  
}
function colScheme4() {
  
  var l = zoom/140;
  ambientLight(l ,l ,l);
  
  
  push();
  gradient4(-639.5, 0, 743, 815, 700, 15);
  pop();
  push();
  gradient4(639, 0, 743, 815, 700, 15);
  pop();
  push();
  rotateZ(PI/2);
  gradient4(339.5, 0, 743, 815, 1300, 15);
  pop();
  push();
  rotateZ(PI/2);
  gradient4(-339.5, 0, 743, 815, 1300, 15);
  pop();
  push();
  translate(0, 0, -370);
  ambientMaterial(to);
  plane(1320, 700);
  pop();
  
  
}


function textWall(x, y, z, move) {
  
  spectrumWall = fftWall.analyze();
  depthWall = fftWall.getEnergy("treble");
  wallMap = map(depthWall, 0, 256, 0, 160);
  letterssMap = map(depthWall, 0, 256, 1, 1.8);
  wallMap = map(depthWall, 0, 256, 1, 150);
  dp = wallMap;
  
  push();
  translate(x, y, z);
  
  for(var n = -140; n <= 140; n += 80) {
    for(var m = -360; m <= 440; m += 80) {
      ambientMaterial(to);
      push();
      translate(m, n, 660 - move);
      scale(2.5);
      rotateY(PI);
      rotateZ(PI);
      circleShapes1(-letterssMap);
      pop();
    }
  }
  pop();
}

/* BUTTON BAR */
function commandBar (x, y) {
  
  var buttonPosY = height - height/10;
  var buttonPosoff = 40;
  var buttonPosX = width/2 - button.width/2;
  
  push();
  button.position(buttonPosX + x, buttonPosY + y);
  buttonNext.position(buttonPosX + 110 - buttonNext.width/2 + x, buttonPosY + y);
  buttonPrev.position(buttonPosX - 50 + buttonPrev.width/2 + x, buttonPosY + y);
  buttonInstruct.position(buttonPosX + 130 + x, buttonPosY + y);
  buttonReturn.position(buttonPosX - 70 + x, buttonPosY + y);
  pop();
  
}

function returnPos() {
  camx = 0;
  camy = 0;
  zoom = 900;
}





