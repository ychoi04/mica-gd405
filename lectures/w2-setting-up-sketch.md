# Setting up a Processing sketch

## Folder structure
After you downloaded and opened Processing at least for once, you will find "Processing" folder in your "Documents" folder. This is where every Processing sketch you save will be placed in. It's the default location. You can change the Sketchbook location by going to Preferences, but I will not recommend you change it.

## Sketch structure
When you type in some code and save the sketch, it will be saved to your Sketchbook location as I mentioned it above. Processing code files will have `pde` file extension. So, if you name your sketch "myFirstSketch", then the file saved will look like `myFirstSketch.pde`. You will also see it's actually saved in a folder with the same name `myFirstSketch`. That's how it works. A Processing file (`pde`) **must** be saved inside the folder with the same name. If you somehow change the file name or move it out of the folder, it will not work. Make sure you always keep the file and folder together with the same name.


## Code Structure
For any sketch you will create, you need at least two main code blocks - `setup()` and `draw()`.

```java
void setup() {
  size(400, 400); // create a window with 400 pixel width by 400 pixel height.
}

void draw() {

}
```



