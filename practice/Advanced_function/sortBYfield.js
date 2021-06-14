let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
function byField(Fieldname){
  return ((a,b)=> a[Fieldname] > b[Fieldname] ? 1 : -1);
}
// users.sort(byField('name'));
users.sort(byField('age'));
console.log(users);
