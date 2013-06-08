<!doctype html>
<html lang="en" ng-app="app" >
<head>
  <meta charset="utf-8">
  <title>Shoppig Cart Example</title>
  <!-- <link rel="stylesheet" href="css/app.css"> -->
  <link rel="stylesheet" href="../../bootstrap/css/bootstrap.css">
  <script src="../../angular-1.0.7/angular.js"></script>
  <!-- <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.1/angular.min.js"></script> -->
  <script src="./Controller/chap2Controller.js"></script>
  <style type="text/css">
    .menu-disabled-true { 
      color: gray;
    }

    .error { 
      background-color: red;
    }
    .warning { 
      background-color: yellow;
    }

    .selected {
      background-color: lightgreen;
    }
  </style>
  
</head>
<body  ng-controller="TextController">
  <p>{{someText.message}}</p>
  <p ng-bind="someText.message"></p>


  <form ng-controller="SomeController">
    <p>{{youCheckedIt}}</p>
    <input type="checkbox" ng-model="youCheckedIt"> Test Check box
  </form>

  <form ng-controller="StartUpController"> 
    <!-- Starting: <input ng-change="computeNeeded()" ng-model="funding.startingEstimate"> -->
    Starting: <input ng-model="funding.startingEstimate">
    Recommendation: {{funding.needed}}
  </form>

  <hr/>

  <form ng-submit="requestFunding()" ng-controller="StartUpController2"> 
    Starting: <input ng-change="computeNeeded()" ng-model="startingEstimate"> Recommendation: {{needed}}
    <!-- <button>Fund my startup!</button> -->
    <input type="submit" value="5555"/>
    <button ng-click="reset()">Reset</button>
  </form>

  <hr/>

  <div ng-controller='StudentListController'>
    <ul >
      <li ng-repeat='student in students'>
        <a href='/student/view/{{student.id}}'>{{student.name}}</a> 
      </li>
    </ul>
    <button ng-click="insertTom()">Insert</button>
  </div>

  <hr/>

  <table ng-controller='AlbumController'> 
    <tr ng-repeat='track in album'>
      <td>{{$index + 1}}</td> 
      <td>{{track.name}}</td> 
      <td>{{track.duration}}</td>
    </tr>
  </table>

  <hr/>

  <div ng-controller='DeathrayMenuController'>
    <button ng-click='toggleMenu()'>Toggle Menu</button> 
    <ul ng-show='menuState.show'>
      <li class='menu-disabled-{{isDisabled}}' ng-click='stun()'>Stun</li>
      <li class='menu-disabled-{{isDisabled}}' ng-click='disintegrate()'>Disintegrate</li> 
      <li class='menu-disabled-{{isDisabled}}' ng-click='erase()'>Erase from history</li>
    </ul> 
  </div>

  <hr/>

  <div ng-controller='HeaderController'>
    <div ng-class='{error: isError, warning: isWarning}'>{{messageText}}</div>
    <button ng-click='showError()'>Simulate Error</button>
    <button ng-click='showWarning()'>Simulate Warning</button>
  </div>

  <hr/>

  <table ng-controller='RestaurantTableController'>
    <tr ng-repeat='restaurant in directory' 
        ng-click='selectRestaurant($index)' 
        ng-class='{selected: $index==selectedRow}'> 
    <td>{{restaurant.name}}</td> 
    <td>{{restaurant.cuisine}}</td>
  </tr>
</table>

<hr/>


<div ng-controller="CountController">
  {{count}}
  <button ng-click="count=3">Count Three</button>
  <button ng-click='setCount()'>Set count to three</button>
</div>


<hr/>

<div ng-controller="CartController"> 
  <div ng-repeat="item in items">
    <span>{{item.title}}</span>
    <input ng-model="item.quantity">
    <span>{{item.price | currency}}</span> 
    <span>{{item.price * item.quantity | currency}}</span>
  </div>

  <div>Total: {{totalCart() | currency}}</div> 
  <div>Discount: {{bill.discount | currency}}</div> 
  <div>Subtotal: {{subtotal() | currency}}</div>
</div>


 <div ng-controller="ShoppingController">
  <h1>Shop!</h1>
  <table>
    <tr ng-repeat="item in items">
      <td>{{item.title}}</td>
      <td>{{item.description}}</td>
      <td>{{item.price | currency}}</td>
    </tr>
  </table>
</div> 

<div ng-controller="HomeController"> 
  <h1>{{pageHeading | titleCase}}</h1>
</div>


<h1>Sign Up</h1>
<form name='addUserForm' ng-controller="AddUserController">
  <!-- <div>First name: <input ng-model='user.first' required></div> 
  <div>Last name: <input ng-model='user.last' required></div> 
  <div>Email: <input type='email' ng-model='user.email' required></div> 
  <div>Age: <input type='number' ng-model='user.age' ng-maxlength='3' ng-minlength='1'></div> -->
  <div ng-show='message'>{{message}}</div>
  <div>First name: <input name='firstName' ng-model='user.first' required></div> 
  <div>Last name: <input ng-model='user.last' required></div>
  <div>Email: <input type='email' ng-model='user.email' required></div> 
  <div>Age: <input type='number' ng-model='user.age' ng-maxlength='3' ng-min='1'></div>
  <div><button ng-disabled='!addUserForm.$valid'>Submit</button></div> 

</form>

<!--   <button ng-click="clickUnfocused()">
    Not focused
  </button>
  <button ngbk-focus ng-click="clickFocused()">
    I'm very focused!
  </button>
  <div>{{message.text}}</div> -->

</body>
</html>

