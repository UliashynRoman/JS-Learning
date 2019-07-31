let link = document.querySelector('.link');

let element = link;
///read the class
element = link.className;
//Read the class (DOM Token List)
element = link.classList;//classlist[0]

///Add a new class
link.classList.add('New-Class');
link.classList.remove('link');
element = link;
//Get Atribute
element = link.getAttribute("href");
element = link.setAttribute("href" , "http://facebook.com");
//add atribute by setattribute
element = link.setAttribute('target','_blank');
element = link.setAttribute('data_link' , '10');
element = link.removeAttribute('data_link');
element = link.removeAttribute('target');
element = link.removeAttribute('href');

console.log(element);