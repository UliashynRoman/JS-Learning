//Add
let newP = document.createElement('p');
let load = document.createElement('div');
load.className = 'lds-facebook';

newP.className = 'price';
newP.appendChild(document.createTextNode("SS"));


document.querySelector('#cart-content').appendChild(newP);
///////////Replace
const newHeading = document.createElement('h2');

newHeading.id = 'heading';
//addClass
newHeading.classList.add('heading');
//Add the new text
newHeading.appendChild(document.createTextNode("The Best Courses"));
//Previous
const oldHeading = document.querySelector('#heading');
//
const CoursesList = document.querySelector('#courses-list');

CoursesList.replaceChild(newHeading,oldHeading);



console.log(newHeading);