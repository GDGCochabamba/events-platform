function ProfileListController($log, $state, ProfileService) {
  var ctrl = this;
  ctrl.$onInit  = onInit;
  ctrl.viewProfile = viewProfile;

  function onInit() {
    ctrl.list = ProfileService.list();
  }

  function viewProfile(profile) {
    $state.href('profileList', {
      id: profile.$id
    });
  }
}

angular
  .module('components.profile')
  .controller('ProfileListController', ProfileListController);