/* transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4] without flat method. */
const flatten = function(arr,result =[]) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    const value = arr[i];
    if (Array.isArray(value)) {
      flatten(value, result);
    } else {
      result.push(value);
    }
  }
  return result;
};
console.log(flatten([["a", "b"], ["c", "d"]]));
