// https://edabit.com/challenge/6o5tYwwbY2ys7XTm4
class Shiritori {
	constructor() {
		this.words = [];
		this.game_over = false;
	}
	play(word) {
		if(this.words.length !== 0 ) {
			let last = this.words[this.words.length-1];
      // console.log(last.charAt(last.length -1));
      //checking for duplicates and the rule no.1.
			if(this.words.includes(word) || word.charAt(0) !== last.charAt(last.length-1)) {
					this.game_over = true;
					return 'game over';
			 } else {
					this.words.push(word);
					return this.words	;
			 }
		} else {
			this.words.push(word);
			return this.words;
		}
	}
	restart() {
		this.game_over = false;
		this.words = [];
		return 'game restarted';
	}
}
let my_shiritori = new Shiritori();

console.log(my_shiritori.play("apple"));  
console.log(my_shiritori.play("ear"));
console.log(my_shiritori.play("rhino")); 
console.log(my_shiritori.play("corn")); 

console.log(my_shiritori.restart());

console.log(my_shiritori.play("hostess"));
console.log(my_shiritori.play("stash"));
console.log(my_shiritori.play("hostess") );