function EventFormController($log, EventService) {
  var ctrl = this;

  ctrl.$onInit  = onInit;
  ctrl.doAction = doAction;

  function onInit() {

  }

  function doAction() {
      ctrl.onAction();
  }
}

angular
  .module('components.event')
  .controller('EventFormController', EventFormController);
