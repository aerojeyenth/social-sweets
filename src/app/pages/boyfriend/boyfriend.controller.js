(function() {
  'use strict';

  angular
    .module('socialSweets')
    .controller('BoyFriendController', BoyFriendController);

  /** @ngInject */
  function BoyFriendController($rootScope, $state) {
    var vm = this;

    //Setting the Title and HeaderTitle
    $rootScope.title = "BOY.TITLE";
    $rootScope.headerTitle = "BOY.LEAD";

    //Methods Declaration
    vm.showResult = showResult;

    //Initial State
    vm.age = 22;
    vm.height = 160;
    vm.hairColorValue = 5;
    vm.hairLengthValue = 10;
    vm.eyeColourValue = 5;
    vm.beardValue = 10;
    vm.bodyValue = 5;

    //Function to calculate the result and navigate to results page with params
    function showResult() {

      //Simple formula to calculate the number of camels
      vm.total = Math.floor(vm.age/7) + Math.floor(vm.height/10) + vm.hairColorValue + vm.hairLengthValue + vm.eyeColourValue + vm.beardValue + vm.bodyValue;

      //Routing to Results page with the necessary params
      $state.go('result', {gender: 'boy', value: vm.total});

    }


    vm.hairColorOptions = [
      {
        name: 'COMMON.HAIR_COLOR_OPTIONS.BLONDE',
        value: 5
      },
      {
        name: 'COMMON.HAIR_COLOR_OPTIONS.BROWN',
        value: 10
      },
      {
        name: 'COMMON.HAIR_COLOR_OPTIONS.RED',
        value: 15
      },
      {
        name: 'COMMON.HAIR_COLOR_OPTIONS.BLACK',
        value: 20
      },
      {
        name: 'COMMON.HAIR_COLOR_OPTIONS.GREY',
        value: 25
      }
    ];

    vm.hairLengthOptions = [{
      name:'COMMON.HAIR_LENGTH_OPTIONS.LONG',
      value: 5,
      id:'long'
    },{
      name:'COMMON.HAIR_LENGTH_OPTIONS.MIDDLE',
      value: 10,
      id:'middle'
    },{
      name:'COMMON.HAIR_LENGTH_OPTIONS.SHORT',
      value: 20,
      id:'short'
    },{
      name:'COMMON.HAIR_LENGTH_OPTIONS.BALD',
      value: 30,
      id:'bald'
    }];

    vm.eyeColorOptions = [{
      name:'COMMON.EYE_COLOR_OPTIONS.BLUE',
      value: 5
    }, {
      name:'COMMON.EYE_COLOR_OPTIONS.GREEN',
      value: 10
    }, {
      name:'COMMON.EYE_COLOR_OPTIONS.BROWN',
      value: 15
    }, {
      name:'COMMON.EYE_COLOR_OPTIONS.GREY',
      value: 20
    }];

    vm.beardOptions = [{
      imageUrl:'assets/images/beard-none.png',
      value: 5,
      id:'none'
    },{
      imageUrl:'assets/images/beard-small.png',
      value: 10,
      id:'small'
    },{
      imageUrl:'assets/images/beard-middle.png',
      value: 20,
      id:'middle'
    },{
      imageUrl:'assets/images/beard-full.png',
      value: 30,
      id:'full'
    }];

    vm.bodyOptions = [{
      imageUrl:'assets/images/body-1.png',
      value: 5,
      id:'none'
    },{
      imageUrl:'assets/images/body-2.png',
      value: 10,
      id:'small'
    },{
      imageUrl:'assets/images/body-3.png',
      value: 15,
      id:'middle'
    }];

  }
})();
