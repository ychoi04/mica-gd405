# Type Setting - page setting
Now you know the basics of the conditionals and how to use them, let's look at how we might apply this technique to our type setting. At the end of this posting, you will be able to type in the letters with your keyboard while the program is running.

## From where we left off
Last week, we converted our drawing codes into function blocks so each letter now has its own drawing function such as `drawA()`, `drawB()`, etc. Then, we added two parameters to make the type setting more flexible such as `drawA(x, y)`, `drawB(x, y)`, etc. With these two parameters of `x` and `y`, you can place your type anywhere you want.

And then, we pushed further by adding more parameters - this is where you need to decide what properties of your design you want to control and make it responsive. Now is also a good time to also think about *why* you want to control these parameters, related to your concept.

## Adding parameters
In terms of adding more parameters, I will continue with my example. For the simplicity's sake, I will only develop my letter A and B.

```js
void drawA(float x, float y) {
	pushMatrix();
	translate(x, y);
	beginShape();
	vertex(10,50);
	vertex(20,40);
	vertex(50,40);
	vertex(50,60);
	vertex(50,90);
	vertex(10,90);
	vertex(10,70);
	vertex(20,60);
	vertex(50,60);
	endShape();
	line(60, 100, 50, 90);
	popMatrix();
}

void drawB(float x, float y) {
	pushMatrix();
	translate(x, y);
	beginShape();
	vertex(10,10);
	vertex(10,40);
	vertex(10,80);
	vertex(20,90);
	vertex(50,90);
	vertex(50,50);
	vertex(40,40);
	vertex(10,40);
	endShape();
	popMatrix();
}
```

In the example above, I have two parameters to control `x` and `y` position of where it will be drawn to. I continued and added two more parameters to control slant and roundness.

For the slant, I am moving my points/vertices left and right, meaning I only need to add some offset to x coordinate of each point, and I wanted to do this proportionally. That's why you see something like `sl * 5/8` in the code below. When I call the function, I can control how much it slants.

The results are as below:

```js
void drawA(float x, float y, float sl) {
	pushMatrix();
	translate(x, y);
	beginShape();
	vertex(10+sl*4/8,50);
	vertex(20+sl*5/8,40);
	vertex(50+sl*5/8,40);
	vertex(50+sl*3/8,60);
	vertex(50,90);
	vertex(10,90);
	vertex(10+sl*2/8,70);
	vertex(20+sl*3/8,60);
	vertex(50+sl*3/8,60);
	endShape();
	line(60-sl*1/8, 100, 50, 90);
	popMatrix();
}

void drawB(float x, float y, float sl) {
	pushMatrix();
	translate(x, y);
	beginShape();
	vertex(10+sl,10);
	vertex(10+sl*5/8,40);
	vertex(10+sl*1/8,80);
	vertex(20,90);
	vertex(50,90);
	vertex(50+sl*4/8,50);
	vertex(40+sl*5/8,40);
	vertex(10+sl*5/8,40);
	endShape();
	popMatrix();
}
```

Anytime you are adding something, make sure you *test* often.

```js
void draw() {
	background(240);
	drawA(100, 100, 20);
	drawB(180, 100, -20);
	drawB(250, 100, -20);
}
```
Great. It works. These functions you built now can take any values. If you wanted to have a single variable that controls the slant of all the letters, you can create a global variable like this:

```js
float slant = 20; // change this value

void setup() {
	size(600, 600);
	noFill();
}

void draw() {
	background(240);
	drawA(100, 100, slant);
	drawB(170, 100, slant);
	drawB(240, 100, slant);
}
```

## Typing with keyboard

Now, let's make this interactive because you don't want to stop the program and add the function calls everytime you want to draw more letters.

If you think about our program as a typewriter, the typewriter needs to know where in the canvas you want to place the new characters, so the carriage moves everytime you type a key. And everytime there is a line break, it comes back to its original position.

In our sketch, that's what variables are for - to remember the current position. Everytime we draw a letter, we move the `x` position to the right. When there is a line break, we will need to update the `y` position:

```js
float x = 0;
float y = 0;
float slant = -10;

void setup() {
	size(600, 600);
	noFill();
	
	drawA(x, y, slant);
	x += 70;
	drawB(x, y, slant);
	x += 70;
	drawB(x, y, slant);
	x += 70;
}
```

Notice that we are not using `draw()` in this example because to remember all the letters typed in and redraw every frame, it will require a different technique. For now, just think about the typewriter - once you type a letter, it will remain there. Let's move this code block into `keyPressed()` function so that letter drawing functions will get called when a user types.

```js
float x = 0;
float y = 0;
float slant = -10;

void setup() {
	size(600, 600);
	noFill();
}

void draw() {
	// nothing in draw
}

void keyPressed() {
	if (key == 'a') {
		drawA(x, y, slant);
		x += 60; // 60 is letter width in this example
	} else if (key == 'b') {
		drawB(x, y, slant);
		x += 60;
	} else if (key == ' ') {
		x += 60;
	}
}
```

You can now type with your keyboard and each drawing functions will be called (well, only for A and B in our example.). Any issues you see? As you add more letters, `x` values get increased and you are off the canvas. We need a line break.

## Adding a line break.
A line break here is simply adding some amount of number to the `y` position. I added a few lines of code into `keyPressed()` function definition. What it does is when `x` becomes greater than `width - 60`, set the `x` back to zero (remember the typewriter carriage.), and add `100` to `y`.

```js
void keyPressed() {
	if (key == 'a') {
		drawA(x, y, slant);
		x += 60; // 60 is letter width in this example
	} else if (key == 'b') {
		drawB(x, y, slant);
		x += 60;
	} else if (key == 'c') {
		drawC(x, y, slant);
		x += 60;
	} else if (key == ' ') {
		x += 60;
	}

	if (x > width - 60) {
		x = 0;
		y += 100; // 100 is line height in this example
	}
}
```

## Adding margins
With this type system, we can start adding more variables and we will be able to control more typographic properties. Let's see how we can add some margins around the canvas.

We add two more global variables, `xmargin` and `ymargin`, and we just need to use them. First place to use it is when we set the default `x` and `y` position in `setup()`.

```js
float x;
float y;
float xmargin = 20;
float ymargin = 20;
float slant = -10;

void setup() {
	size(600, 600);
	noFill();
	x = xmargin;
	y = ymargin;
}

void draw() {
	// nothing here
}
```

Then, anytime we need to reset the `x` position, instead of putting it back to zero, we put it back to `xmargin` value.

```js
void keyPressed() {
	if (key == 'a') {
		drawA(x, y, slant);
		x += 60;
	} else if (key == 'b') {
		drawB(x, y, slant);
		x += 60;
	} else if (key == 'c') {
		drawC(x, y, slant);
		x += 60;
	} else if (key == ' ') {
		x += 60;
	}

	if (x > (width + 60)) {
		x = xmargin;
		y += 100;
	}
}
```

In this posting, we looked at how to work with the conditionals and keyboard events to add some basic interactions to our program. Hopefully, you will feel more comfortable with the process - starting from special cases and moving to general cases by adding parameters to your design. We cannot add animation here yet because we have not learned how to store the data (multiple values). That will require using loops and arrays, which we will talk about in the coming weeks.

-----
*Exercise: Can you identify which code affects the leading and convert it into a variable? Converting into a variable means that we can revisit and easily update its value.*

*Exercise: We don't have any real-time interactions other than typing, but can you make it so that every letter typed in will have a little random offset in its position or slant? How about slant keep increasing as you type more letters?*

*Exercise: What other things do you want to control? Again, work on a single letter to test your concept out, and when it works, apply it to all the letters to make it a general rule.*


