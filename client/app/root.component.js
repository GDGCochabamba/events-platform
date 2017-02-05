var root = {
  template: '<div ui-view></div>'
}

angular
  .module('eventsPlatform')
  .component('root', root)
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });