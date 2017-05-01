(function() {
  'use strict';

  angular
    .module('socialSweets')
    .directive('optionsList', optionsList);

  /** @ngInject */
  function optionsList() {
    var directive = {
      restrict: 'E',
      scope: {
        list: '=',
        title: '@',
        value: '='
      },
      templateUrl: 'app/components/optionsList/optionsList.html',
      controller: OptionsListController,
      controllerAs: 'vm'
    };

    return directive;


    /** @ngInject */
    function OptionsListController($scope) {

      if($scope.title)
        $scope.name = $scope.title;

    }


  }

})();
