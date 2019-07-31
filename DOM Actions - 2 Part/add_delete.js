Set_Events();
let sum_global = summary();
Print_Total(sum_global);

///EVENTS
function Events_Handler(event){
    //Delete Items
    if(event.target.classList.contains('clear')){  
        const tbody = document.querySelector('tbody');
        let length = tbody.children.length;
        const tr = document.querySelectorAll('tbody tr');
         for(let i = 0; i < length; ++i){  
              tbody.removeChild(tr[i]);
          }
        sum_global = 0;
        Print_Total(sum_global);
        }
    //Delete item from shop-cart    
    if(event.target.classList.contains('remove')){
        event.target.parentNode.parentNode.remove();
        sum_global = summary();
        Print_Total(sum_global);
    }
    //Add Item
    if(event.target.classList.contains('add-to-cart')){

        let new_tr = document.createElement('tr');
        for(let i = 0; i<4;i++){
            new_tr.appendChild(document.createElement("td"));
        }

        let elements = ["img","p","p","a"];
        for(let i = 0;i<4;i++){
        new_tr.children[i].appendChild(document.createElement(elements[i]));
        }
        //Product Image
        new_tr.children[0].children[0].setAttribute("src",event.target.parentNode.parentNode.children[0].getAttribute('src'));    
        new_tr.children[0].children[0].style = "width: 120px";
        //ProductName
        new_tr.children[1].children[0].textContent = event.target.parentNode.children[0].innerHTML;
        //Product Price
        let price = event.target.parentNode.children[3].children[0].textContent.replace("$","");
        price = parseInt(price);
        new_tr.children[2].children[0].textContent = price + "$";
        //ButtonDelete
        new_tr.children[3].children[0].setAttribute("href","#");
        new_tr.children[3].children[0].classList.add("remove");
        new_tr.children[3].children[0].innerHTML = "X";
        new_tr.children[3].children[0].addEventListener('click',Events_Handler);
        //Total
        sum_global +=price;
        Print_Total(sum_global); 
        

        document.querySelector('#cart-content tbody').appendChild(new_tr);
        //add to LC
        event.stopPropagation();
    }
}
function AddCourseTOLocalStorage(course){
    let courses = GetCourseFromLC();
    //add the course into array
    courses.push(course);
    localStorage.setItem('courses',JSON.stringify(courses));
}
function GetCourseFromLC(){
    let courses;
    if(localStorage.getItem('courses') === null){
        courses = [];
    }
    else{
        courses = JSON.parse(localStorage.getItem('courses'));
    }
    return courses;
}

function Set_Events(){
    //Events inside body   
    const body_events = document.body;
    body_events.addEventListener('click',Events_Handler);
    //Set Event inside Basket
    let button_remove = document.querySelectorAll('tbody tr');
    for(let i = 0; i < button_remove.length; i++){
        button_remove[i].children[3].addEventListener('click',Events_Handler);
    }
    //Set event for Adding to each button in body
    const add_to_card = document.querySelectorAll('.info-card a');
    for(let i=0; i<add_to_card.length;i++){
        //add_to_card[i].setAttribute('href',"#submenu");
        add_to_card[i].removeAttribute('href');//
        add_to_card[i].addEventListener('click',Events_Handler);
    }
}
//Print_Total
function Print_Total(sum){
    let th = document.querySelectorAll('thead th');
    th[2].textContent = "Total: " + sum + "$";
}
//Total Price counter
function summary(){
    let sum = 0;
    let price = [];
    let tr = document.querySelectorAll('tbody tr');
    for(let i = 0; i < tr.length;i++){
        
        let potential_price = tr[i].children[2].children[0].innerHTML.replace('$','');
        let parse_price = parseInt(potential_price);
        //console.log("HERE " + potential_price);
        price[i] = parse_price;
        sum += price[i];  
    } 
    console.log("Sum from summary()"+sum);
    return sum;
}