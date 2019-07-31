const Client = {
    getBalance: function(){
        return `Hello ${this.name} your balance ${this.balance}`;
    },
    withdraw : function(amount){
        return this.balance -= amount;
    },
    deposit : function(amount){
        return this.balance += amount;
    }
}
//Create a new obect and give a balance
const mary = Object.create(Client);

//Attach
mary.name = 'Marry';
mary.balance = 12021;

console.log(mary);
console.log(mary.getBalance());
mary.withdraw(4022);
console.log(mary.getBalance());
mary.deposit(2502);
console.log(mary.getBalance());