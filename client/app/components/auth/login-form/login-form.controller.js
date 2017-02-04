function LoginFormController() {
  var ctrl = this;

  ctrl.$onChanges = function(changes) {
    if ( changes.userData ) {
      ctrl.userData = angular.copy(ctrl.userData);
    }
  }

  ctrl.login = function() {
    ctrl.onLogin({
      $event: {
        userData: ctrl.userData
      }
    });
  }

}

angular
  .module('components.auth')
  .controller('LoginFormController', LoginFormController);
