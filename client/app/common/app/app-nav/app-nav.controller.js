function AppNavController(AuthService, $state) {
  this.logout = logout;

  function logout() {
    AuthService
      .logout()
      .then(function() {
        $state.go('auth.login');
      });
  }
}

angular
  .module('common.app')
  .controller('AppNavController', AppNavController);