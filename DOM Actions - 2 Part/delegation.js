//instead of creating 
//a bunch of different buttons of different evenlisteners
//we can use Delegation

const shopping_cart = document.querySelector('#shopping-cart');
shopping_cart.addEventListener('click',removeProductFromCart);

function removeProductFromCart(event){
    console.log(event.target.classList);

    if(event.target.classList.contains('remove')){
        event.target.parentElement.parentElement.remove();
    }
    
}

///Add to cart
console.log("Does it work?");
const course_list = document.querySelector("#courses-list");

course_list.addEventListener('click',AddToCart);
function AddToCart(e){
    if(e.target.classList.contains('add-to-cart')){
        console.log('Course Added');
    }
}