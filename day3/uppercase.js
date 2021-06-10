//convert 1st char to uppercase.
let conv= (str)=>{
  if(!str) return str;
  return str[0].toUpperCase()+str.slice(1);
}
console.log(conv("john")); 