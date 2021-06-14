/* Create a function that takes two dates and returns the number of days between the first and second date. */

function noOfDays(date1,date2){
  return Math.round((date2-date1)/(1000*60*60*24));
}
let date1 = new Date(2021,4,20);
let date2 = new Date(2021,5,13);
let diff = noOfDays(date1,date2);
console.log(diff);