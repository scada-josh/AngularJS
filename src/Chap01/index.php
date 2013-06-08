<!doctype html>
<html lang="en" ng-app>
<head>
  <meta charset="utf-8">
  <title>Shoppig Cart Example</title>
  <!-- <link rel="stylesheet" href="css/app.css"> -->
  <link rel="stylesheet" href="../../bootstrap/css/bootstrap.css">
  <script src="../../angular-1.0.7/angular.js"></script>
  <!-- <script src="./Controller/todoCtrl.js"></script> -->
  <script type="text/javascript">
  function CartController($scope) { 
    $scope.items = [
                    {title: 'Paint pots', quantity: 8, price: 3.95},
                    {title: 'Polka dots', quantity: 17, price: 12.95},
                    {title: 'Pebbles', quantity: 5, price: 6.95}
                   ];

     $scope.remove = function(index) { 
      $scope.items.splice(index, 1);
    } 
  }
    </script>
</head>
<body  ng-controller='CartController'>
 
  <h1>Your Order</h1>
  <div ng-repeat='item in items'>
    <span>{{item.title}}</span>
    <input ng-model='item.quantity'>
    <span>{{item.price | currency}}</span> 
    <span>{{item.price * item.quantity | currency}}</span> 
    <button ng-click="remove($index)">Remove</button>
  </div>


  
</body>
</html>