# Type Setting with Array

We will continue from [this Glyph object example](https://github.com/cdaein/mica-gd405-sp17/blob/gh-pages/lectures/w8/object-glyph.md). Now it's possible to dynamically type and remove letters.

## Main sketch
```
Glyph[] typed;
int total = 0; // keep track of number of glyphs typed

void setup() {
 size(400, 400);
 textSize(48);
 
 typed = new Glyph[100]; // this array can store 100 glyph objects.
}

void draw() {
  background(234);
  
  float xpos = 50;
  float ypos = 100;
  //float leading = 50;
  float leading = map(mouseY, 0, height, 5, 150);
  
  for (int i = 0; i < total; i++) {
    Glyph g = typed[i]; // get Glyph object at i index.
    g.setPosition(xpos, ypos);
    g.draw();
    
    xpos += g.getWidth();
    // line break
    if (xpos > width - 50) {
     xpos = 50;
     ypos += leading;
    }
  }
}

void keyPressed() { 
  Glyph g = new Glyph(key);
  typed[total] = g;
  
  total++;
  // make sure we don't try to go beyond typed array length
  if (total >= typed.length) {
    total = typed.length - 1;
  }
}
```

## Glyph class
The Glyph class is the same as before.

```
class Glyph {
  char gly;
  float ts; // text size;
  float x;
  float y;
  float w; // text width
  
  Glyph(char _gly) {
    gly = _gly;
    ts = 48;
    textSize(ts);
    w = textWidth(gly);
  }
  
  float getWidth() {
    return w;
  };
  
  void setPosition(float _x, float _y) {
    x = _x;
    y = _y;
  };
  
  void draw() {
    textSize(ts);
    fill(0);
    text(gly, x, y);
  };
}
```
*Exercise: What other functionalities can you add to the Glyph object?*
