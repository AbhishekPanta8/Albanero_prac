function redudant(str){
  return function(){
    return str;
  }
}
let f1 = redudant("apple");
console.log(f1());