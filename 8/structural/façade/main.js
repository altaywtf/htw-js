/**
 * Façade Pattern
 * used for providing a simplified interface to a complicated system!
 *
 * - Facede hiddes the chaos from us
 * - Simplifies the interface of the API
 * - Example: JQuery :D
 *
 * FAÇADE vs DECORATOR
 * -- façade doesn't extends/manipulates the functionality, 
 * -- just makes the service easier to use by simplifying its interface
 */

var Task = function(data) {
	this.name = data.name;
	this.priority = data.priority;
	this.project = data.project;
	this.user = data.user;
	this.completed = data.completed;
}

// UGLY SERVICE EXAMPLE
var TaskService = function () {
	return {
		complete: function (task) {
			task.completed = true;
			console.log(`completing task ${task.name}`);
		},
		setCompleteDate: function (task) {
			task.completeDate = new Date();
			console.log(`completion date of ${task.name} is ${task.completeDate}`);
		},
		notifyCompletion: function (task, user) {
			console.log(`notifiying ${user} of the completion of ${task.name}`);
		},
		save: function(task) {
			console.log(`saving ${task.name}`);
		}
	}
}();

var myTask = new Task({
	name: 'MyTask',
	priority: 1,
	project: 'ExampleProject',
	user: 'Altay',
	completed: false
});

/* 
 * Problem: TaskService.complete(myTask);
 * only sets the completed status of the task but it does not set the
 * completion date nor sends the completion notification.
 */ 

/**
 * We're going to write a wrapper to the TaskService, 
 * which solves problems like we defined above.
 */

var TaskServiceWrapper = function () {
	
	var completeAndNotify = function(task) {
		TaskService.complete(task);

		if (task.completed) {
			TaskService.setCompleteDate(task);
			TaskService.notifyCompletion(task, task.user);
			TaskService.save(task);
		}
	}

	return {
		completeAndNotify: completeAndNotify
	}
}();

TaskServiceWrapper.completeAndNotify(myTask);