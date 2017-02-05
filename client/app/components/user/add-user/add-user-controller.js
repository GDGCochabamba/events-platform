function AddUserController($log, UserService) {
  var ctrl = this;

  ctrl.$onInit  = onInit;
  ctrl.add = add;

  function add() {
    UserService.add(ctrl.event).then(function(ref){
      var id = ref.key;
      $log.info('[AddUserController]', 'added record with id:', id);
    });
  }

  function onInit() {
    ctrl.event = {
      name: 'User 1'
    };
  }
}

angular
  .module('components.user')
  .controller('AddUserController', AddUserController);
