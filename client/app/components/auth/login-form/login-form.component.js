var loginForm = {
  bindings: {
    userData: '<',
    onLogin: '&'
  },
  templateUrl: 'login-form.html',
  controller: 'LoginFormController'
}

angular
  .module('components.auth')
  .component('loginForm', loginForm);

require('./login-form.controller');