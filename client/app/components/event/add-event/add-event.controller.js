function AddEventController() {
  var ctrl = this;

  ctrl.$onInit  = onInit;
  ctrl.add = add;

  function add() {
    console.log('Going to save:', ctrl.event);
  }

  function onInit() {
    ctrl.event = {
      name: 'Test'
    };
  }
}

angular
  .module('components.event')
  .controller('AddEventController', AddEventController);
