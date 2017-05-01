(function() {
  'use strict';

  angular
    .module('socialSweets')
    .controller('GirlFriendController', GirlFriendController);

  /** @ngInject */
  function GirlFriendController($rootScope, $state) {
    var vm = this;

    //Setting the Title and HeaderTitle
    $rootScope.title = "GIRL.TITLE";
    $rootScope.headerTitle = "GIRL.LEAD";

    //Methods Declaration
    vm.showResult = showResult;


    //Initial State
    vm.age = 18;
    vm.height = 150;
    vm.hairColorValue = 5;
    vm.hairLengthValue = 5;
    vm.eyeColourValue = 5;
    vm.boobSizeValue = 5;
    vm.bodyValue = 5;


    //Function to calculate the result and navigate to results page with params
    function showResult() {

      //Simple formula to calculate the number of camels
      vm.total = Math.floor(vm.age/7) + Math.floor(vm.height/10) + vm.hairColorValue + vm.hairLengthValue + vm.eyeColourValue + vm.boobSizeValue + vm.bodyValue;

      //Routing to Results page with the necessary params
      $state.go('result', {gender: 'girl', value: vm.total});

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
      imageUrl:'assets/images/woman-long-hair.png',
      value:5,
      id:'long'
    },{
      imageUrl:'assets/images/woman-middle-hair.png',
      value: 10,
      id:'middle'
    },{
      imageUrl:'assets/images/woman-short-hair.png',
      value: 15,
      id:'short'
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

    vm.boobSizeOptions = [{
      imageUrl:'assets/images/boobs-a.png',
      value:5,
      id:'a'
    },{
      imageUrl:'assets/images/boobs-b.png',
      value: 10,
      id:'b'
    },{
      imageUrl:'assets/images/boobs-c.png',
      value: 15,
      id:'c'
    },{
      imageUrl:'assets/images/boobs-d.png',
      value: 20,
      id:'d'
    }];

    vm.bodyOptions = [{
      name:'COMMON.BODY_OPTIONS.THIN',
      value: 5,
      id:'thin'
    },{
      name:'COMMON.BODY_OPTIONS.SPORTY',
      value: 10,
      id:'sporty'
    },{
      name:'COMMON.BODY_OPTIONS.NORMAL',
      value: 15,
      id:'normal'
    },{
      name:'COMMON.BODY_OPTIONS.CHUBBY',
      value: 20,
      id:'chubby'
    },{
      name:'COMMON.BODY_OPTIONS.FAT',
      value: 25,
      id:'fat'
    }];


  }
})();
