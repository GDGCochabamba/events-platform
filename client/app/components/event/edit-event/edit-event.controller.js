function EditEventController($log, EventService) {
  var ctrl = this;

  ctrl.$onInit  = onInit;
  ctrl.edit = edit;

  function edit() {
      $log.info('Going to edit event');
  }

  function onInit() {
    ctrl.event = {
      name: 'Event Name to Edit'
    };
  }
}

angular
  .module('components.event')
  .controller('EditEventController', EditEventController);
