function sum(a){
  return (function(b){
   return a+b;
  });
}
let x = sum(1)(2);
console.log(x);
