/* //1.showing the message
alert("This is message"); */

/* //2.Working with variables
let admin,name;
name="john";
admin = name;
alert("admin"); */

/* //3.Giving the right name
let planet,name;
planet="Earth";
name="Abhishek"; */

/* //4.string quotes
let name = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya */

/* //5.Tasks
let name;
name= prompt("what is your name?");
alert(name); */

/* //6.The name of Javascript
let nameJs = prompt("what is the official name of javscript?");
alert((nameJs=="ECMAScript")? "Right": "You don't know? ECMAScript!"); */

/* //7.Show a sign
let num = prompt("Enter a number!");
if(num>1)alert(1);
else if(num<1) alert(-1);
else alert(0); */

/* //8.convert to ?
let val = (a + b < 4) ? 'Below' : 'Over'; */

/* //9.convert to ?
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  ''; */

/* //10.Check login
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let password= prompt('Password?', '');

  if (password=== 'TheMaster') {
    alert( 'Welcome!' );
  } else if (password=== '' || password=== null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
} */

//In while loop ++i returns new value whereas i++ returns new value.
//The value returned by the increment is not used in for loop, so there’s no difference between i++ and ++i.

/* //10.OUtput even numbers
for (let i = 2; i <= 10; i++) 
{
  if (i % 2 == 0){
    alert(i);
  }
} */

/* //11.Replace for with while
let i = 0;
while (i < 3){
  alert(`number ${i}!`);
  i++;
} */

/* //12.Repeat until it is correct
let a;
do{
  a= prompt("Enter greater than 100",0);
}while(num<=100 && num);
// alert(a);
 */

//output prime number
/* let h = prompt("Enter the value of n(greater than 2)");

for(let i=2;i<=h;i++){
  let flag=0;
  for(let j=2;j<=i/2;j++){
    if(i%j==0){
      flag=1;
      break;
    }
  }
  if(flag==0)
    console.log(i);
} */

/* *** Functions *** */

/* //Rewrite function using ? and ||
function checkAge(age){
  return (age > 18) ? true : confirm('Did parents allow you?');
}
function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
} */

/* //function min(a,b)
function min(a, b) {
  return a < b ? a : b;
}
 */

/* //Function power
function pow(x, n) {
  let val = x;
  for (let i = 1;i<n;i++) {
    val *= x;
  }
  return val;
}
let x = prompt("Enter x:", '');
let n = prompt("Enter y", '');

if (n < 1) {
  alert(`Enter only positive value!`);
} else {
  alert( pow(x, n) );
} */

//Rewrite using arrows
let ask = (question,yes,no)=> confirm(question) ? yes() : no();
ask("do you agree?",()=> {alert('you agreed!');},()=>{alert("you cancelled the execution");});
