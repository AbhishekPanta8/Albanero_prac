function makePlusFunction(a){
  return function(b){
    return (a+b);
  }
}
let addval = makePlusFunction(10);
console.log(addval(-6));