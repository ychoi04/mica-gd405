var mic;

function setup(){
  createCanvas(480, 720);
  mic = new p5.AudioIn();
  mic.start();
  

}
function draw(){
  background(225,100,255);
  var vol = mic.getLevel();
    
//  triangle(random(30), random(75), random(58), random(20), random(86), random(75));
  triangle(100,0,vol*random(2000), vol*random(2000));
  triangle(200,0,vol*random(2000), vol*random(2000));
  triangle(300,0,vol*random(2000), vol*random(2000));
  triangle(400,0,vol*random(2000), vol*random(2000));
  triangle(500,0,vol*random(2000), vol*random(2000));
    
  triangle(0,100,vol*random(2000), vol*random(2000));
  triangle(100,100,vol*random(2000), vol*random(2000));
  triangle(200,100,vol*random(2000), vol*random(2000));
  triangle(300,100,vol*random(2000), vol*random(2000));
  triangle(400,100,vol*random(2000), vol*random(2000));
  triangle(500,100,vol*random(2000), vol*random(2000));

  triangle(0,200,vol*random(2000), vol*random(2000));
  triangle(100,200,vol*random(2000), vol*random(2000));
  triangle(200,200,vol*random(2000), vol*random(2000));
  triangle(300,200,vol*random(2000), vol*random(2000));
  triangle(400,200,vol*random(2000), vol*random(2000));
  triangle(500,200,vol*random(2000), vol*random(2000));

  triangle(0,300,vol*random(2000), vol*random(2000));    
  triangle(100,300,vol*random(2000), vol*random(2000));
  triangle(200,300,vol*random(2000), vol*random(2000));
  triangle(300,300,vol*random(2000), vol*random(2000));
  triangle(400,300,vol*random(2000), vol*random(2000));
  triangle(500,300,vol*random(2000), vol*random(2000));

  triangle(0,400,vol*random(2000), vol*random(2000));  
  triangle(100,400,vol*random(2000), vol*random(2000));
  triangle(200,400,vol*random(2000), vol*random(2000));
  triangle(300,400,vol*random(2000), vol*random(2000));
  triangle(400,400,vol*random(2000), vol*random(2000));
  triangle(500,400,vol*random(2000), vol*random(2000));

  triangle(0,500,vol*random(2000), vol*random(2000));
  triangle(100,500,vol*random(2000), vol*random(2000));
  triangle(200,500,vol*random(2000), vol*random(2000));
  triangle(300,500,vol*random(2000), vol*random(2000));
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