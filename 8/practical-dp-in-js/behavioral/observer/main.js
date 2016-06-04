/**
 * Observer Pattern
 *
 * Allows a collection of objects to watch an object
 * and be notified of changes.
 *
 * - allows for loosely coupled system
 * - one object is the focal point
 * - group of objects watch for changes
 * 
 */

var Task = require('../_task');

// Observer 1
var notificationService = function () {
	var message = `Notifying`;
	this.update = function(task) {
		console.log(`${message}, ${task.user}. for task: ${task.name}`);
	}
};

// Observer 2
var loggingService = function () {
	var message = `Logging`;
	this.update = function(task) {
		console.log(`${message}, ${task.user}. for task: ${task.name}`);
	}
};

// Observer 2
var auditingService = function () {
	var message = `Auditing`;
	this.update = function(task) {
		console.log(`${message}, ${task.user}. for task: ${task.name}`);
	}
};

// ObserverList
function ObserverList () {
	this.observerList = [];   
}

ObserverList.prototype.add = function (obj) {
	return this.observerList.push(obj);
};

ObserverList.prototype.get = function (index) {
	if (index > -1 && index < this.observerList.length) {
		return this.observerList[index];
	}
};

ObserverList.prototype.count = function() {
	return this.observerList.length;
};

// Subject
var ObservableTask = function (data) {
	Task.call(this, data);
	this.observers = new ObserverList();
};

ObservableTask.prototype.addObserver = function (observer) {
	this.observers.add(observer);
};

ObservableTask.prototype.notify = function (context) {
	var observerCount = this.observers.count();

	for (var i=0; i < observerCount; i++) {
		this.observers.get(i)(context);
	}
}

ObservableTask.prototype.save = function() {
	this.notify(this);
	Task.prototype.save.call(this);
};

var task1 = new ObservableTask({
	name: 'Demo Task',
	user: 'Altay'
});

var not = new notificationService();
var log = new loggingService();
var aud = new auditingService();

task1.addObserver(not.update);
task1.addObserver(log.update);
task1.addObserver(aud.update);

task1.save();
