# Rain drop object example

```java
Drop d1;
Drop d2;

void setup() {
 size(500, 500); 
 
  d1 = new Drop(100, 100);
  d2 = new Drop(300, 100);
}

void draw() {
  background(234);

  d1.display();
  d1.update();
  d1.checkEdge();
  
  d2.display();
  d2.update();
  d2.checkEdge();
}

class Drop {
  float x;
  float y;
  float len;
  float yspeed;
  
  // _x and _y are used to pass the values to x and y so that they can be stored and used later.
  Drop(float _x, float _y) {
    x = _x;
    y = _y;
    len = 40;
    yspeed = 5;
  }
  
  void display() {
    line(x, y, x, y-len);
  }
  void update() {
    y += yspeed;
  }
  void checkEdge() {
    if (y >= height + len) {
      y = 0;
      x = random(width);
    }
  }
}
```
