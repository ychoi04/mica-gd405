# Week 4 assignments

## Video lessons
Watch the videos, follow along, take notes and bring back questions:
  - [6. Loops](https://www.youtube.com/watch?v=RtAPBvz6k0Y&list=PLRqwX-V7Uu6bm-3M4Wntd4yYZGKwiKfrQ)

-----

## Type Design

We will continue designing letters and this week, we will have a better structure with functions and flexibility with parameters. It is also a good idea to start thinking about making a full set of letters as that will be our future goal.

1. Look back at your previous letter design assignments and choose one design that you want to develop further. (If you have new ideas, you can develop them instead as long as you meet the requirements.)
1. Design **4 additional letters** on top of what you already have (either CODE, TYPE or FORM). In total, you will have at least 7 letters designed.
1. Now, think about what typographic properties you can control by turning them into *variables/parameters*. Examples include letter width, letter height, x-height, serif, weight, slant, spacing, tracking, color, contrast, roundness, etc.
1. Create functions for drawing each letter. For example, all the drawing code for A will be stored in `drawA()` function, so that when you call the function, you will be able to draw the letter.
1. With a simple function like `drawA()`, you can only draw a letter at a fixed location. You want to be able to set the type at any location by adding `x` and `y` parameters. Plus, add **two** more parameters of your choice. Refer back to the lecture notes on type setting with functions. So, your function may look something like an example below.
1. In your sketch, write a few different words you can create out of the letters you designed.
1. You may use `mouseX` and `mouseY` when you *call* the drawing functions, but the functions themselves should **not** be connected to the mouse position. It should be able to take any kind of input values.

 ```
 // note that the function definition itself does not have any mouse-related variables. that's by design.
  void drawA(float x, float y, float sw, float col) {
    // drawing code goes here
    beginShape();
    .
    .
    translate(x, y);
    strokeWeight(sw);
    fill(col);
    .
    .
  }
  
  // then when you call the function inside draw(), you can connect mouse variables as below:
  void draw() {
    ...
    
    drawA(mouseX, mouseY, 2, color(255, 0, 0) );
    
    ...
  }
  ```

### Deliverables
- Try creating a few different words with your letters.
- 5 to 7 screenshots of some design variations (different combinations of your parameters).
- Organize your code! Use comments - `//`(single line) and `/* */`(multi lines) to describe what each block does in your program. 
- Post everything on Google Drive.

### Inspirations
- [Wim Crouwel](https://www.google.com/search?q=wim+crouwel&client=safari&rls=en&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiPv7Sz6urRAhUD5CYKHU1bC08Q_AUICCgB&biw=1920&bih=1080#tbm=isch&q=wim+crouwel+type+design), [Dutch Profile: Wim Crouwel video](https://www.youtube.com/watch?v=DAsk8Q_dFj8)
- [Jurriaan Schrofer](https://www.google.com/search?q=jurriaan+schrofer&client=safari&rls=en&biw=1920&bih=1080&source=lnms&tbm=isch&sa=X&ved=0ahUKEwif-K3V6urRAhVNgiYKHfmBCAkQ_AUIBigB)
- [Norm](https://www.google.com/search?q=norm+swiss+design&client=safari&rls=en&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjW9qX_6urRAhWEVyYKHXPgCawQ_AUICCgB&biw=1920&bih=1080#imgrc=_)
- [Code and Type](http://code-type.com)

