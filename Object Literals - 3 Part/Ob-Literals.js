//!1!
//Object Literals ||| Class
//Run html with the serwer and open console.
const client = {
    name: 'Roman',
    balance: 100,
    membership : function(){
        let name;
        //Check the balance
        if(this.balance > 100){
            name = "Gold";
        }
        else if(this.balance >200){
            name = "Platinum";
        }
        else{
            name = "Standart";
        }

        return name;
    }
}

console.log(client);
console.log(client.name);
console.log(client.membership());