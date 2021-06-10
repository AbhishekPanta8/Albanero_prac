//number of weekdays using getday.
function getWeekDay(date) {
  let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  return days[date.getDay()];
}
let date = new Date(2012, 0, 6); 
console.log( getWeekDay(date) );