// (function () {
//   'use strict';
//
//   angular
//     .module('app', [
//
//     ]);
//
// })();

(function () {
  'use strict';
  angular
    .module('app', ['ngFileUpload', 'ngCookies', 'ui.router'])
    .config(config);

  function config($stateProvider, $urlRouterProvider, $httpProvider) {
    // 修改http头
    $httpProvider.defaults.headers.post['Content-Type'] =  'application/x-www-form-urlencoded';
    $urlRouterProvider.otherwise('/index');
    $stateProvider
      .state('index', {
        url: "/index",
        templateUrl: "views/weui/index.html"
      })
      .state('button', {
        url: "/button",
        templateUrl: "views/weui/button.html"
      })
      .state('cell', {
        url: "/cell",
        templateUrl: "views/weui/cell.html"
      })
      .state('toast', {
        url: "/toast",
        templateUrl: "views/weui/toast.html",
        controller: "ToastController as vm"
      })
      .state('dialog', {
        url: "/dialog",
        templateUrl: "views/weui/dialog.html",
        controller: "DialogController as vm"
      })
      .state('progress', {
        url: "/progress",
        templateUrl: "views/weui/progress.html",
        controller: "ProgressController as vm"
      })
      .state('msg', {
        url: "/msg",
        templateUrl: "views/weui/msg.html"
      })
      .state('article', {
        url: "/article",
        templateUrl: "views/weui/article.html"
      })
      .state('actionSheet', {
        url: "/actionSheet",
        templateUrl: "views/weui/actionSheet.html",
        controller: "actionSheetController as vm"
      })
      .state('icons', {
        url: "/icons",
        templateUrl: "views/weui/icons.html"
      })
      .state('panel', {
        url: "/panel",
        templateUrl: "views/weui/panel.html"
      })
      .state('tab', {
        url: "/tab",
        templateUrl: "views/weui/tab.html"
      })
      .state('navbar', {
        url: "/navbar",
        templateUrl: "views/weui/navbar.html"
      })
      .state('tabbar', {
        url: "/tabbar",
        templateUrl: "views/weui/tabbar.html"
      })
      .state('searchbar', {
        url: "/searchbar",
        templateUrl: "views/weui/searchbar.html"
      })
  }
})();

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
            }, 11113000, 1);
        };

        vm.showLoadingToast = function() {
            vm.loadingToastHide = 1;

            //显示3秒后消失
            $interval(function() {
                vm.loadingToastHide = 0;
            }, 1113000, 1);
        };

    }
})();
