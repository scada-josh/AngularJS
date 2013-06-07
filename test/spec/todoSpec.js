describe('ทดสอบตามเค้า', function() {
 
  describe('PhoneListCtrl', function(){
 
    it('should start with 2 items', function() {
      //expect(1).toEqual(1);
      var scope = {}, 
      	  ctrl = new TodoCtrl(scope);
      expect(scope.todos.length).toEqual(3);
    });

    it('should init with AngularJS', function() {
      //expect(1).toEqual(1);
      var scope = {}, 
          ctrl = new TodoCtrl(scope);
      var learnAngular = scope.todos[0];
      expect(learnAngular).toEqual("AngularJS");
    });

  });

});