let completed = false;
let p = new Promise(function(resolve,reject){
  setTimeout(()=>{
    if(completed)
      resolve("task completed!");
    else
      reject("task incomplete");
  },3000);
});
p.then(
  success => console.log(success),
  failure => console.log(failure)
);
//Handle the rejected case.
// p.then(
//   undefined,
//   reason => console.log(reason)
// );
