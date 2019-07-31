 //Get elements By Class Name

 //const links = document.getElementsByClassName('link');
 //links[0].style.color = "red";
 //links[0].textContent = 'New Text';
 
 const links = document.querySelector('#primary').getElementsByClassName('link');
 const color = ['red','blue','green','black','grey','orange'];
 for(let i = 0; i < links.length; i++){
    links[i].style.color = color[i];
 }
 
const images = document.getElementsByTagName('img');

//console.log(document.images[0].classList);
imagesArray  = Array.from(images);
imagesArray.forEach(function(image){
    //console.log(image.src);
});
//console.log(imagesArray);
///tag element
//Add All for querSleector to catch all list
const courses = document.querySelectorAll('.card h4');

const coursesArray = Array.from(courses);
coursesArray.forEach(function(course){
    console.log(course.textContent);
});


//Select odd links

const oddLinks = document.querySelectorAll("#primary a:nth-child(odd)");


oddLinks.forEach(function(odd){
    odd.style.backgroundColor = 'red';
    odd.style.color = 'white';
});

const even = document.querySelectorAll("#primary a:nth-child(even)");
///you also can use even
even.forEach(function(even){
    even.style.backgroundColor = 'blue';
    even.style.color = 'white';
});

//change all the add-to-cart button text
const addCartBtns = document.querySelectorAll('.add-to-card');


console.log(addCartBtns);

const LinksText = document.querySelectorAll('#primary a');
console.log(LinksText);

//Fill all buttons with own text by an array.
const new_text_for_links = ['For everyone','Click and be happy','Next sales','Client`s suggestion','Rate'];
let i = 0;
LinksText.forEach(function(text){
    text.textContent = new_text_for_links[i];
    i++;
});




//Practice - Try change all Prices on new one
// Open to unlock
/*const prices = document.querySelectorAll('.price span');
const different_prices = [];
let rnd = ['12$','51$','11$','22$','18$','252$',
'110$','21$','189$','123$','20$','325$'];


let i = 0;
prices.forEach(function(text){
    text.textContent = rnd[i];
    i++;
});
console.log(prices);
*/


