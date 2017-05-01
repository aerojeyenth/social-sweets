(function() {
  'use strict';

  angular
    .module('app.pages.result', [])
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {

    $stateProvider
      .state('result', {
        url: '/result',
        templateUrl: 'app/pages/result/result.html',
        controller: 'ResultController',
        controllerAs: 'vm',
        //Default Params
        params: {
          gender: null,
          value: null
        }
      });

  }

})();
