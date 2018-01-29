# How to export images
Let's take a look at a few different methods to export images.

## Save
Use these functions to save a single frame.

- [`save(filename)`](https://processing.org/reference/save_.html) will save a single image file. you need to supply the file name you want to use as in `save(myImage.png)`.

## Screenshot
You can always capture a simple screenshot. On Mac, press CMD + Shift + 3 (the whole screen) or CMD + Shift + 4 (a selection).

-----

## Video recording
The best way to capture your work as a video is to use Quicktime Player's screen recording.

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


