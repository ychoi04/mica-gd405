var mic;

function setup(){
  createCanvas(480, 720);
  mic = new p5.AudioIn();
  mic.start();
  

}
function draw(){
  background(225,100,255);
  var vol = mic.getLevel();
    
  ellipse(0,0,vol*random(2000), vol*random(2000));
  ellipse(0,100,vol*random(2000), vol*random(2000));
  ellipse(0,200,vol*random(2000), vol*random(2000));
  ellipse(0,300,vol*random(2000), vol*random(2000));
  ellipse(0,400,vol*random(2000), vol*random(2000));
  ellipse(0,500,vol*random(2000), vol*random(2000));
  ellipse(0,600,vol*random(2000), vol*random(2000));
  ellipse(0,700,vol*random(2000), vol*random(2000));
  ellipse(0,800,vol*random(2000), vol*random(2000));
    
  ellipse(100,0,vol*random(2000), vol*random(2000));
  ellipse(200,0,vol*random(2000), vol*random(2000));
  ellipse(300,0,vol*random(2000), vol*random(2000));
  ellipse(400,0,vol*random(2000), vol*random(2000));
  ellipse(500,0,vol*random(2000), vol*random(2000));
  ellipse(600,0,vol*random(2000), vol*random(2000));
  ellipse(700,0,vol*random(2000), vol*random(2000));
  ellipse(800,0,vol*random(2000), vol*random(2000));
  ellipse(900,0,vol*random(2000), vol*random(2000));
    
  ellipse(480,0,vol*random(2000), vol*random(2000));
  ellipse(480,100,vol*random(2000), vol*random(2000));
  ellipse(480,200,vol*random(2000), vol*random(2000));
  ellipse(480,300,vol*random(2000), vol*random(2000));
  ellipse(480,400,vol*random(2000), vol*random(2000));
  ellipse(480,500,vol*random(2000), vol*random(2000));
  ellipse(480,600,vol*random(2000), vol*random(2000));
  ellipse(480,700,vol*random(2000), vol*random(2000));
  ellipse(480,800,vol*random(2000), vol*random(2000));
    
  ellipse(100,720,vol*random(2000), vol*random(2000));
  ellipse(200,720,vol*random(2000), vol*random(2000));
  ellipse(300,720,vol*random(2000), vol*random(2000));
  ellipse(400,720,vol*random(2000), vol*random(2000));
  ellipse(500,720,vol*random(2000), vol*random(2000));
  ellipse(600,720,vol*random(2000), vol*random(2000));
  ellipse(700,720,vol*random(2000), vol*random(2000));

    
 

    
  console.log(vol);
    
//text
  fill(225);
//  fillColor(200);
  textSize(25);
  textFont("Graphik");

  text("1 Philosophy and Psychology", 40, 90);
  text("2 Religion", 40, 140);
  text("3 Social Sciences", 40, 190); 
  text("4 Languages", 40, 240);
  text("5 Science", 40, 290);
  text("6 Technology", 40, 340);
  text("7 Arts and Recreation", 40, 390);
  text("8 Literature", 40, 440);
  text("9 Geography and History", 40, 490);
  text("10 Generalities", 40, 540);
    
    




//6 Science
//7 Technology (Applied Sciences)
//8 Arts and Recreation
//9 Literature
//10 Geography and History
    
    
    
}