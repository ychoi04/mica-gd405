function Module1(x,y){
    col=100;
    push();
    translate(x,y);
    noStroke();
    fill(col+100,trans1);
    rotate(PI/4);
    rect(13,4,6,6);
    
    
    noStroke();
    fill(col,trans1);
    rotate(PI/3);
    rect(12,2,3,3);
    
    noStroke();
    fill(col-100,trans1);
    ellipse(6,6,6,6);
    pop();
    
    if(mouseIsPressed)
    trans1=0;
    else
    trans1=200;
}
