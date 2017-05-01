(function() {
  'use strict';

  angular
    .module('app.pages.girlFriend', [])
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {

    $stateProvider
      .state('girl-friend', {
        url: '/girl-friend',
        templateUrl: 'app/pages/girlfriend/girlfriend.html',
        controller: 'GirlFriendController',
        controllerAs: 'vm'
      });

  }

})();
