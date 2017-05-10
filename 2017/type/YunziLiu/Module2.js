function Module2(x,y){
    col=100;
    push();
    translate(x,y);
    noStroke();
    fill(col+100,trans2);
    rotate(PI/4);
    rect(13,4,6,6);
    
    
    noStroke();
    fill(col,trans2);
    rotate(PI/3);
    rect(12,2,3,3);
    
    noStroke();
    fill(col-100,trans2);
    ellipse(6,6,6,6);
    pop();
    
    if(mouseIsPressed)
    trans2=200;
    else
    trans2=0;

}
