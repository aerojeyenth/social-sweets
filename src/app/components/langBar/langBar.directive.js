(function() {
  'use strict';

  angular
    .module('socialSweets')
    .directive('langBar', langBar);

  /** @ngInject */
  function langBar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/langBar/langBar.html',
      controller: LangBarController,
      controllerAs: 'vm'
    };

    return directive;

    /** @ngInject */
    function LangBarController($translate) {
      var vm = this;
      
      //Using $translate service to switch between languages.
      vm.changeLanguage = function (langKey) {
        $translate.use(langKey);
      };

    }
  }

})();
