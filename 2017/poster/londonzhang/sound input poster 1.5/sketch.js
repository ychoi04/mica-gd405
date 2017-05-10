var mic;

function setup(){
  createCanvas(480, 720);
  mic = new p5.AudioIn();
  mic.start();
  

}
function draw(){
  background(0,0,255);
  var vol = mic.getLevel();
    
  ellipse(0,0,vol*random(2000), vol*random(2000));
  ellipse(100,0,vol*random(2000), vol*random(2000));
  ellipse(200,0,vol*random(2000), vol*random(2000));
  ellipse(300,0,vol*random(2000), vol*random(2000));
  ellipse(400,0,vol*random(2000), vol*random(2000));
  ellipse(500,0,vol*random(2000), vol*random(2000));
    
  ellipse(0,100,vol*random(2000), vol*random(2000));
  ellipse(100,100,vol*random(2000), vol*random(2000));
  ellipse(200,100,vol*random(2000), vol*random(2000));
  ellipse(300,100,vol*random(2000), vol*random(2000));
  ellipse(400,100,vol*random(2000), vol*random(2000));
  ellipse(500,100,vol*random(2000), vol*random(2000));

  ellipse(0,200,vol*random(2000), vol*random(2000));
  ellipse(100,200,vol*random(2000), vol*random(2000));
  ellipse(200,200,vol*random(2000), vol*random(2000));
  ellipse(300,200,vol*random(2000), vol*random(2000));
  ellipse(400,200,vol*random(2000), vol*random(2000));
  ellipse(500,200,vol*random(2000), vol*random(2000));

  ellipse(0,300,vol*random(2000), vol*random(2000));    
  ellipse(100,300,vol*random(2000), vol*random(2000));
  ellipse(200,300,vol*random(2000), vol*random(2000));
  ellipse(300,300,vol*random(2000), vol*random(2000));
  ellipse(400,300,vol*random(2000), vol*random(2000));
  ellipse(500,300,vol*random(2000), vol*random(2000));

  ellipse(0,400,vol*random(2000), vol*random(2000));  
  ellipse(100,400,vol*random(2000), vol*random(2000));
  ellipse(200,400,vol*random(2000), vol*random(2000));
  ellipse(300,400,vol*random(2000), vol*random(2000));
  ellipse(400,400,vol*random(2000), vol*random(2000));
  ellipse(500,400,vol*random(2000), vol*random(2000));

  ellipse(0,500,vol*random(2000), vol*random(2000));
  ellipse(100,500,vol*random(2000), vol*random(2000));
  ellipse(200,500,vol*random(2000), vol*random(2000));
  ellipse(300,500,vol*random(2000), vol*random(2000));
  ellipse(400,500,vol*random(2000), vol*random(2000));
  ellipse(500,500,vol*random(2000), vol*random(2000));

  ellipse(0,600,vol*random(2000), vol*random(2000));  
  ellipse(100,600,vol*random(2000), vol*random(2000));
  ellipse(200,600,vol*random(2000), vol*random(2000));
  ellipse(300,600,vol*random(2000), vol*random(2000));
  ellipse(400,600,vol*random(2000), vol*random(2000));
  ellipse(500,600,vol*random(2000), vol*random(2000));
    
  ellipse(0,700,vol*random(2000), vol*random(2000));
  ellipse(100,700,vol*random(2000), vol*random(2000));
  ellipse(200,700,vol*random(2000), vol*random(2000));
  ellipse(300,700,vol*random(2000), vol*random(2000));
  ellipse(400,700,vol*random(2000), vol*random(2000));
  ellipse(500,700,vol*random(2000), vol*random(2000));
    



    
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