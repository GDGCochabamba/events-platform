function AddUserController($log, UserService) {
  var ctrl = this;

  ctrl.$onInit  = onInit;
  ctrl.add = add;

  function add() {
    UserService.add(ctrl.user).then(function(ref){
      var id = ref.key;
      $log.info('[AddUserController]', 'added record with id:', id);
    });
  }

  function onInit() {
    ctrl.user = {
      firstName: 'Martin'
    };
  }
}

angular
  .module('components.user')
  .controller('AddUserController', AddUserController);
