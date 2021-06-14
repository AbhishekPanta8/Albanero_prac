/* Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array. */
let toArray = (obj)=>{
  return Object.entries(obj);
}
console.log(toArray({ shrimp: 15, tots: 12 }));

//or,
/* function toArray(obj) {
	var a =[];
	for(var entries of Object.entries(obj)){
		a.push([entries]);
	}
	return a;
}
console.log(toArray({ shrimp: 15, tots: 12 })); */