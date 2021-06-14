// https://edabit.com/challenge/w5LTwJwDLK4uQ3Dmv
function group(arr, size) {
	let number = Math.ceil(arr.length / size);
  let final = [];
  for (let i = 0; final.length < number; i++) {
    let temp = [];
    for (let j = 0; j < arr.length; j+=number) {
      temp.push(arr[j]);
    }
    final.push(temp);
    console.log(arr);
    arr.splice(0, 1);
  }
  return final;
}
console.log(group([1, 2, 3, 4, 5, 6, 7], 4));
console.log(group([1, 2, 3, 4, 5, 6], 4));