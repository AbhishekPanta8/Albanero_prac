//using object destructuring and entries.
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
function topSalary(salaries) {
  let maxSalary = 0;
  let Name = null;
  for(let [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      Name = name;
    }
  }
  return Name;
}
console.log(topSalary(salaries));