//ProgressController
(function (){
  'use strict';

  angular
    .module('app')
    .controller('ProgressController',ProgressController);

  function ProgressController(){
    var vm = this;

    vm.progress1 = { width: '0%' }; //进度条的宽度
    vm.progress2 = { width: '30%' };
    vm.progress3 = { width: '80%' };

    vm.btnStartProgress = function() {
        vm.progress1 = { width: '100%' };
        vm.progress2 = { width: '100%' };
        vm.progress3 = { width: '100%' };
    };
  }
})();
