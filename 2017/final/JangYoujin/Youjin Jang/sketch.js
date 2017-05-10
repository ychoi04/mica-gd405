var xmargin = 10;
var ymargin = 10;
var button;
var bottom;
var logo;


//COLOR PALETTE OF LOGO WILL BE THE COLOR 
//PALETTE OF MY MOST RECENT ART PROJECT!!

var colors = [
////FUTURISTIC

//    //0.dark blue
//    [40,42,90],
//    
//    //3.red
//    [253,68,64],
//    
//    //1.light blue
//    [184,213,248],
//    
//    //2.light pink
//    [249,208,188],

    
//    //2.red
//    [217,69,49],
//    
//    //0.yellow
//    [254,178,95],
//    
//    //3.light green
//    [193,220,215],
//    
//    //1.green
//    [27,95,97],
    
////SOphomore Year 2    
//    
//   //2.black
//    [51,31,56],
//    
//    //0.purple
//    [114,105,148],
//    
//    //3.turquoise
//    [110,157,176],
//    
//    //1.lightgreen
//    [160,193,184],
    
////FRESH SECOND
//    //2.light green
//    [154,185,152],
//    
//    //0.peach
//    [251,206,172],
//    
//    //3.pink
//    [244,131,125],
//    
//    //1.black
//    [41,54,60],
    
////FRESHMAN YEAR
//    //2.dark blue
//    [53,93,126],
//    
//    //0.purple
//    [108,90,124],
//    
//    //3.pink
//    [239,115,131],
//    
//    //1.orange
//    [248,177,149],
//    
    
//sophomore 1
//    //2.burgundy red
//    [126,54,35],
//    
//    //0.olive green
//    [141,141,82],
//    
//    //3.grey
//    [188,182,168],
//    
//    //1.yellow
//    [231,206,92],
    
    
////Junior Year     
//
//    //2.orange
//    [242,122,62],
//    
//    //1.blue grey
//    [114,130,135],
//    
//    //0.navy
//    [64,79,101],
//    
//    //3.orange yellow
//    [253,185,62],

    
//    
////Junior Year 2    
//    
//    //1.dark grey
//    [53,49,48],
//    
//    //0.light grey
//    [224,224,213],
//    
//    //3.red
//    [234,61,36],
//    
//    //2.yellow
//    [241,172,42],
    

    
////OTHER//    
//    
//    //1.brown
//    [153,137,114],
//    
//    //0.light blue green
//    [230,238,240],
//    
//    //3.bluegreen
//    [45,109,121],
//    
//    //2.dark bluegreen
//    [56,74,88],

    
//LAST//    
    
    //1.beige
    [239,214,189],
    
    //0.pastel blue
    [126,176,204],
    
    //3.paste yellow
    [242,225,139],
    
    //2.pastel green
    [173,198,188],
];

function setup() {
    
    createCanvas(600,600);
    background(255);
    x=xmargin; 
    y=ymargin;
    
    logo = new Logo(width/2, height/2,400,400,60);
    logo.draw();
    
    
    //hours of sleep (x, y, hours of sleep, cups of coffee)
    logo.drawAveSleep(140,165, 15, 1);
    
    
    //PROJECTS: (x,y,  any strokeweight, # of projects, spacing btwn line)
    logo.drawProjects(175,280, 3, 14, 9);
    
    
    //HAIR WEIGHT(x,y, hair length cm, weight lbs, curled hair, meals, space, d)
        // 0 if not curled, 1 if curled
        //30 cm = 1 ft 
        //60 cm = 2 ft
    logo.drawHairandWeight(220,125, 50, 130, 1, 3, 42 ,15);
    
    
    //AGE (x, y, strokeweight for age, scale, how many steps you took)
    logo.drawAgeArc(300, 190, 40, 1, 9500);
    
    
    //LANGUAGES CAN I SPEAK (x,y,scale,lang1,lang2) 
    logo.drawLanguages(130,380,1,0,10);

    
    button = createButton("SAVE");
    button.mousePressed(saveImage);
    button.position(149,715);

}

function draw() {
  
}

function saveImage(){
    save('Logo.png');
}

function Logo (x,y,w,h,r){
    
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.r = r;
    
    
    this.draw = function(){
        rectMode(CENTER);
//        scale(1.1);
        noStroke();
        fill(255);
        rect(this.x, this.y, this.w, this.h, this.r);
    }
    
    
    this.drawAveSleep = function(x,y,bottom,c){
        push();
            translate(x,y); 
            scale(1);
            fill(colors[1][0],colors[1][1],colors[1][2],200);
            triangle(0,0,150,0,75,bottom*11);//130//
        
        //COFFEE + SLEEP
            fill(colors[0][0],colors[0][1],colors[0][2]);
            triangle(0,0,c*30,0,75,bottom*11);
            
        
        pop();
    }
    

    this.drawProjects = function(x,y,sw,p,s){
        push();
        translate(x,y);
        
        // P variable substitutes for how many projects you made so far! 
            for (var i = 0; i < p*s; i += s){
                stroke(colors[2][0],colors[2][1],colors[2][2]);
                strokeWeight(sw);
                line(random(0,10),i,random(50,60),i);
            }
        pop();
    }
    
    
    this.drawHairandWeight = function(x,y,hair,weight,c,p,s,d){
        push();
        
            //height=vertical rectangle
        
            translate(x,y);
            rectMode(CORNER);
            fill(colors[2][0],colors[2][1],colors[2][2]);
            noStroke();
            //YOUR HEIGHT VARIABLE IS IN # OF CENTIMETERS
            rect(190, 70, 35, hair*3.2, c*10);
        
        
            //weight=horizontal rectangle
        
            fill(colors[1][0],colors[1][1],colors[1][2]);
            stroke(colors[3][0],colors[3][1],colors[3][2]);
            strokeWeight(weight*0.1);
            rect(95,45,130,35,5);
        
            for (var i = 0; i < p*s; i += s){
                fill(colors[2][0],colors[2][1],colors[2][2]);
                noStroke();
                ellipse(i+118,63,d,d);
            }
            
            
        pop();
    }
    
    
    this.drawAgeArc = function(x,y,sw,s,w){
        
        //STROKE WEIGHT = CURRENT AGE
        push();
            translate(x,y);
            scale(s);
            stroke(colors[0][0],colors[0][1],colors[0][2]);
            strokeCap(ROUND);
        
            //change your stroke weight accordingly
            strokeWeight(sw*1.1);
            noFill();
            arc(90,160,150,140,radians(65),radians(w/55));
        pop();
    }
    
    
    this.drawLanguages = function(x,y,s,sw1,sw2){
        
        //HOW MANY LANGUAGES = # OF ELLIPSES
        var d = 20;
        push();
            translate(x,y);
            scale(s);
            fill(colors[3][0],colors[3][1],colors[3][2]);
            stroke(colors[1][0],colors[1][1],colors[1][2]);
        
    
            //english
            strokeWeight(sw1);
            ellipse(45,50,d,d);
            //korean
            strokeWeight(sw2);
            ellipse(75,50,d,d);
            //japanese
            strokeWeight(0);
            ellipse(105,50,d,d);
//        
            //you can add another ellipse everytime
            //you learn a new language
        
        pop();
    }
    
    
    
    
}

