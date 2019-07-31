//e.preventDefault();

const form = document.querySelector('#search'),
inputText = document.querySelector('#search-course');
////////submit
//form.addEventListener('submit' , Form_Handler);
///////blur
///
form.addEventListener('keydown',Form_Handler);
///
//form.addEventListener('keyup',Form_Handler);
////Focus at the input text
//form.addEventListener('focus',Form_Handler);
///Cut //ctrl+x track the button
form.addEventListener('cut' , Form_Handler); 
//ctrl +c track the button ///you cannot copy that
form.addEventListener('copy' , Form_Handler); 
//Paste
form.addEventListener('paste' , Form_Handler); 
//form.addEventListener('input' , Form_Handler); 



function Form_Handler(event){
    e.preventDefault();

    /* if(inputText.value.length == 0){
        alert('Please submit smth else!');
    } */ 
    if(event.type == "copy"){
        alert("You cannot copy that. It`s out privacy");
    }
    //global_holder = inputText.value;
    //console.log(global_holder);    
    console.log(inputText.value);
    console.log(event.type);  
      
    //console.log(array.indexOf(global_holder));
}
//console.log(document.body.innerHTML.indexOf('recipes')); 

