function ViewProfileController($log, $state, $stateParams, ProfileService) {
  var ctrl = this;

  ctrl.$onInit  = onInit;
  // ctrl.add = add;
  
  
  function onInit() {
      var key = $stateParams.keyProfile;      
      ProfileService.getByKey(key).then(function(profile){
        $log.info('[ViewProfileController]', 'profile on init: ', profile);
        ctrl.profile = profile;
      });
  }
  
}

angular
  .module('components.profile')
  .controller('ViewProfileController', ViewProfileController);