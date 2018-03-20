'use strict';

// array to hold photo objects
Products.allProducts = [];

var viewedArray = []; //populated with 7 random filepaths

// photo constructor for photo objects
function Products(filepath, name, views, clicks, id){
  this.filepath = filepath;
  this.name = name;
  this.views = views;
  this.clicks = clicks;
  this.id = id;
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




// access the elememts from the DOM
viewedArray[0] = document.getElementById('product-pic1'); //put viewed array into product pic1
// var imgElement2 = document.getElementById('product-pic2');
// var viewedArray[2] = document.getElementById('product-pic3');


// add an event listener
viewedArray[0].addEventListener('click', randomNumberGenerator);
// viewedArray[1].addEventListener('click', randomPic);
// imgElement.addEventListener('click', randomPic);


// callback function when image is clicked
// function randomPic(){
// // random number generator, generate 3 randoms, twice
//   var randomIndex = Math.floor(Math.random() * Products.allProducts.length);
//   // use the randomIndex to set the src and alt attributes of the imgElement
//   // imgElement.src = Products.allProducts[randomIndex].filepath;
//   // imgElement.alt = Products.allProducts[randomIndex].name;
// }
// // render images on page load
// randomPic();

// below is information I have but dont particularly know what to do with

// store random number in array 6 characters long, new picture number cannot be equal to current array value, delete array upon reaching 6 unique numbers



function randomNumberGenerator(){

  for(var i = 0; i < 7; i++) {

    var randomIndex = Math.floor(Math.random() * Products.allProducts.length);
    // use the randomIndex to set the src and alt attributes of the imgElement
    viewedArray[0].src = Products.allProducts[randomIndex].filepath; //overwrite random number from array with filepath
    // imgElement2.alt = Products.allProducts[randomIndex].name;

    // while (i === viewedArray[i]) {
    //   i++;
    // }
    viewedArray.push(randomIndex);
  }
}

randomNumberGenerator();
console.log(viewedArray);

// generate radom num