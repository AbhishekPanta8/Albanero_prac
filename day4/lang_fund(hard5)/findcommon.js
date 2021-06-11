/* Create a function that takes two "sorted" arrays of numbers and returns an array of numbers which are common to both the input arrays. */
let val = new Set();
function commonElements(arr1, arr2) {
	let set = new Set(arr1);
	let arr3 = [];
	for(let item of arr2){
		if(set.has(item)){
			arr3.push(item);
		}
	}
	return arr3;
}
val = commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]);
console.log(val);