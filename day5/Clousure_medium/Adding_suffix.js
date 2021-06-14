function add_suffix(suff){
  return function(str){
    return str+suff;
  }
}
let addstr = add_suffix("ly");
console.log(addstr("hopeless"));