/* Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively. */
const mapping = arr => {
	const obj = {};
	arr.forEach(el => obj[el] = el.toUpperCase());
	return obj;
}
console.log(mapping(["p", "s"]));