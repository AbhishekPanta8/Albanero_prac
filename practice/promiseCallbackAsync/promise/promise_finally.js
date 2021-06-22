function makePromise (completed){
  return new Promise(function(resolve,reject){
    setTimeout(()=>{
      if(completed)
        resolve("task completed!");
      else
        reject("task incomplete");
    },3000);
  });
}
let prog_end = ()=>{console.log("program ended!")};
let prom = makePromise(true);
prom.then(
  sucess => {console.log(sucess)}
).catch(
  failure=> console.log(failure)
).finally(
  ()=>prog_end()
);