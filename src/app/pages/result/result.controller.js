(function() {
  'use strict';

  angular
    .module('app.pages.result')
    .controller('ResultController', ResultController);

  /** @ngInject */
  function ResultController($stateParams, $state) {
    var vm = this;

    //Preventing the manual navigation to result page
    if(!$stateParams.value || !$stateParams.gender)
      $state.go('home');

    vm.value = $stateParams.value;
    
    
    //Based on the gender value
    if($stateParams.gender == 'boy'){
      vm.resultLead = "BOY.WORTH"
    }else{
      vm.resultLead = "GIRL.WORTH"
    }


  }

})();
