/**
 * Mediator Pattern
 *
 * controls communication between objects so neither object
 * has to be coupled to the others.
 *
 * - allows for loosely coupled system
 * - one object manages all communication
 * - many to many relationship
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

/** Mediator */
var mediator = (function () {
	
	var channels = {};

	var subscribe = function (channel, context, func) {
		if (!mediator.channels[channel]) {
			mediator.channels[channel] = []
		}

		mediator.channels[channel].push({
			context,
			func
		});
	};

	var publish = function (channel) {
		if (!this.channels[channel]) { 
			return false;
		}

		var args = Array.prototype.slice.call(arguments, 1);

		for (var i = 0; i < mediator.channels[channel].length; i++) {
			var sub = mediator.channels[channel][i];
			sub.func.apply(sub.context, args);
		}
	}

	return {
		channels,
		subscribe,
		publish
	};

})();

var task1 = new Task({
	name: 'mediator demo',
	user: 'John'
});

var not = new notificationService();
var log = new loggingService();
var aud = new auditingService();

mediator.subscribe('complete', not, not.update);
mediator.subscribe('complete', log, log.update);
mediator.subscribe('complete', aud, aud.update);


task1.complete = function () {
	mediator.publish('complete', this);
	Task.prototype.complete.call(this);
}

task1.complete();
