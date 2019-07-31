//Selecting DOm Elements
let heading = document.getElementById('heading');

console.log(heading.textContent); // Online Courses

//Change the CSS
/* heading.style.backgroundColor = '';
heading.style.color = 'black';
heading.style.padding = '20px';
heading.style.marginBottom = '20px'; */

//Change the text
//heading.textContent = 'New courses';
//another way
 
//By ID  - Query selection
const learningHeading = document.querySelector('#learn');
learningHeading.textContent = 'A new header';
learningHeading.style.marginLeft = '';
//By Class
let tagline = document.querySelector('.tagline');
const newLine = tagline.textContent.replace('any','each');
tagline.textContent = newLine;


let card = document.querySelector('.card');
//Selecting by tagname 
let = heading = document.querySelector('h2');
//Nest your selectors with a CSS syntax
let image = document.querySelector('.card img');


//Query selectors supports nth-child , first-child or last - child
let link;

link = document.querySelector('#primary a:first-child');//only the first one
link = document.querySelector('#primary a:last-child');//only the first last
link = document.querySelector('#primary a:nth-child(5)');//only the first n-child


console.log(infocard);