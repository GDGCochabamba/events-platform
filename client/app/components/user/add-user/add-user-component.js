var addEvent = {
  bindings: {
  },
  templateUrl: 'add-user.html',
  controller: 'AddUserController'
}

angular
  .module('components.event')
  .component('addUser', addUser)
  .config(function($stateProvider) {
    $stateProvider
      .state('addUser', {
        url: '/add-user',
        component: 'addUser',
        data: {
          requiredAuth: true
        }
      });
  });


require('./add-user.controller');