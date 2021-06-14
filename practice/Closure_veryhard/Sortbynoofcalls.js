// https://edabit.com/challenge/zi2Mvb2GZi3r34JKv
const nesting = (func) => {
	let num =0;
	while(typeof func === "function"){
		func=func();
		num+=1;
	}
	return num;
}

function funcSort(arr) {
	return arr.sort((a,b) => nesting(a) - nesting(b))
}

f1 = _ => "hello";
f2 = _ => _ => "edabit";
f3 = _ => _ => _ => "user";
console.log(funcSort([f2, f3, f1]));
console.log(funcSort([f2, "func"])); 