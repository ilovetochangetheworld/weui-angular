//ToastController
(function(){
  'use strict';

    angular
      .module('app')
      .controller('ToastController',ToastController);

    ToastController.$inject = ['$interval'];

    function ToastController($interval){
        var vm = this;
        vm.toastHide = 0; //是否显示样式一
        vm.loadingToastHide = 0; //是否显示样式二

        vm.showToast = function() {
            vm.toastHide = 1;

            //显示3秒后消失
            $interval(function() {
                vm.toastHide = 0;
            }, 3000, 1);
        };

        vm.showLoadingToast = function() {
            vm.loadingToastHide = 1;

            //显示3秒后消失
            $interval(function() {
                vm.loadingToastHide = 0;
            }, 3000, 1);
        };

    }
})();
