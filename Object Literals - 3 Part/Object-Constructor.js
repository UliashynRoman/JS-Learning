//!2!
//Dynamic behavior of constructor
//Run html with the serwer and open console.
function Client(name,balance){
    this.name = name;
    this.balance = balance;
    this.membership = function(){
        let name;
        //Check the balance
        if(this.balance > 3000){
            name = "Gold";
        }
        else if(this.balance >4000){
            name = "Platinum";
        }
        else{
            name = "Standart";
        }

        return this.name + " has " + name + " type of cart " ;
    }
}

const person = new Client('Roman',4122);
const person2 = new Client('Marcin',2233);

console.log(person);
console.log(person2.membership());
//Constructor Data Types
//String
const name1 = 'Karen';
const name2 = new String('Karen');
//Number
const num1 = 2;
const num2 = new Number(20);
console.log(name1);
console.log(name2);
//Bool the same

//Object

console.log(num1);
console.log(num2);


