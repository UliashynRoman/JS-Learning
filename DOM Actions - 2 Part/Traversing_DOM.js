//Travercing from parent to children
const navigation = document.querySelector('#primary');

//let element = navigation.children[0].nodeType;//5 different links
//navigation.children[0].textContent = 'Text';
let element = navigation.children[4];
//1 = element
//2 - atributes
//3 - text nodes
//8 = comments
//9 = document
//10 = doctype
//console.log(element);

const coursesList = document.querySelector('#courses-list');
let element2;

                                //for-columns/card/div
element2 = coursesList.children[1].children[0].children[0].children[1].children;

//console.log(element2);


element2.textContent = 'HTML&CSS3 and JS. Beginners!';
Autor_name=coursesList.children[1].children[0].children[0].children[1].children[1];
Autor_name.textContent = 'Roman Uliashyn';

//Form The Children to the parrent

const cartBTN = document.querySelector('.add-to-cart');
console.log(cartBTN);
