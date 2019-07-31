//Scope

var a = 'a';
let b = 'b';
const c = 'c';

//function scope
function function_scope(){
    var a = 'A';
    let b = 'B';
    const c = 'C';
    console.log("Function scope: " + a,b,c);
}
function_scope();
console.log("CLOBAL: " + a,b,c);