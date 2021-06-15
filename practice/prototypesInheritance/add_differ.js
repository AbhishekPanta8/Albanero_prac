//task 1
//Native prototype
Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
};

function f() {
  console.log("Hello!");
}

f.defer(4000);