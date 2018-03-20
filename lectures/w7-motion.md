# Motion

## 1 dimensional motion

```java
float xpos; //global to make it accessible from everywhere.

void setup() {
  size(400, 400);
  textSize(96);
  
  xpos = 0;
}

void draw() {
  background(200);
  
  text("hello", xpos, height/2);
  xpos += 1; // this determines the speed (change of location)
  // xpos += 5; // increase value for fast movement
}

void mousePressed() {
  xpos = mouseX;
}
```

### Edge handling: scroll
```java
float xpos; //global to make it accessible from everywhere.
String str;

void setup() {
  size(400, 400);
  textSize(96);
  
  xpos = 0;
  str = "hello";
}

void draw() {
  background(200);
  
  text(str, xpos, height/2);
  xpos += 3; // this determines the speed (change of location)
  
  if (xpos > width) {
    xpos = -textWidth(str);
  }
}

void mousePressed() {
  xpos = mouseX;
}
```

### Edge handling: bounce
```java
float xpos;
float xspeed;
String str;

void setup() {
  size(400, 400);
  textSize(96);
  
  xpos = 0;
  xspeed = 3;
  str = "hello";
}

void draw() {
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

void mousePressed() {
  xpos = mouseX;
}
```

## 2 dimensional motion
```js
String str;
float xpos;
float ypos;
float xspeed;
float yspeed;

void setup() {
  size(400, 400);
  textSize(48);
  
  str = "hello";
  xpos = width/2;
  ypos = height/2;
  xspeed = random(2, 5);
  yspeed = random(2, 5);
}

void draw() {
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



