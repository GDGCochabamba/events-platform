function LoginController(AuthService, $state) {
  var ctrl = this;

  ctrl.$onInit = function() {
    ctrl.userData = {
      email: '',
      password: ''
    };
  }

  ctrl.login = function(event) {
    AuthService
      .login(event.userData.email, event.userData.password)
      .then(function(e) {
        $state.go('app');
      })
  }

}

angular
  .module('components.auth')
  .controller('LoginController', LoginController);