describe('ทดสอบหน้าจอ', function() {

	var scope, ctrl;

	beforeEach(function() {
		scope = {};
		ctrl = new TodoCtrl(scope);
	});

	describe('ทดสอบฟังก์ชัน todos', function(){

		it('should start with 3 items', function() {
			//expect(3).toEqual(3);
			expect(scope.todos.length).toEqual(3);
		});

		it('should init with AngularJS', function() {
			var learnAngular = scope.todos[0].detail;
			expect(learnAngular).toEqual("AngularJS");
		});

		it('should have detail', function() {
			expect(scope.todos[0].detail).toEqual("AngularJS");
		});

		it('should can Add new item', function() {
			var newItems = 'practiceTDD';
			scope.addItem(newItems);
			expect(scope.todos.length).toEqual(4);

			var practiceTDD = scope.todos[3];
			expect(practiceTDD.detail).toEqual("practiceTDD");
			expect(practiceTDD.status).toEqual(false);
		});

	});

});