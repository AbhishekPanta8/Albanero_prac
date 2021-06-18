const add = (a,b)=>{
    return a+b;
}
const sub = (a,b)=>{
  return a-b;
}
const name ="Abhishek";
//if we are passing single value
// module.exports = add;
//if we are passing multiple values
// module.exports.add = add;
// module.exports.sub =sub;
module.exports = {add,sub,name};