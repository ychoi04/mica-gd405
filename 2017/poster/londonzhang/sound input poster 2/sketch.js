var mic;

function setup(){
  createCanvas(480, 720);
  mic = new p5.AudioIn();
  mic.start();
  

}
function draw(){
  background(225,0,255);
  var vol = mic.getLevel();
  line(100,100,vol*random(2000), vol*random(2000));
  line(200,100,vol*random(2000), vol*random(2000));
  line(300,100,vol*random(2000), vol*random(2000));
  line(400,100,vol*random(2000), vol*random(2000));


  line(100,200,vol*random(2000), vol*random(2000));
  line(200,200,vol*random(2000), vol*random(2000));
  line(300,200,vol*random(2000), vol*random(2000));
  line(400,200,vol*random(2000), vol*random(2000));

    
  line(100,300,vol*random(2000), vol*random(2000));
  line(200,300,vol*random(2000), vol*random(2000));
  line(300,300,vol*random(2000), vol*random(2000));
  line(400,300,vol*random(2000), vol*random(2000));

    
  line(100,400,vol*random(2000), vol*random(2000));
  line(200,400,vol*random(2000), vol*random(2000));
  line(300,400,vol*random(2000), vol*random(2000));
  line(400,400,vol*random(2000), vol*random(2000));


  line(100,500,vol*random(2000), vol*random(2000));
  line(200,500,vol*random(2000), vol*random(2000));
  line(300,500,vol*random(2000), vol*random(2000));
  line(400,500,vol*random(2000), vol*random(2000));

    
  line(100,600,vol*random(2000), vol*random(2000));
  line(200,600,vol*random(2000), vol*random(2000));
  line(300,600,vol*random(2000), vol*random(2000));
  line(400,600,vol*random(2000), vol*random(2000));


    
  console.log(vol);
    
//text
  fill(255);
  strokeWeight(vol*50);
  textSize(25);
  textFont("Graphik");

  text(" 1  Philosophy and Psychology", 40, 90);
  text(" 2  Religion", 40, 140);
  text(" 3  Social Sciences", 40, 190); 
  text(" 4  Languages", 40, 240);
  text(" 5  Science", 40, 290);
  text(" 6  Technology", 40, 340);
  text(" 7  Arts and Recreation", 40, 390);
  text(" 8  Literature", 40, 440);
  text(" 9  Geography and History", 40, 490);
  text("10 Generalities", 40, 540);
    
}