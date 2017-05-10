//page variables
var numPages,
    pages = [],
    aspectRatio,
    w,
    h;

//image variables
var images = [],
    imagesLoaded = false;

//image orientation filtered arrays
var tallImages = [],
    wideImages = [];

// masks
var pageMask,
    squareMask;

// layout array
var pageLayouts = [];

// if i need dummy text
var dummyText = 'Mr. Trump’s inability to make good on his promise to repeal the Affordable Care Act';

var nFiles;
var numDescriptions = 0;

  

// setup
function setup() {
  //number of pages and sized to fit half letter
  numPages = 12;
  w = 550*1.3;
  h = 850*1.3;
  aspectRatio = h/w;

  // create pages
  for ( i = 0; i < numPages; i++ ){
    pages[i] = createGraphics(w, h);
  }

  // setup canvas
  createCanvas(w, h*numPages);
  frameRate(1);
  
  // array of page layouts
  pageLayouts = [pageLayout1, pageLayout2, pageLayout3, pageLayout4, pageLayout5, pageLayout6, pageLayout7, pageLayout0];
  

}

function draw() {

}

/* Re-encode image string so it can be analyzed by the Computer Vision API to generate a description
https://stackoverflow.com/questions/42599060/cognitive-service-computer-vision-api-returning-cache-control-error
  */
function makeblob(dataURL) {
  var BASE64_MARKER = ';base64,';
  if (dataURL.indexOf(BASE64_MARKER) == -1) {
    var parts = dataURL.split(',');
    var contentType = parts[0].split(':')[1];
    var raw = decodeURIComponent(parts[1]);
    return new Blob([raw], { type: contentType });
  }
  var parts = dataURL.split(BASE64_MARKER);
  var contentType = parts[0].split(':')[1];
  var raw = window.atob(parts[1]);
  var rawLength = raw.length;
  var uInt8Array = new Uint8Array(rawLength);
  for (var i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
  }
  return new Blob([uInt8Array], { type: contentType });
}

/* Call the Computer Vision API
  */
function grabDescription(imgString, key) {
  console.log('testing');
  var params = {
    // Request parameters
    "visualFeatures": "Description"
  };
  
  $.ajax({
    url: "https://westus.api.cognitive.microsoft.com/vision/v1.0/analyze?" + $.param(params),
    beforeSend: function(xhrObj){
      // Request headers
      xhrObj.setRequestHeader("Content-Type","application/octet-stream");
      xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","a5d22fc96ce1459cb4ca3dd1602f3603");
    },
    type: 'POST',
    processData: false,
    // Request body
    data: makeblob(imgString),
    })
    // when request returns
    .done(function(data) {
      // add variable 'description' to every image in our image array
      images[key].description = data.description.captions[0].text
      console.log(key +': '+ images[key].description);
      numDescriptions++
      // if they're all done loading
      if (numDescriptions >= nFiles) {
        console.log("images loaded: descriptions");
        drawPages();
        imagesLoaded = true;
      }
    })
    // if it fails..
    .fail(function() {
      console.log("error, file did not load");
      numDescriptions++
    });
}

// Runs when images are uploaded
function selectFiles() {
  
  // array of files
  var oFiles = document.getElementById("uploadInput").files;
  
  // function to turn image into string
  function create_blob(file, key, callback) {
      var reader = new FileReader();
      reader.onload = function() { callback([reader.result, key]) };
      reader.readAsDataURL(file);
  }
  
  // number of files
  nFiles = oFiles.length;
  
  var loadCount = 0;

  // load uploaded images into array
  for ( i = 0; i < nFiles; i++ ){
    // call API for each specific image to add relevant description
    create_blob(oFiles[i], i, function(blob_string) { grabDescription(blob_string[0], blob_string[1]) });
    images[i] = loadImage('images/' + oFiles[i].name, function() {
      loadCount++;
  // when all images selected are finished loading, draw pages
      if (loadCount >= nFiles) {
        console.log('images loaded: p5');
      }
    });
  }

}

/* reorder images so they are not chronological
http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array */

function shuffleImages(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// randomly pick from tall image array or wide image array
function tallOrWide() {
    var isTall = Math.random() >= 0.5;
  if (isTall) {
    return tallImages;
  } else {
    return wideImages;
  }
}


// pick image from Images array

function getImage(array) {
  // determine if image has already been used
  function isNotUsed(value) {
    return !value.used;
  }
  
  var returnedImage = array.findIndex(isNotUsed);
  
  // when all images have been used once, choose another one randomly
  if (returnedImage == -1){
    returnedImage = Math.floor(Math.random() * array.length);
    
  // make sure it's working  
    console.log('picking-randomly');
  } else {
    console.log('unused image');
  }
  
  // set used to true once its been picked
  array[returnedImage].used = true;
  return array[returnedImage];
}

function drawPages() {
  // run orientation function through each image
  for (i = 0; i < images.length; i++) {
    imgOrientation(images[i]);
  }
  
  // shuffle images
  images = shuffleImages(images);
  
  filterImageArrays();
  
  // Draw cover
  pageLayoutCover(pages[0]);
  image(pages[0], 0, 0);
  
  // page layout and display
  for( i = 1; i < numPages; i++ ) {
    
    //typography
    pages[i].textSize(30);
    
    // choose random layout
    selectLayout = Math.floor(Math.random() * pageLayouts.length);
    pageLayouts[selectLayout](pages[i]);
    
    //pageLayout0(pages[i]);
    
    //display page
    image(pages[i],0,h*i);
  }
}

// determine whether image is tall or wide
function imgOrientation(img) {
    if (img.height / img.width > 1) {
    img.tallImage = true;
    img.used = false;
  } else {
    img.tallImage = false;
    img.used = false;
  }
}

// make 1 array for tall images, 1 for wide images
function filterImageArrays() {
  
  function isTall(value) {
    return value.tallImage;
  }
  
  function isWide(value) {
    return !value.tallImage;
  }
  
  tallImages = images.filter(isTall);
  console.log(tallImages.length);
  
  wideImages = images.filter(isWide);
  console.log(wideImages.length)
}

// crop options
function crop(img, type) {
  switch(type) {
    case 'page':
      // give me an image cropped to page aspect ratio
      return img.get(0, 0, img.height / aspectRatio, img.height);
    case 'square':
      // give me an image cropped to square aspect ratio, based on original AR
      if (img.tallImage){
        return img.get(0, 0, img.width, img.width);
      } else {
        return img.get(0, 0, img.height, img.height);
      }
    case 'tall-half':
      // give me an image cropped to half of the width of the page
      return img.get(0, 0, img.height / aspectRatio / 2, img.height);
    case 'wide-half':
      // give me an image cropped to half of the height of the page
      return img.get(0, 0, img.height / aspectRatio, img.height / 2);
    default:
      // log if anything but above cases are asked for
      console.log('unknown crop type');
  }
}

/*
Compose Cover
Large title text with offset image*/

function pageLayoutCover(page) {
  // I need 1 image, either orientation
  var tempImage = getImage(tallOrWide());
  
  //crop to square
  var crop1 = crop(tempImage, 'square');
  
  //resize image
  crop1.resize(0, page.height/2);
  
  // place image
  page.image(crop1, page.width/3*1.5, page.height/2);
  
  // style and rotate text
  page.push();
    page.textSize(64);
    page.textLeading(70);
    page.textFont("Eczar");
    page.translate(page.width/2, page.height/2);
    page.rotate(HALF_PI*-1);
    page.text(tempImage.description, page.width/-1.5, page.height/-4, page.width/3*4, page.height/3);
  page.pop();
  
}

/*Compose Page Layout 1
Full bleed image with smaller portrait image laid on top, no text */

function pageLayout1(page) {

  // I need 2 images, both tall
  var tempImage = getImage(tallImages);
  var tempImage1 = getImage(tallImages);
  
  // define crop template
  var crop1 = crop(tempImage,'page');
  var crop2 = crop(tempImage1,'page');
  
  crop1.resize(0, page.height);
  crop2.resize(0, page.height);
  
  // full bleed image
  page.image(crop1, 0, 0);
  // overlaid image
  page.push();
    page.imageMode(CENTER);
    page.translate(page.width/2,page.height/2);
    page.scale(0.8, 0.8);
    page.image(crop2, 0, 0);
  page.pop();
}

/*Compose Page Layout 2
one image that is 1/2 of the width of the page, randomly on the right or the left*/

function pageLayout2(page) {
  var tempImage = getImage(tallImages);
  
  var crop1 = crop(tempImage,'tall-half');
  
  crop1.resize(0, page.height);
  
  // randomly determine left or right, style
  var isRight = Math.random() >= 0.5;
  if (isRight) {
    page.image(crop1, page.width/2, 0);
    page.text(tempImage.description, page.width/12, page.height/6, page.width/3, page.height/3);
  } else {
    page.image(crop1, 0, 0);
    page.text(tempImage.description, page.width/5*3, page.height/6, page.width/3, page.height/3);
  }
  
}

/*Compose Page Layout 3
one image that is 1/2 of the height of the page, randomly on the top or the bottom*/

function pageLayout3(page) {
  var tempImage = getImage(wideImages);
  
  var crop1 = crop(tempImage,'wide-half');
  
  crop1.resize(0, page.height/2);
    
  // randomly determine top or bottom
  var isBottom = Math.random() >= 0.5;
  if (isBottom) {
    page.image(crop1, 0, page.height/2);
    page.text(tempImage.description, page.width/8, page.height/6, page.width/2, page.height/3);
  } else {
    page.image(crop1, 0, 0);
    page.text(tempImage.description, page.width/8, page.height/4*3, page.width/2, page.height/3);
  }
}

/*Compose Page Layout 4
3 stacked images of varying heights and widths*/

function pageLayout4(page) {
  var tempImage = getImage(tallOrWide());
  var tempImage2 = getImage(tallOrWide());
  var tempImage3 = getImage(tallOrWide());
  
  // resize based on orientation
  if (tempImage.tallImage) {
    tempImage.resize(0, page.height/2.5);
  } else {
    tempImage.resize(page.height/2.5, 0);
  }
  
  if (tempImage2.tallImage) {
    tempImage2.resize(0, page.height/3);
  } else {
    tempImage2.resize(page.height/3, 0);
  }

  if (tempImage3.tallImage) {
    tempImage3.resize(0, page.height/3);
  } else {
    tempImage3.resize(page.height/3, 0);
  }

  page.imageMode(CENTER);
  
  // draw images
  page.image(tempImage, page.width/4, page.height/3);
  page.image(tempImage3, page.width/3*2, page.height/3*2);
  page.image(tempImage2, page.width/2, page.height/2);
  
  
  // randomly determine text position
  var textPosition = Math.random() >= 0.5;
  if (textPosition) {
    page.text(tempImage.description, page.width/8, page.height/4*3, page.width/2, page.height/3);
  } else {
    page.text(tempImage3.description, page.width/8*3, page.height/4, page.width/2, page.height/3);
  }  

}

/*Compose Page Layout 5
two wide images stacked on top of one another, sometimes with a tall image centered in the middle*/

function pageLayout5(page) {
  var tempImage = getImage(wideImages);
  var tempImage2 = getImage(wideImages);
  var tempImage3 = getImage(tallImages);
  
  var crop1 = crop(tempImage,'wide-half');
  var crop2 = crop(tempImage2,'wide-half');
  var crop3 = crop(tempImage3,'page');
  
  crop1.resize(0, page.height/2);
  crop2.resize(0, page.height/2);
  crop3.resize(0, page.height/2);
  
  // randomly determine top or bottom
  var isBottom = Math.random() >= 0.5;
  if (isBottom) {
    page.image(crop1, 0, page.height/2);
  } else {
    page.image(crop1, 0, 0);
  } 
  
  // call text
  page.text(tempImage2.description, page.width/6, page.height/6, page.width/2, page.height/3);
  
  page.image(crop2, page.width/4, page.height/4);

  
  page.push();
    // subhead typography
    page.textSize(20);
    page.textStyle(BOLD);
    page.textLeading(24);
  
    page.text(tempImage3.description, page.width/6, page.height/6*5, page.width/4, page.height/3);
    page.image(crop3, page.width/2, page.height/2);
  page.pop();
}

/* Compose Page Layout 6
a big pile of small images */

function pageLayout6(page) {
  var tempImage = getImage(tallOrWide());
  var tempImage2 = getImage(tallOrWide());
  var tempImage3 = getImage(tallOrWide());
  var tempImage4 = getImage(tallOrWide());
  var tempImage5 = getImage(tallOrWide());
  var tempImage6 = getImage(tallOrWide());
  var tempImage7 = getImage(tallOrWide());
  var tempImage8 = getImage(tallOrWide());
  var tempImage9 = getImage(tallOrWide());
  var tempImage10 = getImage(tallOrWide());
  
  
  // resize based on orientation
  if (tempImage.tallImage) {
    tempImage.resize(0, page.height/5);
  } else {
    tempImage.resize(page.height/5, 0);
  }
  
  if (tempImage2.tallImage) {
    tempImage2.resize(0, page.height/5);
  } else {
    tempImage2.resize(page.height/5, 0);
  }

  if (tempImage3.tallImage) {
    tempImage3.resize(0, page.height/5);
  } else {
    tempImage3.resize(page.height/5, 0);
  }
  
  if (tempImage4.tallImage) {
    tempImage4.resize(0, page.height/5);
  } else {
    tempImage4.resize(page.height/5, 0);
  }
  
  if (tempImage5.tallImage) {
    tempImage5.resize(0, page.height/5);
  } else {
    tempImage5.resize(page.height/5, 0);
  }
  
  if (tempImage6.tallImage) {
    tempImage6.resize(0, page.height/5);
  } else {
    tempImage6.resize(page.height/5, 0);
  }
  
  if (tempImage7.tallImage) {
    tempImage7.resize(0, page.height/5);
  } else {
    tempImage7.resize(page.height/5, 0);
  }
  
  if (tempImage8.tallImage) {
    tempImage8.resize(0, page.height/5);
  } else {
    tempImage8.resize(page.height/5, 0);
  }
  
  if (tempImage9.tallImage) {
    tempImage9.resize(0, page.height/5);
  } else {
    tempImage9.resize(page.height/5, 0);
  }
  
  if (tempImage10.tallImage) {
    tempImage10.resize(0, page.height/5);
  } else {
    tempImage10.resize(page.height/5, 0);
  }
  
  // combine all image descriptions into one string
  var descriptionsAll = tempImage.description + ' ' + tempImage2.description + ' ' + tempImage3.description + ' ' + tempImage4.description + ' ' + tempImage5.description + ' ' + tempImage6.description + ' ' + tempImage7.description + ' ' + tempImage8.description + ' ' + tempImage9.description + ' ' + tempImage10.description ;
  
  // text placement
  page.push();
    // subhead typography
    page.textSize(20);
    page.textStyle(BOLD);
    page.textLeading(24);
  
  // all image descriptions run together in a block
    page.text(descriptionsAll, page.width/6, page.height/3, page.width/2.5, page.height);
  page.pop();
  
  page.imageMode(CENTER);
  
  // order of 10 images
  page.image(tempImage, page.width/4, page.height/3);
  page.image(tempImage2, page.width/3*2, page.height/3*2);
  page.image(tempImage3, page.width/5*4, page.height/2);
  page.image(tempImage4, page.width/6, page.height/5);
  page.image(tempImage5, page.width/1.8, page.height/2.5);
  page.image(tempImage6, page.width/1.6, page.height/10);
  page.image(tempImage7, page.width/5*4, page.height/5);
  page.image(tempImage8, page.width/4.5, page.height/4*3);
  page.image(tempImage9, page.width/3.75, page.height/3*2.5);
  page.image(tempImage10, page.width/3*2.5, page.height/5*4);
  
}

/*
Compose Page Layout 7
Large offset image, no text*/

function pageLayout7(page) {

  var tempImage = getImage(tallOrWide());
  
  //crop to square
  var crop1 = crop(tempImage, 'square');
  
  //resize image
  crop1.resize(0, page.height/2);
  
  // randomly determine 1 of 2 positions and place
  var isBottom = Math.random() >= 0.5;
  if (isBottom) {
    page.image(crop1, 0, page.height/2);
  } else {
    page.image(crop1, page.width - crop1.width, 0);
  } 
  
}

/*
Compose Page Layout 8
Small offset image, have to name it pageLayout0 or else it breaks */

function pageLayout0(page) {

  var tempImage = getImage(tallOrWide());
  
  //crop to square
  var crop1 = crop(tempImage, 'square');
  
  //resize image
  crop1.resize(0, page.height/4);
  
  console.log(tempImage);
  
  //place image and text
  page.push();
    // large typography
    page.textSize(44);
    page.textLeading(50);
  
    // randomly determine 1 of 2 positions
    var isBottom = Math.random() >= 0.5;
    if (isBottom) {
      page.image(crop1, 0, page.height/2);
      page.text(tempImage.description, page.width/6, page.height/6, page.width/2, page.height/3);
    } else {
      page.image(crop1, page.width - crop1.width, page.height - crop1.height);
      page.text(tempImage.description, page.width/2, page.height/6, page.width/2, page.height/3);
    } 
  page.pop();
}