describe('PhoneCat controllers', function() {
 
  describe('PhoneListCtrl', function(){
 
    it('should create "phones" model with 3 phones', function() {
      var scope = {},
          ctrl = new PhoneListCtrl(scope);
 
      expect(scope.phones.length).toBe(3);
    });
  });
});

describe('ทดสอบตามเค้า', function() {
 
  describe('PhoneListCtrl', function(){
 
    it('should be OK!', function() {

      expect(2).toEqual(2);

    });
  });
});