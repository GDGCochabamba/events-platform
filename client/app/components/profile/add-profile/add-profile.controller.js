function AddProfileController(cfpLoadingBar, $log, $state, $mdDialog, $stateParams, ProfileService) {
  var ctrl = this;

  ctrl.$onInit  = onInit;
  ctrl.add = add;

  function add() {
    cfpLoadingBar.start();
    ProfileService
      .add(ctrl.profile)
      .then(function(ref){
        var id = ref.key;
        $log.info('[AddProfileController]', 'added record with id:', id);
        cfpLoadingBar.complete();      

        $mdDialog.show(
          $mdDialog.alert()
            .clickOutsideToClose(true)
            .title('Usuario creado!')
            .textContent(ctrl.profile.email)
            .ok('Cerrar')
        );

        $state.go('profile.addProfile', {}, { reload: true });

      })
      .catch(function(error) {
        cfpLoadingBar.complete();  
        $mdDialog.show(
          $mdDialog.alert()
            .clickOutsideToClose(true)
            .title(error.code)
            .textContent(error.message)
            .ok('Cerrar')
        );
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
