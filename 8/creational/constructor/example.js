var Task = require('./main');

var task = new Task({name: 'create a demo for constructors'});

console.log('completed:', task.completed);

task.complete();

console.log('completed:', task.completed);