// https://edabit.com/challenge/wmdanmJkaT9waTg3y
function pentagonal(num) { 
  if (num <= 1) return 1;
	num--;
	return num*5+pentagonal(num);
}
console.log(pentagonal(1));
console.log(pentagonal(2));
console.log(pentagonal(3));
console.log(pentagonal(8));