# Bouncing Balls with Array

Main sketch:

```java
Ball[] balls = new Ball[500];

void setup() {
  size(600, 600);

  for (int i=0; i<balls.length; i++) {
    balls[i] = new Ball(width/2, height/2);
  }
}

void draw() {
  background(0);

  for (int i=0; i<balls.length; i++) {
    balls[i].update();
    balls[i].bounce();
    balls[i].display();
  }
}
```

Ball class:

```java
class Ball {
  float xpos;
  float ypos;
  float xspeed;
  float yspeed;

  Ball(float _x, float _y) {
    xpos = _x;
    ypos = _y;
    xspeed = random(-2, 2);
    yspeed = random(-2, 2);
  }

  void update() {
    xpos += xspeed;
    ypos += yspeed;
  }

  void display() {
    fill(255);
    stroke(0);
    ellipse(xpos, ypos, 10, 10);
  }

  void bounce() {
    if ( (xpos >= width) || (xpos <= 0) ) {
      xspeed *= -1;
      
    }
    if ( (ypos >= height) || (ypos <= 0) ) {
      yspeed *= -1;
    }
  }
}
```
