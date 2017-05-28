// Write your code here
module.exports = Person

/**ES Class definition
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
*/

/**ES5 prototype definition*/
function Person(name,age){
	this.name = name;
	this.age = age;
}

Person.prototype.introduce = function(){
	return "My name is "+ this.name+"."+"I am "+this.age+" years old.";
}