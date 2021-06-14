/* Write a function that takes an array of arrays and returns the value of all of the symbols in it, where each symbol adds or takes something from the total score */
function checkScore(matrix) {
	let key = {'#': 5, 'O': 3, 'X': 1, 
		'!': -1, '!!': -3, '!!!': -5}
	let score = 0
  
	for (let i = 0; i < matrix.length; i++)
	  	for (let j = 0; j < matrix[i].length; j++)
			  score += key[matrix[i][j]]
  	return Math.max(0, score)
}
console.log(checkScore([
  ["#", "!"],
  ["!!", "X"]
]) );