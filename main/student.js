let Person = require('./person')
// Write your code here
module.exports = Student

/**ES Class definition
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
*/

function Student(name,age,klass){
	//Person.apply(this[name,age]);
	Person.call(this,name,age);
	this.klass = klass;
}
Student.prototype = new Person();
Student.prototype.constructor = Student;

Student.prototype.introduce = function(){
	//return "My name is "+ this.name+"."+"I am " + this.age+" years old."+"I am a Student. I am at Class"+this.klass+".";
	return "My name is "+ this.name+". "+"I am " + this.age+" years old. "+"I am a Student. I am at Class "+this.klass+".";
}

