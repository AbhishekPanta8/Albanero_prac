/* Create a function that takes three collections of arguments and returns the sum of the product of numbers. */
function product(a,b){
  return function(x,y){
    return function(m,n){
      return (a*x*m + b*y*n);
    }
  }
}
console.log(product(1,2)(1,1)(2,3));