let displayName = function(){
  console.log("Abhishek");
}
displayName.call(); //displayName(); (call() is called in background when we call any function ).
let participant1 = {
  name: 'a',
  battery: 70,
  chargeBattery: function(a,b){
    this.battery = this.battery + a + b;
  }
}
// participant1.chargeBattery(10,20);
// console.log(participant1);
let participant2 ={
  name: 'b',
  battery: 30
}
// participant1.chargeBattery.call(participant2,10,40);
// participant1.chargeBattery.apply(participant2,[10,40]); //only difference is arg passed as array.
let chargedParticipant2 = participant1.chargeBattery.bind(participant2,10,40);
chargedParticipant2();
console.log(participant2);