/* Create a program that converts a phone number with letters to one with only numbers. */
function textToNum(phone) {
	let	number = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	let letter = "22233344455566677778889999"
	let ans = ''
	for (let i=0; i<phone.length;i++){
		if (number.includes(phone[i])){
			ans = ans + letter[number.indexOf(phone[i])];
		} else {
			ans = ans + phone[i];
		}
	}
	return ans
}
console.log(textToNum("653-TRY-THIS"));