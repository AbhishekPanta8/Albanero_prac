/* Create a function that, given an array similar to the above, sorts the array according to the "content of the elements". */
let sortIt = arr => arr.sort((a, b) => a - b);
console.log(sortIt([4, 1, 3]));