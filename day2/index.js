/* ************ OBJECT *********** */
/* //Hello Object
let user = {};
user.name = "John";
user.surname = "smith";
user[name]='Pete';
delete user.name; */

/* //Check for emptiness(return true if no properties exists)
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
} */

/* 
//Sum salaries
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let salary=0;
for(let key in salaries){
  salary+=salaries[key];
}
console.log(`Sum of Salaries is ${salary}`); */

/* //Multiply numeric values by 2
let multiplyNumeric = (menu)=>{
  for(let key in menu){
    if(typeof menu[key] == 'number'){
      menu[key]=menu[key]*2;
    }
  }
}
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
multiplyNumeric(menu); */