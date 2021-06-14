/* Make a set of “ready to use” filters:
inBetween(a, b) – between a and b or equal to them (inclusively). */
function inBetween(a,b){
  return function(x){
    return x>=a && x<=b;
  }
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log( arr.filter(inBetween(3, 6)) );