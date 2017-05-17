(function() {
  'use strict';
  
  describe('controllers', function(){
    var $rootScope;

    beforeEach(module('socialSweets'));
    beforeEach(inject(function(_$rootScope_, _$controller_) {
      vm = _$controller_('MainController');
      $rootScope = _$rootScope_;
    }));

    it('should have appropriate title value', function() {
      expect($rootScope.title).toEqual("COMMON.WELCOME");
    });

    it('should have appropriate title value', function() {
      expect($rootScope.headerTitle).toEqual("COMMON.WELCOME");
    });
  });
})();
