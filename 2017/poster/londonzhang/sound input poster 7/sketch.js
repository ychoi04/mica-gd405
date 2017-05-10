var mic;

function setup(){
  createCanvas(480, 720);
  mic = new p5.AudioIn();
  mic.start();
  

}
function draw(){
  background(225,100,255);
  var vol = mic.getLevel();
  console.log(vol);
    
    
  fill(225);
  textSize(vol*random(2500));
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
    
//text
  fill(225);
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