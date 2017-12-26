# Motion

## 1 dimensional motion

```js
var xpos; //global to make it accessible from everywhere.

function setup() {
  createCanvas(400, 400);
  textSize(96);
  
  xpos = 0;
}

function draw() {
  background(200);
  
  text("hello", xpos, height/2);
  xpos += 1; // this determines the speed (change of location)
  // xpos += 5; // increase value for fast movement
}

function mousePressed() {
  xpos = mouseX;
}
```

### Edge handling: scroll
```js
var xpos; //global to make it accessible from everywhere.
var str;

function setup() {
  createCanvas(400, 400);
  textSize(96);
  
  xpos = 0;
  str = "hello";
}

function draw() {
  background(200);
  
  text(str, xpos, height/2);
  xpos += 3; // this determines the speed (change of location)
  
  if (xpos > width) {
    xpos = -textWidth(str);
  }
}

function mousePressed() {
  xpos = mouseX;
}
```

### Edge handling: bounce
```js
var xpos;
var xspeed;
var str;

function setup() {
  createCanvas(400, 400);
  textSize(96);
  
  xpos = 0;
  xspeed = 3;
  str = "hello";
}

function draw() {
  background(200);
  
  text(str, xpos, height/2);
  xpos += xspeed;
  
  if (xpos > width - textWidth(str)) {
    xpos = width - textWidth(str)
    xspeed *= -1;
  }
  if (xpos < 0) {
    xpos = 0;
    xspeed *= -1;
  }
}

function mousePressed() {
  xpos = mouseX;
}
```

## 2 dimensional motion
```js
var str;
var xpos;
var ypos;
var xspeed;
var yspeed;

function setup() {
  createCanvas(400, 400);
  textSize(48);
  
  str = "hello";
  xpos = width/2;
  ypos = height/2;
  xspeed = random(2, 5);
  yspeed = random(2, 5);
}

function draw() {
  background(200);
  
  // draw
  text(str, xpos, ypos);
  
  // update
  xpos += xspeed;
  ypos += yspeed;
  
  // check boundary
  if (xpos < 0 || xpos > width - textWidth(str)) {
    xspeed *= -1;
  }
  if (ypos < 40 || ypos > height ) {
    yspeed *= -1;
  }
}
```
We can see from the example above that our code has three components - drawing, updating and checking boundaries.



