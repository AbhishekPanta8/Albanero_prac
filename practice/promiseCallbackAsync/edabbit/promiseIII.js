// https://edabit.com/challenge/W6RRCaj8mZJgiRAgy
function asyncFunc(cb) {
  let result="";
  result="hello";
 setTimeout(() => {
   result="bye";
  cb(result);
 }, 1000);
  
}

function callback(str) {
  console.log(str);
}

asyncFunc(callback);
console.log("goodbye");