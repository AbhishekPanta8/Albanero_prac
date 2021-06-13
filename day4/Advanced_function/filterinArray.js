/* Make a set of “ready to use” filters:
inArray([...]) – in the given array. */
function inArray(arr){
  return function(x){
    return arr.includes(x);
  }
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log( arr.filter(inArray([1, 2, 10])));