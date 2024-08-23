// complete this js code
class person{
	constructor(name,age){
		this.name=name;
		this.age=age;
		greet(){
			console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
		}
		
	}
}
class Employee extends person{
	constructor(name,age,jobTitle){
		this.name=name;
		this.age=age;
		this.jobTitle=jobTitle;
		jobGreet(){
			console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`)
		}
	}
}

let personDetails=new person("Alice",25);
personDetails.greet();

let employyeeDeatilas=new Employee("Bob",30,"Manager");
employyeeDeatilas.jobGreet();























// function Person(name, age) {}

// function Employee(name, age, jobTitle) {}

// // Do not change code below this line
// window.Person = Person;
// window.Employee = Employee;
