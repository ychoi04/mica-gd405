/*
Jen Evans
Generative Type Final Project, Spring 2017
Design studio bio generator using Markov Chains and Rita.js library

https://rednoise.org/rita/index.php
*/


// Markov Generator object
var generator;

function setup() {
  noCanvas();
  // Markov Generator
  // First argument is N-gram length, second argument is max length of generated text
  generator = new RiMarkov(2);
  generator.loadFrom('data/studio.txt', function(){
    generate('#p1', 3);
    generate('#p2', 5);    
  });
  
  // reload button
  var button = select('#button');
  button.mousePressed( function() {
    generate('#p1', 3);
    generate('#p2', 5);
  });
  
  // call weather function
  weatherSetup();
} 

function generate(elem, num) {
  // Display generated text
  var output = select(elem);
  var text = generator.generateSentences(num);
  var texthtml = '';

  output.html(text.join(' '));
  console.log(text);
}


/*Weather from SimpleWeather jquery library*/

// gather weather data
function weatherSetup() {
    $.simpleWeather({
    location: '21217',
    unit: 'f',
    success: function(weather) {
      drawCurrentValues(weather);
    },
    error: function(error) {
      console.log('error calling weather');
    }
  });
}

// turn weather data into usable variables
function drawCurrentValues(w) {
  
  // weather data to variables
  var city = w.city;
  var temp = w.temp + ' ' + 'degrees';
  var current = w.currently;
  
  // output to html id
  select('#city').html(city);
  select('#current').html(current);
  select('#temp').html(temp);
}

// toggle switch for themes 

$('.toggle').click(function() {
  if ($(this).hasClass('fa-toggle-off')){
    $(this).removeClass('fa-toggle-off');
    $(this).addClass('fa-toggle-on');
    $('body').removeClass('theme2');
    $('body').addClass('theme1');
  } else {
    $(this).removeClass('fa-toggle-on');
    $(this).addClass('fa-toggle-off');
    $('body').removeClass('theme1');
    $('body').addClass('theme2');
  }

})