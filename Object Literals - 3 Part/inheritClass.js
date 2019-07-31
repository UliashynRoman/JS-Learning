//!7!
//In ecmascript6 
//Inherit buissnes like in object using class
//Run html with the serwer and open console.

//Converte object Client to Class
class Client{
    constructor(name,balance){
        this.name = name;
        this.balance = balance;
        let last_transaction;
    }
    membership(){
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
    clientInfo(){
        return `Name: ${this.name}, Balance ${this.balance}$, Membership of ${this.membership()} club`;
    }
    withdraw (amount){
        this.last_transaction = amount;
        this.balance -=amount;   
    }

    CheckBalance(amount){
        if(this.last_transaction === undefined){
            this.last_transaction = 0;
        }
        return this.name + " currently balance status: " + this.balance + "$. Last transaction is: " + this.last_transaction;    
    }
    static welcome(){
        return "Welcome to Bank as private client";
    }
}


//inherit all properties
class Buissnes extends Client{
    constructor(name,balance,phone,category){
        //acces the parent constuctor properties
        super(name,balance);
        this.phone = phone;
        this.category = category;
    }
    clientInfo(){
        return `Name: ${this.name}, Balance: ${this.balance}$, Membership of: ${this.membership()} club, Phone: ${this.phone}, Category: ${this.category}`;
    }
    static welcome(){
        return "Welcome to Banking as Busissnes client";
    }
}
//Iniciate the Paren Class
const Roman = new Client("Roman",20000);
//Instaciate the sub Class
const buissnes = new Buissnes('Immigration Servise',68824,"+4782802822","International Buissnes");

//Input
console.log(Client.welcome());
console.log(Roman.clientInfo());
console.log("______________");

console.log(Buissnes.welcome());
//console.log(buissnes);
//you don`t have extend the methods again
console.log(buissnes.clientInfo());


//Output
/* Welcome to Bank as private client
Name: Roman, Balance 20000$, Membership of Gold club
______________
Welcome to Banking as Busissnes client
Name: Immigration Servise, 
Balance: 68824$, 
Membership of: Gold club, 
Phone: +4782802822, 
Category: International Buissnes */