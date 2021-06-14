/* Create the function that takes an array with objects and returns the sum of people's budgets. */
function getBudgets(arr){
  let sum=0;
  for(let b of arr){
    sum+=b.budget;
  }
  return sum;
}
console.log(getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]));