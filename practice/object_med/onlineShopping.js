/* Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00. */
function freeShipping(obj){
  let sum=0;
  for(let value of Object.values(obj)){
    sum+=value;
  }
  return sum>50.00 ? true : false;
}
console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }));
console.log(freeShipping({ "Flatscreen TV": 399.99 }));