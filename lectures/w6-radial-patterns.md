# Radial patterns

## Example 1
```java
int numRect = 20;

void setup() {
  size(500, 500);
  //rect will be drawn from the center
  rectMode(CENTER);
}

void draw() {
  background(250);

  //set colors
  fill(255);
  stroke(0);

  for (int i = 0; i < numRect; i++) {
    //pushMatrix and popMatrix always work together. 
    //With pushMatrix, we can temporarily translate or rotate the canvas
    //then with popMatrix, we bring the canvas back to the original position.
    pushMatrix();
    //we are moving the canvas, from now on, (width/2, height/2) becomes (0, 0)
    translate(width / 2, height / 2);
    //rotate the canvas
    rotate(radians(i * 10));
    //draw rect at (0, 0) but because of pushMatrix, translate, it's actually
    //drawn in the middle of screen
    rect(0, 0, 200 - 10 * i, 200 - 10 * i);
    //after using pushMatrix, make sure to use popMatrix.
    popMatrix();
  }
}
```

## Example 2
```java
int numRect = 20;

void setup() {
  size(500, 500);
  //rect will be drawn from the center
  rectMode(CENTER);
}

void draw() {
  background(0);

  //set colors
  noStroke();

  for (int i = 0; i < numRect; i++) {
    //push() and pop() always work together. 
    //With push(), we can temporarily translate or rotate the canvas
    //then with pop(), we bring the canvas back to the original position.
    pushMatrix();
    //we are moving the canvas, from now on, (width/2, height/2) becomes (0, 0)
    translate(width / 2, height / 2);
    //rotate the canvas
    rotate(radians(i * 10 + frameCount * i / 8));
    //draw rect at (0, 0) but because of pushMatrix, translate, it's actually
    //drawn in the middle of screen

    fill(i * 10, 128);
    rect(0, 0, numRect * 20 - 20 * i, numRect * 20 - 20 * i);
    //after using push, make sure to use pop.
    popMatrix();
  }
}
```

### Example 3
```java
/*

 press any key!
 
 */

int numRect = 30;

void setup() {
  size(500, 500);
  //rect will be drawn from the center
  rectMode(CENTER);
}

void draw() {
  background(0);

  noStroke();

  for (int i = 0; i < numRect; i++) {
    //pushMatrix and popMatrix always work together. 
    //With pushMatrix, we can temporarily translate or rotate the canvas
    //then with popMatrix, we bring the canvas back to the original position.
    pushMatrix();
    //we are moving the canvas, from now on, (width/2, height/2) becomes (0, 0)
    translate(width / 2, height / 2);
    //rotate the canvas
    rotate(radians(frameCount * i / 10));
    //draw rect at (0, 0) but because of pushMatrix, translate, it's actually
    //drawn in the middle of screen

    fill(map(i * 10, 0, 300, 0, 255), 200);
    //rect(0, 0, numRect * 20 - 20 * i, numRect * 20 - 20 * i);
    textSize(24 + numRect*20 - 20*i);
    text(key, 0, 0);
    //after using pushMatrix, make sure to use popMatrix.
    popMatrix();
  }
}
```
