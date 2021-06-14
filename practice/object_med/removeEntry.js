// Given an object of the stolen items and an item name, return a copy without that item on the list.
function removeEntry(obj,str){
  let obj2 = {...obj};
  // let obj2 =	Object.assign({},obj);
	delete obj2[str];
	return obj2;
}
console.log(removeEntry({ piano: 300, tv: 100, skate: 50 }, "skate"));