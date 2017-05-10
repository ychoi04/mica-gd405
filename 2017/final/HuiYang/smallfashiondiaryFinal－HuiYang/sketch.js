//bar
var button;
//var slider;
var nameInput1;
var nameInput2;
var nameInput3;
var nameInput4;
var nameInput5;


var face;
var body;
var pg;
// Constants
var Y_AXIS = 1;
var X_AXIS = 2;
var c1, c2;

//hair
var ha
//the number
var n ; //draw eye
var n1 ;  
var n2 ;   
var n3 ;   
var n4 ; 
var n5 ; 
var n6 ; 
var n7 ; 

//mask& pattern
var img;
var img2;
var imgClone;
var imgClone2;
var mk;
var mk2;
 
function setup(){
  createCanvas(windowWidth, windowHeight);
  
  pg = createGraphics(100, 100);  //createGraphics
  rectMode(CENTER);
  
    button = createButton("redraw");
    button.position(windowWidth/1.2, windowHeight/1.05);
    button.mousePressed(redraw);
  
  
//      slider = createSlider(10, 300, 86);
//      slider.position(windowWidth/1.3, 800);
 nameInput1 = createInput('Small');
      nameInput1.position(windowWidth-200, windowHeight/1.1);
      nameInput1.changed(updateText);
      
      nameInput2 = createInput('Fashion');
      nameInput2.position(windowWidth-200, windowHeight/1.1-30);
      nameInput2.changed(updateText);
    
      nameInput3 = createInput('Diary');
      nameInput3.position(windowWidth-200, windowHeight/1.1-60);
      nameInput3.changed(updateText);     
    
    //mask
   
    

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
    
     
}


function mousePressed() {
   n = (random(0,1));
    n1 = (random(0,1));
    n2 = (random(0,1));
    n3 = (random(0,1));
    n4 = (random(0,1));
    n5 = (random(0,1));
    n6 = (random(0,1));
    n7 = (random(0,1));
    
   redraw();
 }
function updateText() {
  nameInput.value();
 
}

function Face(x,y,w,h,earh){
    this.x=x;
    this.y=y;
    // w, h for the whole face
    this.w=w;
    this.h=h;
    this.earh=earh;
    
this.drawFace=function(){
  noStroke();
fill(255);
  ellipse(this.x, this.y, this.w, this.h);
  //ears  
  ellipse(this.x-100, this.y+this.earh, 30, 30);    
  ellipse(this.x+100, this.y+this.earh, 30, 30);        
  stroke(1);
};
    
this.drawEyes=function(eyexOff,eyeyOff,eyeSize,ef,ec1,ec2,ec3,ew){
    //draw glasses
     if(0<= n <= 0.1){
    fill(0);
    ellipse(this.x-eyexOff,this.y+eyeyOff, 25, 5);
    ellipse(this.x+eyexOff,this.y+eyeyOff, 25, 5);
    
  } else if(0.1<= n <=0.2){
    
    fill(0);
    ellipse(this.x-eyexOff,this.y+eyeyOff, 25, 5);
    ellipse(this.x+eyexOff,this.y+eyeyOff, 25, 5);
    }else if(0.2<= n <=0.3){
    fill(0);
      //eyes
    ellipse(this.x-eyexOff,this.y+eyeyOff, 5, 10);
    ellipse(this.x+eyexOff,this.y+eyeyOff, 5, 10);
    fill(ec1,ec2,ec3,80);
    stroke(ec1,ec2,ec3);
    strokeWeight(ew);
    rect(this.x-eyexOff,this.y+eyeyOff, eyeSize, eyeSize);
    rect(this.x+eyexOff,this.y+eyeyOff, eyeSize, eyeSize);
    line(this.x-eyexOff+eyeSize/2,this.y+eyeyOff,this.x+eyexOff-eyeSize/2,this.y+eyeyOff)
  }  else if(0.3<= n <=0.5){
    //close eyes
    arc(this.x-eyexOff,this.y+eyeyOff, eyeSize, eyeSize, PI/6, PI/1.2);
    arc(this.x+eyexOff,this.y+eyeyOff, eyeSize, eyeSize, PI/6, PI/1.2);
      
  }   else if(0.5<= n <=0.6){
   
    stroke(ec1,ec2,ec3);  
    line(this.x-eyexOff,this.y+eyeyOff,this.x+eyexOff,this.y+eyeyOff)
    fill(ef);
    noStroke();
    ellipse(this.x-eyexOff,this.y+eyeyOff, eyeSize, eyeSize);
    ellipse(this.x+eyexOff,this.y+eyeyOff, eyeSize, eyeSize);
  } else if(0.6<= n <=0.8){
      
    stroke(ec1,ec2,ec3);  
    line(this.x-eyexOff,this.y+eyeyOff,this.x+eyexOff,this.y+eyeyOff);
    noFill();
    strokeWeight(random(1,8))  
    arc(this.x-eyexOff,this.y+eyeyOff, eyeSize, eyeSize, PI,0);
    arc(this.x+eyexOff,this.y+eyeyOff, eyeSize, eyeSize, PI,0);
     fill(ef);  
     noStroke();  
    ellipse(this.x-eyexOff,this.y+eyeyOff, eyeSize, eyeSize);
    ellipse(this.x+eyexOff,this.y+eyeyOff, eyeSize, eyeSize);  
      
  }else if(0.8<= n <=1){
      strokeWeight(random(1,5))
    arc(this.x-eyexOff,this.y+eyeyOff+10, eyeSize/2, eyeSize/2, PI + PI/6, PI* 1.8);
    arc(this.x+eyexOff,this.y+eyeyOff+10, eyeSize/2, eyeSize/2, PI + PI/6, PI* 1.8);
      blendMode(MULTIPLY); 
     fill(ef);
    stroke(ec1,ec2,ec3);
    strokeWeight(ew);
    line(this.x-eyexOff+eyeSize/2,this.y+eyeyOff,this.x+eyexOff-eyeSize/2,this.y+eyeyOff)
    ellipse(this.x-eyexOff,this.y+eyeyOff, eyeSize, eyeSize);
    ellipse(this.x+eyexOff,this.y+eyeyOff, eyeSize, eyeSize);
       blendMode(NORMAL); 
} 
   
    
    
    
    
    
    
    
    };
  
this.drawNose=function(nx1,nx2,nx3){
    triangle(this.x, this.y - nx1, this.x + nx2, this.y + nx3,         this.x -     nx2, this.y + nx3);
    };
this.drawMouth=function(mx2,mw, mh){
    noStroke();
    ellipse (this.x, this.y + mx2, mw, mh);
    };
this.drawfacee=function(bx1, bx2, bx3, bt){
    fill(255,200,200,bt);
    blendMode(MULTIPLY);
    ellipse(this.x-bx1, bx3, bx2, bx2);
    ellipse(this.x+bx1, bx3,  bx2, bx2);
    };
  
this.drawHair=function(h1, h2, k, hp, hd, ha, hp2){
   if(0<= n1 <= 0.01){
    fill(0);
    arc (windowWidth/2.4, hp2,hd,hd, PI/2, PI + PI/2);
    arc(windowWidth/1.7, hp2,hd,hd, PI + PI/2, PI/2);
   
    
               }if(0.01<= n1 <= 0.2){
                   
    fill(0);
    for (var k = 0; k < ha; k += 15) {
    push();
    translate(windowWidth/2.5, hp2);
    rotate( radians(k) ); 
    ellipse(0,40,hd,hd);
    pop();
   }
    for (var k = 0; k < ha; k += 15) {
     push();
    translate(windowWidth/1.6, hp2);
    rotate( radians(k) ); 
    ellipse(hp,40,hd,hd);
     pop();
   }
      
                }else if(0.2<= n1 <=0.3){
                    
    fill(0);
    ellipse(windowWidth/2.7, hp2,hd,hd);
    ellipse(windowWidth/1.6, hp2,hd,hd);
      
              }else if(0.3<= n1 <=0.4){
                    
    fill(0);
    ellipse(this.x-100, hp2,hd,hd);
    ellipse(windowWidth/2.4, hp2 + 30,hd,hd);              
    ellipse(this.x+100, hp2,hd,hd);
    ellipse(windowWidth/1.7, hp2 + 30,hd,hd);
      
              }else if(0.4<= n1 <=0.6){
                    
   fill(0);
    arc (windowWidth/2.4, hp2,3 * hd,3 * hd, PI/2, PI + PI/2);
    arc(windowWidth/1.7, hp2,3 * hd,3 * hd, PI + PI/2, PI/2);
      
             }else if(0.6<= n1 <=1){
                    
    fill(0);
    for (var k = 170; k < 500; k += hd) {             
    arc (windowWidth/2.4, k , hd, hd, PI/2, PI + PI/2);
    arc(windowWidth/1.7, k, hd, hd, PI + PI/2, PI/2);     
    
     }
         
   
  }
   
    };
    
    
    
    
    
  this.drawHat=function(ha1, ha2, hc1, hc2, hc3, hbw, hbh){
//    fill(hc1, hc2, hc3);
       
    noStroke();
    //rect(this.x, this.y-90,350,30);
      
    if(0<= n2 <= 0.01){
    arc(this.x, this.y-20, this.w, this.h, PI, 2 * PI, CHORD);
    fill(hc1, hc2, hc3);    
    arc(this.x, this.y-50, this.w, this.h, PI, 2 * PI, CHORD);    
    rect(this.x,this.y-60, this.w * random(1, 4) , this.h/10);
        
  }  else if(0.01<= n2 <=0.1){
      
     arc(this.x, this.y-20, this.w + 30, this.h, PI, 2 * PI, CHORD); 
      }else if(0.1<= n2 <=0.2){
      
    arc(this.x, this.y-20, this.w, this.h, PI, 2 * PI, CHORD);
    fill(hc1, hc2, hc3);    
    arc(this.x, this.y-50, this.w, this.h, PI, 2 * PI, CHORD);    
    rect(this.x,this.y-60, this.w * random(1, 4) , this.h/10);
          
      }else if(0.2<= n2 <=0.4){
      
    fill(0);
    arc(this.x, this.y-20, this.w, this.h, PI, 2 * PI, CHORD);
      
    fill(hc1, hc2, hc3);
    triangle(this.x- ha1/2, this.y-80, this.x, this.y-random(200, 250), this.x + ha1/2, this.y-80);
      
               } else if(0.4<= n2 <=0.6){
      
      //rect hat
    fill(0);
    arc(this.x, this.y, this.w, this.h, PI, 2 * PI, CHORD);
    fill(hc1, hc2, hc3);
    rect(this.x,this.y-100,random(90, 200),ha2/2-30);
    rect(this.x,this.y-60,300,20);
      
             } else if(0.6<= n2 <=1){
      //
    fill(hc1, hc2, hc3);
    ellipse (this.x, this.y-200, hbw, hbh);
    arc(this.x, this.y-90, ha1, ha2, PI, 2 * PI, CHORD);
    fill(0);
    quad(this.x- ha1/2, this.y-90, this.x + ha1/2, this.y-90, this.x + ha1/2+20, this.y- 20, this.x- ha1/2-20, this.y-20);
    fill(hc1, hc2, hc3);   
     rect(this.x,this.y-60,300,20);    
      
  } 

     
    
  };
  
  
 this.drawScarf = function(sc1, sc2, sc3, sw, sl){
   fill(sc1, sc2, sc3);
   noStroke();
   rect(this.x, this.y-400, sw, sl);
 };
  
    }


//another one
function Body (x1,y1,w1,h1, bc1, bc2, bc3, bs, sy, ps){
    this.x1=x1;
    this.y1=y1;
    // w, h for the whole face
    this.w1=w1;
    this.h1=h1;
    this.bc1 = bc1;
    this.bc2 = bc2;
    this.bc3 = bc3;
    this.bs = bs;
    this.sy = sy;
    this.ps = ps
    
this.drawBody=function(x1,y1,w1,h1, bc1, bc2, bc3, bs, sy,ps){
//    fill(0);
//    rect(width/2,height/2,300,500), 
    if(0<= n3 <= 0.01){

  fill(this.bc1, this.bc2, this.bc3); 
  blendMode(MULTIPLY);      
  triangle(this.x1-this.ps/3,height ,this.x1,height/3,this.x1+this.ps/3,height)        
  blendMode(NORMAL);     
  ellipse(this.x1, this.y1, this.w1/2, this.h1);
        
  
  }else if(0.01<= n3 <=0.1){
        
      fill(this.bc1, this.bc2, this.bc3); 
      blendMode(NORMAL);
      ellipse(this.x1, this.y1, this.w1, this.h1);
      //sleeves
      blendMode(NORMAL);
      
      ellipse(windowWidth/2 - 300,500,this.bs,this.bs);
      ellipse(windowWidth/2 + 300,500,this.bs,this.bs);

        
                  }else if(0.1<= n3 <=0.2){
    
  fill(this.bc1, this.bc2, this.bc3); 
  blendMode(MULTIPLY);      
  triangle(this.x1-this.ps/2,height ,this.x1,height/3,this.x1+this.ps/2,height)        
  blendMode(NORMAL);     
  ellipse(this.x1, this.y1, this.w1/1.5, this.h1);  
                    
                  }else if(0.2<= n3 <=0.3){
        
     blendMode(NORMAL);
     rect(this.x1, this.y1, this.w1/2, this.h1-50);   
     for (var j = 0; j <= this.y1; j += random(10,60)) {
     stroke(10);
     fill(this.bc1, this.bc2, this.bc3);
     stroke(this.bc1, this.bc2, this.bc3);
     line(this.x1-this.w1/4,j,this.x1+this.w1/4,j)
      
     }

      //sleeves
      blendMode(NORMAL);
      ellipse(this.x1-this.w1/4,this.y1-this.h1/3 , this.bs,this.bs);
      ellipse(this.x1+this.w1/4,this.y1-this.h1/3  ,this.bs,this.bs);

        
                }else if(0.3<= n3 <=0.4){
        
      
       noStroke();
       strokeWeight(1,25);              
      img.fill(random(0, 255),random(0, 255),random(0, 255));
      img.stroke(random(0,255));
      //big ellipse
      img.ellipse(0,0, 1800, 1800);
                 
//     blendMode(MULTIPLY);
     for (var i = 0; i <= width/2; i += random(0,60)) {
     for (var i = 0; i <= width/2; i += random(0,60)){

     img.fill(this.bc1, this.bc2, this.bc3);
     img.strokeWeight(4,25);     
     img.rect(i, i, this.ps, this.ps);    
     blendMode(NORMAL);     
      } 
     }       
                    
  mk = createGraphics(250, 190);
  mk.fill(255);
  //ellipse mask in rect mask
 
	mk.ellipse(125, 220, random(200, 300), 400);
	
	( imgClone = img.get() ).mask( mk.get() );
        
  image(imgClone, width/4, 200);   
  blendMode(NORMAL);      
                }else if(0.4<= n3 <=0.5){
        
      
       noStroke();
                    
      img.fill(random(0, 255),random(0, 255),random(0, 255));
      img.stroke(random(0,255));
      //big ellipse
      img.ellipse(0,0, 1800, 1800);
                 
     for (var i = 0; i <= width/2; i += 50) {
     
     img.strokeWeight(1,25); 
     img.stroke(this.bc1, this.bc2, this.bc3);
     img.line(i, 0,i, height);    
     
     }       
                    
  mk = createGraphics(250, 190);
  mk.fill(255);
  //ellipse mask in rect mask
 
	mk.ellipse(125, 220, random(200, 300), 400);
	
	( imgClone = img.get() ).mask( mk.get() );
        
  image(imgClone, width/4, 200);   
  blendMode(NORMAL);      
                }else if(0.5<= n3 <=0.6){    
        
      noStroke();
      img.fill(0);
      img.stroke(random(0,255), random(0,255),random(0,255));
      //big ellipse
      img.ellipse(0,0, 1800, 1800);
     
     for (var j = 0; j <= width; j += random(10,60)) {
     for (var k = 0; k <= width; k += random(10,60)) {

     img.fill(this.bc1, this.bc2, this.bc3);
     img.ellipse(j, k, this.ps, this.ps);
      } 
     }
  mk = createGraphics(250, 190);
  mk.fill(255);
  //ellipse mask in rect mask
 
	mk.ellipse(125, 220, random(200, 300), 400);
	
	( imgClone = img.get() ).mask( mk.get() );
        
  image(imgClone, width/4, 200);   
          
                }else if(0.6<= n3 <=0.7){
        
  noStroke();
  img.fill(0);
  img.stroke(random(0,255),random(0,255),random(0,255));
  //big ellipse
  img.ellipse(0,0, 1800, 1800);
     
     for (var j = 0; j <= width; j += random(10,60)) {
     for (var k = 0; k <= width; k += random(10,60)) {

     img.fill(this.bc1, this.bc2, this.bc3);
     img.ellipse(j, k, 25, 25);
      } 
     }
  mk = createGraphics(250, 190);
  mk.fill(this.bc1, this.bc2, this.bc3);
  //ellipse mask in rect mask
 
	mk.ellipse(125, 220, random(200, 300), 400);
	
	( imgClone = img.get() ).mask( mk.get() );
        
  image(imgClone, width/4, 200);   
   
                }else if(0.7<= n3 <=0.8){
        
  noStroke();
  img.fill(random(0,255),random(0,255),random(0,255));
  //big ellipse
  img.ellipse(0,0, 1800, 1800);
     
     for (var j = 0; j <= width; j += random(10,60)) {
     for (var k = 0; k <= width; k += random(10,60)) {
//     img.noStroke();
           
     img.stroke(this.bc1, this.bc2, this.bc3);     
     img.strokeWeight(random(0,10));     
     img.fill(this.bc1, this.bc2, this.bc3);
     img.ellipse(j, k, random(0,50), (0,50));
            
      } 
     }
  mk = createGraphics(random(200,250), 190);
  mk.fill(255);
  //ellipse mask in rect mask
 
	mk.ellipse(125, 220, random(200, 300), 400);
	
	( imgClone = img.get() ).mask( mk.get() );
        
  image(imgClone, width/4, 200);
        
    blendMode(MULTIPLY);    
    rect(0, 0, 70, random(200,300)); 
        
                       }else if(0.8<= n3 <=1){
        
          noStroke();
          img.fill(random(0, 255),random(0, 255),random(0, 255));
          img.stroke(random(0,255),random(0,255),random(0,255));
          //big ellipse
          img.ellipse(0,0, 1800, 1800);

             for (var j = 0; j <= width; j += 60) {
             for (var k = 0; k <= width; k += 60) {

             img.fill(this.bc1, this.bc2, this.bc3);
             img.ellipse(j, k, 25, 25);
              } 
             }
          mk = createGraphics(250, 190);
          mk.fill(this.bc1, this.bc2, this.bc3);
          //ellipse mask in rect mask

            mk.ellipse(125, 220, random(200, 300), 400);

            ( imgClone = img.get() ).mask( mk.get() );

          image(imgClone, width/4, 200);   
            }  
    
    
    
  //arm left    
  blendMode(BURN);
  push(); 
  translate(windowWidth/3.1,windowHeight/1.3);
  rotate(-PI/random(0,30));
//  strokeCap(ROUND);    
//  stroke(0);
//  strokeWeight(12);
  rect(0, 0, 70, random(200,300));
  translate(500,700);
  pop(); 
  //arm right  
  push(); 
  translate(windowWidth/1.6,windowHeight/1.3);
  rotate(-PI/random(-12,9));
  rect(0, 0, 70, random(200,300));
  pop(); 
   blendMode(NORMAL);
  }

}


function Pattern(bx, ex, by, ey, sp){
  this.beginX = bx;
  this.endX = ex;
  this.beginY = by;
  this.endY = ex;
  this.spacingY = sp;
  this.col
  
  this.setColor = function(c){
    this.col = c;
  }
  
  
  this.display = function(){
    stroke(this.col);
    strokeWeight(random(2,10));
    for(var y = this.beginY + 300; y<= this.endY-random(120,300); y +=  this.spacingY){
    line(this.beginX , y , this.endX , y );
    
   }
 }
}

function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
        
    }
  }
}

function draw(){
   
    
   img = createGraphics(random(600, 800), random(600, 800));
    
  // Define colors(gradient )
  c1 = color(random(0,255),random(0,255), random(0,255));
  c2 = color(random(0,255), random(0,255), random(0,255));
  c3 = color(random(0,255), random(0,255), random(0,255));
  
  // Background
  setGradient(0, 0, width/2, height, c1, c2, X_AXIS);
  setGradient(width/2, 0, width/2, height, c2, c3, X_AXIS);

    
    
  //bac pattern
    
    strokeWeight(random(0,30))
    if(0<= n5 <= 0.01){
      for (var i = 0; i <= width; i += 50) {
    for (var j = 0; j <= width; j += 50) {
    fill(random(0,255), random(0,255), random(0,255));
    ellipse(j, i, 25, 25);
        
    }
  }
      } else if(0.01<= n5 <=0.1){
      for (var i = 0; i <= width; i += 50) {
    for (var j = 0; j <= width; j += 50) {
    fill(random(0,255), random(0,255), random(0,255));
    ellipse(j, i, 25, 25);
        
    }
  }
      }else if(0.1<= n5 <=0.2){     
    fill(random(0,255), random(0,255), random(0,255));         
    for (var i = 0; i <= width; i += random(0,80)) {
    for (var j = 0; j <= width; j += random(0,80)) {
    
    rect(j, i, random(0,80), random(0,80));
        
    }
  }
      }else if(0.2<= n5 <=0.3){
    fill(random(0,255), random(0,255), random(0,255));          
    for (var i = 0; i <= width; i += 50) {
    for (var j = 0; j <= width; j += 50) {
   
    ellipse(j, i, 25, 25);
        
    }
  }
      }else if(0.3<= n5 <=0.4){
    fill(random(0,255), random(0,255), random(0,255));          
    for (var i = 0; i <= width; i += random(0,95)) {
//    for (var j = 0; j <= width; j += random(0,95)) {
    line(i, 0,i, height);
        
//    }
  }
      }else if(0.4<= n5 <=0.5){
    for (var i = 0; i <= width; i += 50) {
    for (var j = 0; j <= width; j += 50) {
    fill(random(0,255), random(0,255), random(0,255));
    rect(j, i, 25, 25);
        
    }
  }
      }else if(0.5<= n5 <=0.6){
    fill(random(0,255), random(0,255), random(0,255));      
    for (var i = 0; i <= width; i += 50) {
    for (var j = 0; j <= width; j += 50) {
    
    rect(j, i, 25, 25);
        
    }
  }
      }else if(0.6<= n5 <=0.7){     
    for (var i = 0; i <= width; i += random(0,80)) {
    for (var j = 0; j <= width; j += random(0,80)) {
    fill(random(0,255), random(0,255), random(0,255));   
    rect(j, i, random(0,80), random(0,80));
        
    }
  }
      }else if(0.7<= n5 <=0.8){   
    fill(random(0,255), random(0,255), random(0,255));     
    for (var i = 0; i <= width; i += random(0,80)) {
    for (var j = 0; j <= width; j += random(0,80)) {
    
    rect(j, i, random(0,80), random(0,80));
        
    }
  }
      }else if(0.8<= n5 <=0.9){
    
    fill(random(0,255), random(0,255), random(0,255));          
    for (var i = 0; i <= width; i += random(0,80)) {
    for (var j = 0; j <= width; j += random(0,80)) {
   
    ellipse(j, i, random(0,80), random(30,180));
        
    }
  }
      }
    
    
    
    
//face & body    
  face=new Face(width/2,height/4, 200,random(220,250), random(0,40));
  body=new Body(width/2,height/1.15,random(500,800),random(600,900),random(0,255),random(0,255),random(0,255), random(80,255),  random(80,255), random(600,1500), random(10,100)); 
  //
  noStroke();
  body.drawBody();
  face.drawFace(); 
  face.drawEyes(random(30,50),random(-10,30),random(30,60),random(0,250),random(0,255), random(0,255), random(0,255),random(1,15));
  //face.drawNose(random(2,60),random(5,35),random(1,60));
  face.drawMouth(random(80,100),random(1,60), random(1,30));
  face.drawHair( random(10,90), random(10,20),  random(5,15),  random(10,20),  random(10,90), random(10,360), random(180,240));
  
  face.drawHat( random(150,290), random(100,320),
  random(0,255),random(0,255),random(0,255),random(0,60),random(10,60));
  face.drawScarf(random(0,255), random(0,255), random(0,255),1300,250);     
  face.drawfacee ( random(40,90), random(40,60),  random(210,260));       
  
  
  //pattern
  p1 = new Pattern(width/2.9, height/7, 40, 500, 122);
  p2 = new Pattern(width/2, height/1.2 + 80, 70, height/1.2, random(6,30));
  
  
  //pattern
  
  p1. setColor( color(random(0,255), random(0,255), random(0,255)));
  p1. display();
  p2. setColor(  color(random(0,255), random(0,255), random(0,255)));
  p2. display();
  noLoop();
    
  //nameP.html(input.value());
    
  if(0<= n5 <= 0.01){
      textFont("Avenir Next");
      } else if(0.01<= n5 <=0.1){
      textFont("Arial Black");
      }else if(0.1<= n5 <=0.2){
      textFont("Lobster");
      }else if(0.2<= n5 <=0.3){
      textFont("Raleway");
      textStyle(THIN);      
      }else if(0.3<= n5 <=0.4){
      textFont("Phosphate");
      }else if(0.4<= n5 <=0.5){
      textFont("Poiret One");
      }else if(0.5<= n5 <=0.6){
      textFont("Anton");
      }else if(0.6<= n5 <=0.7){
      textFont("Audiowide");
      }else if(0.7<= n5 <=0.8){
      textFont("Avenir Next");
      }else if(0.8<= n5 <=0.9){
      textFont("Andale Mono");
      }else if(0.9<= n5 <=1){
      textFont("Source Sans Pro");
      textStyle(ITALIC);    
      }
    
   
  noStroke();    
  textSize(random(50,200));
//  textFont("Avenir Next");
  blendMode(DODGE);
  fill(random(0,255), random(0,255), random(0,255));
  text(nameInput1.value(), random(20,windowWidth/2.5), random(50,windowHeight));
   blendMode(NORMAL);
    
    
  if(0<= n6 <= 0.01){
      textFont("Avenir Next");
      } else if(0.01<= n6 <=0.1){
      textFont("Arial Black");
      }else if(0.1<= n6 <=0.2){
      textFont("Lobster");
      }else if(0.2<= n6 <=0.3){
      textFont("Raleway");
      textStyle(THIN);      
      }else if(0.3<= n6 <=0.4){
      textFont("Phosphate");
      }else if(0.4<= n6 <=0.5){
      textFont("Poiret One");
      }else if(0.5<= n6 <=0.6){
      textFont("Anton");
      }else if(0.6<= n6 <=0.7){
      textFont("Audiowide");
      }else if(0.7<= n6 <=0.8){
      textFont("Avenir Next");
      }else if(0.8<= n6 <=0.9){
      textFont("Andale Mono");
      } else if(0.9<= n6 <=1){
      textFont("Source Sans Pro");
      textStyle(ITALIC);    
      }   
  
  blendMode(BURN);
  textSize(random(50,200));   
  text(nameInput2.value(), random(20,windowWidth-textWidth(nameInput2.value())), random(50,windowHeight/1.5));
   blendMode(NORMAL);
    
    
      if(0<= n7 <= 0.01){
      textFont("Avenir Next");
      } else if(0.01<= n7 <=0.1){
      textFont("Arial Black");
      }else if(0.1<= n7 <=0.2){
      textFont("Lobster");
      }else if(0.2<= n7 <=0.3){
      textFont("Raleway");
      textStyle(THIN);      
      }else if(0.3<= n7 <=0.4){
      textFont("Phosphate");
      }else if(0.4<= n7 <=0.5){
      textFont("Poiret One");
      }else if(0.5<= n7 <=0.6){
      textFont("Anton");
      }else if(0.6<= n7 <=0.7){
      textFont("Audiowide");
      }else if(0.7<= n7 <=0.8){
      textFont("Avenir Next");
      }else if(0.8<= n7 <=0.9){
      textFont("Andale Mono");
      }else if(0.9<= n7 <=1){
      textFont("Source Sans Pro");
      textStyle(ITALIC);    
      }    
  
  textSize(random(50,200));    
  blendMode(DIFFERENCE);  
//   blendMode(NORMAL);     
  text(nameInput3.value(), random(windowWidth/2  ,windowWidth - textWidth(nameInput3.value())), random(40,windowHeight/1.5));
  blendMode(NORMAL);    
   
  
}

function keyTyped(){
     if(key==' '){
        save('SmallFashionDiary.png');
        
    }
}


