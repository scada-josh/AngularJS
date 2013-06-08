function TodoCtrl($scope, $http){

	// $scope.todos[] = [{detail: "AngularJS", status: "done"}
	// 				{detail: "HTML", status: "done"},
	// 				{detail: "jQuery", status: "done"}];
	$scope.todos = [{detail: "AngularJS", status: false},
					{detail: "HTML", status: true},
					{detail: "jQuery", status: true}];

	$scope.addItem = function(items){
		var todo = {detail: items, status: false};
		$scope.todos.push(todo)
	}

	//UI Function
	$scope.addButtonClicked = function( ){
		//alert($scope.new_todos);
		//var new_todo = {detail: $scope.new_todos, status: 'undone'};
		//$scope.todos.push(new_todo);
		$scope.addItem($scope.new_todos);
		$scope.new_todos = "";


		$http.get('./REST/restTEST.php', {params: {id: '5'} })
				.success(function(data, status, headers, config) {
					alert(data);
				})
				.error(function(data, status, headers, config) { 

				});
	}
}
