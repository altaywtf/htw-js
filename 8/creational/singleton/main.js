/**
 * Singleton
 *
 * Used for restricting objects to single instance of that object,
 * all across the application.
 *
 * - It remembers last time we use it, 
 * and hands us back the same instance
 *
 * - Good way to achive singleton is exporting the instance of the module
 *
 * if we export them with this way,
 * -- module.exports = new TaskRepo;
 * -- module.exports = taskRepo();
 *
 * whenever we import them with
 * -- require('./taskrepo');
 *
 * we'll have that exact instance created on the module file everytime.
 * so, even if we call the methods of that module from the different parts
 * of the application, our affects will be applied on that single instance!
 *
 * wow mq :D
 */

/** Example */
var TaskRepo = (function () {

	var taskRepo;

	function createRepo() {
		var taskRepo = new Object("Task");
		return taskRepo;
	}

	return {
		getInstance: function () {
			if (!taskRepo) {
				taskRepo = createRepo();
			}

			return taskRepo;
		}
	};

})();

var repo1 = TaskRepo.getInstance();
var repo2 = TaskRepo.getInstance();

console.log(repo1 === repo2); // returns true :-O