// https://edabit.com/challenge/xsaGheX3yQ4g4Tb8b
var result = "";
let promise = new Promise((resolve,reject)=>{
    resolve("sucess!");
});
promise.then(
  (ans)=>{result = ans}
)