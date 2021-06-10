//turning object to json and back.
let user = {
  name: "John Smith",
  age: 35
};
let val= JSON.parse(JSON.stringify(user));
console.log(val);