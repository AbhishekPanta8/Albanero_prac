//Write a function aclean(arr) that returns an array cleaned from anagrams.

function aclean(arr) {
  let map = new Map();
  for (let word of arr) {
    //here it first converts to lowercase then splits to array and sorts and then joins.
    let sorted = word.toLowerCase().split('').sort().join('');
    //here key and value is made and key is made unique by set.
    map.set(sorted, word);
  }
  return Array.from(map.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) );