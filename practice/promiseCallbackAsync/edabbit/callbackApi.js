// https://edabit.com/challenge/R8atdhgsG4B69AZzR
let Err="";
function saySomething(str) {
	throw Error("Error occured!")
}
const promise = () => new Promise( (resolve, reject) => { 
	setTimeout(resolve,1000);
})
promise().
then(() => {
  saySomething("1 second has passed")
})
.catch((err)=>{
  Err =err;
  console.log(Err.message);
})