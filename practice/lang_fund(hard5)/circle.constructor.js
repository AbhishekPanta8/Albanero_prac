function Circle(radius) {
	this.radius   = radius,
	this.diameter = this.radius * 2,
	this.getC 		= () => +(this.diameter * Math.PI).toFixed(2),
	this.getA 		= () => +(Math.pow(this.radius,2) * Math.PI).toFixed(2)
}
let c1 = new Circle(3);
let c2 = new Circle(5);
console.log(c1.getC());
console.log(c2.getA());