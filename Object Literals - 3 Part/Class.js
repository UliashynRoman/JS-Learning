//!6!
//In ecmascript6 
//Start working with class
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
        return `Name: ${this.name}, Balance ${this.balance}, Membership of ${this.membership()} club`;
    }
    withdraw (amount){
        this.last_transaction = amount;
        this.balance -=amount;   
    }

    CheckBalance(amount){
        if(this.last_transaction === undefined){
            this.last_transaction = 0;
        }
        return this.name + " currently balance status: " + this.balance + ". Last transaction is: " + this.last_transaction;    
    }
}

const Roman = new Client("Roman",20000);
console.log(Roman.clientInfo());
//No transaction
console.log(Roman.CheckBalance());
console.log(Roman.withdraw(200));
//After transaction
console.log(Roman.CheckBalance());

