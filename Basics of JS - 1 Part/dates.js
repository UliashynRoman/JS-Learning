//dates are objects
let today = new Date ();
const birthday = new Date('October 18 1998 ');
let output;

let Birthday = new Date('10-18-1998 ');
output = Birthday;



//methods in dates
output = today.getMonth();
output = today.getDate();
output = today.getDay();
output = today.getFullYear();
output = today.getMinutes();
output = today.getHours();
today.setFullYear(2000);
output = today.getFullYear();
today.setMonth(10);
output = today.getMonth();
output = today;


console.log(output);