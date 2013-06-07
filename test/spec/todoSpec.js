describe('ทดสอบตามเค้า', function() {
 
  describe('PhoneListCtrl', function(){
 
    it('should start with 2 items', function() {
      //expect(1).toEqual(1);

      var scope = {};
      var todoCtrl = new TodoCtrl(scope);

      expect(scope.todos.length).toEqual(3);

    });

  });

});