var sceneNum = 0;
var buttonNext;
var body;
var scl = 40;

var face;
var anim;

function preload() {
  anim = loadAnimation("images/close.png",
    "images/open.png");
}

function setup() {
    createCanvas(400, 400);
    frameRate(4);
    
    face = createSprite(200, 300);
    face.addAnimation("default", anim);
    
    buttonNext=createButton('Next');
    buttonNext.position(180, 420);
    buttonNext.mousePressed(nextScene);   
    body = createSprite(scl/2,scl/2, scl-1, scl-1);
    body.shapeColor = color(245,235,130);
    
}

function draw() {
  background(235, 200, 200);
    if (sceneNum == 0) {
		Cover();
	}else if (sceneNum == 1){
        Instruction();
    }else if (sceneNum == 2){
        Intro();
    }else if (sceneNum == 3) {
        LEVEL1();  
	}else if (sceneNum == 4) {
        Intro2();  
	}else if (sceneNum == 5) {
        LEVEL2();  
	}else if (sceneNum == 6) {
        Intro3();  
	}else if (sceneNum == 7) {
        LEVEL3();  
    }
}

function nextScene() {
    sceneNum++;
}

function Cover(){
    background(245, 235, 130);
    fill(150);
    textFont("Gotham");
    textStyle(BOLD);
    textAlign(CENTER);
    textSize(60);
    text("FONTS\nGLUTTER", width/2,height/2-70);
    
    face.position.x = width/2-10;
    face.position.y = 300;
    drawSprites();
}

function Instruction(){
      noStroke();
      fill(0,200);
      rect(0,0,width,height);
    
    fill(255);
    textFont("Gotham");
    textStyle(BOLD);
    textAlign(LEFT);
    textSize(30);
    text("Instruction", 50, 70);
    
    
    noStroke();
    fill(245, 235, 130);
    rect(50, 100, scl, scl);
    fill(255);
    textFont("Gotham");
    textStyle(NORMAL);
    textAlign(LEFT);
    textSize(15);
    text("It's you.", 100, 125);
    
    noStroke();
    fill(120, 165, 250);
    rect(50, 150, scl, scl);
    fill(255);
    textFont("Gotham");
    textStyle(NORMAL);
    textAlign(LEFT);
    textSize(15);
    text("It's your food.", 100, 175);
    
    noStroke();
    fill(150);
    rect(50, 200, scl, scl);
    fill(255);
    textFont("Gotham");
    textStyle(NORMAL);
    textAlign(LEFT);
    textSize(15);
    text("Don't hit it. It's a wall.", 100, 225);
    
    fill(255);
    textFont("Gotham");
    textStyle(NORMAL);
    textAlign(LEFT);
    textSize(15);
    text("You are the yellow square and you need to eat the blue one. You can control your movement by the up, down, left and right arrow keys. Don't bump into the wall. It''ll hurt you.", 50, 255, 300, 200);
}

function Intro(){
    background(245, 235, 130);
    fill(100);
    textFont("Gotham");
    textStyle(BOLD);
    textSize(50);
    text('Level 1', 100, 200);
}

function Intro2(){
    background(245, 235, 130);
    fill(100);
    textFont("Gotham");
    textStyle(BOLD);
    textSize(50);
    text('Level 2', 100, 200);
}

function Intro3(){
    background(245, 235, 130);
    fill(100);
    textFont("Gotham");
    textStyle(BOLD);
    textSize(50);
    text('Level 3', 100, 200);
}

function LEVEL1(){
    background(235, 200, 200);
    face.remove();
    
    //walls
    wall1 = createSprite(scl*4.5, scl*3.5, scl*3, scl-1);
    wall1.shapeColor = color(150);
    wall2 = createSprite(scl*2.5, scl*3.5, scl, scl*3-1);
    wall2.shapeColor = color(150);
    wall3 = createSprite(scl*7.5, scl*8.5, scl*9-1, scl-1);
    wall3.shapeColor = color(150);
    wall4 = createSprite(scl*8.5, scl, scl-1, scl*6-1);
    wall4.shapeColor = color(150);
    
    food = createSprite(scl*9.5, scl*0.5, scl-1, scl-1);
    food.shapeColor = color(120, 165, 250);
    
  body.position.x = constrain(body.position.x, 0 + scl/2, width - scl/2);
  body.position.y = constrain(body.position.y, 0 + scl/2, height - scl/2);
  body.collide(wall1);
  body.collide(wall2);
  body.collide(wall3);
  body.collide(wall4);
  drawSprites();
    
  if (body.collide(food)){
      food.remove();
      
      noStroke();
      fill(0,200);
      rect(0,0,width,height);
      
      textAlign(LEFT);
      textSize(30);
      textFont("AGaramond");
      fill(255);
      textStyle(BOLD);
      text("You ate Garamond!", 32, height/2-100);
      textSize(20);
      textStyle(NORMAL);
      textAlign(LEFT);
      text("abcdefghijklmnopqrstuvwxyz\nABCDEFGHIJKLMNOPQR\nSTUVWXYZ\n!@#$%^&*():<>?", 32, height/2, 300, 200);
      textSize(10);
      text("Garamond is a group of many old-style serif typefaces, originally those designed by Parisian craftsman Claude Garamond and other 16th century French engravers, and now many modern revivals.", 32, height/2-50, 300, 200);
  }
    food.remove();
    wall1.remove();
    wall2.remove();
    wall3.remove();
    wall4.remove();
}

function LEVEL2(){
    background(235, 200, 200);
    
    //walls
    wall1 = createSprite(scl*2.5, scl*7.5, scl*5, scl-1);
    wall1.shapeColor = color(150);
    wall2 = createSprite(scl*2.5, scl*2.5, scl, scl*5-1);
    wall2.shapeColor = color(150);
    wall3 = createSprite(scl*7.5, scl*8.5, scl-1, scl*6-1);
    wall3.shapeColor = color(150);
    wall4 = createSprite(scl*8.5, scl*2.5, scl*6-1, scl-1);
    wall4.shapeColor = color(150);
    
    food = createSprite(scl*1.5, scl*0.5, scl-1, scl-1);
    food.shapeColor = color(120, 165, 250);
    
  body.position.x = constrain(body.position.x, 0 + scl/2, width - scl/2);
  body.position.y = constrain(body.position.y, 0 + scl/2, height - scl/2);
  body.collide(wall1);
  body.collide(wall2);
  body.collide(wall3);
  body.collide(wall4);
  drawSprites();
    
  if (body.collide(food)){
      food.remove();
      
      noStroke();
      fill(0,200);
      rect(0,0,width,height);
      
      textAlign(LEFT);
      fill(255);
      textFont("DINPro");
      textSize(20);
      textStyle(NORMAL);
      text("abcdefghijklmnopqrstuvwxyz\nABCDEFGHIJKLMNOPQR\nSTUVWXYZ\n!@#$%^&*():<>?", 32, height/2+50);
      textSize(30);
      textFont("DINPro");
      textStyle(BOLD);
      fill(255);
      text("You ate DIN!", 32, height/2-100);
      fill(255);
      textFont("DINPro");
      textStyle(NORMAL);
      textSize(10);
      text("Univers is the name of a sans-serif typeface designed by Adrian Frutiger in 1954. Classified as a neo-grotesque typeface, one based on the model of the 1898 typeface Akzidenz-Grotesk, it was notable on its launch for its availability in a comprehensive but consistent range of weights and styles.", 32, height/2-50, 300, 200);    
  }
    
    food.remove();
    wall1.remove();
    wall2.remove();
    wall3.remove();
    wall4.remove();
}

function LEVEL3(){
    background(235, 200, 200);
    
    //walls
    wall1 = createSprite(scl*5.5, scl*2.5, scl, scl*5-1);
    wall1.shapeColor = color(150);
    wall2 = createSprite(scl*3.5, scl*6.5, scl*9-1, scl-1);
    wall2.shapeColor = color(150);
    wall3 = createSprite(scl*1.5, scl*4.5, scl-1, scl*5-1);
    wall3.shapeColor = color(150);
    wall4 = createSprite(scl*5.5, scl*9.5, scl-1, scl*3-1);
    wall4.shapeColor = color(150);
    
    food = createSprite(scl*0.5, scl*9.5, scl-1, scl-1);
    food.shapeColor = color(120, 165, 250);
    
  body.position.x = constrain(body.position.x, 0 + scl/2, width - scl/2);
  body.position.y = constrain(body.position.y, 0 + scl/2, height - scl/2);
  body.collide(wall1);
  body.collide(wall2);
  body.collide(wall3);
  body.collide(wall4);
  drawSprites();
    
  if (body.collide(food)){
      food.remove();
      
      noStroke();
      fill(0,200);
      rect(0,0,width,height);
      
      textAlign(LEFT);
      textSize(30);
      textFont("Consolas");
      fill(255);
      textStyle(BOLD);
      text("You ate Consolas!", 32, height/2-100);
      textSize(20);
      textStyle(NORMAL);
      textAlign(LEFT);
      text("abcdefghijklmnopqrstuvwxyz\nABCDEFGHIJKLMNOPQR\nSTUVWXYZ\n!@#$%^&*():<>?", 32, height/2+30);
      textSize(10);
      text("Garamond is a group of many old-style serif typefaces, originally those designed by Parisian craftsman Claude Garamond and other 16th century French engravers, and now many modern revivals.", 32, height/2-50, 300, 200);
  }
    food.remove();
    wall1.remove();
    wall2.remove();
    wall3.remove();
    wall4.remove();
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        body.setSpeed(scl, 0);
    } else if(keyCode === DOWN_ARROW){
        body.setSpeed(scl, 90);
    } else if(keyCode === LEFT_ARROW){
        body.setSpeed(scl, 180);
    } else if(keyCode === UP_ARROW){
        body.setSpeed(scl, 270);
    } return false;
}