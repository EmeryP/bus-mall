'use strict';

// array to hold photo objects
Products.allProducts = [];

//populated with 3 random filepaths
var viewedArray = [];

// array holding previous generated indicies
var lastIndices = [];

// photo views array
var photoNames = [];

// photo names array
var photoVotes = [];

// click tracker
Products.totalClicks = 0;

// access the elememts from the DOM
viewedArray[0] = document.getElementById('product-pic1'); //put viewed array into product pic1
viewedArray[1] = document.getElementById('product-pic2');
viewedArray[2] = document.getElementById('product-pic3');

// access the section element from the DOM
var sectionElement = document.getElementById('product-section');

// access the unordered list element from the DOM
var unorderedListElement = document.getElementById('results');

// photo constructor for photo objects
function Products(filepath, name){
  this.filepath = filepath;
  this.name = name;
  this.timesDisplayed = 0;
  this.votes = 0;
  Products.allProducts.push(this);
  photoNames.push(this.name);
}

// new instances of photos
new Products('img/bag.jpg', 'bag'); //store views, clicks, id, in separate var and place here
new Products('img/banana.jpg', 'banana');
new Products('img/bathroom.jpg', 'bathroom');
new Products('img/boots.jpg', 'boots');
new Products('img/breakfast.jpg', 'breakfast');
new Products('img/bubblegum.jpg', 'bubblegum');
new Products('img/chair.jpg', 'chair');
new Products('img/cthulhu.jpg', 'cthulhu');
new Products('img/dog-duck.jpg', 'dog-duck');
new Products('img/dragon.jpg', 'dragon');
new Products('img/pen.jpg', 'pen');
new Products('img/pet-sweep.jpg', 'pet-sweep');
new Products('img/scissors.jpg', 'scissors');
new Products('img/shark.jpg', 'shark');
new Products('img/sweep.png', 'sweep');
new Products('img/tauntaun.jpg', 'tauntaun');
new Products('img/unicorn.jpg', 'unicorn');
new Products('img/usb.gif', 'usb');
new Products('img/water-can.jpg', 'water-can');
new Products('img/wine-glass.jpg', 'wine-glass');

// add an event listener
viewedArray[0].addEventListener('click', randomPhoto);
viewedArray[1].addEventListener('click', randomPhoto);
viewedArray[2].addEventListener('click', randomPhoto);

// function to run when random photo is called
function randomPhoto(){

  var randomIndices = [];

  for(var i = 0; i < 3; i++){

    var randomIndex = Math.floor(Math.random() * Products.allProducts.length);

    if(randomIndices.includes(randomIndex) || lastIndices.includes(randomIndex)) {
      i--;
    } else{
      // use the randomIndex to set the src and alt attributes of the imgElement in HTML
      viewedArray[i].src = Products.allProducts[randomIndex].filepath;
      viewedArray[i].alt = Products.allProducts[randomIndex].name;
      randomIndices.push(randomIndex);
      // Products.allProducts.timesDisplayed++;
      // console.log(Products.allProducts.timesDisplayed);
    }
  }
  lastIndices = randomIndices;

  Products.allProducts[randomIndex].timesDisplayed++;
}


// function handleClick(){

//     // use a for loop to determine which goat img was actually clicked on
//     for(var i in Goat.allGoats) {
//       if(event.target.alt === Goat.allGoats[i].name) {
//         Goat.allGoats[i].votes++;
//       }
//     }
// }




randomPhoto();
// console.log(viewedArray);


// build click listener 

// event.target.currentSRC // referencing image clicked 