(function() {
  'use strict';

  angular
    .module('socialSweets')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
