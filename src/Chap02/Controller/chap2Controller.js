var myAppModule = angular.module('myApp', []);

myAppModule.controller('TextController', function($scope) {
	var someText = {};
	someText.message = 'You have started your journey. 555'; 
	$scope.someText = someText;
});

myAppModule.controller('SomeController', function($scope) {
	$scope.youCheckedIt = true;
});

myAppModule.controller('StartUpController', function($scope) {

	$scope.funding = { startingEstimate: 0 , needed: 0};
	
	// $scope.computeNeeded = function(){
	// 	$scope.funding.needed = $scope.funding.startingEstimate * 10;
	// }

	var computeNeeded =  function(){
		$scope.funding.needed = $scope.funding.startingEstimate * 10;
	}

	$scope.$watch('funding.startingEstimate', computeNeeded);

});


function StartUpController2($scope) { 
	$scope.computeNeeded = function() {
		$scope.needed = $scope.startingEstimate * 10;
	};

	$scope.requestFunding = function() {
		window.alert("Sorry, please get more customers first.");
	}; 

	$scope.reset = function() {
		$scope.startingEstimate = 0;
      };
}

var students = [{name:'Mary Contrary', id:'1'}, 
				{name:'Jack Sprat', id:'2'}, 
				{name:'Jill Hill', id:'3'}
				];
function StudentListController($scope) { 
	$scope.students = students;

	$scope.insertTom = function () {
		$scope.students.splice(1, 0, {name:'Tom Thumb', id:'4'});
	};
}


var album = [{name:'Southwest Serenade', duration: '2:34'}, 
			 {name:'Northern Light Waltz', duration: '3:21'},
			 {name:'Eastern Tango', duration: '17:45'}
			];
function AlbumController($scope) { 
	$scope.album = album;
}

function DeathrayMenuController($scope) { 
	$scope.menuState = {show:true};
	//$scope.menuState.show = true;
	$scope.toggleMenu = function() { 
		$scope.menuState.show = !$scope.menuState.show;
	};


	$scope.isDisabled = false;
	$scope.stun = function() {
		$scope.isDisabled = 'true';
	}; 
}


function HeaderController($scope) { 
	$scope.isError = false; 
	$scope.isWarning = false;

	$scope.showError = function() { 
		$scope.messageText = 'This is an error!'; 
		$scope.isError = true;
		$scope.isWarning = false;
	};
	$scope.showWarning = function() {
		$scope.messageText = 'Just a warning. Please carry on.'; 
		$scope.isWarning = true;
		$scope.isError = false;
	}; 
}

function RestaurantTableController($scope) {
	$scope.directory = [{name:'The Handsome Heifer', cuisine:'BBQ'},
						{name:'Green\'s Green Greens', cuisine:'Salads'},
						{name:'House of Fine Fish', cuisine:'Seafood'}
						];

	$scope.selectRestaurant = function(row) { 
		$scope.selectedRow = row;
	}; 
}

    function CountController($scope) {
      $scope.setCount = function() {
        $scope.count = 3;
      };
    }



    function CartController($scope) {
    	$scope.bill = {};

    	$scope.items = [
    	{title: 'Paint pots', quantity: 8, price: 3.95},
    	{title: 'Polka dots', quantity: 17, price: 12.95},
    	{title: 'Pebbles', quantity: 5, price: 6.95}
    	];

    	$scope.totalCart = function() {
    		var total = 0;
    		for (var i = 0, len = $scope.items.length; i < len; i++) {
    			total = total + $scope.items[i].price * $scope.items[i].quantity;
    		}
    		return total; 
    	}
    	$scope.subtotal = function() {
    		return $scope.totalCart() - $scope.bill.discount;
    	};
    	function calculateDiscount(newValue, oldValue, scope) { 
    		$scope.bill.discount = newValue > 100 ? 10 : 0;
    	}
    	$scope.$watch($scope.totalCart, calculateDiscount);
    }




    function ShoppingController($scope, Items) {
    	$scope.items = Items.query();
    }

    var shoppingModule = angular.module('ShoppingModule', []);

      // Set up the service factory to create our Items interface to the
      // server-side database
      shoppingModule.factory('Items', function() {
      	var items = {};
      	items.query = function() {
          // In real apps, we'd pull this data from the server...
          return [
          {title: 'Paint pots', description: 'Pots full of paint', price: 3.95},
          {title: 'Polka dots', description: 'Dots with polka', price: 2.95},
          {title: 'Pebbles', description: 'Just little rocks', price: 6.95}
          ];
      };
      return items;
  });



      function HomeController($scope) {
      	$scope.pageHeading = 'behold the majesty of your page title';
      }
      var homeModule = angular.module('HomeModule', []); 
      homeModule.filter('titleCase', function() {
      	var titleCaseFilter = function(input) {
      		var words = input.split(' ');
      		for (var i = 0; i < words.length; i++) {
      			words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      		}
      		return words.join(' '); 
      	};
      	return titleCaseFilter; 
      });


      function AddUserController($scope) { 
      	$scope.message = '...';
	      $scope.addUser = function () {
			// TODO for the reader: actually save user to database... 
			$scope.message = 'Thanks, ' + $scope.user.first + ', we added you!';
			}; 
	   }


//var appMod = angular.module('app', ['myApp']);
var appMod = angular.module('app', ['myApp', 'ShoppingModule', 'HomeModule']);


// function SomeController($scope) {
//     $scope.message = { text: 'nothing clicked yet' };

//     $scope.clickUnfocused = function() {
//       $scope.message.text = 'unfocused button clicked';
//     };

//     $scope.clickFocused = function() {
//       $scope.message.text = 'focus button clicked';
//     };
//   }

//   var appModule = angular.module('myApp', []);

//   appModule.directive('ngbkFocus', function() {
//     return {
//       link: function(scope, element, attrs, controller) {
//         element[0].focus();
//       }
//     };
//   });

// function TextController($scope) {
// 	var messages = {};
// 	messages.someText = 'You have started your journey.'; 
// 	$scope.messages = messages;
// }



