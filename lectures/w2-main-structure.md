# Main Structure

For any sketch you will create, you need at least two main code blocks - `setup()` and `draw()`. The codes inside `setup()` will run only once at the very beginning of the sketch. After that, the codes inside `draw()` will keep running every frame. For example, if you want to move something every frame, that code will need to go inside `draw()`. 

```java
void setup() {
  size(400, 400); // create a window with 400 pixel width by 400 pixel height.
}

void draw() {

}
```

Again, `setup()` will run *once* at the beginning, and then `draw()` will run continuously. For example, we only need to set the window size *once*, therefore, that code will go into the setup function. If you have any interactions that you need to track every frame, you do not want to put the code in the setup as it will only update once. Instead, put it inside the draw function.

Compare the two examples below:

```java
void setup() {
  size(400, 400); // create a canvas of 400 pixel width by 400 pixel height.
  ellipse(mouseX, mouseY, 100, 100);
}

void draw() {
}
```

```java
void setup() {
  size(400, 400); // create a canvas of 400 pixel width by 400 pixel height.
}

void draw() {
  ellipse(mouseX, mouseY, 100, 100);
}
```

What is the difference between the two and what do you think is the reason?

