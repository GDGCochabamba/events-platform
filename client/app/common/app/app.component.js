var app = {
  templateUrl: 'app.html',
  controller: function(AuthService, $state) {

    this.logout = function() {
       AuthService
        .logout()
        .then(function() {
          $state.go('auth.login');
        });
    }

  }
}

angular
  .module('common.app')
  .component('app', app)
  .config(function($stateProvider) {
    $stateProvider
      .state('app', {
        url: '/',
        component: 'app',
        data: {
          requiredAuth: true
        }
      });
  });