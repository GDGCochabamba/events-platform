var viewProfile = {
  bindings: {
  },
  templateUrl: 'view-profile.html',
  controller: 'ViewProfileController'
}

angular
  .module('components.profile')
  .component('viewProfile', viewProfile)
  .config(function($stateProvider) {
    $stateProvider
      .state('viewProfile', {
        url: '/view-profile/:keyProfile',
        component: 'viewProfile',
        data: {
          requiredAuth: true
        }
      });
  });


require('./view-profile.controller');