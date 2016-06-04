/**
 * Module Pattern
 *
 * Used for creating a collection of keys and functions
 *
 * difference between constructors and modules:
 * - we can have many things created by constructors 
 * - but we generally need one module in our application
 *
 * Modules gives us to oppurtuinty of keeping the 
 * configuration parts private with the help of 
 * Javascript Closures
 * 
 */

/** Module Example */
var Repo = function () {

	// DB settings (private)
	var db = {};

	return {
		get: function(id) {
			console.log('Getting task: '+id);
			return {
				name: 'new task from db'
			};
		},

		save: function(task) {
			console.log('saving '+task);
		}
	}

}

module.exports = Repo();

/** 
 * Revealing Module Example
 */
var _Repo = function () {

	// DB settings (private)
	var db = {};
	var get = function(id) {
			console.log('Getting task: '+id);
			return {
				name: 'new task from db'
			};
		}

	var save = function(task) {
			console.log('saving '+task);
		}

	return {
		get: get,
		save: save
	}

}
