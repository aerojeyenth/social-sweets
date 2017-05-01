(function() {
  'use strict';

  angular
    .module('socialSweets')
    .directive('camelCounter', camelCounter);

  /** @ngInject */
  function camelCounter() {
    var directive = {
      restrict: 'E',
      scope: {
        number: '@'
      },
      template: '<div class="counter">{{vm.counter}}</div>',
      controller: CamelCounterController,
      controllerAs: 'vm'
    };

    return directive;


    /** @ngInject */
    function CamelCounterController($timeout, $scope) {
      var vm = this;

      //Timefactor to make the animation faster for higher numbers and slower for lower numbers
      var timerFactor = Math.floor(100/$scope.number) * 40;

      for(var i = 0; i <= $scope.number; i++){

        //Using the amazing closure property to nail this effect.
        (function(value) {
          $timeout(function() { vm.counter = value; }, i * timerFactor);
        })(i);

      }

    }


  }

})();
