function getMaxSubSum(arr) {
  let curr_sum = 0;
  let best_sum = 0;

  for(let item of arr){
    curr_sum = curr_sum + item;
    if(best_sum < curr_sum)
      best_sum = curr_sum;
    if(curr_sum < 0)
      curr_sum =0;
  }
  return best_sum;
}
console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
console.log( getMaxSubSum([1, 2, 3]) ); // 6
console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100