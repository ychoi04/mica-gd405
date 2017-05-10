var mic;

function setup(){
  createCanvas(480, 720);
  mic = new p5.AudioIn();
  mic.start();
  

}
function draw(){
  background(225,0,0);
  var vol = mic.getLevel();
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
    
  fill(255);
  quad(30, 30, 40, 40, 50, 50, 60, 60);
  quad(60, 60, 160, 160, 120, 120, 140, 140);
  quad(120, 120, 160, 160, 20, 20, 40, 40);
  quad(320, 320, 420, 420, 450, 450, 560, 560);
  quad(0, 0, 480, 480, 120, 120, 140, 140);
  quad(120, 120, 160, 160, 20, 20, 40, 40);
  quad(10, 700, 100, 00);
    
  
    
}