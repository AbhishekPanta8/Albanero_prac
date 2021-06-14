/* Create a function that takes a string txt and returns the string in monkeys language. You have to figure out their language from test cases. */
function monkeyTalk(txt){
  var first = txt.split(" ").map(x=>["a","e","i","o","u","A","E","I","O","U"].includes(x.slice(0,1)) ? "eek" : "ook")[0]
	var exten = txt.split(" ").map(x=>["a","e","i","o","u","A","E","I","O","U"].includes(x.slice(0,1)) ? "eek" : "ook").slice(1,)
  return txt.split(" ").length===1 ? first.slice(0,1).toUpperCase()+first.slice(1,) + "." : first.slice(0,1).toUpperCase()+first.slice(1,)+" "+exten.join(" ")+"."
}

console.log(monkeyTalk("Mubashir Hassan"));