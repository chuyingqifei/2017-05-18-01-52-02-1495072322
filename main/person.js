// Write your code here
module.exports = Person
class Person{
	
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	introduce(){
		//My name is Tom. I am 21 years old.
		return "My name is ${this.name}.I am ${this.age} years old."
	}
}

