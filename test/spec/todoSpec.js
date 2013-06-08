describe('ทดสอบตามเค้า', function() {

	var scope, ctrl;

	beforeEach(function() {
		scope = {};
		ctrl = new TodoCtrl(scope);
	});

	describe('PhoneListCtrl', function(){

		it('should start with 2 items', function() {
			expect(scope.todos.length).toEqual(3);
		});

		it('should init with AngularJS', function() {
			var learnAngular = scope.todos[0];
			expect(learnAngular).toEqual("AngularJS");
		});

	});

});