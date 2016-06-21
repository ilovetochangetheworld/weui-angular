//DialogController
(function(){
  'use strict';

    angular
      .module('app')
      .controller('DialogController',DialogController);

    function DialogController(){
        var vm = this;
        vm.isShowDialog1 = false; //是否显示对话框1
        vm.isShowDialog2 = false; //是否显示对话框2

        vm.showDialog1 = function() {
            vm.isShowDialog1 = true;
            vm.isShowDialog2 = false;
        }

        vm.showDialog2 = function() {
            vm.isShowDialog1 = false;
            vm.isShowDialog2 = true;
        }

        vm.btnCancel = function() {
            vm.isShowDialog1 = false;
        }

        vm.btnOk = function() {
            vm.isShowDialog1 = vm.isShowDialog2 = false;
        }
    }

})();
