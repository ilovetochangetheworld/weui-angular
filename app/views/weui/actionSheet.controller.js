//actionSheetController
(function(){
  'use strict';

  angular
    .module('app')
    .controller('actionSheetController', actionSheetController);

  function actionSheetController(){
    var vm = this;
    vm.isShowActionsheet = false; //是否显示actionsheet
    vm.actionsheetToggle = ''; //weui_actionsheet_toggle样式，显示时增加，不显示时去掉

    vm.showActionSheet = function() {
        vm.isShowActionsheet = true;
        vm.actionsheetToggle = 'weui_actionsheet_toggle';
        console.log(vm.isShowActionsheet);
    }

    vm.actionsheetCancel = function() {
        vm.isShowActionsheet = false;
        vm.actionsheetToggle = '';
    }
  }
})();
