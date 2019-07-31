const paymentMethod = 'nth';
/*
switch(paymentMethod){
    case 'cash':
        console.log(`Your method is ${paymentMethod}`);
    break;
    case 'check':
        console.log(`Your method is ${paymentMethod}`);
    break;
    default:
        console.log('Please select a valid method');
}
*/


//Assign a aribles from a switch case.

const cars = ['Camaro' , 'Mustang', 'Chalanger'];

const selected = 2;
let car;

switch(selected){
    case 0:
        car = cars[0]
    break;
    case 1: 
        car = cars[1];
    break;
    case 2:
        car = cars[2];
    break;
}
console.log(`Selected ${car}`);