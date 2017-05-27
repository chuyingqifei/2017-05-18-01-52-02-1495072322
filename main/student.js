let Person = require('./person')
// Write your code here
module.exports = Student

class Student extends Person{
	constructor(name,age,klass){
		super(name,age);
		this.klass = klass;
	}
	introduce(){
		//My name is Tom. I am 21 years old. I am a Student. I am at Class 2.;
		return "My name is ${this.name}. I am ${this.age} years old. I am a Student. I am at Class ${this.klass}.";
	}
	
}