function AddProfileController($log, $state, $stateParams, ProfileService) {
  var ctrl = this;

  ctrl.$onInit  = onInit;
  ctrl.add = add;

  function add() {
    ProfileService.add(ctrl.profile).then(function(ref){
      var id = ref.key;
      $log.info('[AddProfileController]', 'added record with id:', id);
      $state.go('profile.addProfile', {}, { reload: true });
    });
  }

  function onInit() {
    ctrl.profile = {
      email: '',
      password: '12345678',
      firstName: '',
      lastName: '',
      birthDate: '',
      phone: '',
      gender: ''
    };
  }
}

angular
  .module('components.profile')
  .controller('AddProfileController', AddProfileController);
