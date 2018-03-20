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

////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////

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
    }
  }
  //updates last indicies to equal random indicies so it can be referenced on next call
  lastIndices = randomIndices;
  //updates timesDisplayed counter by referencing randomIndex
  // Products.allProducts[randomIndex].timesDisplayed++;
  Products.allProducts[randomIndex].timesDisplayed++;
  
}

////////////////////////////////////////////////////////////////////////////////////////

// function to call upon click event
function handleClick(event) {
  // increment click counter
  Products.totalClicks++;

  // increment clicks/votes on the specific image
  console.log(event.target.alt);

  // use a for loop to determine which product img was actually clicked on
  for(var i in Products.allProducts) {
    if(event.target.alt === Products.allProducts[i].name) {
      Products.allProducts[i].votes++;
    }
  }

  // check the click counter
  if(Products.totalClicks > 9) {
    // turn off event listener
    sectionElement.removeEventListener('click', handleClick);

    // if greater than 9, display results as a list
    showResults();

    // updates the votes per goat for chart
    updateVotes();

    // display the chart
    // renderChart();
  } else {
    // if less than 10, display a new set of random goat images
    randomPhoto();
  }
}
///////////////////////////////////////////////////////////////

function showResults(){
  for(var i in Products.allProducts) {
    // create the element(li)
    var listItemElement = document.createElement('li');
    // give it content
    listItemElement.textContent = Products.allProducts[i].name + '  has' + Products.allProducts[i].votes + ' votes and was displayed ' + Products.allProducts[i].timesDisplayed + ' times.';

    //append to its parent element
    unorderedListElement.appendChild(listItemElement);
  }
}
////////////////////////////////////////////////////////////
function updateVotes(){
  for(var i in Products.allProducts) {
    photoVotes[i] = Products.allProducts[i].votes;
  }
}
////////////////////////////////////////////////////////////

// add event listener to the section
sectionElement.addEventListener('click', handleClick);

//render images on page load
randomPhoto();

// event.target.currentSRC // referencing image clicked 