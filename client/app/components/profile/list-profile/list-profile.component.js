var profileList = {
  templateUrl: 'list-profile.html',
  controller: 'ProfileListController'
};

angular
  .module('components.profile')
  .component('profileList', profileList)
  .config(function($stateProvider) {
    $stateProvider
      .state('profile.profileList', {
        url: '^/profiles',
        component: 'profileList'
      });
  });

require('./list-profile.controller');
