let numbers = [1, 2, 4, 7, 3, 5, 6];
numbers.sort((a, b) => a - b);
console.log(numbers);
//Here sort() method completes first before the console.log() executes.