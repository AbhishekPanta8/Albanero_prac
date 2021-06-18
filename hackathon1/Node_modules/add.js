function add(a,b){
  return a+b;
}
// console.log(add(2,2));
function sub(a,b){
  return a-b;
}
// module.exports = {add,sub};
// module.exports = {
//   add: add,
//   sub: sub
// };
//recommended one.
module.exports.add = add;
module.exports.sub = sub;
