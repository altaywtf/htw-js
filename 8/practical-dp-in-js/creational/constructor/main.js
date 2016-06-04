/**
 * Constructor Pattern
 * 
 * Used for creating new objects with their own object scope
 *
 * - 'new' keyword is used to consturct a new object.
 * - it links the object to its prototype
 * - binds 'this' to the new object scope
 * - impicitly returns this (it returns this by default)
 */

var Task = function(data) {
	this.name = data.name;
	this.completed = false;
}

/** 
 * Using Object Prototypes
 * we use this to not extend Task constructors' static
 * methods everytime we create an instance of it
 */
Task.prototype.complete = function () {
	console.log(`completing Task: ${this.name}`);
	this.completed = true;
};

Task.prototype.save = function () {
	console.log(`saving Task: ${this.name}`);
};

module.exports = Task;

/** 
 * Constructor Pattern with ES5 Classses
 * We don't need to use prototypes here.
 */
class _Task {

	constructor(name) {
		this.name = name;
		this.completed = false;
	}

	complete() {
		console.log(`competing task ${this.name}`);
		this.completed = true;
	}

	save() {
		console.log('saving task');
	} 

}