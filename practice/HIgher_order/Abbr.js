// https://edabit.com/challenge/H8JABWQfYFN4ZSAxE
const uniqueAbbrev = (abbs, words) => {
  let truthCount = 0;
  abbs.forEach(prefix =>{
    words.forEach(val =>{
    if (val.startsWith(prefix)){
      truthCount +=1
    }
    })
    });
 return truthCount === 3 ? true : false;
  
}

console.log(uniqueAbbrev(["s", "t", "v"], ["stamina", "television", "vindaloo"])); 
console.log(uniqueAbbrev(["bi", "ba", "bat"], ["big", "bard", "battery"]));