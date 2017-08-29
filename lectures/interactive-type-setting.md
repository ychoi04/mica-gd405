# Interactive type setting

## Control over each letter

```js
var message = "Hello there.";

function setup() {
  createCanvas(500, 500);
  noLoop();
  
  randomSeed(12346);
}

function draw() {
  background(200);
  
  textSize(32);
  text(message, 50, 100);
  var xpos = 50;
  for (var i = 0; i < message.length; i++) {
    var ts = random(12, 128);
    textSize(ts);
    text(message[i], xpos, 200);
    xpos += textWidth(message[i]);
  }
}
```

- loop
- array
- parameters: lineWidth, lineHeight, textSize, etc.
