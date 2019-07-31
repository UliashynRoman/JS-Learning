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
//Add method to Object outsidly
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
//New person
const person = new Client('Roman',4122);

console.log(person.clientInfo());
person.withdraw(200);
console.log(person.CheckBalance());
person.deposit(442);
console.log(person.CheckBalance());

//Buisness
function Buisness(name,balance,phone,category){
    //Here we acces to class
    Client.call(this, name,balance);
    this.phone = phone;
    this.category = category;
}

//Inherit the prototype
Buisness.prototype = Object.create(Client.prototype);
//Set constructor for class
Buisness.prototype.constructor = Buisness;
//Override for example clientInfo
Buisness.prototype.buissnesInfo = function(){
    return `Name: ${this.name}, Balance ${this.balance}, Membership of ${this.membership()} club, Category ${this.category} , Phone ${this.phone}`;
}




const buisness = new Buisness('Online Shop',100021,'+4857737721','e-commerce');
console.log(buisness);

/* Now try call info from Client*//* 
console.log(buisness.clientInfo());
Result is 
Uncaught TypeError: buisness.clientInfo is not a function
So lets inherit in rigth way look at 67 row
 */
console.log(buisness.buissnesInfo());
