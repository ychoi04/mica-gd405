# Interpolation
It's all about how we manipulate numbers in different ways to get what we need. Here are a few different ways to control the numbers.

## Constrain
https://processing.org/reference/constrain_.html

```java
int ts; // text size

void setup() {
  size(400, 400);
  textAlign(CENTER, CENTER);
  ts = 128;
}

void draw() {
  background(200);

  textSize(ts);
  text("a", width/2, height/2);

  if (keyPressed) {
    if (keyCode == LEFT) {
      ts -= 4;
    } else if (keyCode == RIGHT) {
      ts += 4;
    }
    // when ts gets smaller or bigger than the set range, it will be clamped.
    ts = constrain(ts, 96, 512);
  }
}
```

## Map
If I want to create a linear gradient, I would probably start like this:
```java
void setup() {
  size(400, 400);
}

void draw() {
  background(200);

  for (int i = 0; i < width; i++) {
    stroke(i);
    line(i, 0, i, height);
  }
}
```
The problem is that my window size is much larger than `255` or the maximum color value, so the half of my screen is just white. How can we make sure that the gradient spans across the entire width? It's time to use `map()`. `map()` *remaps* a range to a new range. It's like a rubber band that can stretch or shrink.

```java
void setup() {
  size(400, 400);
}

void draw() {
  background(200);

  for (int i = 0; i < width; i++) {
    float x = map(i, 0, width, 0, 255);
    stroke(x);
    line(i, 0, i, height);
  }
}
```

While we're at it, let's make it into a function so that we can reuse.
```java
void setup() {
  size(400, 400);
}

void draw() {
  background(200);

  bnwGradient(50, 50, 200, 300);
  bnwGradient(80, 80, 300, 80);
  bnwGradient(250, 300, 100, 80);
}

void bnwGradient(float x, float y, float w, float h) {
  pushMatrix();
  translate(x, y);
  for (int i = 0; i < w; i++) {
    float c = map(i, 0, w, 0, 255);
    stroke(c);
    line(i, 0, i, h);
  }
  popMatrix();
}
```
If you are interested in more gradients, take a look at these examples - [linear gradient](https://p5js.org/examples/color-linear-gradient.html) and [radial gradient](https://p5js.org/examples/color-radial-gradient.html).

## Linear interpolation, or lerp
https://processing.org/reference/lerp_.html
`lerp()` function is like a ruler. You will give it start value, end value, and you can get any number at any increment.

What is the number at 50% location between 0 and 100? That's easy - it's 50.
```java
float num = lerp(0, 100, 0.5);
println(num);
```
But, what about the number at 22% location between 123 and 522?
```java
float num = lerp(123, 522, 0.22);
println(num);
```

If you want an ellipse to be always at 50% location between the mouse position and center of the canvas:
```java
float xpos;
float ypos;

void setup() {
  size(400, 400);
  
  xpos = width/2;
  ypos = height/2;
}

void draw() {
  background(200);

  float newX = lerp(xpos, mouseX, 0.5);
  float newY = lerp(ypos, mouseY, 0.5);
  
  ellipse(newX, newY, 40, 40);
}
```

To push it further, you want the ellipse to move towards your mouse by 10% each frame, we get an interesting deceleration movement:

```java
float xpos;
float ypos;

void setup() {
  size(400, 400);
  xpos = width/2;
  ypos = height/2;
}

void draw() {
  background(200);

  xpos = lerp(xpos, mouseX, 0.1);
  ypos = lerp(ypos, mouseY, 0.1);
  
  ellipse(xpos, ypos, 40, 40);
}
```

Or, even better:
```java
float xpos;
float ypos;
float targetX;
float targetY;

void setup() {
  size(400, 400);
  xpos = targetX = width/2;
  ypos = targetY = height/2;
}

void draw() {
  background(200);

  xpos = lerp(xpos, targetX, 0.1);
  ypos = lerp(ypos, targetY, 0.1);

  ellipse(xpos, ypos, 20, 20);
}

void mousePressed() {
  targetX = mouseX;
  targetY = mouseY;
}
```

## Growing path using lerp()
Because now we can get any coordinate between any two points, it can also be used to animate a path growing.

```java
float x1;
float y1;
float x2;
float y2;
float amt = 0; // between 0 and 1; 0 will be beginning number, 1 will be ending number.

void setup() {
 size(400, 400);
 
 x1 = 50;
 y1 = 50;
 x2 = 250;
 y2 = 320;
}

void draw() {
  background(234);
  
  // get a coordinate somewhere inbetween. we have to do this for each dimension separately.
  float midx = lerp(x1, x2, amt);
  float midy = lerp(y1, y2, amt);
  
  // draw a line starting from (x1, y1) to somewhere in the middle (midx, midy)
  // if amt is 0, (midx, midy) will be same as (x1, y1) so no line will be displayed.
  // if amt is 1, (midx, midy) will be same as (x2, y2) so the full line will be drawn.
  line(x1, y1, midx, midy);
  
  // amt should be between 0 and 1
  amt = map(mouseX, 0, width, 0, 1);
}
```

I decided to make it into a function with input parameters for multiple line segments:

```java
// define a series of (x, y) coordinates
float[] xs = { 20, 140, 160, 200, 323 };
float[] ys = { 50, 120, 390, 220, 180 };
float amt = 0; // betwee  0 and 1

void setup() {
  size(500, 500);
  strokeWeight(2);
}

void draw() {
  background(234); 
  noFill();

  growLine(xs, ys, amt);
  
  amt += 0.01;
  if (amt >= 1) {
    amt = 0;
  }
}

/*
growLine() takes array as inputs so you can draw as many line segments as needed.
*/
void growLine(float[] txs, float[] tys, float tamt) {
  if (tamt <= 0) return;

  float nx = 0;
  float ny = 0;
  
  beginShape();
  vertex(txs[0], tys[0]);
  int numPoints = txs.length;
  for (int i = 0; i < numPoints-1; i++) {
    float currOffset = (float)i/numPoints;
    float nextOffset = (float)(i+1)/numPoints;
    if (tamt >= currOffset) {
      float amtMapped = map(tamt, currOffset, nextOffset, 0, 1);
      nx = lerp(txs[i], txs[i+1], constrain(amtMapped, 0, 1));
      ny = lerp(tys[i], tys[i+1], constrain(amtMapped, 0, 1));
      stroke(0);
      vertex(nx, ny);
    }
  }
  endShape();
}
```

## Further learning
- [Coding Math - Normalization](http://www.codingmath.com/?p=27)
- [Coding Math - Linear interpolation](http://www.codingmath.com/?p=31)
- [Coding Math - Map](http://www.codingmath.com/?p=35)
- [Coding Math - Clamp/constrain](http://www.codingmath.com/?p=39)
- [Dan Shiffman - linear interpolation](https://www.youtube.com/watch?v=8uLVnM36XUc)

