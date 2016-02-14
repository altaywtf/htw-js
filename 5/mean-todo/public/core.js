var scotchTodo = angular.module('scotchTodo', []);

function mainController($scope, $http) {
	$scope.formData = {};

	// first api call to fetch all todos
	$http.get('/api/todos')
		.success(function (data) {
			$scope.todos = data;
			console.log(data);
		})
		.error(function (data) {
			console.log('Error', data);
		});

	// creating a todo
	$scope.createTodo = function () {
		$http.post('/api/todos/', $scope.formData)
			.success(function (data) {
				$scope.formData = {};
				$scope.todos = data;
				console.log(data);
			})
			.error(function (data) {
				console.log('Error', data);
			});
	};

	// deleting a todo
	$scope.deleteTodo = function (id) {
		$http.delete('/api/todos/' + id)
			.success(function (data) {
				$scope.todos = data;
				console.log(data);
			})
			.error(function (data) {
				console.log('Error', data);
			});
	};

}