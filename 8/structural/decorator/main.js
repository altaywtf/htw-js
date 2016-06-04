/**
 * Decorator Pattern
 *
 * Used to add new functionality to an existing object,
 * without being obtrusive (beklenmedik, hoş olmayan, "unwelcomed")
 *
 * - provides More Complete Inheritance
 * - Wraps an object
 * - protects existing objects
 * - allows extended functionality
 *
 */

/** Simple Example */
var Task = function(data) {
	this.name = data.name;
	this.completed = false;
}

Task.prototype.complete = function () {
	console.log(`completing Task: ${this.name}`);
	this.completed = true;
};

Task.prototype.save = function () {
	console.log(`saving Task: ${this.name}`);
};

var myTask = new Task({name: 'Hey!'});
myTask.complete();
myTask.save();

var urgentTask = new Task({name: 'Urgent Hey'});

/** We are decorating single Task instance, urgentTask */
urgentTask.notify = function() {
	console.log('notifying...');
}

urgentTask.save = function () {
	this.notify();
	Task.prototype.save.call(this);
}

urgentTask.save();

/*****************************************************/

/** More Complex Example: Decorating all the instances */
var UrgentTask = function(data, priority) {
	Task.call(this, data);
	this.priority = priority;
}

/* methods of Task won't run in UrgentTask because 
only constructor works as expected and methods of the 
original Task is not inherited. In order to achieve that kind of an 
inheritance, we can create a REAL subclass of Task with this method*/
UrgentTask.prototype = Object.create(Task.prototype);
/* we dont use UrgenTask.prototype = Task.prototype because Task's methods
will also be affected if we change the UrgentTask's methods. 
So, we don't pass by reference, we pass by value :D */

var ut = new UrgentTask({name: 'urgent task'}, 1);
ut.complete(); 
console.log(ut); 

// Then we can also extend UrgentTask with new methods, as we did above
UrgentTask.prototype.notify = function () {
	console.log('urgency level:' + this.priority);
}

// and overwrite the existing methods
UrgentTask.prototype.save = function () {
	this.notify();
	Task.prototype.save.call(this);
}

ut.save();