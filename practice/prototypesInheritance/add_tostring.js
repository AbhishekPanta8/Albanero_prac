// There’s an object dictionary, created as Object.create(null), to store any key/value pairs.
// Add method dictionary.toString() into it, that should return a comma-delimited list of keys. Your toString should not show up in for..in over the object.
let dictionary = Object.create(null, {
  toString: { 
    value() { 
      return Object.keys(this);
    }
  }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";
for(let key in dictionary) {
  console.log(key); 
}
console.log(dictionary);