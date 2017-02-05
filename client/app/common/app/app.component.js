var app = {
  templateUrl: 'app.html',
  controller: function(AuthService, $state) {

    this.addEvent = addEvent;
    this.addProfile = addProfile;
    this.logout = logout;

    function addEvent() {
      $state.go('addEvent');
    }

    function addProfile() {
      $state.go('addProfile');
    }
    
    function logout() {
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
        },
        redirectTo: 'eventList',
      });
  });