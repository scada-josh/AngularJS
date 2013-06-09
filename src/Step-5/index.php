<!doctype html>
<html lang="en" ng-app>
<head>
  <meta charset="utf-8">
  <title>AngularJS : STEP 4</title>
  <!-- <link rel="stylesheet" href="css/app.css"> -->
  <link rel="stylesheet" href="../../bootstrap/css/bootstrap.css">
  <script src="../../angular-1.0.7/angular.js"></script>
  <!-- <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.1/angular.min.js"></script> -->
  <script src="./Controller/step5-Controller.js"></script>
  
</head>
<body ng-controller="PhoneListCtrl">

	<div class="container-fluid">
		<div class="row-fluid">
			<div class="span2">
				<!--Sidebar content-->

				Search: <input ng-model="query">
				Sort by:
				<select ng-model="orderProp">
					<option value="name">Alphabetical</option>
					<option value="age">Newest</option>
				</select>

			</div>
			<div class="span10">
				<!--Body content-->

				<ul class="phones">
					<li ng-repeat="phone in phones | filter:query | orderBy:orderProp">
						{{phone.name}}
						<p>{{phone.snippet}}</p>
					</li>
				</ul>

			</div>
		</div>
	</div>

</body>
</html>

