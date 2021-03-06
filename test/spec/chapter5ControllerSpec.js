// describe('PhoneCat controllers2', function() {

// 	describe('PhoneListCtrl2', function(){
// 		var scope, ctrl, $httpBackend;

//     // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
//     // This allows us to inject a service but then attach it to a variable
//     // with the same name as the service.
//     beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
//     	$httpBackend = _$httpBackend_;
//     	$httpBackend.expectGET('./phones.json').respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

//     	scope = $rootScope.$new();
//     	ctrl = $controller(PhoneListCtrl, {$scope: scope});
//     }));
// });
// 	});

// // describe('PhoneCat controllers2', function() {

// // });

'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

  describe('PhoneListCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('../test/phones.json').
          respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      scope = $rootScope.$new();
      ctrl = $controller(PhoneListCtrl, {$scope: scope});
    }));


    it('should create "phones" model with 2 phones fetched from xhr', function() {
      expect(scope.phones).toBeUndefined();
      $httpBackend.flush();

      expect(scope.phones).toEqual([{name: 'Nexus S'},
                                   {name: 'Motorola DROID'}]);
    });


    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('age');
    });
  });
});

