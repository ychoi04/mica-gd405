# How to export to PDF
If you want to continue working on your images after exporting from Processing, it is best to export as PDF so that you can access all the vector graphic elements. To do that, we will use Processing's PDF library.

## Add the library to your sketch

## Writing a sketch
Here, I will show you the basic structure you can use to export your sketch to SVG file. You can add your own code in the middle area.

```js
function setup() {
	createCanvas(400, 400, SVG); // add a third parameter, SVG.
}

function draw() {
	clear(); // this should be the first line of draw()
	
	/* add your own code below. */
	
	background(200);
	for (var i = 0; i < width; i+=10) {
		line(0, i, i, 0);
	}

}

// press s key to save SVG.
function keyTyped() {
	if (key === 's') {
		save();
	}
}
```

