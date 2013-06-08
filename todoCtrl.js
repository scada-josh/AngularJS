function TodoCtrl($scope){

	// $scope.todos[] = [{detail: "AngularJS", status: "done"}
	// 				{detail: "HTML", status: "done"},
	// 				{detail: "jQuery", status: "done"}];
	$scope.todos = [{detail: "AngularJS", status: "undone"},
					{detail: "HTML", status: "done"},
					{detail: "jQuery", status: "done"}];

	$scope.addItem = function(items){
		var todo = {detail: items, status: 'undone'};
		$scope.todos.push(todo)
	}

	//UI Function
	$scope.addButtonClicked = function( ){
		//alert($scope.new_todos);
		//var new_todo = {detail: $scope.new_todos, status: 'undone'};
		//$scope.todos.push(new_todo);
		$scope.addItem($scope.new_todos);
		$scope.new_todos = "";
	}
}
