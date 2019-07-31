/// Event Bubbling

//Varibles
const card = document.querySelector(".card"),
      infoCards = document.querySelector(".info-card"),
      addCartBtn = document.querySelector('.add-to-cart'); 
      console.log(card);
      console.log(infoCards); 
      console.log(addCartBtn); 
      
//Event Listeners
card.addEventListener('click',function(e){
    console.log("Cliced the Card");
    e.stopPropagation(); // Separate kids elements
});
infoCards.addEventListener('click',function(e){
    console.log("Cliced the Info");
    e.stopPropagation();
    
});
addCartBtn.addEventListener('click',function(e){
    console.log("Cliced the Btn");
    e.stopPropagation();
    
});