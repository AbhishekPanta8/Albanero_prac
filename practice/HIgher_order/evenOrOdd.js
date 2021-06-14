// https://edabit.com/challenge/fZxhP7ZSFEhLGvjME
const countEvenOrOdd = (str, type) => {
  let evenCount = 0;
  let oddCount = 0;
  for (let i = 0; i < str.length; i++) {
    let currentDigit = str[i];
    currentDigit % 2 === 0 ? evenCount++ : oddCount++;
  }
  return type === 'even' ? evenCount : oddCount
}

const countDigits = (arr, type) => {
  let arrMap = arr.map(num => String(num));
  
  let arrMap2 = arrMap.map(strNum => countEvenOrOdd(strNum, type));

  return arrMap2;
}
console.log(countDigits([22, 53, 99, 61, 777, 8], "odd"));
console.log(countDigits([22, 53, 99, 61, 777, 8], "even") );