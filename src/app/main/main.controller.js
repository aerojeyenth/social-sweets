(function() {
  'use strict';

  angular
    .module('socialSweets')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope) {

    //Setting the Title and HeaderTitle
    $rootScope.title = "COMMON.WELCOME";
    $rootScope.headerTitle = "COMMON.WELCOME";

  }
})();
