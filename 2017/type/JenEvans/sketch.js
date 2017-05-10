/*
Interactive Type Specimen
Feb 2017

Refresh page to grab new hedline.

To Do:
1. Make a button to refresh
2. Fix API issue so it runs locally, or port to GitHub
3. Feature in order to flip through multiple comments

*/

var w = 40;
var h = 60;
var margin = 10;
var leading = h*1.3;

var temp;
 
x = margin;
y = margin+30;


// Call NY Times 'Most Popular' API
var url = "https://api.nytimes.com/svc/mostpopular/v2/mostshared/all-sections/1.json";
url += '?' + $.param({
  'api-key': "0f542c2235f34402ac0eeaa51d50edd0"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
  headline(result);
}).fail(function(err) {
  throw err;
});

// Pick Headline
function headline(data) {
    
  randomHeadline = data.results[Math.floor(Math.random()*data.results.length)];
  
  headlineTitle = randomHeadline.title;
  console.log(headlineTitle);
  
  // get headline URL
  headlineURL = randomHeadline.url;
  
  // pass URL into the function that calls the Community API
  getCommentAPI(headlineURL);
  
  // Parse headline characters into array
  var char = headlineTitle.split("");
  
  // Scale to fit 3 lines
  var lineCount = 3;
  
 
  var charPerLine = (char.length / lineCount) + 1;
  
  var lineMargin = (charPerLine + 1) * margin;
  
 // Determine width by number of characters
  w = (width - lineMargin) / charPerLine;

  // Draw Headline
  for (var i = 0; i < char.length; i++) {
    console.log(char[i]);
    
    switch(char[i].toLowerCase()) {
      case 'a':
        drawA(x, y, w, h);
        x = x + w + margin;
        break;
      case 'b':
        drawB(x, y, w, h);
        x = x + w + margin;
        break;   
      case 'c':
        drawC(x, y, w, h);
        x = x + w + margin;
        break;
      case 'd':
        drawD(x, y, w, h);
        x = x + w + margin;
        break;
      case 'e':
        drawE(x, y, w, h);
        x = x + w + margin;
        break;
      case 'f':
        drawF(x, y, w, h);
        x = x + w + margin;
        break;
      case 'g':
        drawG(x, y, w, h);
        x = x + w + margin;
        break;
      case 'h':
        drawH(x, y, w, h);
        x = x + w + margin;
        break;
      case 'i':
        drawI(x, y, w, h);
        x = x + w + margin;
        break;
      case 'j':
        drawJ(x, y, w, h);
        x = x + w + margin;
        break;
      case 'k':
        drawK(x, y, w, h);
        x = x + w + margin;
        break;
      case 'l':
        drawL(x, y, w, h);
        x = x + w + margin;
        break;
      case 'm':
        drawM(x, y, w, h);
        x = x + w + margin;
        break;
      case 'n':
        drawN(x, y, w, h);
        x = x + w + margin;
        break;
      case 'o':
        drawO(x, y, w, h);
        x = x + w + margin;
        break;
      case 'p':
        drawP(x, y, w, h);
        x = x + w + margin;
        break;
      case 'q':
        drawQ(x, y, w, h);
        x = x + w + margin;
        break;
      case 'r':
        drawR(x, y, w, h);
        x = x + w + margin;
        break;
      case 's':
        drawS(x, y, w, h);
        x = x + w + margin;
        break;
      case 't':
        drawT(x, y, w, h);
        x = x + w + margin;
        break;
      case 'u':
        drawU(x, y, w, h);
        x = x + w + margin;
        break;
      case 'v':
        drawV(x, y, w, h);
        x = x + w + margin;
        break;
      case 'w':
        drawW(x, y, w, h);
        x = x + w + margin;
        break;
      case 'x':
        drawX(x, y, w, h);
        x = x + w + margin;
        break;
      case 'y':
        drawY(x, y, w, h);
        x = x + w + margin;
        break;
      case 'z':
        drawZ(x, y, w, h);
        x = x + w + margin;
        break;
      case '1':
        draw1(x, y, w, h);
        x = x + w + margin;
        break;
      case '2':
        draw2(x, y, w, h);
        x = x + w + margin;
        break;
      case '3':
        draw3(x, y, w, h);
        x = x + w + margin;
        break;
      case '4':
        draw4(x, y, w, h);
        x = x + w + margin;
        break;
      case '5':
        draw5(x, y, w, h);
        x = x + w + margin;
        break;
      case '6':
        draw6(x, y, w, h);
        x = x + w + margin;
        break;
      case '7':
        draw7(x, y, w, h);
        x = x + w + margin;
        break;
      case '8':
        draw8(x, y, w, h);
        x = x + w + margin;
        break;
      case '9':
        draw9(x, y, w, h);
        x = x + w + margin;
        break;
      case '0':
        draw0(x, y, w, h);
        x = x + w + margin;
        break;
      case '!':
        drawExclamation(x, y, w, h);
        x = x + w + margin;
        break;
      case '?':
        drawQuestion(x, y, w, h);
        x = x + w + margin;
        break;
      case '-':
        drawDash(x, y, w, h);
        x = x + w + margin;
        break;
      case '/':
        drawSlash(x, y, w, h);
        x = x + w + margin;
        break;
      case '\'':
        drawApostrophe(x, y, w, h);
        x = x + w + margin;
        break;
      case '’':
        drawApostrophe(x, y, w, h);
        x = x + w + margin;
        break;
      case '"':
        drawQuote(x, y, w, h);
        x = x + w + margin;
        break;
      case ',':
        drawComma(x, y, w, h);
        x = x + w + margin;
        break;
      case '.':
        drawPeriod(x, y, w, h);
        x = x + w + margin;
        break;
      case ';':
        drawSemicolon(x, y, w, h);
        x = x + w + margin;
        break;
      case ':':
        drawColon(x, y, w, h);
        x = x + w + margin;
        break;
      case ' ':
        x = x + w + margin;
        break;
      default:
        x = x + w + margin;
    }
      
    // Leading
    if (x > (width - w)) {
      y = y + leading;
      x = margin;
    }
  }
}

// Call NY Times Community API

function getCommentAPI(articleURL) {
  var url = "http://api.nytimes.com/svc/community/v3/user-content/url.json";
url += '?' + $.param({
  'api-key': "0f542c2235f34402ac0eeaa51d50edd0",
  'url': articleURL
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
  comment(result);
}).fail(function(err) {
  throw err;
});
  
}

function comment(data) {
  randomComment = data.results.comments[Math.floor(Math.random()*data.results.comments.length)];
  console.log(data.results.comments);
  
  commentContent = randomComment.commentBody;
  console.log(commentContent);
  
  // Get rid of weird break character
  var noBreak = commentContent.replace("<br/>", "");
  
  // Parse comment characters into array
  var char = noBreak.split("");
  
  // Typography settings
  w = 10;
  h = 15;
  margin = 2;
  
  x = margin*10;
  y = 300;
  
  leading = h*1.8;

  // Draw Comment
  for (var i = 0; i < char.length; i++) {
    console.log(char[i]);
    
    switch(char[i].toLowerCase()) {
      case 'a':
        drawA(x, y, w, h);
        x = x + w + margin;
        break;
      case 'b':
        drawB(x, y, w, h);
        x = x + w + margin;
        break;   
      case 'c':
        drawC(x, y, w, h);
        x = x + w + margin;
        break;
      case 'd':
        drawD(x, y, w, h);
        x = x + w + margin;
        break;
      case 'e':
        drawE(x, y, w, h);
        x = x + w + margin;
        break;
      case 'f':
        drawF(x, y, w, h);
        x = x + w + margin;
        break;
      case 'g':
        drawG(x, y, w, h);
        x = x + w + margin;
        break;
      case 'h':
        drawH(x, y, w, h);
        x = x + w + margin;
        break;
      case 'i':
        drawI(x, y, w, h);
        x = x + w + margin;
        break;
      case 'j':
        drawJ(x, y, w, h);
        x = x + w + margin;
        break;
      case 'k':
        drawK(x, y, w, h);
        x = x + w + margin;
        break;
      case 'l':
        drawL(x, y, w, h);
        x = x + w + margin;
        break;
      case 'm':
        drawM(x, y, w, h);
        x = x + w + margin;
        break;
      case 'n':
        drawN(x, y, w, h);
        x = x + w + margin;
        break;
      case 'o':
        drawO(x, y, w, h);
        x = x + w + margin;
        break;
      case 'p':
        drawP(x, y, w, h);
        x = x + w + margin;
        break;
      case 'q':
        drawQ(x, y, w, h);
        x = x + w + margin;
        break;
      case 'r':
        drawR(x, y, w, h);
        x = x + w + margin;
        break;
      case 's':
        drawS(x, y, w, h);
        x = x + w + margin;
        break;
      case 't':
        drawT(x, y, w, h);
        x = x + w + margin;
        break;
      case 'u':
        drawU(x, y, w, h);
        x = x + w + margin;
        break;
      case 'v':
        drawV(x, y, w, h);
        x = x + w + margin;
        break;
      case 'w':
        drawW(x, y, w, h);
        x = x + w + margin;
        break;
      case 'x':
        drawX(x, y, w, h);
        x = x + w + margin;
        break;
      case 'y':
        drawY(x, y, w, h);
        x = x + w + margin;
        break;
      case 'z':
        drawZ(x, y, w, h);
        x = x + w + margin;
        break;
      case '1':
        draw1(x, y, w, h);
        x = x + w + margin;
        break;
      case '2':
        draw2(x, y, w, h);
        x = x + w + margin;
        break;
      case '3':
        draw3(x, y, w, h);
        x = x + w + margin;
        break;
      case '4':
        draw4(x, y, w, h);
        x = x + w + margin;
        break;
      case '5':
        draw5(x, y, w, h);
        x = x + w + margin;
        break;
      case '6':
        draw6(x, y, w, h);
        x = x + w + margin;
        break;
      case '7':
        draw7(x, y, w, h);
        x = x + w + margin;
        break;
      case '8':
        draw8(x, y, w, h);
        x = x + w + margin;
        break;
      case '9':
        draw9(x, y, w, h);
        x = x + w + margin;
        break;
      case '0':
        draw0(x, y, w, h);
        x = x + w + margin;
        break;
      case '!':
        drawExclamation(x, y, w, h);
        x = x + w + margin;
        break;
      case '?':
        drawQuestion(x, y, w, h);
        x = x + w + margin;
        break;
      case '-':
        drawDash(x, y, w, h);
        x = x + w + margin;
        break;
      case '/':
        drawSlash(x, y, w, h);
        x = x + w + margin;
        break;
      case '\'':
      case '‘':
        drawApostrophe(x, y, w, h);
        x = x + w + margin;
        break;
      case '"':
        drawQuote(x, y, w, h);
        x = x + w + margin;
        break;
      case ',':
        drawComma(x, y, w, h);
        x = x + w + margin;
        break;
      case '.':
        drawPeriod(x, y, w, h);
        x = x + w + margin;
        break;
      case ';':
        drawSemicolon(x, y, w, h);
        x = x + w + margin;
        break;
      case ':':
        drawColon(x, y, w, h);
        x = x + w + margin;
        break;
      case ' ':
        x = x + w + margin;
        break;
      default:
        x = x + w + margin;
    }
    
    
      
    // Leading
    if (x > (width - w - (margin*10))) {
      y = y + leading;
      x = margin * 10;
    }
}
  
}

function setup() {
  createCanvas(900, 600);
  background(45);
  strokeJoin(BEVEL);
  stroke(255);
  strokeWeight(1);
  
  noFill();
}

function draw() {

}


function drawA(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*2,hU*4);
      vertex(wU*6,hU*4);
      vertex(wU*4,hU*4);
      vertex(wU*5,hU*0);
      vertex(wU*20,hU*0);
      vertex(wU*15,hU*20);
      vertex(wU*17,hU*20);
      vertex(wU*0,hU*20);
      vertex(wU*3,hU*8);
      vertex(wU*18,hU*8);
    endShape();
  pop();
}

function drawB(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*5,hU*0);
      vertex(wU*20,hU*0);
      vertex(wU*18,hU*8);
      vertex(wU*5,hU*8);
      vertex(wU*17,hU*8);
      vertex(wU*18.5,hU*10);
      vertex(wU*16,hU*20);
      vertex(wU*0,hU*20);
      vertex(wU*2,hU*20);
      vertex(wU*7,hU*0);
    endShape();
  pop();
}

function drawC(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*20,hU*4);
      vertex(wU*16,hU*4);
      vertex(wU*18,hU*4);
      vertex(wU*19,hU*0);
      vertex(wU*5,hU*0);
      vertex(wU*0,hU*20);
      vertex(wU*14,hU*20);
      vertex(wU*15,hU*16);
      vertex(wU*13,hU*16);
      vertex(wU*17,hU*16);
    endShape();
  pop();
}

function drawD(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*5,hU*0);
      vertex(wU*20,hU*0);
      vertex(wU*15,hU*20);
      vertex(wU*0,hU*20);
      vertex(wU*2,hU*20);
      vertex(wU*7,hU*0);
    endShape();
  pop();
}

function drawE(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*5,hU*0);
      vertex(wU*20,hU*0);
      vertex(wU*18,hU*8);
      vertex(wU*3,hU*8);
      vertex(wU*5,hU*0);
      vertex(wU*0,hU*20);
      vertex(wU*15,hU*20);
      vertex(wU*16.5,hU*14);
      vertex(wU*14.5,hU*14);
      vertex(wU*18.5,hU*14);
    endShape();
  pop();
}

function drawF(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*0,hU*20);
      vertex(wU*4,hU*20);
      vertex(wU*2,hU*20);
      vertex(wU*5,hU*8);
      vertex(wU*14,hU*8);
      vertex(wU*13.5,hU*10);
      vertex(wU*14.5,hU*6);
      vertex(wU*14,hU*8);
      vertex(wU*5,hU*8);
      vertex(wU*7,hU*0);
      vertex(wU*5,hU*0);
      vertex(wU*20,hU*0);
      vertex(wU*19.5,hU*2);
    endShape();
  pop();
}

function drawG(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*20,hU*4);
      vertex(wU*16,hU*4);
      vertex(wU*18,hU*4);
      vertex(wU*19,hU*0);
      vertex(wU*5,hU*0);
      vertex(wU*0,hU*20);
      vertex(wU*16,hU*20);
      vertex(wU*18,hU*12);
      vertex(wU*20,hU*12);
      vertex(wU*10,hU*12);
    endShape();
  pop();
}

function drawH(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*5,hU*0);
      vertex(wU*9,hU*0);
      vertex(wU*7,hU*0);
      vertex(wU*2,hU*20);
      vertex(wU*0,hU*20);
      vertex(wU*4,hU*20);
      vertex(wU*2,hU*20);
      vertex(wU*4.5,hU*10);
      vertex(wU*15.5,hU*10);
      vertex(wU*18,hU*0);
      vertex(wU*16,hU*0);
      vertex(wU*20,hU*0);
      vertex(wU*18,hU*0);
      vertex(wU*13,hU*20);
      vertex(wU*11,hU*20);
      vertex(wU*15,hU*20);
    endShape();
  pop();
}

function drawI(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*0,hU*20);
      vertex(wU*20,hU*20);
      vertex(wU*9,hU*20);
      vertex(wU*13,hU*4);
      vertex(wU*9,hU*4);
    endShape();
  
    beginShape();
      vertex(wU*14,hU*0);
      vertex(wU*13.5,hU*2);
    endShape();
  
  pop();
}

function drawJ(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*2,hU*12);
      vertex(wU*0,hU*20);
      vertex(wU*11,hU*20);
      vertex(wU*16,hU*0);
      vertex(wU*12,hU*0);
      vertex(wU*20,hU*0);
    endShape();
  pop();
}

function drawK(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*0,hU*20);
      vertex(wU*4,hU*20);
      vertex(wU*2,hU*20);
      vertex(wU*7,hU*0);
      vertex(wU*9,hU*0);
      vertex(wU*5,hU*0);
      vertex(wU*7,hU*0);
      vertex(wU*4.5,hU*10);
      vertex(wU*18,hU*0);
      vertex(wU*20,hU*0);
      vertex(wU*16,hU*0);
      vertex(wU*18,hU*0);
      vertex(wU*7.04,hU*8.09);
      vertex(wU*18,hU*20);
      vertex(wU*20,hU*20);
      vertex(wU*16,hU*20);
    endShape();
  pop();
}

function drawL(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*20,hU*18);
      vertex(wU*19.5,hU*20);
      vertex(wU*0,hU*20);
      vertex(wU*5,hU*0);
      vertex(wU*7,hU*0);
      vertex(wU*3,hU*0);
    endShape();
  pop();
}

function drawM(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*0,hU*20);
      vertex(wU*4,hU*20);
      vertex(wU*2,hU*20);
      vertex(wU*7,hU*0);
      vertex(wU*7,hU*20);
      vertex(wU*20,hU*0);
      vertex(wU*15,hU*20);
      vertex(wU*13,hU*20);
      vertex(wU*17,hU*20);
    endShape();
  pop();
}

function drawN(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*0,hU*20);
      vertex(wU*4,hU*20);
      vertex(wU*2,hU*20);
      vertex(wU*7,hU*0);
      vertex(wU*13,hU*20);
      vertex(wU*18,hU*0);
      vertex(wU*20,hU*0);
      vertex(wU*16,hU*0);
    endShape();
  pop();
}

function drawO(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*5,hU*0);
      vertex(wU*0,hU*20);
      vertex(wU*15,hU*20);
      vertex(wU*20,hU*0);
      vertex(wU*5,hU*0);
    endShape();
  pop();
}

function drawP(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*0,hU*20);
      vertex(wU*4,hU*20);
      vertex(wU*2,hU*20);
      vertex(wU*7,hU*0);
      vertex(wU*5,hU*0);
      vertex(wU*20,hU*0);
      vertex(wU*18,hU*8);
      vertex(wU*5,hU*8);
    endShape();
  pop();
}

function drawQ(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*20,hU*18);
      vertex(wU*19.5,hU*20);
      vertex(wU*4,hU*20);
      vertex(wU*4,hU*18);
      vertex(wU*0,hU*18);
      vertex(wU*4,hU*0);
      vertex(wU*19,hU*0);
      vertex(wU*15,hU*18);
      vertex(wU*4,hU*18);
    endShape();
  pop();
}

function drawR(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*0,hU*20);
      vertex(wU*4,hU*20);
      vertex(wU*2,hU*20);
      vertex(wU*7,hU*0);
      vertex(wU*5,hU*0);
      vertex(wU*20,hU*0);
      vertex(wU*18,hU*8);
      vertex(wU*15,hU*8);
      vertex(wU*18,hU*20);
      vertex(wU*20,hU*20);
      vertex(wU*16,hU*20);
      vertex(wU*18,hU*20);
      vertex(wU*15,hU*8);
      vertex(wU*5,hU*8);
    endShape();
  pop();
}

function drawS(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*0,hU*12);
      vertex(wU*4,hU*12);
      vertex(wU*2,hU*12);
      vertex(wU*0,hU*20);
      vertex(wU*17,hU*20);
      vertex(wU*20,hU*8);
      vertex(wU*3,hU*8);
      vertex(wU*5,hU*0);
      vertex(wU*19,hU*0);
      vertex(wU*18,hU*4);
      vertex(wU*16,hU*4);
      vertex(wU*20,hU*4);
    endShape();
  pop();
}

function drawT(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*0,hU*2);
      vertex(wU*0.5,hU*0);
      vertex(wU*20,hU*0);
      vertex(wU*19.5,hU*2);
      vertex(wU*20,hU*0);
      vertex(wU*12,hU*0);
      vertex(wU*7,hU*20);
      vertex(wU*9,hU*20);
      vertex(wU*5,hU*20);
    endShape();
  pop();
}

function drawU(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*3,hU*0);
      vertex(wU*7,hU*0);
      vertex(wU*5,hU*0);
      vertex(wU*0,hU*20);
      vertex(wU*13,hU*20);
      vertex(wU*18,hU*0);
      vertex(wU*20,hU*0);
      vertex(wU*16,hU*0);
    endShape();
  pop();
}

function drawV(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*0,hU*0);
      vertex(wU*4,hU*0);
      vertex(wU*2,hU*0);
      vertex(wU*5,hU*20);
      vertex(wU*18,hU*0);
      vertex(wU*20,hU*0);
      vertex(wU*16,hU*0);
    endShape();
  pop();
}

function drawW(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*3,hU*0);
      vertex(wU*7,hU*0);
      vertex(wU*5,hU*0);
      vertex(wU*0,hU*20);
      vertex(wU*9,hU*8);
      vertex(wU*13,hU*20);
      vertex(wU*18,hU*0);
      vertex(wU*20,hU*0);
      vertex(wU*16,hU*0);
    endShape();
  pop();
}

function drawX(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*2,hU*0);
      vertex(wU*6,hU*0);
      vertex(wU*4,hU*0);
      vertex(wU*16,hU*20);
      vertex(wU*18,hU*20);
      vertex(wU*14,hU*20);
      vertex(wU*16,hU*20);
      vertex(wU*10,hU*10);
      vertex(wU*2,hU*20);
      vertex(wU*0,hU*20);
      vertex(wU*4,hU*20);
      vertex(wU*2,hU*20);
      vertex(wU*18,hU*0);
      vertex(wU*20,hU*0);
      vertex(wU*16,hU*0);
    endShape();
  pop();
}

function drawY(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*2,hU*0);
      vertex(wU*6,hU*0);
      vertex(wU*4,hU*0);
      vertex(wU*10,hU*10);
      vertex(wU*2,hU*20);
      vertex(wU*0,hU*20);
      vertex(wU*4,hU*20);
      vertex(wU*2,hU*20);
      vertex(wU*18,hU*0);
      vertex(wU*20,hU*0);
      vertex(wU*16,hU*0);
    endShape();
  pop();
}

function drawZ(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*3,hU*2);
      vertex(wU*3.5,hU*0);
      vertex(wU*20,hU*0);
      vertex(wU*0,hU*20);
      vertex(wU*17.5,hU*20);
      vertex(wU*18,hU*18);
    endShape();
  pop();
}

// Numerals

function draw1(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*6,hU*0);
      vertex(wU*14,hU*0);
      vertex(wU*9,hU*20);
      vertex(wU*0,hU*20);
      vertex(wU*20,hU*20);
    endShape();
  pop();
}

function draw2(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*4,hU*4);
      vertex(wU*5,hU*0);
      vertex(wU*20,hU*0);
      vertex(wU*18,hU*8);
      vertex(wU*3,hU*8);
      vertex(wU*0,hU*20);
      vertex(wU*18,hU*20);
    endShape();
  pop();
}

function draw3(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*4,hU*4);
      vertex(wU*5,hU*0);
      vertex(wU*20,hU*0);
      vertex(wU*18,hU*8);
      vertex(wU*8,hU*8);
      vertex(wU*18,hU*8);
      vertex(wU*15,hU*20);
      vertex(wU*0,hU*20);
      vertex(wU*1,hU*16);
    endShape();
  pop();
}

function draw4(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*12,hU*20);
      vertex(wU*17,hU*0);
      vertex(wU*0,hU*12);
      vertex(wU*20,hU*12);
    endShape();
  pop();
}

function draw5(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*20,hU*0);
      vertex(wU*5,hU*0);
      vertex(wU*3,hU*8);
      vertex(wU*20,hU*8);
      vertex(wU*17,hU*20);
      vertex(wU*0,hU*20);
      vertex(wU*1,hU*16);
    endShape();
  pop();
}

function draw6(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*20,hU*0);
      vertex(wU*5,hU*0);
      vertex(wU*0,hU*20);
      vertex(wU*15,hU*20);
      vertex(wU*18,hU*8);
      vertex(wU*3,hU*8);
    endShape();
  pop();
}

function draw7(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*0,hU*4);
      vertex(wU*1,hU*0);
      vertex(wU*20,hU*0);
      vertex(wU*10,hU*20);
    endShape();
  pop();
}

function draw8(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*5,hU*0);
      vertex(wU*20,hU*0);
      vertex(wU*18,hU*8);
      vertex(wU*3,hU*8);
      vertex(wU*18,hU*8);
      vertex(wU*15,hU*20);
      vertex(wU*0,hU*20);
      vertex(wU*5,hU*0);
    endShape();
  pop();
}

function draw9(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*0,hU*20);
      vertex(wU*15,hU*20);
      vertex(wU*20,hU*0);
      vertex(wU*5,hU*0);
      vertex(wU*3,hU*8);
      vertex(wU*18,hU*8);
    endShape();
  pop();
}

function draw0(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*0,hU*20);
      vertex(wU*5,hU*0);
      vertex(wU*20,hU*0);
      vertex(wU*0,hU*20);
      vertex(wU*15,hU*20);
      vertex(wU*20,hU*0);
    endShape();
  pop();
}

// Punctuation

function drawExclamation(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*12.5,hU*0);
      vertex(wU*8.5,hU*16);
    endShape();
    beginShape();
      vertex(wU*8,hU*18);
      vertex(wU*7.5,hU*20);
    endShape();
  pop();
}

function drawQuestion(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*0,hU*2);
      vertex(wU*0.5,hU*0);
      vertex(wU*20,hU*0);
      vertex(wU*18,hU*8);
      vertex(wU*8.5,hU*8);
      vertex(wU*6.5,hU*16);
    endShape();
    beginShape();
      vertex(wU*6,hU*18);
      vertex(wU*5.5,hU*20);
    endShape();
  pop();
}

function drawComma(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*9.25,hU*17);
      vertex(wU*8.5,hU*20);
    endShape();
  pop();
}

function drawPeriod(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*9.75,hU*19);
      vertex(wU*9.5,hU*20);
    endShape();
  pop();
}

function drawApostrophe(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*10.25,hU*0);
      vertex(wU*9.5,hU*3);
    endShape();
  pop();
}

function drawQuote(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*9.5,hU*3);
      vertex(wU*10.25,hU*0);
    endShape();
    beginShape();
      vertex(wU*11.5,hU*3);
      vertex(wU*12.25,hU*0);
    endShape();
  pop();
}

function drawSlash(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*8.5,hU*20);
      vertex(wU*13.5,hU*0);
    endShape();
  pop();
}

function drawDash(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*4,hU*9);
      vertex(wU*16,hU*9);
    endShape();
  pop();
}

function drawColon(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*11.25,hU*5);
      vertex(wU*10.75,hU*7);
    endShape();
    beginShape();
      vertex(wU*9.25,hU*13);
      vertex(wU*8.75,hU*15);
    endShape();
  pop();
}

function drawSemicolon(x, y, w, h) {
  var wU = w/20;
  var hU = h/20;
  push();
    beginShape();
      translate(x, y);
      vertex(wU*11.25,hU*5);
      vertex(wU*10.75,hU*7);
    endShape();
    beginShape();
      vertex(wU*9.5,hU*12);
      vertex(wU*8.5,hU*16);
    endShape();
  pop();
}
