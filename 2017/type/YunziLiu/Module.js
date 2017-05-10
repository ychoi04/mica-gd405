function Module(x,y){
    var r=map(mouseX,0,width,0,20);
    var d=map(mouseX,0,width,0,10);
    var trans1=map(mouseX,0,width,100,0);
    var trans2=map(mouseX,0,width,0,200);
    
    col=150;
    
    push();
    translate(x,y);
    x=map(mouseX,0,width,0,20);
    y=map(mouseY,0,width,0,20);
  

    noStroke();
    fill(col,trans1);
    rect(x/2,y/2,r,r);
    
    
    noStroke();
    fill(col+70,trans1*2);
    ellipse(x,y,r,r);
    
    
    fill(col+70,trans1*2);
    noStroke();
    ellipse(x*1.5+40,y/2-1,0.6*r,0.6*r);
    
    
    noStroke();
    fill(col-70,trans1*2);
    rotate(PI/4);
    rect(x/2+10,1+y/2,6,6);
    
    
    noStroke();
    fill(col-70,trans1*2);
    rotate(PI/3);
    rect(x/2-20,y/2+5,0.5*r,0.5*r);
    
    
    noStroke();
    fill(col-70,trans2);
    ellipse(x+10,y-40,0.3*r,0.3*r);
    
    
    noFill();
    stroke(col-70,trans2);
    ellipse(x+10,y-40,d,d);
    pop();

}