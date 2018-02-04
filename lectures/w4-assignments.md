# Week 4 assignments

## Video lessons
Watch the videos, follow along, take notes and bring back questions:
  - [6. Loops](https://www.youtube.com/watch?v=RtAPBvz6k0Y&list=PLRqwX-V7Uu6bm-3M4Wntd4yYZGKwiKfrQ)

-----

## Type Design

1. Look back at your previous letter design assignments and choose one design that you want to develop further. (If you have new ideas, you can develop them instead as long as you meet the requirements.)
1. Design more letters. In total, you will have all the vowels (`a`, `e`, `i`, `o`, `u`) + 3 consonants.
1. Now, think about what typographic properties you can control by turning them into *variables/parameters*. Examples include letter width, letter height, x-height, serif, weight, slant, spacing, tracking, color, contrast, roundness, etc.
1. Create functions for drawing each letter. For example, all the drawing code for A will be stored in `drawA()` function, so that when you call the function, you will be able to draw the letter.
1. You must be able to set the type at any location by adding `x` and `y` parameters. Plus, add **two** more parameters of your choice. So, your function may look like this:
  ```
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
  ```
1. In your sketch, write a few different words you can create out of the letters you designed.

### Deliverables
- 5 to 7 screenshots of some design variations (different combina.
- Organize your code! Use comments - `//` and `/* */` to describe what each block does in your program. 
- Post everything on Google Drive.

### Inspirations
- [Wim Crouwel](https://www.google.com/search?q=wim+crouwel&client=safari&rls=en&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiPv7Sz6urRAhUD5CYKHU1bC08Q_AUICCgB&biw=1920&bih=1080#tbm=isch&q=wim+crouwel+type+design)
- [Jurriaan Schrofer](https://www.google.com/search?q=jurriaan+schrofer&client=safari&rls=en&biw=1920&bih=1080&source=lnms&tbm=isch&sa=X&ved=0ahUKEwif-K3V6urRAhVNgiYKHfmBCAkQ_AUIBigB)
- [Norm](https://www.google.com/search?q=norm+swiss+design&client=safari&rls=en&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjW9qX_6urRAhWEVyYKHXPgCawQ_AUICCgB&biw=1920&bih=1080#imgrc=_)
- [Code and Type](http://code-type.com)


1. Refine your design and codes.
1. Restructure your code so that it now uses *functions* for each letter. (refer back to the lecture notes on type setting with functions)
1. Keep working with the parameters. Be flexible so that it can respond to different situations.
1. Design six additional letters. (by next week, you should have at least 16 letters.)
1. Apply conditional statements and keyboard interactions in your code so that the letters can be typed.
1. Animation is not required in this assignment.
1. Post the Codepen link on Google Drive Week 4.
