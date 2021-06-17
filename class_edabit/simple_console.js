// https://edabit.com/challenge/o7fs6wQvjfu9iZE2j
class Console {
  constructor(){
   this.hist = []; 
  }

  log(...args) {
    let a = args.map(v => typeof v === 'object' ? JSON.stringify(v) : v.toString()).join('');
    this.hist.push(a);
    return a;
  }

  history(range) {
    if (range === undefined) { 
      range = [1, this.hist.length]; 
    }
    // console.log(range);
    if (range.length === 1) { 
      range.push(this.hist.length); 
    }
    let l = range[0];
    let h = range[1];
    // console.log(l);
    // console.log(h);
    if (l < 1) {
      l = 1; 
    }
    if (h < 1) {
     h = this.hist.length; 
    }
    if (h < l) {
     h = l; 
    }
    // console.log(this.hist.slice(l-1, h).join('\n'));
    return this.hist.slice(l-1, h).join('\n');
  }

  clearHistory() {
    this.hist = [];
    return true;
  }
}
let myConsole = new Console();
console.log(myConsole.log([0,1,2,3]));
console.log(myConsole.log("ok : ",function(){ return "hello world !"}));
console.log('history is:');
console.log(myConsole.history());
console.log(myConsole.clearHistory());
console.log(myConsole.history());