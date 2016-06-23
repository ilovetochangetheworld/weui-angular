(function () {
  'use strict';
  angular
    .module('app', ['ngFileUpload', 'ngCookies', 'ui.router','ngAnimate'])
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
