(function() {
  'use strict';

  angular
    .module('socialSweets')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
    
    //Default Router will be the root(home) page.
    $urlRouterProvider.otherwise('/');
  }

})();
