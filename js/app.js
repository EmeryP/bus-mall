'use strict';

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
viewedArray[1] = document.getElementById('product-pic2');
viewedArray[2] = document.getElementById('product-pic3');


// add an event listener
viewedArray[0].addEventListener('click', randomNumberGenerator);
viewedArray[1].addEventListener('click', randomNumberGenerator);
viewedArray[2].addEventListener('click', randomNumberGenerator);
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

  // while (viewedArray.length < 3){

    for(var i = 0; i < 3; i++) {

      var randomIndex = Math.floor(Math.random() * Products.allProducts.length);
      // use the randomIndex to set the src and alt attributes of the imgElement
      viewedArray[i].src = Products.allProducts[randomIndex].filepath; //overwrite random number from array with filepath
      viewedArray[i].alt = Products.allProducts[randomIndex].name;
      

      
      // } else { 
        viewedArray.push(randomIndex);

    }
    
  }



// function randomNumberGenerator(){

  // var iCount = 0; //sets count to 0

  // for(var i = 0; i < 3; i++) { //runs following code until condition is met

  // var randomIndex = Math.floor(Math.random() * Products.allProducts.length);
  // // use the randomIndex to set the src and alt attributes of the imgElement
  // viewedArray[0].src = Products.allProducts[randomIndex].filepath; //overwrite random number from array with filepath
  // viewedArray[0].alt = Products.allProducts[randomIndex].name;

  // viewedArray.push(randomIndex);

  // for (var i = iCount; i < viewedArray.length; i++) { //use to iterate over and compare value to viewed array
  //   var randomIndex2 = Math.floor(Math.random() * Products.allProducts.length);
  //   // use the randomIndex to set the src and alt attributes of the imgElement
  //   viewedArray[i].src = Products.allProducts[randomIndex2].filepath; //overwrite random number from array with filepath
  //   viewedArray[i].alt = Products.allProducts[randomIndex2].name;

  // while (randomIndex2 !== viewedArray[0] && viewedArray.length < 3) {
  //   var randomIndex2 = Math.floor(Math.random() * Products.allProducts.length);
  //   // use the randomIndex to set the src and alt attributes of the imgElement
  //   viewedArray[i].src = Products.allProducts[randomIndex2].filepath; //overwrite random number from array with filepath
  //   viewedArray[i].alt = Products.allProducts[randomIndex2].name;
  // }

  // for (var i = iCount; i < viewedArray.length; i++) {
  //   randomIndex2 = Math.floor(Math.random() * Products.allProducts.length);
  //   // if (randomIndex2 !== j) {
  //   viewedArray.push(randomIndex2);
  //   // } else if (randomIndex2 === j){

  //   // }
  //   iCount++;
  //   // }
  // }
// }




randomNumberGenerator();
console.log(viewedArray);

// generate radom num