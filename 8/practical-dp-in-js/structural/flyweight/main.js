/**
 * Flyweight Pattern
 *
 * Conserves memory by sharing portions of an object between objects
 *
 * - shares data across objects
 * - results in a smaller memory footprint
 * - its only useful if u have large numbers of objects
 */

var Task = function(data) {
	this.name = data.name;
	this.flyweight = FlyweightFactory.get(data.project, data.priority,
		data.user, data.completed);
	// this.priority = data.priority;
	// this.project = data.project;
	// this.user = data.user;
	// this.completed = data.completed;
}

// flyweight is a subset of task for us.
// only thing %100 unique is the name of tasks.
// everyhing else can be part of a flyweight 
function Flyweight (project, priority, user, completed) {
	this.priority = priority;
	this.project = project;
	this.user = user;
	this.completed = completed;
}

var FlyweightFactory = function () {
	var flyweights = {};

	var get = function (project, priority, user, completed) {
		var valueSet = project+priority+user+completed;

		if (!flyweights[valueSet]) {
			flyweights[valueSet] = new Flyweight(project, priority, 
				user, completed);
		}

		return flyweights[valueSet];
	};

	var getCount = function () {
		var count = 0;
		for (var f in flyweights) count ++;
		return count;
	}

	return {
		get: get,
		getCount: getCount
	};
}();

function TaskCollection () {
	var tasks = {};
	var count = 0;

	var add = function (data) {
		tasks[data.name] = new Task(data);
		count ++;
	};

	var get = function (name) {
		return tasks[name];
	};

	var getCount = function () {
		return count;
	};

	return {
		add: add,
		get: get,
		getCount: getCount
	};
}

var tasks = new TaskCollection();

var projects = ['none', 'courses', 'training', 'project'];
var priorities = [1,2,3,4,5];
var users = ['a', 'b', 'c'];
var completed = [true, false];

var initialMemory = process.memoryUsage().heapUsed;

for (var i=0; i < 1000000; i++) {
	tasks.add({
		name: `task ${i}`,
		priority: priorities[Math.floor((Math.random() * 5))],
		project: projects[Math.floor((Math.random() * 4))],
		user: users[Math.floor((Math.random() * 4))],
		completed: completed[Math.floor((Math.random() * 2))]
	});
}

var finalMemory = process.memoryUsage().heapUsed;

console.log(`used memory: ${(finalMemory-initialMemory)/1000000}`);
console.log('tasks', tasks.getCount());
console.log('flyweights', FlyweightFactory.getCount());

/*
	used memory: 312.767576
	tasks 1000000
	flyweights 0 
*/

/*
	used memory: 301.408008
	tasks 1000000
	flyweights 160
 */