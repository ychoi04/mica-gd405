# Conditionals
Conditionals are everywhere in softwares. Anytime you want to diverge and create different results based on different situations, you will use the conditionals. Here, we will look at a few simple examples.

## Boolean

A boolean expression can be evaluated to either true or false. It will always be either true or false.

```js
println(3 < 4);
println(3 + 4 == 7);
println(4 + 4 < 7);
```

## If statement
We can use the boolean expression to run the code only when a condition is met (true):

```js
void draw() {
  background(0, 255, 0);
  if (mouseX < width/2) {
    background(255, 0, 0);
  }
}
```
## else
We can improve the previous example by adding `else` - what happens when the condition is not met (false):

```js
void draw() {
  if (mouseX < width/2) {
    background(255, 0, 0);
  } else {
    background(0, 255, 0);
  }
}
```

Another example:

```java
void setup() {
 size(400, 400); 
}

void draw() {
  background(255);
  fill(0);
  if (mouseX > width/2) {
    rect(width/2, 0, width/2, height);
  } else {
    rect(0, 0, width/2, height);
  }
}
```

## else if, AND(&&), OR(||)
We can check multiple conditions by using `if`, `else if`, `else` and `&&`(and) nd `||`(or):

```js
void draw() {
	background(200);
	
  if (mouseX < width/3) {
    rect(0, 0, width/3, height);
  } else if (mouseX >= width/3 && mouseX < width/3*2){
    rect(width/3, 0, width/3, height);
  } else {
		rect(width/3*2, 0, width/3, height);
	}
}
```

*Exercise: Can you develop the example above so that you can hover over four different quadrants of your sketch? You will need to use `if`, `else if` and `else`.*

## Events
### Mouse press
We can set the condition to check if the mouse is pressed, using the system variable `mousePressed`. This is a boolean variable, meaning it will always be either true or false. If you press your mouse, `mousePressed` will be `true`, if not, `false`.

```js
void setup() {
  size(400, 400);
  textAlign(CENTER, CENTER);
}

void draw() {
  background(200);
	
  if (mousePressed == true) {
    textSize(128);
  } else {
    textSize(24);
  }
  text("HEY", width/2, height/2)
}
```

We can also check which mouse button is pressed by using nested if statements.

```js
void setup() {
	size(400, 400);
	textAlign(CENTER, CENTER);
}

void draw() {
  background(200);
	
  if (mousePressed == true) {
    textSize(128);
		if (mouseButton == LEFT) {
			fill(255, 0, 0);
		} else {
			fill(0, 255, 0);
		}
  } else {
		textSize(24);
		fill(0);
	}
	text("HEY", width/2, height/2)
}
```

### Key press
Similarly, we can check if a key is pressed.

```js
void setup() {
	size(400, 400);
	background(200);
	textAlign(CENTER, CENTER);
}

void draw() {
  
	textSize(160);
	if (keyPressed) {
		fill(random(255));
		text(key, random(width), random(height));
	}
}
```

Notice that as long as you hold down a key, the if statement gets checked every frame. It is because the statement is inside `draw()`, which keeps running. If you only want to check the keypress once, there is another way.

### Key press function

```js
void draw() {
  
}

void keyPressed() {
	textSize(160);
	if (keyPressed) {
		fill(random(255));
		text(key, random(width), random(height));
	}
}
```

Here, I am suing `keyTyped()`, not `keyPressed()` so that I can differentiate between uppercase and lowercase characters.

### Saving image with keypress

```js
void keyPressed() {
	if (key == '=') {
		save(month() + "-" + day() + "-" + hour() + "-" + minute() + "-" + second() + ".png");
	}
}
```


-----
*Exercise: Look at [p5.js Reference](http://p5js.org/reference/). There are a few different functions related to key presses. See if you can connect different keys to draw different shapes. For example, can you connect arrow keys to move your shape up, down, left and right?*

*Exercise: Can you create a simple painting program, where each key is mapped to a different color?*

*Exercise: Think about interesting conditions you can apply to your type design. This will be a good first step in thinking about design that responds to conditions and environments.*
