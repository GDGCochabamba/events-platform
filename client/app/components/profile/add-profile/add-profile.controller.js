function AddProfileController($log, ProfileService) {
  var ctrl = this;

  ctrl.$onInit  = onInit;
  ctrl.add = add;

  function add() {
    ProfileService.add(ctrl.profile).then(function(ref){
      var id = ref.key;
      $log.info('[AddProfileController]', 'added record with id:', id);
    });
  }

  function onInit() {
    ctrl.profile = {
      firstName: 'Martin'
    };
  }
}

angular
  .module('components.profile')
  .controller('AddProfileController', AddProfileController);
