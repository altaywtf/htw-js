var Task = require('../constructor/main');
var Repo = require('./main');

var task1 = new Task(Repo.get(1));

task1.complete();
task1.save();

var task2 = new Task({name: ':D'});

task2.complete();
task2.save();