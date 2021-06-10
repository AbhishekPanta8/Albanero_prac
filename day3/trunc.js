//truncate the text
 function truncate(str, max) {
  return (str.length > max) ? str.slice(0, max - 1) + '…' : str;
}
console.log(truncate("Hello it's me Abhishek Panta and i am learning js!",20));
console.log("hi"); 