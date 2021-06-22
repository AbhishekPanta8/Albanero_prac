// https://edabit.com/challenge/9kB7LsxejgoAeFrSB
function doSomething(isComplete=false){
  return new Promise((resolve,reject)=>{
    if(isComplete){
      resolve("Sucess!");
    }
    else{
      reject("rejected!");
    }
  })
  .then(result=>{
    console.log("inside function",result);
    return result;
  })
  .catch(err=>{
    console.log("inside function",err);
  })
}
doSomething()
.then(result=>{
  console.log("in main",result);
})