# Interpolation

## Constrain
```js
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
    ts = constrain(ts, 96, 512);
  }
}
```

## Map
If I want to create a linear gradient, I would probably start like this:
```js
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
The problem is that my canvas width is much larger than `255` or the maximum color value, so the half of my screen is just white. How can we make sure that the gradient spans across the entire width? It's time to use `map()`. `map()` *remaps* a range to a new range. It's like a rubber band that can stretch or shrink.

```js
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
```js
void setup() {
  size(400, 400);
}

void draw() {
  background(200);

  bnwGradient(50, 50, 200, 300);
  bnwGradient(80, 80, 300, 80);
  bnwGradient(250, 300, 100, 80);
}

void bnwGradient(x, y, w, h) {
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
`lerp()` function is like a ruler. You will give it start value, end value, and you can get any number at any increment.

What is the number at 50% location between 0 and 100? That's easy - it's 50.
```js
float num = lerp(0, 100, 0.5);
println(num);
```
But, what about the number at 22% location between 123 and 522?
```js
float num = lerp(123, 522, 0.22);
println(num);
```

If you want an ellipse to be always at 50% location between the mouse position and center of the canvas:
```js
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

```js
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
```js
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


## Further learning
- [Coding Math - Normalization](http://www.codingmath.com/?p=27)
- [Coding Math - Linear interpolation](http://www.codingmath.com/?p=31)
- [Coding Math - Map](http://www.codingmath.com/?p=35)
- [Coding Math - Clamp/constrain](http://www.codingmath.com/?p=39)
- [Dan Shiffman - linear interpolation](https://www.youtube.com/watch?v=8uLVnM36XUc)

