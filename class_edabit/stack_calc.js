// https://edabit.com/challenge/WyuiphFcBXZSoKpEt
class StackCalc{
  constructor(){
    this.stack=[0];
    // this.value = 0;
  }
  set val(a){
    this.value =a;
  }
  run(instructions){
    let len = arr.length;
    if(len == 0) return ;
    var error = false;
    let arr = [];
    arr = instructions.split(" ");
    // arr.forEach(x=>{
    //   this.stack.push(x);
    // })
    arr.forEach(x=>{
      if(error) return;
      if(x == '+'){
        this.stack.push(this.stack.pop() + this.stack.pop());
      }
      else if(x =='-'){
        this.stack.push(this.stack.pop() - this.stack.pop());
      }
      else if(x =='*'){
        this.stack.push(this.stack.pop() * this.stack.pop());
      }
      else if(x =='/'){
        this.stack.push(this.stack.pop() / this.stack.pop());
      }
      else if(x =='DUP'){
        this.stack.push(this.value);
      }
      else if(x =='POP'){
        this.stack.pop();
      }
      else if (!isNaN(parseInt(x))){
        this.stack.push(parseInt(x));
      }
      else{
        this.value = `Invalid instruction: ${x}`;
        error = true;
        return;
      }
      // console.log(this.stack);
      this.value = this.stack[this.stack.length-1];
    })
    // return this.value;
  }
  get value() {
    return this.value;
  }
}
// console.log(new StackCalc(""));
let x =new StackCalc("5 6 +");
x.value = 0;
// console.log(new StackCalc("3 DUP +")); 
// console.log(new StackCalc("6 5 5 7 * - /")); 
// console.log(new StackCalc("x y +"));
console.log(x.value);