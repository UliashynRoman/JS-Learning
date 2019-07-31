///Remove Elemets

/* const links = document.querySelectorAll('.link');
links[0].remove();

console.log(links); */
const cards = document.querySelectorAll('.card');
//links[0].remove();
for(let i = 0; i < 3; i ++){
    cards[i].remove();
}
//console.log(cards);


//Remove by the children
const navigation = document.querySelector('#primary');
const links = document.querySelectorAll('#primary .link');
navigation.removeChild(links[4]);
console.log(links);
console.log(navigation);