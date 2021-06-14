// https://edabit.com/challenge/HZcpmfBg6NstB5soN
function minSwaps(s1, s2) {
	var count = 0;
	for (var i = 0; i < s1.length; i++) {
		if (s1.charAt(i) != s2.charAt(i))
			count++;
	}
	return count / 2;
}
console.log(minSwaps("10011001", "01100110") );