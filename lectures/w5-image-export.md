# How to export images
Let's take a look at a few different methods to export images.

## Save
`save(filename)` will save a single image file. you need to supply the file name you want to use as in `save("myImage.png")`. Look at [the reference]((https://processing.org/reference/save_.html)) for more info. If you call this function inside `draw()`, your sketch will save a new image *every frame* and overwrite the previous one. This is not a good way of using this function. Instead, use mouse or key interactions to save a file only when you need it:

```java
void setup() {
 size(400, 400);
}

void draw() {
  line(0, 0, width, height);
  ellipse(mouseX, mouseY, 40, 40);
}

void keyPressed() {
 if (key == 's') {
  save("export.png"); 
 }
}
```

## Save frame
`saveFrame()` will save a series of frames from your running sketch. This is great for capturing image sequences for converting to video (in After Effects or Premiere). Look at [the reference](https://processing.org/reference/saveFrame_.html) for more info.

As each frame has the unique frame number, your exported images will not be overwritten.

```java
void setup() {
 size(400, 400);
}

void draw() {
  line(0, 0, width, height);
  ellipse(mouseX, mouseY, 40, 40);
}

void keyPressed() {
 if (key == 's') {
  saveFrame();
  // saveFrame("#####.png");
 }
}
```

## Screenshot
You can always capture a simple screenshot. On Mac, press CMD + Shift + 3 (the whole screen) or CMD + Shift + 4 (a selection).

## Video recording
The best way to capture your work as a video is to use Quicktime Player's screen recording.

<!--
## Saving high resolution image
If you want to save an image that is larger than your screen, you can use the this technique. Say, you have this sketch:

```js
function setup() {
	createCanvas(200, 200);
	frameRate(20);
	background(200);
}

function draw() {	
	ellipse(0, 0, 100, 100);
	ellipse(width, 0, 100, 100);
	ellipse(0, height, 100, 100);
	ellipse(width, height, 100, 100);
	ellipse(width/2, height/2, 100, 100);
	textSize(96);
	text("a", 75, 125);
}
```

Now, you add `scaleFactor` variable, which will scale your canvas up or down. And you will use this variable anytime you are using width and height of the canvas. In the sketch below, you first need to scale your canvas by calling `createCanvas(200 * scaleFactor, 200 * scaleFactor);`. And inside `draw()`, add `scale(scaleFactor)` as the first line so that all the subsequent drawings will be scaled. Any numeric values will be automatically scaled, but for any expressions involving `width` or `height` will need to be scaled accordingly.

```js
var scaleFactor = 5;

function setup() {
	createCanvas(200 * scaleFactor, 200 * scaleFactor);
	frameRate(20);
	background(200);
}

function draw() {
	scale(scaleFactor);
	
	ellipse(0, 0, 100, 100);
	ellipse(width/scaleFactor, 0, 100, 100);
	ellipse(0, height/scaleFactor, 100, 100);
	ellipse(width/scaleFactor, height/scaleFactor, 100, 100);
	ellipse((width/scaleFactor)/2, (height/scaleFactor)/2, 100, 100);
	textSize(96);
	text("a", 75, 125);
}
```
-->

