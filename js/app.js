'use strict';

// array to hold photo objects
Products.allProducts = [];

// photo constructor for photo objects
function Products(filePath, name, views, clicks, id){
  this.filePath = filePath;
  this.name = name;
  this.views = views;
  this.clicks = clicks;
  this.id = id;
  Products.allProducts.push(this);
}


// new instances of photos
new Products('../img/bag.jpg', 'bag'); //store views, clicks, id, in separate var and place here
new Products('../img/banana.jpg', 'banana'); //store views, clicks, id, in separate var and place here
new Products('../img/bathroom.jpg', 'bathroom'); //store views, clicks, id, in separate var and place here


// access the elememts from the DOM

// add an event listener

// callback function when image is clicked

// random number generator, generate 3 randoms, twice

// use the randomIndex to set the src and alt attributes of the imgElement

// render images on page load


// below is information I have but dont particularly know what to do with

// store random number in array 6 characters long, new picture number cannot be equal to current array value, delete array upon reaching 6 unique numbers



