//sets initial modifier for bezier anchors with bendY argument
var bendY = 164;

//x needed its own
var bendYZ = 164;

//sets initial modifier for bezier anchors with x argument   
var bendX = 100;

//used to maintain y apex of dynamic bend at any y position
var bendH;

//part of x responsiveness in dynamic bends
var bez;

//part of up down motion in alphabet
var ySpeed;
var direction = 1;

//for fill adjustment in alphabet
var colorR = 0;
var colorG = 0;
var colorB = 0;
var alpha = 0;

//sets up in locations for typing for scene2
var x = 20;
var y = 60;
var xmargin = 20;
var ymargin = 60;

//starts program on alphabet function
var sceneCount = 1;

function setup() {
    createCanvas(900, 600);
    textFont("Roboto");
    textSize(16);
}

function draw() {
    if (sceneCount == 1) {
        alphabet();
        text("This is called Bodoni Meta if that isn't copyright infringement.", 20, 20);
        text("Hold R, G, and B keys to slowly change color. Try pressing 1, 2, 3, 4, 5, and 6 to change color fast.", 20, 40);
        text("Press the left or right arrow to start typing.", 20, 60)
    } else if (sceneCount == 2) {
        text("Text color is determined in the previous page, press an arrow to get back there.", 20, 20);
        text("The mouse may still be used to affect bends, pressing enter/return clears the text.", 20, 40);
    }
}

//letter functions below
function letterA(x, y) {
    //    this first block changes bendH so curve looks same at all y positions
       if (y < 150) {
        bendH = 0;
    } else if (y < 250) {
        bendH = 50;
    } else if (y < 350) {
        bendH = 100;
    } else if (y < 450) {
        bendH = 150;
    }
    
    beginShape();
        vertex(35+x,4+y);
        vertex(34+x,4+y);
        vertex(7+x,79+y);
        vertex(16+x,79+y);
        vertex(18+x,57+y);
        vertex(38+x,57+y);
        vertex(46+x,79+y);
        vertex(64+x,79+y);
    
        //    variables added to create dynamic curves, original static versions commented out below
        bezierVertex(x+bez+45,bendY+.5*y+bendH-10,41+x,44+y,35+x,4+y);
//        bezierVertex(58+x,40+y,41+x,44+y,35+x,4+y);

    endShape();
}

function letterB(x, y) {
    
       if (y < 150) {
        bendH = 0;
    } else if (y < 250) {
        bendH = 50;
    } else if (y < 350) {
        bendH = 100;
    } else if (y < 450) {
        bendH = 150;
    }
    
    beginShape();
        vertex(39+x,39+y);
        vertex(39+x,39+y);
        bezierVertex(49+x,38+y,61+x,33+y,61+x,22+y);
        bezierVertex(61+x,10+y,48+x,4+y,36+x,4+y);
        vertex(10+x,4+y);
    
        bezierVertex(x+bez,bendY+.5*y+bendH+10,-2+x,45+y,10+x,79+y);
//        bezierVertex(13+x,34+y,-2+x,45+y,10+x,79+y); 
    
        vertex(35+x,79+y);
        bezierVertex(55+x,79+y,65+x,70+y,65+x,58+y);
        bezierVertex(65+x,46+y,54+x,39+y,39+x,39+y);
    endShape();
}

function letterC(x, y) {
    
    cY = 0;
    if (mouseIsPressed) {
        cY = mouseY-250;
    }
    
    beginShape();
        vertex(57+x,26+y);
        vertex(55+x,26+y);
    
    
        //    some letters like s, g, c have different control of y anchors for dynamic bezier because different structural element of glyph is affected
    
        bezierVertex(36+x+bez,19+y+cY,33+x,1+y,33+x,1+y);
//        bezierVertex(36+x,19+y,33+x,1+y,33+x,1+y);
    
        bezierVertex(22+x,1+y,16+x,11+y,16+x,38+y);
        bezierVertex(16+x,64+y,20+x,75+y,32+x,75+y);
    
        bezierVertex(32+x+bez,75+y+cY,55+x,57+y,58+x,49+y);
//        bezierVertex(32+x,75+y,37+x,57+y,56+x,49+y);
    
        vertex(58+x,75+y);
        vertex(56+x,75+y);
        bezierVertex(56+x,74+y,44+x,77+y,31+x,77+y);
        bezierVertex(10+x,77+y,-2+x,58+y,-2+x,39+y);
        bezierVertex(-2+x,21+y,11+x,-1+y,33+x,-1+y);
        bezierVertex(40+x,-1+y,55+x,4+y,55+x,1+y);
        vertex(57+x,1+y);
        vertex(57+x,26+y);
    endShape(CLOSE);
}

function letterD(x, y) {
    
    if (y < 150) {
        bendH = 0;
    } else if (y < 250) {
        bendH = 50;
    } else if (y < 350) {
        bendH = 100;
    } else if (y < 450) {
        bendH = 150;
    }
    
    beginShape();
        vertex(8+x,81+y);
    
        bezierVertex(x+bez,bendY+.5*y+bendH,23+x,37+y,8+x,6+y);
//        bezierVertex(-13+x,43+y,23+x,37+y,8+x,6+y);
    
        vertex(36+x,6+y);
        bezierVertex(58+x,6+y,73+x,20+y,73+x,44+y);
        bezierVertex(73+x,57+y,65+x,81+y,36+x,81+y);
        vertex(8+x,81+y);
    endShape();
}

function letterE(x, y) {
          if (y < 150) {
        bendH = 0;
    } else if (y < 250) {
        bendH = 50;
    } else if (y < 350) {
        bendH = 100;
    } else if (y < 450) {
        bendH = 150;
    }
    
    beginShape();
        vertex(11+x,79+y);
    
        bezierVertex(x+bez,bendY+.5*y+bendH,14+x,40+y,11+x,4+y);
//        bezierVertex(1+x,44+y,14+x,40+y,11+x,4+y);
    
        vertex(61+x,4+y);
        vertex(61+x,27+y);
        vertex(27+x,8+y);
        vertex(27+x,40+y);
        vertex(45+x,25+y);
        vertex(45+x,59+y);
        vertex(27+x,42+y);
        vertex(27+x,77+y);
        vertex(62+x,57+y);
        vertex(64+x,57+y);
        vertex(64+x,79+y);
        vertex(11+x,79+y);
    endShape();
}

function letterF(x, y) {
           if (y < 150) {
        bendH = 0;
    } else if (y < 250) {
        bendH = 50;
    } else if (y < 350) {
        bendH = 100;
    } else if (y < 450) {
        bendH = 150;
    }
    
    beginShape();
        vertex(16+x,79+y);
        vertex(16+x,79+y);
    
        bezierVertex(bez+x,bendY+.5*y+bendH,15+x,19+y,16+x,4+y);
//      bezierVertex(-4+x,47+y,15+x,19+y,16+x,4+y);
    
        vertex(70+x,4+y);
        vertex(69+x,26+y);
        vertex(67+x,26+y);
        vertex(33+x,11+y);
        vertex(33+x,33+y);
        vertex(53+x,24+y);
        vertex(55+x,28+y);
        vertex(55+x,58+y);
        vertex(53+x,58+y);
        vertex(33+x,41+y);
        vertex(33+x,79+y);
        vertex(18+x,79+y);
    endShape(CLOSE);
}

function letterG(x, y) {
    
     bezierVertex(36+x+bez,19+y+cY,33+x,1+y,33+x,1+y);
    
       gY = 0;
    if (mouseIsPressed) {
        gY = mouseY-250;
    }
    
    beginShape();
        vertex(67+x,71+y);
        bezierVertex(61+x,76+y,56+x,80+y,39+x,80+y);
        bezierVertex(20+x,80+y,4+x,64+y,4+x,42+y);
        bezierVertex(4+x,19+y,19+x,2+y,38+x,2+y);
        bezierVertex(47+x,2+y,61+x,6+y,61+x,4+y);
        vertex(63+x,4+y);
        vertex(63+x,16+y);
        vertex(61+x,16+y);
        vertex(38+x,4+y);
        bezierVertex(25+x,4+y,21+x,20+y,21+x,41+y);
        bezierVertex(21+x,74+y,29+x,78+y,39+x,78+y);
    
        bezierVertex(39+x+bez,78+y+gY,46+x,62+y,60+x,55+y);
//        bezierVertex(39+x,78+y,46+x,62+y,60+x,55+y);
    
        vertex(64+x,55+y);
        vertex(38+x,55+y);
        vertex(38+x,50+y);
        vertex(67+x,50+y);
        vertex(67+x,71+y);
    endShape();
}

function letterH(x, y) {
           if (y < 150) {
        bendH = 0;
    } else if (y < 250) {
        bendH = 50;
    } else if (y < 350) {
        bendH = 100;
    } else if (y < 450) {
        bendH = 150;
    }
    
    beginShape();
        vertex(7+x,79+y);
    
        bezierVertex(x+bez,bendY+.5*y+bendH,10+x,35+y,7+x,4+y);
//        bezierVertex(mouseX-3+x-bezH,y+.5*y,10+x,35+y,7+x,4+y);
    
        vertex(24+x,4+y);
        vertex(24+x,39+y);
        vertex(51+x,39+y);
        vertex(51+x,4+y);
        vertex(68+x,4+y);
        vertex(68+x,79+y);
        vertex(51+x,79+y);
        vertex(51+x,44+y);
        vertex(24+x,44+y);
        vertex(24+x,79+y);
        vertex(7+x,79+y);
    endShape();
}

function letterI(x, y) {
           if (y < 150) {
        bendH = 0;
    } else if (y < 250) {
        bendH = 50;
    } else if (y < 350) {
        bendH = 100;
    } else if (y < 450) {
        bendH = 150;
    }
    
    beginShape();
        vertex(45+x,79+y);
    
        bezierVertex(x+bez+20,bendY+.5*y+bendH+10,48+x,40+y,45+x,4+y);
//        bezierVertex(36+x,54+y,48+x,40+y,45+x,4+y);

        vertex(29+x,4+y);
    
        bezierVertex(x+bez+24,bendY+.5*y+bendH+10,20+x,54+y,29+x,79+y);
//        bezierVertex(32+x,41+y,20+x,54+y,29+x,79+y);
    
    endShape(CLOSE);
}

function letterJ(x, y) {
           if (y < 150) {
        bendH = 0;
    } else if (y < 250) {
        bendH = 50;
    } else if (y < 350) {
        bendH = 100;
    } else if (y < 450) {
        bendH = 150;
    }
    
    beginShape();
        vertex(43+x,-4+y);
    
        bezierVertex(x+bez+40,bendY+.5*y+bendH,38+x,38+y,43+x,62+y);
//        bezierVertex(52+x,11+y,38+x,38+y,43+x,62+y);
    
        vertex(43+x,62+y);
        bezierVertex(43+x,71+y,34+x,78+y,23+x,80+y);
        bezierVertex(14+x,78+y,9+x,74+y,9+x,69+y);
        bezierVertex(9+x,65+y,12+x,61+y,16+x,61+y);
        bezierVertex(20+x,61+y,23+x,64+y,23+x,68+y);
        vertex(17+x,75+y);
        bezierVertex(17+x,77+y,19+x,78+y,22+x,78+y);
        bezierVertex(28+x,78+y,30+x,75+y,30+x,69+y);
        vertex(26+x,52+y);
    
        bezierVertex(x+bez+40,bendY+.5*y+bendH,31+x,18+y,26+x,-4+y);
//        bezierVertex(23+x,34+y,31+x,18+y,26+x,-4+y);
    
        vertex(43+x,-4+y);
    endShape();
}

function letterK(x, y) {
           if (y < 150) {
        bendH = 0;
    } else if (y < 250) {
        bendH = 50;
    } else if (y < 350) {
        bendH = 100;
    } else if (y < 450) {
        bendH = 150;
    }
    
    beginShape();
        vertex(23+x,6+y);
        vertex(23+x,41+y);
        vertex(45+x,8+y);
        vertex(45+x,6+y);
        vertex(71+x,6+y);
        vertex(71+x,8+y);
        vertex(38+x,32+y);
        vertex(70+x,80+y);
        vertex(49+x,80+y);
        vertex(24+x,42+y);
        vertex(23+x,44+y);
        vertex(23+x,81+y);
        vertex(5+x,81+y);
    
        bezierVertex(x+bez,bendY+.5*y+bendH,11+x,40+y,5+x,6+y);

//        bezierVertex(-6,45,11,40,5,6);
    endShape(CLOSE);
}

function letterL(x, y) {
           if (y < 150) {
        bendH = 0;
    } else if (y < 250) {
        bendH = 50;
    } else if (y < 350) {
        bendH = 100;
    } else if (y < 450) {
        bendH = 150;
    }
    
    beginShape();
        vertex(27+x,6+y);
        vertex(27+x,79+y);
        vertex(62+x,55+y);
        vertex(64+x,55+y);
        vertex(64+x,80+y);
        vertex(11+x,80+y);
    
        bezierVertex(x+bez,bendY+.5*y+bendH,18+x,43+y,11+x,6+y);
//        bezierVertex(-2+x,40+y,18+x,43+y,11+x,6+y);
    
        vertex(27+x,6+y);
    endShape(CLOSE);
}

function letterM(x, y) {
           if (y < 150) {
        bendH = 0;
    } else if (y < 250) {
        bendH = 50;
    } else if (y < 350) {
        bendH = 100;
    } else if (y < 450) {
        bendH = 150;
    }
    
    beginShape();
        vertex(7+x,4+y);
        vertex(26+x,4+y);
        vertex(44+x,55+y);
        vertex(44+x,55+y);
        vertex(62+x,4+y);
        vertex(79+x,4+y);
    
        bezierVertex(x+bez+70,bendY+.5*y+bendH+10,90+x,40+y,79+x,79+y);
//      bezierVertex(77+x,42+y,90+x,40+y,79+x,79+y);

        vertex(79+x,79+y);
        vertex(63+x,79+y);
        vertex(63+x,9+y);
        vertex(38+x,79+y);
        vertex(35+x,79+y);
        vertex(10+x,9+y);
        vertex(19+x,79+y);
        vertex(7+x,79+y);
    endShape(CLOSE);
}

function letterN(x, y) {
               if (y < 150) {
        bendH = 0;
    } else if (y < 250) {
        bendH = 50;
    } else if (y < 350) {
        bendH = 100;
    } else if (y < 450) {
        bendH = 150;
    }
    
    beginShape();
        vertex(6+x,8+y);
        vertex(6+x,6+y);
        vertex(24+x,6+y);
        vertex(64+x,57+y);
        vertex(55+x,6+y);
        vertex(67+x,6+y);
        vertex(67+x,13+y);
        vertex(67+x,80+y);
        vertex(61+x,80+y);
        vertex(13+x,17+y);
        vertex(22+x,81+y);
        vertex(10+x,81+y);
    
        bezierVertex(x+bez,bendY+.5*y+bendH,11+x,42+y,10+x,14+y);
//        bezierVertex(-5+x,53+y,11+x,42+y,10+x,14+y);
    
        vertex(6+x,8+y);
    endShape(CLOSE);
}

function letterO(x, y) {
    beginShape();
        vertex(41+x,2+y);
        bezierVertex(61+x,2+y,74+x,20+y,74+x,41+y);
        bezierVertex(75+x,61+y,59+x,80+y,41+x,80+y);
        bezierVertex(22+x,80+y,7+x,61+y,7+x,41+y);
        bezierVertex(7+x,20+y,21+x,2+y,41+x,2+y);
    endShape();
}

function letterP(x, y) {
               if (y < 150) {
        bendH = 0;
    } else if (y < 250) {
        bendH = 50;
    } else if (y < 350) {
        bendH = 100;
    } else if (y < 450) {
        bendH = 150;
    }
    
    beginShape();
        vertex(9+x,81+y);

        bezierVertex(x+bez,bendY+.5*y+bendH,14+x,36+y,9+x,6+y);
//        bezierVertex(-2+x,51+y,14+x,36+y,9+x,6+y);
    
        vertex(38+x,6+y);
        bezierVertex(57+x,6+y,66+x,13+y,66+x,26+y);
        bezierVertex(66+x,39+y,53+x,47+y,37+x,47+y);
        bezierVertex(33+x,47+y,29+x,47+y,26+x,47+y);
        vertex(26+x,81+y);
        vertex(9+x,81+y);
    endShape();
}

function letterQ(x, y) {
      cQ = 0;
    if (mouseIsPressed) {
        cQ = mouseY-250;
    }
    
    beginShape();
        vertex(50+x+bez,90+y+cQ);
        bezierVertex(45+x+bez,90+y+cQ,42+x+bez,87+y+cQ,42+x+bez,80+y+cQ);
        vertex(42+x,80+y);
        bezierVertex(58+x,76+y,69+x,60+y,69+x,42+y);
        bezierVertex(69+x,22+y,55+x,3+y,35+x,3+y);
        bezierVertex(15+x,3+y,2+x,22+y,2+x,42+y);
        bezierVertex(1+x,59+y,12+x,76+y,28+x,80+y);
        vertex(28+x+bez,81+y+cQ);

        bezierVertex(28+x+bez,90+y+cQ,39+x+bez,93+y+cQ,45+x+bez,93+y+cQ);

//        bezierVertex(x+bez,bendY+.5*y,39+x,103+y,45+x,103+y);
//        bezierVertex(28+x,100+y,39+x,103+y,45+x,103+y);
    
        bezierVertex(52+x+bez,93+y+cQ,56+x+bez,92+y+cQ,60+x+bez,90+y+cQ);
        vertex(59+x+bez,88+y+cQ);
        bezierVertex(57+x+bez,89+y+cQ,52+x+bez,90+y+cQ,50+x+bez,90+y+cQ);
    endShape();
}

function letterR(x, y) {
   if (y < 150) {
        bendH = 0;
    } else if (y < 250) {
        bendH = 50;
    } else if (y < 350) {
        bendH = 100;
    } else if (y < 450) {
        bendH = 150;
    }
    
    beginShape();
        vertex(13+x,79+y);
    
        bezierVertex(bez+x,bendY+.5*y+bendH,12+x,29+y,13+x,4+y);
        vertex(38+x,4+y);
//      bezierVertex(0+x,45+y,12+x,29+y,13+x,4+y);
    
        bezierVertex(50+x,4+y,70+x,6+y,70+x,22+y);
        bezierVertex(70+x,35+y,55+x,39+y,44+x,40+y);
        vertex(44+x,40+y);
        bezierVertex(60+x,42+y,68+x,48+y,68+x,60+y);
        bezierVertex(68+x,77+y,70+x,78+y,74+x,78+y);
        bezierVertex(75+x,78+y,77+x,78+y,78+x,77+y);
        vertex(79+x,79+y);
        bezierVertex(75+x,81+y,70+x,82+y,67+x,82+y);
        bezierVertex(54+x,82+y,51+x,74+y,51+x,62+y);
        bezierVertex(51+x,45+y,47+x,42+y,36+x,42+y);
        vertex(30+x,42+y);
        vertex(30+x,79+y);
        vertex(13+x,79+y);
    endShape();
}

function letterS(x, y) {
    sY = 0;
    if (mouseIsPressed) {
        sY = mouseY-250;
    }
    
    beginShape();
        vertex(9+x,51+y);
        vertex(11+x,51+y);
        vertex(11+x,51+y);
    
        bezierVertex(29+x+bez,62+y+sY,36+x,78+y,36+x,78+y);
//        bezierVertex(29+x,62+y,36+x,78+y,36+x,78+y);
    
        bezierVertex(45+x,78+y,51+x,73+y,51+x,63+y);
        bezierVertex(51+x,40+y,9+x,57+y,9+x,25+y);
        bezierVertex(9+x,11+y,18+x,2+y,32+x,2+y);
        bezierVertex(43+x,2+y,55+x,7+y,55+x,6+y);
        vertex(56+x,6+y);
        vertex(56+x,27+y);
        vertex(55+x,27+y);
        vertex(55+x,27+y);
    
        bezierVertex(36+x+bez,17+y+sY,33+x,4+y,33+x,4+y);
//        bezierVertex(36+x,17+y,33+x,4+y,33+x,4+y);
    
        bezierVertex(25+x,4+y,19+x,10+y,19+x,18+y);
        bezierVertex(19+x,38+y,61+x,22+y,61+x,54+y);
        bezierVertex(61+x,70+y,52+x,80+y,37+x,80+y);
        bezierVertex(28+x,80+y,11+x,77+y,11+x,79+y);
        vertex(9+x,79+y);
        vertex(9+x,51+y);
    endShape();
}

function letterT(x, y) {
       if (y < 150) {
        bendH = 0;
    } else if (y < 250) {
        bendH = 50;
    } else if (y < 350) {
        bendH = 100;
    } else if (y < 450) {
        bendH = 150;
    }
    
    beginShape();
        vertex(19+x,75+y);
    
        bezierVertex(x+bez+20,bendY+.5*y+bendH,25+x,24+y,19+x,8+y);
//        bezierVertex(7+x,63+y,25+x,24+y,19+x,8+y);
    
        vertex(-4+x,24+y);
        vertex(-6+x,24+y);
        vertex(-6+x,1+y);
        vertex(61+x,1+y);
        vertex(61+x,24+y);
        vertex(59+x,24+y);
        vertex(36+x,7+y);
    
        bezierVertex(x+bez+35,bendY+.5*y+bendH+12,25+x,63+y,36+x,75+y);
//        bezierVertex(41+x,24+y,24+x,63+y,36+x,75+y);
    
        vertex(19+x,75+y);
    endShape();
}

function letterU(x, y) {
           if (y < 150) {
        bendH = 0;
    } else if (y < 250) {
        bendH = 50;
    } else if (y < 350) {
        bendH = 100;
    } else if (y < 450) {
        bendH = 150;
    }
    
    beginShape();
        vertex(68+x,4+y);
        vertex(68+x,56+y);
        bezierVertex(68+x,72+y,55+x,82+y,36+x,82+y);
        bezierVertex(18+x,82+y,7+x,72+y,7+x,56+y);
        vertex(7+x,4+y);
        vertex(24+x,4+y);
    
        bezierVertex(x+bez+20,bendY+.5*y+bendH+15,30+x,37+y,24+x,62+y);
    
        bezierVertex(23+x,65+y,25+x,78+y,42+x,78+y);
        bezierVertex(52+x,78+y,61+x,71+y,61+x,57+y);
        vertex(61+x,4+y);
        vertex(63+x,4+y);
    endShape(CLOSE);
}

function letterV(x, y) {
             if (y < 150) {
        bendH = 0;
    } else if (y < 250) {
        bendH = 50;
    } else if (y < 350) {
        bendH = 100;
    } else if (y < 450) {
        bendH = 150;
    }
    
      vY = 0;
    if (mouseIsPressed) {
        vY = mouseY-250;
    }
    
    beginShape();
        vertex(13+x,1+y);
        vertex(32+x,54+y);
        vertex(41+x,1+y);
        vertex(61+x,1+y);
        vertex(27+x,75+y);
//        vertex(23+x,75+y);
    
        bezierVertex(x+bez,bendY+.5*y+bendH,-11+x,29+y,-5+x,1+y);
//        bezierVertex(14+x,32+y,-11+x,29+y,-5+x,1+y);
    
        vertex(13+x,1+y);
    endShape();
}

function letterW(x, y) {
     if (y < 150) {
        bendH = 0;
    } else if (y < 250) {
        bendH = 50;
    } else if (y < 350) {
        bendH = 100;
    } else if (y < 450) {
        bendH = 150;
    }
    
    beginShape();
        vertex(20+x,6+y);
        vertex(37+x,57+y);
        vertex(37+x,57+y);
        vertex(46+x,29+y);
        vertex(39+x,6+y);
        vertex(55+x,6+y);
        vertex(72+x,57+y);
        vertex(72+x,57+y);
        vertex(78+x,8+y);
        vertex(78+x,6+y);
        vertex(97+x,6+y);
        vertex(66+x,80+y);
        vertex(63+x,80+y);
        vertex(47+x,32+y);
        vertex(47+x,32+y);
        vertex(31+x,80+y);
        vertex(28+x,80+y);
    
        bezierVertex(x+bez,bendY+.5*y+bendH,19+x,38+y,3+x,6+y);
//        bezierVertex(2+x,44+y,19+x,38+y,3+x,6+y);
    
        vertex(20+x,6+y);
    endShape();
}

function letterX(x, y) {
         if (y < 150) {
        bendH = 0;
    } else if (y < 250) {
        bendH = 50;
    } else if (y < 350) {
        bendH = 100;
    } else if (y < 450) {
        bendH = 150;
    }
    
    beginShape();
        vertex(-10+x,75+y);
        vertex(24+x,40+y);
    
        bezierVertex(x+bez+15,bendY+.5*y+bendH+5,-6+x,11+y,-1+x,1+y);
//        bezierVertex(25+x,29+y,-6+x,11+y,-1+x,1+y);
    
        vertex(19+x,1+y);
    
//        bezierVertex(x+bez,bendY+.5*y,-6+x,11+y,-1+x,1+y);
        bezierVertex(21+x,13+y,29+x,13+y,34+x,25+y);
    
        vertex(39+x,1+y);
        vertex(61+x,1+y);
        vertex(35+x,28+y);
        vertex(35+x,28+y);
    
        bezierVertex(x+bez+40,bendY+.5*y+bendH-5,59+x,47+y,65+x,75+y);
//        bezierVertex(42+x,46+y,59+x,47+y,65+x,75+y);
    
        vertex(65+x,75+y);
        vertex(46+x,75+y);
    
//        bezierVertex(x+bez,bendY+.5*y,31+x,54+y,25+x,42+y);
        bezierVertex(44+x,61+y,31+x,54+y,25+x,42+y);
    
        vertex(16+x,75+y);
        vertex(-10+x,75+y);
    endShape();
    }
    
function letterY(x, y) {
             if (y < 150) {
        bendH = 0;
    } else if (y < 250) {
        bendH = 50;
    } else if (y < 350) {
        bendH = 100;
    } else if (y < 450) {
        bendH = 150;
    }
    
    beginShape();
    vertex(17+x,75+y);
    
    bezierVertex(x+bez+20,bendY+.5*y+bendH+20,22+x,57+y,17+x,49+y);
//    bezierVertex(11+x,65+y,22+x,57+y,17+x,49+y);
    
    vertex(-4+x,1+y);
    vertex(14+x,1+y);
    vertex(32+x,43+y);
    vertex(40+x,1+y);
    vertex(59+x,1+y);
    vertex(34+x,45+y);
    
    bezierVertex(x+bez+30,bendY+.5*y+bendH+30,28+x,69+y,34+x,75+y);
//    bezierVertex(40+x,58+y,28+x,69+y,34+x,75+y);
    
    vertex(17+x,75+y);
    endShape();
}

function letterZ(x, y) {
     if (y < 150) {
        bendH = 0;
    } else if (y < 250) {
        bendH = 50;
    } else if (y < 350) {
        bendH = 100;
    } else if (y < 450) {
        bendH = 150;
    }
    
    beginShape();
        vertex(58+x,3+y);
    
        bezierVertex(x+bez,bendY+.5*y+bendH+10,17+x,48+y,15+x,73+y);
//        bezierVertex(54+x,22+y,17+x,48+y,15+x,73+y);
    
        vertex(15+x,73+y);
        vertex(57+x,50+y);
        vertex(59+x,50+y);
        vertex(57+x,75+y);
        vertex(-4+x,75+y);
        vertex(-4+x,73+y);
    
        bezierVertex(x+bez,bendY+.5*y+bendH+10,35+x,20+y,39+x,3+y);
//        bezierVertex(-2+x,49+y,35+x,20+y,39+x,3+y);
    
        vertex(39+x,3+y);
        vertex(2+x,24+y);
        vertex(0+x,24+y);
        vertex(1+x,1+y);
        vertex(58+x,1+y);
    endShape(CLOSE);
}

function alphabet() {
    //    fill comprised of variables that are adjusted by pressing or holding down keys
    fill(colorR, colorG, colorB, alpha);    
    
    //    causes transparent fill when bez is at extreme locations
    if (mouseY < 300) {
        alpha = map(mouseY, 0, 300, 0, 100);
    } else if (mouseY > 300) {
        alpha = map(mouseY, 300, 600, 100, 0);
    }
    
    //    fills adjusted by holding letters and pressing numbers
    if (keyIsPressed == true) {
        if (key == 'r') {
            colorR = colorR+1;
        } else if (key == 'g') {
            colorG = colorG+1;
        } else if (key == 'b') {
            colorB = colorB+1;
        } else if (key == '1') {
            colorR = 0;
        } else if (key == '2') {
            colorG = 0;
        } else if (key == 3) {
            colorB = 3;
        } else if (key == '4') {
            colorR = 255;
        } else if (key == '5') {
            colorG = 255;
        } else if (key == '6') {
            colorB = 255;
        } else if (key == ' ') {
            background(255);
        }
    }

    //    keyed values reset after maximum reached, keys only increase or reset values
    if (colorR > 255) {
        colorR = 0;
    }
    if (colorG > 255) {
        colorG = 0;
    }    
        if (colorB > 255) {
        colorB = 0;
    }
    
    //    achieves mouseY dependent speed in up and down of dynamic bend
    ySpeed = mouseY/100;

    //    causes motion of bends
    bendY = bendY - ySpeed * direction;
        
    //    creates and maintains bounce of motion
    if (bendY < 40 || bendY > 120) { 
        direction *= -1; 
    } 
    if (bendY < 40) {
        bendY = 40;
    }
      if (bendY > 120) {
        bendY = 120;
    }
    
//    allows for click and drag
    if (mouseIsPressed) {
        bendY = mouseY-200;
    }
       if (mouseIsPressed) {
        bez = map(mouseX, 0 , width, -width, width);
    } else {
        bez = map(mouseX, 0, width, -50, 50);
    }
        
    letterA(100, 100);
    letterB(200, 100);
    letterC(300, 100);
    letterD(400, 100);
    letterE(500, 100);
    letterF(600, 100);
    letterG(700, 100);
    
    letterH(100, 200);
    letterI(200, 200);
    letterJ(300, 200);
    letterK(400, 200);
    letterL(500, 200);
    letterM(600, 200);
    letterN(700, 200);
    
    letterO(100, 300);
    letterP(200, 300);
    letterQ(300, 300);
    letterR(400, 300);
    letterS(500, 300);
    letterT(600, 300);
    letterU(700, 300);
    
    letterV(100, 400);
    letterW(500, 400);
    letterX(200, 400);
    letterY(300, 400);
    letterZ(400, 400);
}

function keyTyped() {
//    keyTyped works all the time, crucial to set scene conditionals
    if (sceneCount == 2) {
        if (mouseY < 300) {
            alpha = map(mouseY, 0, 300, 0, 100);
        } else if (mouseY > 300) {
            alpha = map(mouseY, 300, 600, 100, 0);
        }

//         achieves mouseY dependent speed in up and down of dynamic bend
        ySpeed = mouseY/100;

        //    causes motion of bends
        bendY = bendY - ySpeed * direction;

        //    creates and maintains bounce of motion
        if (bendY < 40 || bendY > 120) { 
        direction *= -1; 
        } 
        if (bendY < 40) {
            bendY = 40;
        }
          if (bendY > 120) {
            bendY = 120;
        }

    //    allows for click and drag
        if (mouseIsPressed) {
            bendY = mouseY-200;
        }
           if (mouseIsPressed) {
            bez = map(mouseX, 0 , width, -width, width);
        } else {
            bez = map(mouseX, 0, width, -50, 50);
        }

        if (key == "a") {
            letterA(x, y);
            x += 60;
        } else if (key == "b") {
            letterB(x, y);
            x += 60;
        } else if (key == "c") {
            letterC(x, y);
            x += 60;
        } else if (key == "d") {
            letterD(x, y);
            x += 60;
        } else if (key == "e") {
            letterE(x, y);
            x += 60;
        } else if (key == "f") {
            letterF(x, y);
            x += 60;
        } else if (key == "g") {
            letterG(x, y);
            x += 60;
        } else if (key == "h") {
            letterH(x, y);
            x += 60;
        } else if (key == "i") {
            letterI(x, y);
            x += 60;
        } else if (key == "j") {
            letterJ(x, y);
            x += 60;
        } else if (key == "k") {
            letterK(x, y);
            x += 60;
        } else if (key == "l") {
            letterL(x, y);
            x += 60;
        } else if (key == "m") {
            letterM(x, y);
            x += 60;
        } else if (key == "n") {
            letterN(x, y);
            x += 60;
        } else if (key == "o") {
            letterO(x, y);
            x += 60;
        } else if (key == "p") {
            letterP(x, y);
            x += 60;
        } else if (key == "q") {
            letterQ(x, y);
            x += 60;
        } else if (key == "r") {
            letterR(x, y);
            x += 60;
        } else if (key == "s") {
            letterS(x, y);
            x += 60;
        } else if (key == "t") {
            letterT(x, y);
            x += 60;
        } else if (key == "u") {
            letterU(x, y);
            x += 60;
        } else if (key == "v") {
            letterV(x, y);
            x += 60;
        } else if (key == "w") {
            letterW(x, y);
            x += 60;
        } else if (key == "x") {
            letterX(x, y);
            x += 60;
        } else if (key == "y") {
            letterY(x, y);
            x += 60;
        } else if (key == "z") {
            letterZ(x, y);
            x += 60;
        } else if (key == " ") {
            x += 60;
        } else if (keyCode == ENTER) {
            background(255);
            x = xmargin;
            y = ymargin;
        }

//        causes line return
        if (x > width - 60) {
            x = xmargin;
            y += 100;
        }

//        causes line reset
        if (y > 500) {
            y = 60;
        }
    
    
    
    
    } else if (sceneCount == 3) {
        
        background(255);
        
        if (key == "a") {
            letterA(width/2, height/2);
        } else if (key == "b") {
            letterB(width/2, y);
        } else if (key == "c") {
            letterC(width/2, height/2);
            
        } else if (key == "d") {
            letterD(width/2, height/2);
            
        } else if (key == "e") {
            letterE(width/2, height/2);
            
        } else if (key == "f") {
            letterF(width/2, height/2);
            
        } else if (key == "g") {
            letterG(width/2, height/2);
            
        } else if (key == "h") {
            letterH(width/2, height/2);
            
        } else if (key == "i") {
            letterI(width/2, height/2);
            
        } else if (key == "j") {
            letterJ(width/2, height/2);
            
        } else if (key == "k") {
            letterK(width/2, height/2);
            
        } else if (key == "l") {
            letterL(width/2, height/2);
            
        } else if (key == "m") {
            letterM(width/2, height/2);
            
        } else if (key == "n") {
            letterN(width/2, height/2);
            
        } else if (key == "o") {
            letterO(width/2, height/2);
            
        } else if (key == "p") {
            letterP(width/2, height/2);
            
        } else if (key == "q") {
            letterQ(width/2, height/2);
            
        } else if (key == "r") {
            letterR(width/2, height/2);
            
        } else if (key == "s") {
            letterS(width/2, height/2);
            
        } else if (key == "t") {
            letterT(width/2, height/2);
            
        } else if (key == "u") {
            letterU(width/2, height/2);
            
        } else if (key == "v") {
            letterV(width/2, height/2);
            
        } else if (key == "w") {
            letterW(width/2, height/2);
            
        } else if (key == "width/2") {
            letterX(width/2, height/2);
            
        } else if (key == "y") {
            letterY(width/2, height/2);
            
        } else if (key == "z") {
            letterZ(width/2, height/2); 
        } else if (key == ' ') {
            background(255);
        }
    }
}

function keyPressed() {
//    allows arrow keys to change scenes
        if (keyCode == RIGHT_ARROW) {
            sceneCount ++;
            background(255);
        } else if (keyCode == LEFT_ARROW) {
            sceneCount --;
            background(255);
        }
        
//allows scenes to cycle
         if (sceneCount > 2) {
            sceneCount = 1;
        } else if (sceneCount < 1) {
            sceneCount = 2;
        }
    
        if (sceneCount == 2) {
            keyTyped();
            console.log("scene2");
        }
}