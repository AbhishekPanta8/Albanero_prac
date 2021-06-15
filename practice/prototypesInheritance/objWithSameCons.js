// Imagine, we have an arbitrary object obj, created by a constructor function – we don’t know which one, but we’d like to create a new object using it.
function User(name) {
  this.name = name;
}
// User.prototype = {}; 

let user = new User('John');
let user2 = new user.constructor('Pete');

console.log( user2.name );