function EditEventController($log, $stateParams, EventService) {
  var ctrl = this;

  ctrl.$onInit  = onInit;
  ctrl.edit = edit;

  function edit() {
      $log.info('Going to edit event');
  }

  function onInit() {
      var key = $stateParams.keyEvent;

      EventService.getByKey(key).then(function(event){
        $log.info('[EditEventController]', 'event on init: ', event);
        ctrl.event = event;
      });
  }
}

angular
  .module('components.event')
  .controller('EditEventController', EditEventController);
