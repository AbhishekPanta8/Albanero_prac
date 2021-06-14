// https://edabit.com/challenge/4zCJaqJvEcAmqcb7y
function reorderDigits(arr,str){
  if(str=="asc"){
    return (arr.sort(function(a, b) {
      return a - b;
    }));
  }
  else if(str="desc")
  {
    return (arr.sort(function(a, b) {
      return b - a;
    }));
  }
}
console.log(reorderDigits([515, 341, 98, 44, 211], "asc"));
console.log(reorderDigits([515, 341, 98, 44, 211], "desc"));