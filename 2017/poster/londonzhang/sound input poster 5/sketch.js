var mic;

function setup(){
  createCanvas(480, 720);
  mic = new p5.AudioIn();
  mic.start();
  

}
function draw(){
  background(225,100,255);
  var vol = mic.getLevel();
    
  triangle(vol*random(30), vol*random(75), vol*random(58), vol*random(20), vol*random(86), vol*random(75));

  triangle(vol*random(600), vol*random(1500), vol*random(580), vol*random(200), vol*random(860), vol*random(750));
    
  triangle(vol*random(6000), vol*random(1500), vol*random(5800), vol*random(2000), vol*random(8600), vol*random(7500));
 

    
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