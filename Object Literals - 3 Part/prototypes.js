//!3!
//Start working with prototypes
//Run html with the serwer and open console.
function Client(name,balance){
    this.name = name;
    this.balance = balance;
    let last_transaction;
    let last_action;
    
    //membership now in separeted prototype
    //it look more organized 
}
//Add method to Class outsidly
Client.prototype.membership = function(){
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

        return  name;
}

Client.prototype.clientInfo = function(){
    return `Name: ${this.name}, Balance ${this.balance}, Membership of ${this.membership()} club`;
}

//Another methid to withdraw
Client.prototype.withdraw = function(amount){
    this.last_transaction = amount;
    this.balance -=amount;
   
    
}

Client.prototype.deposit = function(amount){
    this.last_transaction = amount;
    this.balance += amount;
}

Client.prototype.CheckBalance = function(amount){
    
    return this.name + " currently balance status: " + this.balance + ". Last transaction is " + this.last_transaction;
    
}

const person = new Client('Roman',4122);
const person2 = new Client('Marcin',500);
const person3 = new Client('John',2210);
//Call the method 
console.log(person.clientInfo());
/*
console.log(Client.prototype);
console.log(person2.clientInfo());
*/
/*CONSOLE RESULT 
Name: Roman, Balance 4122, Membership of Gold club
Name: Marcin, Balance 500, Membership of Standart club 
*/

person.withdraw(200);
console.log(person.CheckBalance());
person.deposit(442);
console.log(person.CheckBalance());

/* Roman currently balance status: 3922. Last transaction is 200 */

