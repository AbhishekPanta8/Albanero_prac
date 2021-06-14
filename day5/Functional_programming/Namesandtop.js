/* Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4] } and returns an array of objects like { name: "John", topNote: 5 }. */
function get_nameandtop(arr) {
	let final = [];
	for (let i = 0; i < arr.length; i++){
    let notes = arr[i].notes  ;          
    if (notes.length > 0){
      let m = Math.max(...notes);                
      let obj =  {
        name: arr[i].name, topNote: m
      };
      final.push(obj);
    } 
    else {
      let obj =  {
        name: arr[i].name, topNote: 0
      };
      final.push(obj);
    }
  }
  return final;
}
// const get_nameandtop = students =>
// students.map(student => ({
//   name: student.name,
//   topNote: Math.max(...student.notes, 0),
// }));
console.log(get_nameandtop(
  [
    { "name": "John", "notes": [3, 5, 4] },
    { "name": "Max", "notes": [1, 4, 6] },
    { "name": "Zygmund", "notes": [1, 2, 3] }
  ]
));