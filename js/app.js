'use strict';

'use strict';

// array to hold photo objects
Products.allProducts = [];

//populated with 3 random filepaths
var viewedArray = [];

// photo views array
// var photoViews = [];

// photo names array
// var photoNames = [];


// access the elememts from the DOM
viewedArray[0] = document.getElementById('product-pic1'); //put viewed array into product pic1
viewedArray[1] = document.getElementById('product-pic2');
viewedArray[2] = document.getElementById('product-pic3');

// photo constructor for photo objects
function Products(filepath, name){
  this.filepath = filepath;
  this.name = name;
  // this.views = views;
  // this.votes = votes;
  Products.allProducts.push(this);
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

var lastIndices = [];

function randomPhoto(){

  var randomIndices = [];

  for(var i = 0; i < 3; i++){

    var randomIndex = Math.floor(Math.random() * Products.allProducts.length);

    if(randomIndices.includes(randomIndex) || lastIndices.includes(randomIndex)) {
      i--;
    } else{

      // use the randomIndex to set the src and alt attributes of the imgElement
      viewedArray[i].src = Products.allProducts[randomIndex].filepath; //overwrite random number from array with filepath
      viewedArray[i].alt = Products.allProducts[randomIndex].name;
      randomIndices.push(randomIndex);
    }

  }
  lastIndices = randomIndices;
  console.log(lastIndices);
}

randomPhoto();
console.log(viewedArray);


// build click listener 

// event.target.currentSRC // referencing image clicked 