// https://edabit.com/challenge/wQGGp6Qce6phDCvW9
function canFind(bigrams, words) {
	let count = 0;
	for(i=0;i<bigrams.length;i++){
		for(j=0;j<words.length;j++){
			if(words[j].includes(bigrams[i])){
				count++;
			}
		}
	}
	return count == bigrams.length;
}
console.log(canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]));
console.log(canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]));