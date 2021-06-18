//Here if the single value is passed from another module than it is stored in a variable as a value but if 2 or more different functions or values are passed from another module then it is required and stored in the variable as an object.
// const  oper = require("./oper");
// console.log(oper.add(5,5));
// console.log(oper.sub(10,5));
const  {add,sub,name} = require("./oper");
console.log(add(5,5));
console.log(sub(10,5));
console.log(name);
