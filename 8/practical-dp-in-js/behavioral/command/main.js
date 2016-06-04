/**
 * Command Pattern
 *
 * encapsulates the calling of a method as an object
 *
 * - fully decouples the execution from the implementation
 * - allows for less fragile implementations
 * - support undo operations
 * - supports auditing and logging of operations
 */

/** Command Example */
var repo = {
	tasks: {},

	// All the commands that have been executed are here.
	// it gives us to oppurtinity of logging or re-calling
	commands: [], 
	
	get: function(id) {
		console.log('Getting task: '+id);
		return {
			name: 'new task from db'
		};
	},

	save: function(task) {
		this.tasks[task] = task;
		console.log('saving '+task);
	}
	
};

repo.execute = function (name) {
	var args = Array.prototype.slice.call(arguments, 1);

	this.commands.push({
		name,
		obj: args[0]
	});

	if (repo[name]) {
		return repo[name].apply(repo, args);
	} else {
		return false;
	}
};

repo.execute('save', 'task1');
repo.execute('save', 'task2');
repo.execute('save', 'task3');

console.log(repo);