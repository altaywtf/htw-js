/**
 * Factory Pattern 
 * is used for simplifying object creation.
 * 
 * - Simplifies object creation
 * - Creates different objects based on need
 * 
 */

/** RepoFactory */

var RepoFactory = function () {

	this.getRepo = function(repoType) {

		switch (repoType) {
			case 'task':
				if (this.taskRepo) {
					return this.taskRepo;
				} else {
					this.taskRepo = taskRepo();
					// config
					return this.taskRepo;
				}
			case 'user':
				if (this.userRepo) {
					return this.userRepo;
				} else {
					this.userRepo = userRepo();
					// config
					return this.userRepo;
				}
			default:
				return {};
		}
	}
}


/** TaskRepo */
var taskRepo = function () {
	var data = [];

	var get = function(id) {
		return data.filter(d => d.id == id);
	}

	var save = function(name) {
		console.log(`saving ${name} to task repo`);

		data.push({
			id: data.length,
			name,
		});
	}

	return {
		get: get,
		save: save
	}

}

module.exports = new RepoFactory;


/**
 * Insted of dealing with swtich-case or if-elses, 
 * we can just use a foreach loop to achieve the same thing
 */

var repoFactory = function() {
	var repos = this;
	var repoList = [
		{ name: 'task', source: './tasks' },
		{ name: 'user', source: './users' },
		{ name: 'project', source: './projects' }
	];

	repoList.foreach(r => repos[r.name] = require(r.source)());
}