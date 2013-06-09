function NamesListCtrl($scope, $http) { 
	//$http.get('http://server/names', {params: {filter: 'none'}})
	$http.get('../REST/restTEST.php', {params: {filter: 'none'}})
	.success(function(data) { 
		$scope.names = data;
	}); 
}



function PhoneListCtrl2($scope, $http) {
  $http.get('../REST/phones.json').success(function(data) {
    $scope.phones = data;
  });
 
  $scope.orderProp = 'age';
}