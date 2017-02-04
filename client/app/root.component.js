var root = {
  template: '<div ui-view></div>'
}

angular
  .module('bluTodo')
  .component('root', root)
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });