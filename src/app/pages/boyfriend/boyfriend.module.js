(function() {
  'use strict';

  angular
    .module('app.pages.boyFriend', [])
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {

    $stateProvider
      .state('boy-friend', {
        url: '/boy-friend',
        templateUrl: 'app/pages/boyfriend/boyfriend.html',
        controller: 'BoyFriendController',
        controllerAs: 'vm'
      });


  }

})();
