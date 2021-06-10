function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}
let arr = [5, 3, 8, 1];
arr = filterRange(arr, 1, 4);
console.log(arr);
