// https://edabit.com/challenge/yXSTvCNen2DQHyrh6
function getLength(arr) {
	let count = 0;
	arr.forEach(item => {
		if (Array.isArray(item)) {
			count += getLength(item);
		} else {
			count++;
		}
	});
	return count;
}
console.log(getLength([1, [2, [3, 4]]]));