// for loops
/*
for(let i = 0; i < 10; i++ ){
    console.log(`Number: ${i+1}`);
}
*/
//read value from loop
/*
for(let i = 0; i<10;i++){
    if(i == 2){
        console.log('Yes 2!!');
        continue;
    }
    console.log(`Number: ${i+1}`);
}*/
/*
for(let i = 0; i<10;i++){
    if(i == 2){
        console.log('Yes 2!!');
        break;
    }
    console.log(`Number: ${i+1}`);
}
*/

//loops in array 
//modulo
/*
for(let i = 0; i<10;i++){
    if(i % 2 ==0){
        console.log(`${i} is even`);
    }
    else{
        console.log(`${i} is odd`);
    }
}

*/

/*
const shoppingcard = ['Product 1' , 'Product 2' , 'Product 3', 'Product 4'];
//Access each value manually
console.log(`Shopping card has:`);
for(let i = 0; i < shoppingcard.length; ++i){
    console.log(`${shoppingcard[i]}`);
}
*/
//do while

let i = 0;
const shoppingcard = ['Product 1' , 'Product 2' , 'Product 3', 'Product 4'];
/*
while(i < shoppingcard.length){

    //console.log(`Number ${i}`);
    console.log(`Product: ${shoppingcard[i]}`);
    i++;

}
*/
do{
    console.log(i);
    i++;
}while(i <= 2);

//foreach
shoppingcard.forEach(function(assigment , index){
    console.log(`${index} : ${assigment}`);
})

let Data = [];
for(let k = 0; k < 5; k++){
    Data.push({id: k , Product: ''});
    Data[k].id = k + 1;
}
const productName = Data.map(function(k){
    return k.Product;
});

console.log(productName);

//Map
const shoppingCard = [
    {id: 1, Product: 'Book'},
    {id: 2, Product: 'Shirt'},
    {id: 3, Product: 'Album'},
    {id: 4, Product: 'Oil'},
    {id: 5, Product: 'Soap'},
]
const productname = shoppingCard.map(function(k){
    return k.Product;
});

console.log(productname);


//Iterators in ES6
//Better way to iterate than for loop
let MyCar = {
    model: 'Camaro',
    engine: 6.0,
    year: 1923
}
for(let key in MyCar){
    console.log(`${key} : ${MyCar[key]}`);
}


