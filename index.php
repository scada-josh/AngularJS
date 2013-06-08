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
  		<li ng-repeat="todo in todos">{{todo}}</li>
  	</ul>
  </div>
 
</body>
</html>