var addProfile = {
  bindings: {
  },
  templateUrl: 'add-profile.html',
  controller: 'AddProfileController'
}

angular
  .module('components.profile')
  .component('addProfile', addProfile)
  .config(function($stateProvider) {
    $stateProvider
      .state('profile.addProfile', {
        url: '^/add-profile',
        component: 'addProfile',
        data: {
          requiredAuth: true
        }
      });
  });


require('./add-profile.controller');