# Glyph object

If we apply the object-oriented programming concept to our computational type design, we can consider each letter or glyph as an object with its own set of properties and methods.

A class is a blueprint, so you want to decide what data *each* glyph should contain. We can create different glyphs from the same class by changing what data is stored in each. To set the type in a basic way, we will at least need to know which character we want to set, the position of the character, etc.

Once we set each glyph not as a simple character, but as an object with more data stored within, we will be able to control them in many different ways.

```java
class Glyph {
	char gly;
	float ts; // text size;
	float x;
	float y;
	float w; // text width
	
	Glyph(char _gly) {
		gly = _gly;
		ts = 48;
		w = textWidth(gly);
	}
	
	void getWidth() {
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

In the example above, we have five properties and three methods. `gly` value is passed on to the object property `this.gly` at the time of the object creation. `this.size` is initialized internally. `this.x` and `this.y` values are passed on from `this.setPosition` parameters. `this.w` is calculated dynamically by `this.getWidth` method.

Of course, you can add more for your own design requirements. It is your design choice what properties will be determined at the time of creation and what others will be set while running the program.

Now, we can create glyph objects in our main program:

```js
var a;
var b;
var c;

function setup() {
	createCanvas(400, 400);
	textSize(48);
	
	a = new Glyph('a');
	b = new Glyph('b');
	c = new Glyph('c');
}

function draw() {
	background(200);
	
	a.setPosition(50, 50);
	b.setPosition(100, 100);
	c.setPosition(150, 150);
	
	a.draw();
	b.draw();
	c.draw();
}
```

This does not seem like an advance in terms of the flexibility of the layout as we will need to create the glyphs before we run the program. but once we learn how to use *arrays*, we will be able to create a fully interactive type software.

*Exercise: Add more properties and method to your glyph object. Practice using the newly added data in the main program.*
