var login = {
  templateUrl: 'login.html',
  controller: 'LoginController'
}

angular
  .module('components.auth')
  .component('login', login)
  .config(function($stateProvider) {
    $stateProvider
      .state('auth.login', {
        url: '^/login',
        component: 'login'
      });
  });

require('./login.controller');