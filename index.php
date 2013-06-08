<!doctype html>
<html lang="en" ng-app>
<head>
  <meta charset="utf-8">
  <title>My HTML File</title>
  <!-- <link rel="stylesheet" href="css/app.css"> -->
  <link rel="stylesheet" href="bootstrap/css/bootstrap.css">
  <script src="./angular-1.0.7/angular.js"></script>
  <script src="./todoCtrl.js"></script>
</head>
<body>
 
  <div class="row span6 offset3" ng-controller="TodoCtrl">
  	<ul>
  		<li ng-repeat="todo in todos">
  			<label class="checkbox">
  				<input type="checkbox"> {{todo}}
  			</label>
  		</li>
  	</ul>
  	<form class="form-search">
  		<input type="text" class="input-medium search-query" ng-model="new_todos" placeholder="new Todos Go Here">
  		<button type="button" class="btn" ng-click="addButtonClicked()">เพิ่มข้อมูล</button>
  	</form>
  </div>
 
</body>
</html>