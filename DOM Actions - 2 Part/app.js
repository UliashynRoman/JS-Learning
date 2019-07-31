let element ; 
element = document;
//all selector stars with document (element)
element = document.all[11];

element = document.head;
element = document.domain; //127.0.0.1
element = document.URL;//http://127.0.0.1:5500/index.html#
element = document.characterSet; //UTF-8
element = document.contentType; // nor HTML could be JSON or XML
element = document.body;
//Links
//element.document.links[2];
//element = document.classList;
let images = document.images;
let imagesArray = Array.from(images);
imagesArray.forEach(function(image){
    console.log(image);//.src , classList
});
//console.log(imagesArray);