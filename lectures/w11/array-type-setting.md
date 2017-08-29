# Type Setting with Array

We will continue from [this Glyph object example](https://github.com/cdaein/mica-gd405-sp17/blob/gh-pages/lectures/w8/object-glyph.md). Now it's possible to dynamically type and remove letters.

```js
var typed = []; // we will store typed glyph information here.

function setup() {
	createCanvas(400, 400);
	textSize(48);
}

function draw() {
	background(200);
	
	var xpos = 50; // beginning location
	var ypos = 50;
	var leading = map(mouseY, 0, height, 8, 50); // dynamic leading
	
	// loop through every Glyph objects stored in typed array.
	// we do this every frame.
	for (var i = 0; i < typed.length; i++) {
		var g = typed[i]; // get the object at i index.
		g.setPosition(xpos, ypos);
		g.draw();
		
		xpos += g.getWidth(); // update xpos for the next glyph
		if (xpos > width - 50) { // line break
			xpos = 50;
			ypos += leading;
		}
	}
	
	// check the current xpos, ypos
	//stroke(255, 0, 0);
	//line(xpos, ypos, xpos, ypos-leading);
}

function keyPressed() {
	// when delete key is pressed, remove the last item from the array.
	if (keyCode == DELETE || keyCode == BACKSPACE) {
		typed.splice(typed.length-1, 1);
	}
}

function keyTyped() {
	// each time you type a key, it will create a Glyph object
	// and get pushed(stored) in typed array.
	var g = new Glyph(key);
	typed.push(g);
}

// glyph object constructor function
function Glyph(gly) {
	this.gly = gly;
	this.x;
	this.y;
	this.w;
	
	// we need to calculate glyph width to have a correct tracking.
	this.getWidth = function() {
		this.w = textWidth(this.gly);
		return this.w;
	};
	
	this.setPosition = function(x, y) {
		this.x = x;
		this.y = y;
	};
	
	this.draw = function() {
		fill(0);
		noStroke();
		text(this.gly, this.x, this.y);
	};
	
}
```

*Exercise: What other functionalities can you add to the Glyph object?*
