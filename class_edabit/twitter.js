// https://edabit.com/challenge/Nc75jSjR5nuBfx7TK
class twitter{
  #password;
  #tweets;
  constructor(name,password){
    this.name = name;
    this.#password = this.encrypt(password);
    this.#tweets = [];
  }
  encrypt(str){
    return [...str].reverse().join('');
  }
  get password(){
    return '*******';
  }
  set password(_) {}
  checkPassword(string){
    return (this.#password === string);
  }
  set tweets(string){
    this.#tweets.push(string);
  }
  get tweets(){
    return this.#tweets;
  }
}
let twit1 = new twitter("Abhishek",'abhi@321');
console.log(twit1.checkPassword("abhi@321"));
console.log(twit1);
twit1.tweets = "first tweet";
twit1.tweets = "second tweet";
console.log(twit1.tweets);
console.log(twit1.password);
console.log(twit1.pasword = 'abhishek@1');