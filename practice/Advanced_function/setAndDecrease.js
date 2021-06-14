/* Modify the code of makeCounter() so that the counter can also decrease and set the number: */

function makeCounter() {
  let count = 0;
  function counter() {
    return count++;
  }
  counter.set = (value) => count = value;
  counter.decrease = () => count--;
  return counter;
}
let counter = makeCounter();
  
console.log(counter() );
counter.set(5);   
counter.decrease();
console.log( counter() );