/* Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches lengt */
function arrayOfMultiples (num, length) {
	var result = [];
    for (let i=1;i<=length;i++) {
        result.push(num*i);
    }
    return result;
}
let arr = new Array();
arr = arrayOfMultiples(7, 5);
console.log(arr);