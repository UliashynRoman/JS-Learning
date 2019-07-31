// && , || , >< , != , == , === 
//== value , === typeof , != not equal 
// Objects , Funtions , property Methods
let output = '__Default';

const score = undefined;
//console.log(typeof score);
/*
if (score == 100){
    output = ("The Same");
}
else{
    output = "Not the same";



//controle if operator
const lrnJS = true;
if(lrnJS){
    //console.log("Great");
}
else{
    //Console.log("----");
}


//Checkk i a varible has a value

if(typeof score != 'undefined'){
    output = `Yes the score is ${score} `;
}

let Cash , CartTotal;
Cash = 500;
CartTotal = 300;
if(Cash >= CartTotal){
    output = "Succesful Payment";
}
else{
   output = "Insufficient Funds";
}
*/
let currentTime = new Date();
//console.log("It is:  " + currentTime.getHours()+" o`clock");
if(currentTime.getHours() <= 9)
{
    output = "Good Morning";
} 
if(currentTime.getHours() >= 10 && currentTime.getHours() <= 13 ){
    output = "Study Time"
}
else if(currentTime.getHours() <= 18) output = "Good Afternon"; 
else output = "Good Evening";
console.log(output);
/*

//console.log(output);


*/
///Or operattor || ,
let cash  = 300,
    credit = 300,
    cartTotal = 500;

    avilable = cash + credit;


if(cartTotal < cash || cartTotal < credit){
    //console.log("You can pay the credit");
}
else if(avilable >= cartTotal ){
    //console.log("Pay with both");
}
else{
    //console.log("Insufficient Funds");
}

/*
//Ternary operator
const loggedIn = false;

//console.log(loggedIn === true ? 'The user is logged in!': 
//'Not logged in , prblm');


/*let logging = function(logs){
    Logs = prompt();
    return Logs;
};
*/


//Loggin , Password
let login;
let password;
let real = {Log: "Hello" , Pwd: 1234} , logStatus = false; 
const LogProces = {

    logs: function(){
        login = prompt('Enter Login:');
        password = prompt('Enter Password:');

    },
    verify: function(){
            console.log(real.Log == login && real.Pwd == password  ? 'The user is logged in!': 
            'Not logged in , prblm');
        }
        
    }

LogProces.logs();
LogProces.verify();