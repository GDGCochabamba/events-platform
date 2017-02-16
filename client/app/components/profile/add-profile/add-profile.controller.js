function AddProfileController($log, ProfileService) {
  var ctrl = this;

  ctrl.$onInit  = onInit;
  ctrl.add = add;

  function add() {    
    ProfileService.add(ctrl.profile, ctrl.user).then(function(ref){
      var id = ref.key;
      $log.info('[AddProfileController]', 'added record with id:', id);
    });
  }
  
  

  function onInit() {
    ctrl.profile = {
      firstName: 'Martin'
    };

    ctrl.user = {
      email: ''
    };
  }
}

angular
  .module('components.profile')
  .controller('AddProfileController', AddProfileController);
